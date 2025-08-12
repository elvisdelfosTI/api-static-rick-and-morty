const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const PORT = process.env.PORT || 3003;

const main = async () => {
  try {
    const app = express();

    // Ruta absoluta al archivo data.json
    const filePath = path.join(__dirname, "data.json");
    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);

    app.get("/", (_, res) => {
      res.send("🚀 Deploy successfully");
    });

    app.get("/api/person", (_, res) => {
      res.json(data);
    });

    app.get("/api/person/:id", (req, res) => {
      const { id } = req.params;
      const found = data.find((item) => item.id == id);
      if (found) {
        res.json(found);
      } else {
        res.status(404).json({ error: "Person not found" });
      }
    });

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
  }
};

main();
