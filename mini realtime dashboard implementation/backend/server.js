const express=require("express");
const http=require("http");
const {server}=require("socket.io");
const cors=require("cors");
const os=require("os");


const app=express();
app.use(cors());
app.use(express.json());

function readSystemMetrics(){
    const memTotal=os.totalmem();
    const memFree=os.freemem();
    const memUsed=memTotal-memFree;
    const memPer=Math.round((memUsed/memTotal)*100);
}

