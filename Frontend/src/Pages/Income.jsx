import { useContext, useState } from "react"
import { AppContext } from "../Context/AppContext"


const Income = () => {

  const { addIncome } = useContext(AppContext)

  const [fromData, setFormDat]= useState({
    title:"",
    amount:"",
    type:"",
    category:"",
    description:"",
    date:""
  })

  const handleChange=(e)=>{
    const {name, value}= e.target;
    setFormDat({...fromData,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const amount=Number(fromData.amount)
     addIncome(fromData.title, amount,fromData.type,fromData.category,fromData.description,fromData.date)
  }

  return (
    <div className="mx-auto mx-w-2xl md:mt-6 bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Add Income </h1>
      <form onSubmit={handleSubmit} className="space-y-0.5">
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={fromData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter expense tilte"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Amount</label>
          <input
            type="number"
            name="title"
            value={fromData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 mb-2">Income type</label>
          <select value={fromData.type} onChange={handleChange} name="type" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 " required>
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
          <select value={fromData.category} onChange={handleChange} name="category" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 " required>
            <option value="" >Select category</option>
            <option value="montly-salary">Montly salary</option>
            <option value="divident">Divident</option>
            <option value="consulting">Consulting</option>
            <option value="real-estate">Real estate</option>
            <option value="subcription">Subcription</option>
            <option value="side-hustle">Side hustle</option>
            <option value="household">Household</option>
            <option value="ohters">others</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Description</label>
          <textarea

            type="text"
            name="description"
            value={fromData.description}
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
            value={fromData.date}
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