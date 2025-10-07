import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"


const Register = () => {

  const navigate = useNavigate()

  const { handelRegister } = useContext(AppContext)

  const [isModal, setIsModal] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })


  const handleModalClose = () => {
    setIsModal(false)
    navigate('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handelRegister(formData.name,formData.email, formData.password)
    setIsModal(false)
    navigate('/')
  }

  return (
    <>
      {isModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-96 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl item-center font-semibold">Registration</h2>
              <button onClick={handleModalClose} className=" text-gray-600 hover:text-gray-900 text-2xl">
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-lg focus:outline-none "
                  required
                />  
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-lg focus:outline-none "
                  required
                />  
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-lg focus:outline-none "
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded hover:text-blue-300">Register</button>
            </form>

          </div>
        </div>
      )}

    </>
  )
}

export default Register