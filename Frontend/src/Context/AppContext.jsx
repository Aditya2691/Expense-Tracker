import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookie from 'js-cookie';
import axios from 'axios'
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode"

export const AppContext = createContext()
const AppContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const [ExpenseData, setExpenseData] = useState([])
  const [IncomeData, setIncomeData] = useState([])
  
  const [token, setToken] = useState(Boolean(cookie.get("token")))

  const backendUrl = 'http://localhost:4000'
  const utoken = cookie.get('token')

  const fetchIncome = async () => {
    try {
      const decodeToken = jwtDecode(utoken)
      const userId = decodeToken?.id

      if (!userId) {
        return
      }
      const { data } = await axios.get(`${backend}/api/user/get-income`, {
        headers: {
          Authorization: `Bearer ${utoken}`
        }
      })
      if (data.success) {
        setIncomeData(data.data)
      }




    } catch (error) {
      console.log(error)
    }

  }
  const fetchExpense = async () => {
    try {
      const decodeToken = jwtDecode(utoken)
      const userId = decodeToken?.id

      if (!userId) {
        return
      }
      const { data } = await axios.get(`${backend}/api/user/get-expense`, {
        headers: {
          Authorization: `Bearer ${utoken}`
        }
      })
      if (data.success) {
        setExpenseData(data.data)
      }




    } catch (error) {
      console.log(error)
    }

  }

  const addIncome = async (title, amount, income, categaries, description, date) => {
    const { data } = await axios.post(`${backendUrl}/api/user/add-income`, { title, amount, income, categaries, description, date }, {
      headers: {
        Authorization: `Bearer${utoken}`
      }
    })
    if (data.success) {
      toast.success(data.message)
      fetchIncome()
      navigate('/')
    }
  }

  const addExpense = async (title, amount, income, categaries, description, date) => {
    const { data } = await axios.post(`${backendUrl}/api/user/add-expense`, { title, amount, income, categaries, description, date }, {
      headers: {
        Authorization: `Bearer ${utoken}`
      }
    })
    if (data.success) {
      toast.success(data.message)
      fetchExpense()
      navigate('/')
    }
  }

  const handelRegister = async (name, email, password) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/register`, { name, email, password }, {
        headers: {
          "Content-Type": "application/json"

        }
      })
      if (data.success) {
        cookie.set("token", data.token, { expires: 7 })
        setToken(true)
        toast.success(data.message || "Register successfull")
        fetchIncome()
        fetchExpense()
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handelLogin = async (email, password) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password }, {
        headers: {
          "Content-Type": "application/json"

        }
      })
      if (data.success) {
        cookie.set("token", data.token, { expires: 7 })
        set.token(true)
        toast.success(data.message || "Login successfull")
        fetchIncome()
        fetchExpense()
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchIncome()
    fetchExpense()

  }, [])

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${cookie.get("token")}`
    }
    else{
      delete axios.defaults.headers.common["Authorization"]
    }
  },[token])

  const value = {
    backendUrl,
    handelRegister,
    handelLogin,
    fetchIncome,
    fetchExpense,
    addIncome,
    addExpense,
    IncomeData,
    ExpenseData,
    token,
    setToken

  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export default AppContextProvider;