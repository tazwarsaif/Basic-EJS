import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = d.getDay();
    console.log(day)
    if(day === 4){
        let dayType = 'Weekend';
        let advice = 'Have Fun!';
        res.render('index.ejs',{
            dayType,
            advice
        })
    }else if(day != 5){
        let dayType = 'week day';
        let advice = 'You gotta work';
        res.render('index.ejs',{
            dayType,
            advice
        })
    }

})

app.listen(port,()=>{
    console.log('Listening to port '+port);
});