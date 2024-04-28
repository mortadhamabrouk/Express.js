const express=require('express')
const app=express()


const authmiddleware=(req,res,next)=>{
    const auth=false
    const currentDay=new Date().getDay()
    const currentHour=new Date().getHours()
    console.log(currentDay,currentHour)
    if(currentDay>=1 && currentDay<=5 && currentHour>=9 && currentHour<=17){   
        next()
    }
    else{
        res.send("You are not autorized")
    }
}
app.use(express.static(__dirname+"/view"))
app.get("/style/style.css",(req,res)=>{
    res.sendFile    (__dirname+"/view/style/stye.css")
})
app.use(authmiddleware)
app.get("/home",(req,res)=>{
    res.sendFile(__dirname+'/view/home.html')
})
app.get("/contact",(req,res)=>{
 res.sendFile(__dirname+'/view/contact.html')
})
app.get("/ourservice",(req,res)=>{
    res.sendFile(__dirname+'/view/ourService.html')
})
app.listen(8081,(err)=>{
err? console.log("err:",err):console.log("Server is running in port 8081")
})