import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { login, register } from '../controller/userController.js'
import { addIncome, deleteIncome, getIncome, updateIncome } from '../controller/incomeController.js'
import { addExpense, deleteExpense, getExpense, updateExpense } from '../controller/expenseController.js'


const userRouter = express.Router()

userRouter.post('/register', register)

userRouter.post('/login', login)

userRouter.post('/add-income', authMiddleware, addIncome)
userRouter.put('/update-income/:id', authMiddleware, updateIncome)
userRouter.delete('/delete-income/:id', deleteIncome)
userRouter.get('/get-income', authMiddleware, getIncome)

userRouter.post('/add-expense', authMiddleware, addExpense)
userRouter.put('/update-expense/:id', authMiddleware, updateExpense)
userRouter.delete('/delete-expense/:id', deleteExpense)
userRouter.get('/get-expense', authMiddleware, getExpense)

export default userRouter