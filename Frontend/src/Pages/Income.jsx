import { useContext, useState } from "react"
import { AppContext } from "../Context/AppContext"


const Income = () => {

  const { addIncome } = useContext(AppContext)

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
    description: "",
    date: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev)=>({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const amount = Number(formData.amount)
    addIncome(formData.title, amount, formData.type, formData.category, formData.description, formData.date)
    setFormData({
      title: "",
      amount: "",
      type: "",
      category: "",
      description: "",
      date: ""
    });
  }

  return (
    <div className="mx-auto max-w-2xl md:mt-6 bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Add Income</h1>
      <form onSubmit={handleSubmit} className="space-y-0.5">
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter income title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Amount</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 mb-2">Income type</label>
          <select value={formData.type} onChange={handleChange} name="type" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 " required>
            <option value="" >Select type</option>
            <option value="salary">Salary</option>
            <option value="rental">Rental</option>
            <option value="investment">Investment</option>
            <option value="business">Business</option>
            <option value="freelance">Freelance</option>

          </select>

        </div>
        <div className="mb-4">
          <label className="block text-gray-500 mb-2">Category</label>
          <select value={formData.category} onChange={handleChange} name="category" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 " required>
            <option value="" >Select category</option>
            <option value="monthly-salary">Montly salary</option>
            <option value="dividend">Dividend</option>
            <option value="consulting">Consulting</option>
            <option value="real-estate">Real estate</option>
            <option value="subscription">Subscription</option>
            <option value="side-hustle">Side hustle</option>
            <option value="household">Household</option>
            <option value="others">others</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Description</label>
          <textarea

            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter a description"
            rows={3}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-400">
          Submit
        </button>

      </form>

    </div>
  )
}

export default Income