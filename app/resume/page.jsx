"use client";

import React from "react";

import {
  // FaHtml5,
  // FaCss3,
  // FaJs,
  // FaReact,
  // FaFigma,
  // FaNodeJs,
  FaFutbol,
} from "react-icons/fa";

import { TbShirtSport } from "react-icons/tb";
import { GiBullseye, GiTeamUpgrade, GiSpeedometer, GiMorgueFeet } from "react-icons/gi";

const about = {
  title: "About Me",
  description:
    "I am Daniel Soto, a passionate soccer player from Colombia with a strong drive to succeed both on and off the field. With a background in competitive sports, I am eager to further develop my skills and gain new experiences through a college program in the United States.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Daniel Soto",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+57) 310 739 3864",
    },
    {
      fieldName: "Experience",
      fieldValue: "10+ Years",
    },
    {
      fieldName: "Position",
      fieldValue: "Left Winger / Midfielder",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Colombian",
    },
    {
      fieldName: "Email",
      fieldValue: "fernandosoto36@hotmail.es",
    },
    {
      fieldName: "Status",
      fieldValue: "Available for College Programs",
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/soccer-badge.svg",
  title: "My Experience",
  description:
    "Throughout my career, I've played in various competitive leagues, developing my skills as a team player and leader on the field. My experiences have prepared me to take on new challenges and excel in a university sports program.",
  items: [
    {
      club: "Campo Amor Team",
      position: "Left Winger / Attacking Midfielder",
      duration: "2022 - Present",
      description:
        "Refined my tactical understanding and positioning, playing a key role in offensive plays while also contributing defensively when needed. Developed leadership skills by coordinating plays with teammates.",
    },
    {
      club: "Student football League",
      position: "Left Winger",
      duration: "2018 - 2022",
      description:
        "Acquired foundational skills in youth leagues, focusing on ball control, teamwork, and effective communication on the field. Learned the importance of strategy and positioning in attacking roles.",
    },
    {
      club: "'Modo Fútbol'",
      position: "Left Winger",
      duration: "2015 - 2017",
      description:
        "Competed in national tournaments, contributing to the team's success with strategic playmaking and consistent performance.",
    },
    {
      club: "Aristogol Soccer Academy",
      position: "Left Winger",
      duration: "2012 - 2014",
      description:
        "Launched my football journey by developing fundamental skills such as dribbling, passing, and positioning. Gained a strong foundation in teamwork and discipline, which set the stage for my growth as a versatile player on the field.",
    },
    // Add more experiences as needed
  ],
};

const education = {
  icon: "/assets/resume/soccer-education.svg",
  title: "My Education",
  description:
    "In addition to my soccer training, I am committed to academic excellence, balancing both sports and studies to achieve a well-rounded education.",
  items: [
    {
      institution: "'Casa Colores' Garden",
      degree: "Elementary School",
      duration: "2012 - 2018",
      description:
        "Completed my elementary school education while actively participating in soccer programs, maintaining strong academic performance alongside my athletic commitments.",
    },
    {
      institution: "'San Jose de la Salle' High School",
      degree: "High School",
      duration: "2018 - 2024",
      description:
        "Completed my high school education while actively participating in soccer programs, maintaining strong academic performance alongside my athletic commitments.",
    },
    // Add more educational qualifications if necessary
  ],
};

const skills = {
  icon: "/assets/resume/soccer-skills.svg",
  title: "My Skills",
  description:
    "Over the years, I have developed a range of skills that contribute to my effectiveness as a soccer player, both individually and as part of a team.",
  skillList: [
    {
      icon: <TbShirtSport />,
      name: "Playmaking",
    },
    {
      icon: <FaFutbol />,
      name: "Ball Control",
    },
    {
      icon: <GiBullseye />,
      name: "Passing Accuracy",
    },
    {
      icon: <GiTeamUpgrade />,
      name: "Teamwork",
    },
    {
      icon: <GiSpeedometer />,
      name: "Speed and Agility",
    },
    {
      icon: <GiMorgueFeet />,
      name: "Left foot",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.club}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
