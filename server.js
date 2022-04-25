//import the node modules
//require() function is used to import the node modules
const express=require("express");
const cors=require("cors");
const mongodb=require("mongodb");

//create rest object 
const app=express();

//enable cors policy 
app.use(cors());

//set the json mime type
app.use(express.json());


//create client object
const mongoClient=mongodb.MongoClient;

//create rest api
app.get("/products",(rest,resp)=>{
     mongoClient.connect("mongodb+srv://mongodb:mongodb@cluster0.35ipz.mongodb.net/sample_analytics?retryWrites=true&w=majority",(error,connection)=>{
               if(error) throw error;
               else{
                   const db=connection.db("sample_analytics");
                   db.collection("accounts").find().toArray((error,array)=>{
                       if(error) throw error;
                       else{
                           resp.send(array);
                       }
                   });

               }
     });
});


//assign the port  number
app.listen(8080,()=>{
    console.log("node server running on port 8080");
})