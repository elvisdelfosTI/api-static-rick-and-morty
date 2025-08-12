const express = require("express")
const fs = require('fs').promises;
const PORT = process.env.PORT || 3003;
const main = async  ()=>{

    const app = express();
    const file = await fs.readFile("./data.json", "utf8"); 
    const data = JSON.parse(file)
    
    app.get('/',async (_,res)=>{
        res.send ("🚀 Deplopy successfully")
    })
    app.get('/api/person/',async (_,res)=>{
        console.log(data);
        res.send (data)
    })
    app.get('/api/person/:id',async (req,res)=>{
        const { id } = req.params; //
        const found = data.find(item => item.id == id);
        res.send (found)
    })
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
}
main()