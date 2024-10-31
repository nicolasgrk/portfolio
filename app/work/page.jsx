"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects =[
  {
    num:'01',
    category:"RefonteCréation d'un site vitrine",
    title: "Hôtel La Licorne",
    description: "Le projet consiste à créer un site web complet pour l'Hôtel La Licorne, situé à Carnac. L'objectifs étant de faciliter la réservation d'hébergement pour les visiteurs intéressés par un séjour à Carnac, tout en présentant les caractéristiques uniques de l'hôtel",
    stack: [{name:"Wordpress"}, {name:"CSS 3"}, {name:"HTML 5"}, , {name:"PHP"}],
    image:'/assets/work/Licorne.png',
    live:"https://www.hotel-la-licorne.com/",
    github:"",
  },
  {
    num:'02',
    category:"Refonte d'un site e-commerce",
    title: "Carpeto",
    description: "Carpeto souhaitait effectuer une refonte de leurs boutiques en ligne. Le but derrière cette refonte était d'avoir un site internet qui colle à l'image de marque de l'entreprise et d'augmenter les ventes auprès des clients particuliers et de présenter cette dernière aux clients professionnels.",
    stack: [{name:"Wordpress"}, {name:"Woocommerce"}, {name:"CSS 3"}, {name:"HTML 5"}, , {name:"PHP"}],
    image:'/assets/work/Carpeto.png',
    live:"https://play-carpeto.fr/",
    github:"",
  },
  {
    num:'03',
    category:"Création d'un site vitrine avec système de rendez-vous",
    title: "Béatrice Olivo",
    description: "Béatrice Olivo, hypnothérapeute, souhaitait disposer d’un site moderne pour faciliter la prise de rendez-vous avec ses clients. Ce site est conçu pour offrir une présentation claire de ses services en hypnose tout en intégrant un système de gestion de rendez-vous flexible.",
    stack: [{name:"Wordpress"}, {name:"CSS 3"}, {name:"HTML 5"}, , {name:"PHP"}],
    image:'/assets/work/Beatrice.png',
    live:"https://hypnose-olivo.fr/",
    github:"",
  },
  {
    num:'04',
    category:"Création d'un site vitrine",
    title: "Petit Nuage",
    description: "Petit Nuage Equicoaching m'a contacté dans le but de créer le site internet de l'entreprise. Afin de démarrer son activité de la meilleure des manières, l'entreprise avait besoin d'avoir une présence en ligne. C'est dans ce but-là que j'ai créé le site internet, pour toucher de nouveaux clients et faire découvrir l'équicoaching au plus grand nombre.",
    stack: [{name:"Wordpress"}, {name:"CSS 3"}, {name:"HTML 5"}, , {name:"PHP"}],
    image:'/assets/work/PetitNuage.png',
    live:"",
    github:"",
  },
  {
    num:'04',
    category:"Application mobile",
    title: "Simeon",
    description: "Le but de l'application Simeon est de trouver des itinéraires les plus adaptés aux véhicules électriques (trottinette, vélo, voiture) afin de découvrir la Bretagne. Le plus de cette application est de pouvoir se restaurer ou se loger auprès de nos partenaires dans toute la Bretagne. Les établissements mettent à disposition tout le nécessaire pour recharger vos véhicules. Ceci est un projet personnel.",
    stack: [{name:"HTML 5"}, {name:"CSS 3"}, {name:"Svelte"}, {name:"PHP"}],
    image:'/assets/work/Simeon.png',
    live:"",
    github:"https://github.com/nicolasgrk/Simeon/tree/master",
  }
]
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.div
      initial={{
        opacity:0
      }} 
      animate={{
          opacity:1, 
          transition: {
          delay: 2, 
          duration: 0.4, 
          ease: 'easeIn'
          },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} projets
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border borer-white+20"></div>
                <div className="flex items-center gap-4">
                  <Link target="_blank" href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p> Voir en live </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link target="_blank" href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p> Répertoire Github </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                <SwiperSlide 
                  key={index}
                  className="w-full"
                >
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image  src={project.image} fill className="object-cover" alt="" />
                    </div>
                  </div>
                </SwiperSlide>)
              })}
              <WorkSliderBtns  
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work