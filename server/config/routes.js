var pets = require("../controllers/pets.js");
var path = require('path');

module.exports = function(app){
    app.get("/pets", pets.showAll),
    app.post("/pets", pets.createPet),
    app.get("/pets/:id", pets.showPet),
    app.put("/pets", pets.editPet),
    app.delete("/delete/:id", pets.deletePet),
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('./angular-app/dist/index.html'));
    })
}