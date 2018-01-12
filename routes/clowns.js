const fs = require('fs');
module.exports = (req,res) =>{
    fs.readFile(`${process.cwd()}/public/clowns.json`, "utf8", (err,json) =>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/html'});
            res.end('The server has a problem please try later');
        }
        fs.readFile(`${process.cwd()}/templates/clowns.html`,"utf8",(err,data) =>{
            if (err){
                res.writeHead(404,{'Content-Type':'text/html'})
                res.end('File not found');
            }
            res.end(generatedHtml(data,json));
        });
    })
    
}

const generatedHtml = (tpl,json)=>{
    return tpl.replace('%friends%'),JSON.parse(json).map(item =>item.name).join('<li></li>')
}