import express from "express";
import path from "path";
import fs from "fs";
const app = express();
//setting up view engine------->>
app.set("view engine","ejs");

//path.join()---> its function is to join current path with any other folder as example shown under
app.use(express.static(path.join(path.resolve(),"public")));//this line of code says that any link which is not defines its path then it will be defaulty located in public folder

//console.log(path.join(path.resolve(),"public"))//this line of code joins current directory and public folder as default
app.get("/" ,(req,res)=>{
// 1) res.sendStatus(400);it sends the error code of server
//2)send.json---->
/*res.json({
    success :true,
    product: []
})*/
//3)const readFile = fs.readFileSync("./index.html")//fs is used to read and write the file.
/* 4) res.sendFile------>>It sends directly the file 
res.sendFile(readFile);
res.sendFile(pathLocation);
5)const pathLocation = path.resolve(); //path.resolve shows us our own directory
6)
//res.render()method is used to render html file directly
res.render("index",{name:"radha"});//passing name as radha to my html file as well as displaying index file to browser
 */
res.render("index",{name:"AAdiya"});
})



app.listen(5000,()=>{

console.log("EXpresS Is RunNinG")
})