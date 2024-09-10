# TODO APPLICATION

<img src="https://res.cloudinary.com/df1unjmwz/image/upload/v1641541892/toto_app_preview_xagnrj.png" alt="screenshot of the project">

<!-- ABOUT THE PROJECT -->
## About The Project
this repo contains todo application which is part of the [Devops Project](https://github.com/melikaamm/Devops) and also monitoring stack to visualizing the project and insfructure metrics.

This project was developed with the assistance of ChatGPT and guidance from a friend who works as a DevOps engineer.

link to IAC repo: [https://github.com/melikaamm/todo-app-iac](https://github.com/melikaamm/todo-app-iac)
### Built With

* [Next.js](https://nextjs.org/)
* [Mongodb](https://mongodb.com/)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* nodejs >= 14.17.6
* yarn = latest

### Installation
You can run the app with docker-compose app or in your local with following commands:
1. Clone the repo
   ```sh
   git clone https://github.com/disalad/todo-app.git
   ```
2. Install 3rd party packages
   ```bash
   yarn install
   ```

3. Set your Mongodb URI as a variable.
   ```bash
   export MONGODB_URI = your mongodb uri
   ```
   
4. Start app in a development server 
   ```bash
   yarn dev
   ```
#### Run with docker compose
1. First set your mongodb URI as a variable:
   ```bash
   export MONGODB_URI = your mongodb uri
   ```
2. Start app with the following command:
   ```bash
   docker compose up -d 
   ```
### Run monitoring stack 
You can also run Prometheus, Grafana, and Node_exporter (Node_exporter will just work in Linux) by running the following command:
```bash
cd monitoring
docker compose up -d 
```
## Deployment
CI/CD for this project configured with Github actions, which the runner is deployed on a EC2 instance.\
When app is deployed, you can access it via the following links:\
1. todo app: [https://todo.melika.fit](https://todo.melika.fit)\
2. grafana: [https://monitoring.melika.fit](https://monitoring.melika.fit)
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/disalad/todo-app](https://github.com/disalad/todo-app)
