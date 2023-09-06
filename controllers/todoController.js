const { Todo } = require('../models')

class TodoController {
    static async getAllTodos(req, res) {
        try {
            const response = await Todo.findAll({
               order: [['createdAt', 'DESC']]
            });

            if (response.length > 0) {
                res.status(200).json({ message: 'Found', data: response });
            } else {
                res.status(200).json({ message: 'Empty data' });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something wrong' });
        }
    }


    static async createTodo(req, res) {
        try {
            const { todo } = req.body
            const response = await Todo.create({ task_name: todo, status: 'process' })
            res.status(201).json({ message: 'Succes create todo', data: response })
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'Something wrong' });
        }
    }

    static async updateTodo(req, res) {
        try {
            const { todoId } = req.params;
            const { stats } = req.body;
            const data = await Todo.update({ status: stats }, { where: { id: todoId } });
         
            if (data) {
                res.status(200).json({ message: 'Success update todo'});
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Something went wrong' });
        }

    }

    static async deleteTodo(req, res) {
        try {
            const { todoId } = req.params
            await Todo.destroy({ where: { id: todoId } })
            res.status(200).json({ message: 'Succes delete todo' })
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'Something wrong' });
        }
    }
}

module.exports = TodoController