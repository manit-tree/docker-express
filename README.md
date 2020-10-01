# docker-express

a simple project to demonstrates how to dockerize a Node Express Application 

### instruction

1. clone this project to your working directory
2. move into your working directory
3. run "docker build -t docker-express ." to build a docker image
4. run "docker run -d -p 3000:3000 --name docker-express docker-express" 

if everything is ok, a simple Node Express App will run on port: 3000

you can test if the app is working using the URL belows

1. http://localhost:3000/home (will return a simple home page)
2. http://localhost:3000/about (will return a simple about page)