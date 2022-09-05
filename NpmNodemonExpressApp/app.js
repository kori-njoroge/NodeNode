const express = require('express');
const bodyParser = require('body-parser')

const app  = express();

app.set('view engine' , 'ejs');
app.use(express.static('public'))

const urlencodedParser = bodyParser.urlencoded({extended: false})



// app.get('/', (req,res) =>{
//     res.send('Home Page')
// })

//sending a string 
// app.get('/contact',(req,res) =>{
//     res.send('This page contains contacts')
// })


// app.get('/profile/:id',(req,res) =>{
//     res.send(`The profile id requested has an id of ${req.params.id}`)
// })

//sending a file eg html page
// app.get('/', (req,res) =>{
//     res.sendFile(__dirname + '/home.html');
// });

app.get('/', (req,res) =>{
    res.render('home');
});

app.get('/contact',(req,res) =>{
    // console.log(req.query)
    res.render('contact', {qs:req.query})
});

app.post('/contact',urlencodedParser,(req,res) =>{
    console.log(req.body)
    res.render('contact-success', {data:req.body})
});

app.get('/signup',(req,res) =>{
    res.render('signup');
})

app.get('/profile/:name',(req,res) =>{
    const data = {age: 22 , job: 'Ninja',hobbies:['dancing' ,'eating','more Eating']}
    res.render('profile', {person: req.params.name, data : data})
})

console.log('Listening to port 3000');
app.listen(3000);