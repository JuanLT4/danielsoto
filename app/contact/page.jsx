"use client";

import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"; 

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+57) 321 754 9043"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contact@danielsoto.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Calle 50 #37-10"
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
    className="py-6"
  >
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-[30px] '>
        <div className='xl:w-[54%] order-2 xl:order-none'>
          <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
            <h3 className='text-4xl text-accent'>Let's work together</h3>
            <p className='text-white/60'>
            Whether you're a coach, scout, or just want to connect, I'd love to hear from you! Feel free to reach out with any inquiries about my soccer journey, opportunities, or collaborations. I'll get back to you as soon as possible.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Input type="firstname" placeholder="Firstname"/>
              <Input type="lastname" placeholder="Lastname"/>
              <Input type="email" placeholder="Email address"/>
              <Input type="phone" placeholder="Phone number"/>
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select an option</SelectLabel>
                  <SelectItem value="est">Option 1</SelectItem>
                  <SelectItem value="cst">Option 1</SelectItem>
                  <SelectItem value="mst">Option 1</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea className="h-[200px]" placeholder="Type your message here."/>
            <Button size="md" className="max-w-40">Send message</Button>
          </form>
        </div>
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
            {info.map((item, index)=> {
              return (
                <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
  )
}

export default Contact