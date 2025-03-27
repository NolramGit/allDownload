const express = require('express');
const app = express()
const port = process.env.PORT || 8080;
const ytdl = require("@distube/ytdl-core");

function get_ytdl(){
    let videoTitle;
    // Get video info
    ytdl.getBasicInfo("http://www.youtube.com/watch?v=aqz-KE-bpKQ").then(info => {
        videoTitle = info.videoDetails.title;
    });
    return videoTitle;
}

app.get('/', (req, res) =>{
    res.send(get_ytdl())
})



app.listen(port, () => {
    console.log(`Server on port: ${port}`)
})