var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("Welcome to PVR");});
app.get("/product",(req, res)=>{var p={ "id":45,
"title":"ANIMAL","description":"MOVIE", "unitprice":14, "quatity":7000 };
res.send(p);
});
app.listen(8000);
console.log("App is listening on port 8000");
