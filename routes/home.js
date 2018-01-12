const fs = require('fs');
module.exports = (req,res) =>{
    fs.readFile(`${process.cwd()}/templates/index.html`,"utf8",(err,data) =>{
        res.end(data); 
    });
}