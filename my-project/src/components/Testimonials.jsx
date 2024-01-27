import { testimonialCopy } from '../constants';
import { arrowBack, arrowForward } from '../assets';
import { useState } from 'react';
import { Button_Arrow } from './Buttons';
import { styles, layout } from '../styles';

const Testimonials = () => {
  const [currTestim, setCurrTestim] = useState(1)

  return (
    <section className={`${layout.section} ${styles.bg_black} }`}>
        <h2 className={`${styles.heading_XL} font-bold text-center mb-[24px] text-white`}>
          {testimonialCopy.header}
        </h2>
        <div className={`flex justify-between items-start ${layout.boxWidth}`}>
          <Button_Arrow 
            event = {()=> currTestim > 1 && setCurrTestim(currTestim - 1)}
            icon = {arrowBack}
          />
          {testimonialCopy.item.filter(testimonial => testimonial.id == currTestim).map(filteredTest => (
            <div key={filteredTest.id}>
              <div className='max-w-[768px]'>
                <p className={`${styles.paragraph_S} text-center mb-8 text-white`}>
                  {filteredTest.content}
                </p>
                <div className='flex justify-center items-center gap-4'>
                  <img src={filteredTest.photo} className='w-[70px] h-[70px]'/>
                  <p className={`${styles.paragraph_S} font-bold text-white`}>{filteredTest.name}</p>
                  <p className={`${styles.paragraph_S} text-white`}>/</p>
                  <p className={`${styles.paragraph_S} text-white`}>{filteredTest.role}</p>
                </div>
              </div>
            </div>
          ))}
          <Button_Arrow 
            event = {()=> currTestim < testimonialCopy.item.length && setCurrTestim(currTestim + 1)}
            icon = {arrowForward}
          />

        </div>
    </section>
  )
}

export default Testimonials