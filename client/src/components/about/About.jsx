import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/Founder.jpeg"
import { useSelector } from 'react-redux'
import { selectLoggedInuser } from '../auth/authSlice'
import { selectAllCourse } from '../courses/courseSlice'
const About = () => {

  const user = useSelector(selectLoggedInuser)
  const course = useSelector(selectAllCourse)
  console.log("hellllllo darling ", course)
    const options= {
        initial:{x:"-100%" , 
        opacity:0},
        whileInView:{x:"0" , 
        opacity:1}
      }

  return (
    <section className='About'>
        <motion.div {...options}>
            <img src={me} alt="About"  width={200} height={200}/>
             <h3>Sunil Kumar Dondey</h3>
             <p>Hey, I am Sunil Kumar Dondey, thefounder of Open Source.<br/>
             Our aim is to make most tasty Courses on planet.
             </p>

        </motion.div>
    </section>
  )
}

export default About