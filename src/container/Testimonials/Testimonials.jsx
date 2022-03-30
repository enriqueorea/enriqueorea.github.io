import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonials.scss'
const Testimonials = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

  const handleClick = (index) => {
    setCurrent(index)
  }
  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';


    client.fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data);
      })

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })

  }, [])

  const test = testimonials[current]
  
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imgurl)} alt="testimonials" />
            <div className="app__testimonial-content">
              <p className="p-text">
                {test.feedback}
              </p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='bold-text'>{test.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(current === 0 ? testimonials.length -1 : current -1)}>
              <HiChevronLeft/>
            </div>
            <div className="app__flex" onClick={() => handleClick(current ===  testimonials.length -1 ? 0 : current + 1)}>
              <HiChevronRight/>
            </div>
          </div>
        </>
      )}

      <div className="app__testimonials-brands app__flex">
        {brands.map((brand)=>(
          <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration:0.5, type:'tween'}}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Testimonials, 'app__testimonials'), 'Testimonials', 'app__primarybg')