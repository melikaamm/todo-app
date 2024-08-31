import connectDb from '../../../lib/connectDb';
import Todo from '../../../models/Todo';
import { httpRequestDurationMicroseconds } from '../../../lib/metrics';

export default async function handler(req, res) {
  const end = httpRequestDurationMicroseconds.startTimer();
  const { method, query: { id }, body } = req;

  await connectDb();

  try {
    switch (method) {
      case 'PATCH':  // Handling PATCH request
        const todo = await Todo.findById(id);
        if (!todo) {
          res.status(404).json({ success: false, message: 'Todo not found' });
        } else {
          // Update the todo item
          todo.completed = body.completed !== undefined ? body.completed : todo.completed;
          todo.important = body.important !== undefined ? body.important : todo.important;
          await Todo.findByIdAndUpdate(
                req.query.id,
                { $set: req.body },
                { new: true },
            );
          res.status(201).json({ success: true, data: todo });
        }
        break;

      case 'DELETE':  // Handling DELETE request
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
          res.status(404).json({ success: false, message: 'Todo not found' });
        } else {
          res.status(200).json({ success: true, message: 'Todo deleted successfully' });
        }
        break;

      default:
        res.setHeader('Allow', ['PATCH', 'DELETE']);  // Allow only PUT and DELETE
        res.status(405).end(`Method ${method} Not Allowed`);  // 405 for other methods
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  } finally {
    end({ method, route: `/api/todo/${id}`, status_code: res.statusCode });
  }
}