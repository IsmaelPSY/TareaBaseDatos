import { Router } from "express";
import Task from '../models/Movies'


const router = Router()

router.get("/", (req, res) => {
    res.json({
      message: "All Good",
    });
  });

router.post('/add', async(req, res) => {
    const task = Task(req.body)
    
    const taskSaved = await task.save()
    console.log(taskSaved)
    res.status(201).json(task)
})


export default router;
  