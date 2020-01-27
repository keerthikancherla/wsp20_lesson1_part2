const functions = require('firebase-functions');
const express = require('express');
const app = express()
exports.httpReq = functions.https.onRequest(app);

app.get('/', front);
app.get('/pics',front);
app.get('/download',back);
function front(req,res){
  res.sendFile(__dirname+'/spa/index.html')
}

function back(req,res){
    const files = __dirname + '/file.txt';
    res.download(files);
}