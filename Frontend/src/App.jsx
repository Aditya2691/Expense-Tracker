import { ToastContainer } from 'react-toastify'
import { Route, Routes, useLoction } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AppContext } from './Context/AppContext'
import SideBar from './Components/SideBar'
import Dashboard from './Pages/Dashboard'
import History from './Components/History'
import ViewTrasaction from './Pages/ViewTrasaction'
import Income from './Pages/Income'
import Expenses from './Pages/Expenses'
import IncomeTransaction from './Pages/IncomeTransaction'
import ExpensesTransaction from './Pages/ExpensesTransaction'
import Login from './Pages/Login'
import Register from './Pages/Register'


const App = () => {

  const location = useLoction()
  const { token, fetchIncome, fetchExpense } = useContext(AppContext)

  const hideMainLayout = ["/view-Transaction", "/add-Income", "/add-Expense", "/income-Transaction",  "/expense-Transaction","/login","/register" ].includes(location.pathname)

  useEffect(()=>{
    if(token){
      fetchIncome(),
      fetchExpense()
    }
  },[token,location.pathname])




  return (
    <div>
      <ToastContainer />
      <SideBar />
      {!hideMainLayout ? (
        <div className='flex flex-row w-full overflow-auto'>
          <div className='flex-1 w-1/2'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
            </Routes>
          </div>
          <div className=' flex-2 flex-col md:w-1/3 hidden lg-flex overflow-auto'>
            <Routes>
              <Route path='/History' element={<History />} />
            </Routes>
          </div>


        </div>
      ) : (
        <div className='flex-1 max-h-screen w-full overflow-auto'>
          <Routes>
            <Route path='/view-Transaction' element={<ViewTrasaction/>}/>
            <Route path='/add-Income' element={<Income/>}/>
            <Route path='/add-Expense' element={<Expenses/>}/>
            <Route path='/income-Transaction' element={<IncomeTransaction/>}/>
            <Route path='/expense-Transaction' element={<ExpensesTransaction/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
          </div>
      )}
    </div>
  )
}

export default App