# Quickstart

Run this commands on this project directory:

> npm install  
> npm start  
  
# In action

Open the URL in your prefered browser:  
[http://localhost:9000](http://localhost:9000)

# Generate files to production

> npm run build

Want check your production files? 

> npm run serve

# More commands

Clean project leaving only project files  

> npm run clean

Start in development mode

> npm start

Start in production mode

> npm run start-prod

Explore generated files for production

1. Change in "webpack.prod.config.js" in "UglifyJsPlugin" property "sourceMap" to "true" 
2. Change in "webpack.prod.config.js" property "devtool" to "source-map"

> npm run build  
> npm run explorer

# Screenshots

![SS1](https://github.com/prsolucoes/angular2-starter-project/raw/master/extras/screenshots/screenshot1.png "Screenshot 1")