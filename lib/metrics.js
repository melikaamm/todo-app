const client = require('prom-client');

// Singleton pattern to ensure metrics are registered only once
let register;
let httpRequestDurationMicroseconds;

if (!global.__prometheus__) {
  // Create a Registry which registers the metrics
  register = new client.Registry();

  // Add a default label which is added to all metrics
  register.setDefaultLabels({
    app: 'todo-app',
  });

  // Enable the collection of default metrics (like nodejs process metrics)
  client.collectDefaultMetrics({ register });

  // Define custom metrics
  httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 5, 15, 50, 100, 200, 500, 1000], // Buckets for response time in ms
  });

  register.registerMetric(httpRequestDurationMicroseconds);

  // Store the metrics globally to avoid re-registering
  global.__prometheus__ = {
    register,
    httpRequestDurationMicroseconds,
  };
} else {
  // Use the already registered metrics
  register = global.__prometheus__.register;
  httpRequestDurationMicroseconds = global.__prometheus__.httpRequestDurationMicroseconds;
}

module.exports = {
  register,
  httpRequestDurationMicroseconds,
};