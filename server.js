const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


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



app.post('/login', function(req,res){
    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username=req.body.username;
    const password=req.body.password;

    //this should come from the database
    const mockUserData="billyTheKid";
    const mockPassword="superSecret";

    if(username===mockUsername && password===mockPassword){
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success:true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    }
    else{
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.listen(8000, function(){
    console.log("server is running")
})

