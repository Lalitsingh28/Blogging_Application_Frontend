import React ,{useState} from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
    return (
      <div className=' bg-purple-700 text-white flex justify-between items-center h-16 mx-auto px-4 '>
        <h1 className='w-full text-xl md:text-3xl font-bold '><Link href= "/">Bloggster</Link></h1>
        <ul className='hidden md:flex'>
          <li className='p-4'><Link href='/'>Home</Link></li>
          <li className='p-4'><Link href='/blogs' >Blogs</Link></li>
          <li className='p-4'><Link href='/login' >Login</Link></li>
          <li className='p-4'><Link href='/signup' >Signup</Link></li>
          <li className='p-4'><Link href='/about' >About</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'text-white bg-purple-400 fixed left-0 top-0 w-[60%] h-full border-r border-r-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-white m-4'>Bloggster</h1>
          
            <li className='p-4 border-b border-white '><Link href='/'>Home</Link></li>
            <li className='p-4 border-b border-white'><Link href='/blogs' >Blogs</Link></li>
            <li className='p-4 border-b border-white'><Link href='/login' >Login</Link></li>
            <li className='p-4 border-b border-white'><Link href='/signup' >Signup</Link></li>
            <li className='p-4'><Link href='/about' >About</Link></li>
        </ul>
      </div>
    );
}

export default Header