const express = require("express");
const app = express();
var cors = require('cors')


app.use(cors())
app.use(express.json())

const port = process.env.PORT ||  4000;



app.get('/', (req,res)=>{
    res.send("hello backend.And i am ready...ahhaaa");
})

const friends = [
    {
        id:1,
        name:"labonno",
        email:"labonno@gmail.com"
    }
    ,{
        id:2,
        name:"Dulal",
        email: "dulal@gmail.com"
    }
]

app.get('/friends' , (req , res)=>{

    res.send(friends);
})

//with parameter

app.get('/friends/:id' , (req , res)=>{

    const id = parseInt( req.params.id);
    const friend = friends.find(friend => friend.id === id);
    if(friend){
        res.send(friend)
    }
    else{
        res.send("Not found");
    }
   
});


app.get('/fruits' , (req , res)=>{

    res.send(['mango' , 'guava' ,'apple' , 'jack-fruit']);
})

app.post('/friend' , (req , res)=>{

    console.log(req.body);
    const friend = req.body;
    friend.id = friends.length+1;
    friends.push(friend);
    res.send(friend);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
