const express = require("express")
const fs = require('fs').promises;
const main = async  ()=>{

    const app = express();
    const file = await fs.readFile("./data.json", "utf8"); 
    const data = JSON.parse(file)
    
    app.get('/',async (_,res)=>{
        console.log(data);
        res.send (data)
    })
    app.get('/:id',async (req,res)=>{
        const { id } = req.params; //
        const found = data.find(item => item.id == id);
        res.send (found)
    })
    app.listen(3003, () => {
        console.log("Servidor escuchando en http://localhost:3003");
    });
}
main()