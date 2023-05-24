const { Router } = require("express");
const Pizza = require("../models/bootcamp");
const router = Router();

//  Route definitions go here
// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newBootcamp = new Pizza(request.body);
  newPizza.save((error, record) => {
    if (error?.name === 'ValidationError') return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});


// Get (read) all records from the collection
router.get("/", (request, response) => {
  Bootcamp.find({}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});


// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Pizza.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Pizza.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Pizza.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't update the customer
        name: body.name,
        location: body.location,
        phone: body.phone,
        review: body.review
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
