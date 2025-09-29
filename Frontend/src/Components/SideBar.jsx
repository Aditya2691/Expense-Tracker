import logo from '../assets/grain_01.jpg'
import logo2 from '../assets/image01.jpg'
import {GoGraph} from "react-icons/go";
import {FaRegCreditCard} from "react-icons/fa";
import {FaMoneyBillTrendUp} from "react-icons/fa6";
import {GiExpense} from "react-icons/gi";
import {IoLogout} from "react-icons/io5";
import {FaArrowsDowmToLine, FaArrowsUpToLine } from "react-icons/fa6";
import { useContext } from 'react';
import { Appcontext } from '../Context/AppContext';
import {useNavigate} from 'react-router-dom';



const SideBar = () => {

const {token, setToken} = useContext(Appcontext)

const navigate = useNavigate()


  return (
    <div className='bg-gradient-to-l to-black'></div>
  )
}

export default SideBar