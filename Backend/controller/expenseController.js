import ExpenseModel from "../models/expenseSchema.js";

const addExpense = async (req, res) => {

    const userId = req.user?.id

    const { title, amount,type, category, description, date } = req.body;

    const parseAmount = Number(amount)

    try {
        if (!title || !type || !amount || !category || !description || !date) {
            return res.status(400).json({ message: "All fields required" })
        }
        if (isNaN(parseAmount) || parseAmount <= 0) {
            return res.status(400).json({ success: false, message: "Amount must be positive intiger" })
        }

        const newExpense = new ExpenseModel({
            userId, type, title, amount, category, description, date
        })

        await newExpense.save()
        res.status(200).json({ success: true, message: "Expense added", data: newExpense })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server Error" })
    }


}
const deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteExpense = await ExpenseModel.findByIdAndDelete(id)
        if (!deleteExpense) {
            return res.status(404).json({ success: false, message: "Expense not found" })
        }
        res.status(200).json({ success: true, message: "Expense deleted", deleteExpense })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" })

    }
}
const updateExpense = async (req, res) => {
    const { id } = req.params;
    const { title, amount,type, category, description, date } = req.body;
    try {
        const ExpenseUpdate = await ExpenseModel.findById(id);
        if (!ExpenseUpdate) {
            return res.status(404).json({ success: false, message: "Expense not found to update" });
        }
        ExpenseUpdate.title = title || ExpenseUpdate.title;
        ExpenseUpdate.amount = amount || ExpenseUpdate.amount;
        ExpenseUpdate.type =type || ExpenseUpdate.type;
        ExpenseUpdate.category = category || ExpenseUpdate.category;
        ExpenseUpdate.description = description || ExpenseUpdate.description;
        ExpenseUpdate.date = date || ExpenseUpdate.date;
        await ExpenseUpdate.save(); res.status(200).json({ success: true, message: "Expense updated", data: ExpenseUpdate });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const getExpense = async (req, res) => {
    try {
        const userId = req.user?.id
        const getExpense = await ExpenseModel.find({ userId: userId })
        if (!getExpense) {
            return res.status(404).json({ success: false, message: "Expense not found" })
        }
        res.status(200).json({ success: true, data: getExpense })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export { addExpense, deleteExpense, updateExpense, getExpense }
