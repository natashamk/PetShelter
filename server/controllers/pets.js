var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    	//Display all 
    showAll: function (req, res) {
        Pet.find({}, function (err, data) {
            if (err) {
                res.json({message: "error", err: err});
            } else {
            	res.json({message: "success", data: data});

            }
        })
    },
    //Find one and display
    showPet: function (req, res) {
        Pet.findOne({ _id: req.params.id }, function (err, data) { 
            if (err) {
                res.json({message: "error", err: err});
            } else {
            	res.json({message: "success", data: data});
            }
        })
    },
    // Create new and add to DB 
    createPet: function (req, res) {
        Pet.create(req.body)
        .then(
            data => res.json({message: "success", data: data})
        )
        .catch (
            error => res.json({message: "error", err: error})
        )
    },
	// Edit and update existing item
    editPet: function (req, res) {
        Pet.update({_id: req.body._id}, req.body)
        .then (
            data => res.json({message: "success", data: data})
        )
        .catch (
            error => res.json({message: "error", err: error})
        )
    },
	// Delete 
    deletePet: function (req, res) {
        Pet.findByIdAndRemove({ _id: req.params.id }, function (err) {
            if (err) {
                res.json({message: "error", err: err});
            } 
        })
    }
};
