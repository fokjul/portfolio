import React from 'react'
import { layout, styles } from '../styles';
import { ellipse03, phone, email, location, instagram, dribble } from '../assets';
import { contactsCopy } from '../constants';
import { Button_S } from './Buttons';
import SectionHeader from './SectionHeader';

const Contacts = () => {
  return (
    <section className={`${layout.section} ${styles.bg_red} relative`}>
      <img src={ellipse03} className='absolute left-0'/>
      <div className={`grid sm:grid-cols-2 grid-cols-1 sm:gap-[60px] gap-[40px] justify-between max-w-[1200px] xl:mx-auto mx-[124px]`}>
        <div className='flex flex-col sm:justify-between gap-6'>
          <SectionHeader 
            header = {contactsCopy.header}
            content= { contactsCopy.content}
            visuals = "text-left"
          />
          <div className='flex flex-col gap-4'>
            {contactsCopy.contacts.map((contact, index) =>(
              <div key={contact.id} className='flex gap-4'>
                <img src={contact.icon} className='w-6 h-6'/>
                <p className={`${styles.paragraph_S}`}>{contact.type}</p>
              </div>
            ))}
          </div>
          <div className='flex gap-4'>
            {contactsCopy.socials.map((icon, index) => (
              <img src={icon} key={index}/>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4 max-w-[566px]'>
            <input type='text' className='h-[48px] pl-4' placeholder='First name'/>
            <input type='email' className='h-[48px] pl-4' placeholder='Email'/>
            <textarea type='textarea' className='h-[168px] pl-4 pt-4 align-text-top' placeholder='Your message'/>
            <Button_S 
              label = "Send Message"
              visuals={`text-white bg-dimBlack w-[233px] ${styles.paragraph_S}`}  
            />
        </div>
        
      </div>
    </section>
  )
}

export default Contacts