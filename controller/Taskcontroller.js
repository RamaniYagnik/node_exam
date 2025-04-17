import mongoose from 'mongoose'
import taskmodel from '../model/Taskmodel.js'

const taskController = {
    async create(req, res) {

        try {

            const { title, description } = req.body
            if (!title) throw new Error("title in not defined")
            if (!description) throw new Error("description is not defined")

            const task = new taskmodel(req.body)
            await task.save()
            res.json({
                message: "task created successfully",
                task
            })

        } catch (error) {
            res.json({
                message: "Server Error", error
            })
        }
    },
    async getAllTask(req, res) {
        const task = await taskmodel.find()
        if (!task) throw new Error("Task Not Found...")
        res.json(task)
    },
    async getTaskById(req, res) {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.json({
                message: "Id Is Invalid"
            })
        }
        const task = await taskmodel.findById(id)
        if (!task) throw new Error("Task Not Found...")
        res.json(task)
    },
    async update(req, res) {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.json({
                message: "Id Is Invalid"
            })
        }
        const task = await taskmodel.findByIdAndUpdate(id, req.body, { new: true })
        if (!task) throw new Error("Task Not Found...")
        res.json(task)
    },
    async delete(req, res) {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.json({
                message: "Id Is Invalid"
            })
        }
        const task = await taskmodel.findByIdAndDelete(id)
        res.json({
            message: "Task Deleted Successfully..."
        })
    }
}

export default taskController