"use client";
import React from 'react'
import {BsArrowDownRight} from 'react-icons/bs';
import Link from "next/link";

const milestones = [
  {
    num: '01',
    title: 'Top Scorer',
    description: 'Achieved top scorer status in the 2023 regional championship with 15 goals in the season.',
    href: ""
  },
  {
    num: '02',
    title: 'Youth League Championship',
    description: 'Led my team to victory in the 2022 Youth League Championship, playing a crucial role in the final match.',
    href: ""
  },
  {
    num: '03',
    title: 'International Tournament Experience',
    description: 'Represented my club in an international tournament in Brazil, gaining valuable experience against top teams.',
    href: ""
  },
  {
    num: '04',
    title: 'Player of the Year',
    description: 'Awarded "Player of the Year" in 2021 for outstanding performance and contribution to the team.',
    href: ""
  },
]


import { motion } from 'framer-motion';

const Milestones = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
      <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {milestones.map((milestone, index)=> {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{milestone.num}</div>
                  <Link href={milestone.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className='text-primary text-3xl'/> 
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500'>{milestone.title}</h2>
                <p className='text-white/60 '>{milestone.description}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  ) 
}

export default Milestones