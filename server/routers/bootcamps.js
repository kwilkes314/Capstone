const Router = require("express")
const Bootcamp = required("../models/bootcamp")
const router = Router()

router.post("/", (request, response) => {

  const newBootcamp = new Bootcamp(request.body)

newBootcamp.save((error, record)=>{
if (error?.name === "validate error")
    return response.status(400)
    .json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
})



})

router.get("/"), (request, response)=>{
  Bootcamp.find({}, (error, record)=> {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  })
};
