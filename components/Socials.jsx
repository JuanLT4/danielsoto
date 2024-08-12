import React from 'react'
import Link from "next/link";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa";

const socials = [
    {icon: <FaYoutube />, path: ''},
    {icon: <FaTwitter />, path: ''},
    {icon: <FaFacebook />, path: ''},
    {icon: <FaInstagram />, path: ''},

]


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Socials