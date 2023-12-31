import './App.css';
import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin, AiOutlineWhatsApp, AiFillFacebook, AiFillTwitterCircle} from "react-icons/ai";
import {TbWorldWww} from "react-icons/tb";
import avatar from "./asset/avatar.png";
import nabena_ from "./asset/nabenaaa.jpg";
//import ReactDOM from 'react-dom';
function App() {
  
  return (
    <div className="App text-white fixed">
      <div className='container-2 lg:mx-[100px]'>
      <div className='container  min-h-screen'>
        <section className='container border-2 border-gray-500 rounded-lg mt-[80px]'>
          {/**image */}
          <div className='mx-auto text-center'>
          <div className='mx-auto rounded-lg'> <img src={nabena_} alt='avatar' className='rounded-full mx-auto text-center w-[200px] h-[200px] mt-[-70px] hover:scale-110 duration-300 shadow-md' /></div>
          <h2 className='mx-auto font-bold text-2xl text-blue-500 mt-4'> EBIBOWEI NABENA </h2>
          <p className='mx-auto text-center'> I am a Data Analyst passionate about transforming complex data into actionable insights that drive
          positive outcomes and operational efficiency</p>
          </div>
         
           {/**phone and Email */}
           <div className='mt-8 ml-4'>
           <div>
           <div className='flex flex-row space-x-2 items-center text-blue-500'>
            <span><AiOutlinePhone/></span> <span className='font-bold '>Phone Number</span>
           </div>
            +234 (0) 906-850-9555
           </div>
           <div className='mt-4 mb-4'>
           <div className='flex flex-row space-x-2 items-center text-blue-500'>
            <span><AiOutlineMail/></span> <span className='font-bold'>Email Address</span>
           </div>
            ebibowei.nabena@gmail.com 
           </div>
           </div>
        </section>
       {/**socials */}
       <section className='container mt-[10px]'>
         <div className=''>
         <h2 className='font-bold text-center text-2xl'> SOCIAL MEDIA </h2>
           
           <div className='mt-8 border-2 border-lg border-gray-500 rounded-lg '>
            <div className='flex flex-row space-x-12 justify-around my-8 text-blue-500'>
            <a   href="https://www.linkedin.com/in/ebibowei-nabena"  rel="noreferrer" target='_blank' className='font-bold cursor-pointer animate-pulse'> <AiOutlineLinkedin size={25}/> </a >
            <a  href="https://facebook.com/iammrhaitch"  rel="noreferrer" target='_blank' className='font-bold cursor-pointer animate-pulse'><AiFillFacebook size={25}/></a>
            <a  href="https://wa.me/+2349068509555"  rel="noreferrer" target='_blank' className='font-bold  cursor-pointer animate-pulse'><AiOutlineWhatsApp size={25}/></a>
            <a  href="https://twitter.com/bibonabena"  rel="noreferrer" target='_blank' className='font-bold  cursor-pointer animate-pulse'><AiFillTwitterCircle size={25}/></a>
            <a  href="/"  rel="noreferrer" target='_blank' className='font-bold  cursor-pointer animate-pulse'><TbWorldWww size={25}/></a>
           </div>
           </div>
         </div>
         
           
        </section>
       </div>
      </div>
    </div>
  );
}

export default App;
