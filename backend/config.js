import { connect } from "mongoose"

connect("mongodb+srv://syamuser:syam6132@cluster0.nkoy7.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})