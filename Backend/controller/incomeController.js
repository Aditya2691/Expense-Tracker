import IncomeModel from "../models/incomeSchema.js";

const addIncome = async (req, res) => {

    const userId = req.user?.id

    const { title, amount, categories, description, date } = req.body;

    const parseAmount = Number(amount)

    try {
        if (!title || !amount || !categories || !description || !date) {
            return res.status(400).json({ message: "All fields required" })
        }
        if (isNaN(parseAmount) || parseAmount <= 0) {
            return res.status(400).json({ success: false, message: "Amount must be positive intiger" })
        }

        const newIncome = new IncomeModel({
            userId, title, amount, categories, description, date
        })

        await newIncome.save()
        res.status(200).json({ success: true, message: "Income added", data: newIncome })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server Error" })
    }


}
const deleteIncome = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteIncome = await IncomeModel.findByIdAndDelete(id)
        if (!deleteIncome) {
            return res.status(404).json({ success: false, message: "Income not found" })
        }
        res.status(200).json({ success: true, message: "Income deleted", deleteIncome })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" })

    }
}
const updateIncome = async (req, res) => {
    const { id } = req.params;
    const { title, amount, categories, description, date } = req.body;
    try {
        const incomeUpdate = await IncomeModel.findById(id);
        if (!incomeUpdate) {
            return res.status(404).json({ success: false, message: "Income not found to update" });
        }
        incomeUpdate.title = title || incomeUpdate.title;
        incomeUpdate.amount = amount || incomeUpdate.amount;
        incomeUpdate.categories = categories || incomeUpdate.categories;
        incomeUpdate.description = description || incomeUpdate.description;
        incomeUpdate.date = date || incomeUpdate.date;
        await incomeUpdate.save(); res.status(200).json({ success: true, message: "Income updated", data: incomeUpdate });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const getIncome = async (req, res) => {
    try {
        const userId = req.user?.id
        const getIncome = await IncomeModel.find({ userId: userId })
        if (!getIncome) {
            return res.status(404).json({ success: false, message: "Income not found" })
        }
        res.status(200).json({ success: true, data: getIncome })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export { addIncome, deleteIncome, updateIncome, getIncome }
