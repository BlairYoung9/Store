const Item = require("../controllers/item.controller");

module.exports = (app) => {
    app.get("/api/items", Item.findAll)
    app.post("/api/items", Item.create)
    app.get("/api/items/:id", Item.findOne)
    app.put("/api/items/:id", Item.update)
    app.delete("/api/items/:id", Item.delete)
}
