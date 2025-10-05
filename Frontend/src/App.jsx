import { ToastContainer } from 'react-toastify';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import SideBar from './Components/SideBar.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import History from './Components/History';
import ViewTransaction from './Pages/ViewTransaction';
import Income from './Pages/Income';
import Expenses from './Pages/Expenses';
import IncomeTransaction from './Pages/IncomeTransaction';
import ExpensesTransaction from './Pages/ExpensesTransaction';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  const location = useLocation();
  const { token, fetchIncome, fetchExpense } = useContext(AppContext);

  const hideMainLayout = [
    "/view-transaction",
    "/add-income",
    "/add-expense",
    "/income-transaction",
    "/expense-transaction",
    "/login",
    "/register"
  ].includes(location.pathname);

  useEffect(() => {
    if (token) {
      fetchIncome();
      fetchExpense();
    }
  }, [token, location.pathname]);

  return (
    // <div className='text-red-500'>Hello</div>
    <div className='flex flex-row max-h-screen'>
      <ToastContainer />
      <SideBar />
      {!hideMainLayout ? (
        <div className='flex flex-row w-full overflow-auto'>
          <div className='flex-1 w-1/2'>
             <Routes>
               <Route path='/' element={<Dashboard />} />
            </Routes>
            </div>
                  <div className='flex-1 flex-col md:w-1/3 hidden lg:flex overflow-auto'>
            <Routes>
                 <Route path='/' element={<History/>} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className='flex-1 max-h-screen w-full overflow-auto'>
          <Routes>
            <Route path='/view-transaction' element={<ViewTransaction />} />
            <Route path='/add-income' element={<Income />} />
            <Route path='/add-expense' element={<Expenses />} />
            <Route path='/income-transaction' element={<IncomeTransaction />} />
            <Route path='/expense-transaction' element={<ExpensesTransaction />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      )}
    </div>
  )
}

export default App



// import { ToastContainer } from 'react-toastify'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import { useContext, useEffect } from 'react'
// import { AppContext } from './Context/AppContext'
// import SideBar from './Components/SideBar'
// import Dashboard from './Pages/Dashboard'
// import History from './Components/History'
// import ViewTrasaction from './Pages/ViewTrasaction'
// import Income from './Pages/Income'
// import Expenses from './Pages/Expenses'
// import IncomeTransaction from './Pages/IncomeTransaction'
// import ExpensesTransaction from './Pages/ExpensesTransaction'
// import Login from './Pages/Login'
// import Register from './Pages/Register'


// const App = () => {

//   const location = useLocation()
//   const { token, fetchIncome, fetchExpense } = useContext(AppContext)

//   const hideMainLayout = ["/view-transaction", "/add-income", "/add-expense", "/income-transaction", "/expense-transaction", "/login", "/register"].includes(location.pathname);

//   useEffect(() => {
//     if (token) {
//       fetchIncome();
//       fetchExpense();
//     }
//   }, [token, location.pathname]);




//   return (
//     <div className='flex flex-row max-h-screen'>
//       <ToastContainer />
//       <SideBar />
//       {!hideMainLayout ? (
//         <div className='flex flex-row w-full overflow-auto'>
//           <div className='flex-1 w-1/2'>
//             <Routes>
//               <Route path='/' element={
//                 <div className='flex flex-row w-full'>
//                   <div className='flex-1 w-1/2'><Dashboard /></div>
//                   <div className='flex-1 flex-col md:w-1/3 hidden lg:flex overflow-auto'><History /></div>
//                 </div>
//               } />

//             </Routes>
//           </div>
      
//       ) : (
//         <div className='flex-1 max-h-screen w-full overflow-auto'>
//           <Routes>
//             <Route path='/view-transaction' element={<ViewTrasaction />} />
//             <Route path='/add-income' element={<Income />} />
//             <Route path='/add-expense' element={<Expenses />} />
//             <Route path='/income-transaction' element={<IncomeTransaction />} />
//             <Route path='/expense-transaction' element={<ExpensesTransaction />} />
//             <Route path='/login' element={<Login />} />
//             <Route path='/register' element={<Register />} />
//           </Routes>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;