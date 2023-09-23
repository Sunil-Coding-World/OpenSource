import React from 'react'
import {motion} from "framer-motion"

 const options= {
    initial:{x:"-100%" , 
    opacity:0},
    whileInView:{x:"0" , 
    opacity:1}
  }
  
const Home = () => {
 
  return (
    <>
  <section className='home'>
    <div>
    <motion.h1 {...options}>Open Source</motion.h1>
    <motion.p {...options}  transition={{delay:0.2}}>Free Study Material Every Day</motion.p>
    </div>  
    <motion.a href="/courses"
    {...options}  transition={{delay:0.3}}
    >Explore Courses</motion.a>  
    
  </section>
   
   </>
    )
}

export default Home