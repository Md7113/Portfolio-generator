const fs = require('fs')
const inquirer = require('inquirer')


const contentGen =(data) =>
  `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${data.userName}</h1>
    <p class="lead">I am from ${data.local}</p>
    <h3>Additional Info <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${data.gitHub}</li>
      <li class="list-group-item">LinkedIn: ${data.LinkedIn}</li>
    </ul>
  </div>
</div>
<main>
    ${turkeyImg}
</main>
</body>
</html>
  
  `


inquirer.prompt([
    {
        name : 'userName',
        message : 'Enter your name:',
        type : 'input'
},{
    name : 'local',
    message : 'Where are you from?',
    type : 'input'
},{
    name : 'gitHub',
    message : 'Enter your GitHub:',
    type : 'input'
},{
    name : 'LinkedIn',
    message : 'Enter your LinkedIn',
    type : 'input'
},{
    name : 'turkey',
    message : 'Turkey?',
    type : 'list',
    choices : ['yes','no']
}
]).then((answer)=>{
    if(answer.turkey == 'yes'){
        turkeyImg = '<img src="./turkey.jpg">'
    }else{
        turkeyImg = ''
    }
   const newContent =  contentGen(answer)
   fs.writeFile('index.html',newContent,(err) => console.log(err))
})