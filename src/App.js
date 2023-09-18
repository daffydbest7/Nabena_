import './App.css';
import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin, AiOutlineWhatsApp, AiFillFacebook} from "react-icons/ai";
import avatar from "./asset/avatar.png";
//import ReactDOM from 'react-dom';
function App() {
  
  return (
    <div className="App text-white">
      <div className='container  min-h-screen'>
        <section className='container border border-gray-500 rounded-lg mt-[80px]'>
          {/**image */}
          <div className='mx-auto text-center'>
          <div className='mx-auto rounded-lg'> <img src={avatar} alt='avatar' className='rounded-lg mx-auto text-center max-w-[100px] mt-[-60px]' /></div>
          <h2 className='mx-auto font-bold text-2xl text-teal-500'> EBIBOWEI NABENA </h2>
          <p className='mx-auto text-center'> I am a Data Analyst passionate about transforming complex data into actionable insights that drive
          positive outcomes and operational efficiency</p>
          </div>
         
           {/**phone and Email */}
           <div className='mt-8'>
           <div>
           <div className='flex flex-row space-x-2 items-center text-teal-500'>
            <span><AiOutlinePhone/></span> <span className='font-bold '>Phone Number</span>
           </div>
            +234 (0) 906-850-9555
           </div>
           <div className='mt-4 mb-4'>
           <div className='flex flex-row space-x-2 items-center text-teal-500'>
            <span><AiOutlineMail/></span> <span className='font-bold'>Email Address</span>
           </div>
            ebibowei.nabena@gmail.com 
           </div>
           </div>
        </section>
       {/**socials */}
       <section className='container mt-[80px] '>
         <div className=''>
         <h2 className='font-bold text-center text-2xl'> SOCIAL MEDIA </h2>
           
           <div className='mt-8 border border-lg border-gray-500 rounded-lg'>
            <div className='flex flex-row space-x-12 my-8 text-teal-500'>
            <a   href="https://www.linkedin.com/in/ebibowei-nabena"  rel="noreferrer" target='_blank' className='font-bold cursor-pointer hover:text-blue-500'> <AiOutlineLinkedin size={25}/> </a >
            <a  href="https://facebook.com/iammrhaitch"  rel="noreferrer" target='_blank' className='font-bold cursor-pointer'><AiFillFacebook size={25}/></a>
            <a  href="https://wa.me/+2349068509555"  rel="noreferrer" target='_blank' className='font-bold  cursor-pointer'><AiOutlineWhatsApp size={25}/></a>
           </div>
           </div>
         </div>
         
           
        </section>
       </div>
    </div>
  );
}

export default App;
