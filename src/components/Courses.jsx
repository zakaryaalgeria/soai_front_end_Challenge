import React from 'react'
import {CourseCard} from './CourseCard'
export const Courses = () => {
  return (
    <div id='courses' className='py-10 relative' data-aos="fade-right" >
        <h1 className='text-3xl font-bold py-6 dark:text-white text-black text-center'>Popular courses</h1>
        <div className='container flex flex-wrap gap-8 justify-center'>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
    </div>
  )
}
