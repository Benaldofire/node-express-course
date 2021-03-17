const express = require('express');
const app = express();



const mockUserData=[
    {name:'Mark'},
    {name: 'Jill'}
]

app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

/*In Express, words with a colon in front of them in the url are treated as variables. 
You can access the value of each variable through req.params, like this: */
app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success:true,
        message: 'got one user',
        user: req.params.id
    })
})

app.listen(8000, function(){
    console.log("server is running")
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/login', function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUserData="billyTheKid";
    const mockPassword="superSecret";

    if(username===mockUsername && password===mockPassword){
        
    }
})


