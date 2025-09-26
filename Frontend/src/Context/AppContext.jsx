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

  const fecthIncome = async () => {
    try {
      const decodeToken = jwtDecode(utoken)
      const userId = decodeToken?.id

      if (!userId) {
        return
      }
      const { data } = await axios.get(`$ {backend}/api/user/get-income`, {
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
  const fecthExpense = async () => {
    try {
      const decodeToken = jwtDecode(utoken)
      const userId = decodeToken?.id

      if (!userId) {
        return
      }
      const { data } = await axios.get(`$ {backend}/api/user/get-expense`, {
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
      fecthIncome()
      navigate('/')
    }
  }

  const addExpense = async (title, amount, income, categaries, description, date) => {
    const { data } = await axios.post(`${backendUrl}/api/user/add-expense`, { title, amount, income, categaries, description, date }, {
      headers: {
        Authorization: `Bearer${utoken}`
      }
    })
    if (data.success) {
      toast.success(data.message)
      fecthExpense()
      navigate('/')
    }
  }

  const handelRegister = async (name, email, password) => {
    try {
      const { data } = await axios.post(`$ {backendUrl}/api/user/register`, { name, email, password }, {
        headers: {
          "Content-Type": "application/json"

        }
      })
      if (data.success) {
        cookie.set("token", data.token, { expires: 7 })
        set.token(true)
        toast.success(data.message || "Register successfull")
        fecthIncome()
        fecthExpense()
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handelLogin = async (email, password) => {
    try {
      const { data } = await axios.post(`$ {backendUrl}/api/user/register`, { email, password }, {
        headers: {
          "Content-Type": "application/json"

        }
      })
      if (data.success) {
        cookie.set("token", data.token, { expires: 7 })
        set.token(true)
        toast.success(data.message || "Login successfull")
        fecthIncome()
        fecthExpense()
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fecthIncome()
    fecthExpense()

  }, [])

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${cookie.get("token")}`
    }
    else{
      delete axios.defaults.headers.common["Authorization"]
    }
  },[token])

  const values = {
    backendUrl,
    handelRegister,
    handelLogin,
    fecthIncome,
    fecthExpense,
    addIncome,
    addExpense,
    IncomeData,
    ExpenseData,
    token,
    setToken

  }

  return <AppContext.Provider values={values}>
    {children}
  </AppContext.Provider>
}

export default AppContextProvider