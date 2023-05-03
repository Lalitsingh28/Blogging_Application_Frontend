import React ,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu ,SiBloglovin} from 'react-icons/ai';

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
    return (
      <div className=' bg-purple-700 text-white flex justify-between items-center h-16 mx-auto px-4 '>
        <h1 className='w-full text-xl md:text-3xl font-bold '>Bloggster</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Blogs</li>
          <li className='p-4'>Login</li>
          <li className='p-4'>Signup</li>
          <li className='p-4'>About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'text-white bg-purple-400 fixed left-0 top-0 w-[60%] h-full border-r border-r-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-white m-4'>Bloggster</h1>
          
            <li className='p-4 border-b border-white '>Home</li>
            <li className='p-4 border-b border-white'>Blogs</li>
            <li className='p-4 border-b border-white'>Login</li>
            <li className='p-4 border-b border-white'>Signup</li>
            <li className='p-4'>About</li>
        </ul>
      </div>
    );
}

export default Header