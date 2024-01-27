import { Link } from 'react-router-dom';
import { logo01, ellipse01, close, menu } from '../assets';
import { Button_S } from './Buttons';
import { layout, styles } from '../styles';
import { navLinks } from '../constants';
import { useState } from 'react';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav className={`${styles.bg_red} w-full`}>
        <div className={`flex justify-between items-center ${layout.boxWidth} my-8 relative z-[5]`} >
            <img src={logo01} className='h-[45px]'/>
            <div className='sm:flex gap-8 items-center hidden'>
              <div className='flex gap-8'>
                {navLinks.map((navLink, index) =>(
                <ul key={navLink.id}>
                    <Link to={navLink.src} className={`${styles.navLink}`}>
                      <li>{navLink.title}</li>
                    </Link>
                </ul>
                ))}
              </div>
              <Button_S 
                  label="Let's Talk"
                  visuals="text-white bg-dimBlack w-[127px]"
              />
            </div>
            <div className='sm:hidden flex relative'>
              <img 
                src={toggle ? close : menu}
                alt='menu'
                onClick={()=>setToggle((prev)=>!prev)}
                className='object-contain'
              />
              <div className={`${toggle ? 'flex' : 'hidden'}  gap-8 items-center flex-col bg-dimBlack p-4 absolute top-10 right-0 z-[10] drop-shadow`}>
                {navLinks.map((navLink, index) =>(
                  <ul key={navLink.id}>
                      <Link to={navLink.src} className={`${styles.navLink} text-white`}>
                        <li>{navLink.title}</li>
                      </Link>
                  </ul>
                ))}
                <Button_S 
                    label="Let's Talk"
                    visuals="text-dimBlack bg-white w-[127px]"
                />
            </div>
          </div>
        </div>
        <img src={ellipse01} className='absolute -top-3 left-[40%]'/>
      </nav>  
    </>
  )
}

export default Navbar