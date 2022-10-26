import { Router } from "express";
import Branch from '../models/Branch'
import Vehicle from '../models/Vehicle'


const router = Router()

router.get("/", (req, res) => {
    res.json({
      message: "All Good",
    });
  });

router.post('/branch', async(req, res) => {
    const branch = Branch(req.body)
    
    const branchSaved = await branch.save()
    console.log(branchSaved)
    res.status(201).json(branch)
})

router.post('/vehicle', async(req, res) => {
  const vehicle = Vehicle(req.body)
  
  const vehicleSaved = await vehicle.save()
  console.log(vehicleSaved)
  res.status(201).json(vehicle)
})


export default router;
  