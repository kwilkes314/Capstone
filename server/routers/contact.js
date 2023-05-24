const { Router } = require("express");
const Pizza = require("../models/contact");
const { Contact } = require("../../store");
const router = Router();

//  Route definitions go here
// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newContact = new Contact(request.body);
  newContact.save((error, record) => {
    if (error?.name === 'ValidationError') return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});


// Get (read) all records from the collection
router.get("/", (request, response) => {
  Contact.find({}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});


// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Contact.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Contact.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Contact.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't update the customer
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
    if (error?.name === 'ValidationError') return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
    }
  );
});
module.exports = router;
