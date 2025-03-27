const express = require('express');
const app = express()
const port = process.env.PORT || 8080;
const ytdl = require("@distube/ytdl-core");

function get_ytdl(){
    // Get video info
    const videoTitle = ytdl.getBasicInfo("http://www.youtube.com/watch?v=aqz-KE-bpKQ")
    .then(info => {
        return  info.videoDetails.title;
    });
    return videoTitle;
}

app.get('/', async (req, res) =>{
    const a = await get_ytdl()
    console.log(a) 
    res.send('server om!')
})



app.listen(port, () => {
    console.log(`Server on port: ${port}`)
})