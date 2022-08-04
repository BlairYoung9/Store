const Item = require("../models/item")
const itemRoute = require("../routes/item.route")

module.exports = {

    //READ ALL
    findAll: (req,res) => {
        Item.find()
            .then(allItems => res.json({items: allItems}))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //CREATE
    create: (req,res) => {
        Item.create(req.body)
            .then(newItem => res.json(newItem))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //READ ONE
    findOne: (req,res) => {
        Item.findById(req.params.id)
            .then(itemRoute => res.json(item))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //UPDATE
    update: (req,res) => {
        Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then((updatedItem) => {
                res.json(updatedItem)
            })
            .catch(err => res.json({message: "error res", error : err}))
    },

    //DELETE
    delete: (req, res) => {
        Item.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({message: "error res", error : err}))
    }

}