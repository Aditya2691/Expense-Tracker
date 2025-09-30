import logo from '../assets/grain_01.jpg'
import logo2 from '../assets/image01.jpg'
import { GoGraph } from "react-icons/go";
import { FaRegCreditCard } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import { IoLogout } from "react-icons/io5";
import { FaArrowsDowmToLine, FaArrowsUpToLine } from "react-icons/fa6";
import { useContext } from 'react';
import { Appcontext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import cookie from 'js-cookie'



const SideBar = () => {

  const { token, setToken } = useContext(Appcontext)

  const navigate = useNavigate()

  const handleLogout= ()=>{
    setToken(false)
    navigate('/')
    cookie.remove("token") 
  }


  return (
    <div className='bg-gradient-to-l from-black to-gray-70 h-screen'>
      <div className='mt-3 py-2 px-2'>
        <img src={logo} onClick={() => navigate('/')} alt='logo' className='mt-1 w-44 hidden md:block' />
        <img src={logo2} onClick={() => navigate('/')} alt='logo' className='w-12 block md:hidden' />
      </div>

      <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
        <NavLinks to={'/'} className='w-full flex flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
          <GoGraph className='text-2xl text-white' />
          <p className='text-lg font-semibold hidden md:block text-white'>Dashboard</p>
        </NavLinks>
      </div>
      <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
        <NavLinks to={'/view-transaction'} className='w-full flex flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
          <FaRegCreditCard className='text-2xl text-white' />
          <p className='text-lg font-semibold hidden md:block text-white'>Transactions</p>
        </NavLinks>
      </div>
      <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
        <NavLinks to={'/income-transaction'} className='w-full flex flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
          <FaArrowsDowmToLine className='text-2xl text-white' />
          <p className='text-lg font-semibold hidden md:block text-white'>Income History</p>
        </NavLinks>
      </div>
      <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
        <NavLinks to={'/expense-transaction'} className='w-full flex flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
          <FaArrowsUpToLine className='text-2xl text-white' />
          <p className='text-lg font-semibold hidden md:block text-white'>Expense History</p>
        </NavLinks>
      </div>
      <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
        <NavLinks to={'/add-income'} className='w-full flex flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
          <FaMoneyBillTrendUp className='text-2xl text-white' />
          <p className='text-lg font-semibold hidden md:block text-white'>Income</p>
        </NavLinks>
      </div>
      <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
        <NavLinks to={'/add-expense'} className='w-full flex flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
          <GiExpense className='text-2xl text-white' />
          <p className='text-lg font-semibold hidden md:block text-white'>Expense</p>
        </NavLinks>
      </div>
      <div className='flex flex-row items-center lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 justify-center gap-5 py-2 px-2'>
        {token ?
          <NavLinks onClick={handleLogout} className='w-full flex flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
            <IoLogout className='text-2xl text-white' />
            <p className='text-lg font-semibold hidden md:block text-white'>Logout</p>
          </NavLinks> :
          <NavLinks to={'/login'} className='w-full flex flex-row items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer'>
            <IoLogout className='text-2xl text-white' />
            <p className='text-lg font-semibold hidden md:block text-white'>Login</p>
          </NavLinks>}
      </div>

    </div>
  )
}

export default SideBar