"use client";
import { RiSvelteFill, RiTailwindCssFill} from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import {
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPhp,
  FaCss3,
  FaWordpress
} from "react-icons/fa";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "À propos de moi",
  description: "Passionné par le développement web, j'accompagne les entreprises dans la création de solutions digitales performantes et sur mesure. Avec une expertise en conception de sites, applications web et maintenance, je m'engage à offrir des services de qualité pour aider mes clients à se démarquer en ligne",
  info:[
    {
      fieldName: "Nom",
      fialedValue: "Nicolas Gurak"
    },
    {
      fieldName: "Téléphone",
      fialedValue: "07 86 10 30 59"
    },
    {
      fieldName: "Expérience",
      fialedValue: "5 ans"
    },
    {
      fieldName: "Mail",
      fialedValue: "nicolasgurak@gmail.com"
    },
    {
      fieldName: "Langues",
      fialedValue: "Français, Anglais"
    }
  ]
}

const experience = {
  icon: 'assets/resume/badge.svg',
  title: 'Expérience pro',
  description: 'Avec plusieurs années d’expérience dans le développement web, j’ai eu l’opportunité de travailler sur divers projets, allant de la création de sites vitrines à des applications complexes, en passant par des ERP et CRM sur mesure.',
  items: [
    {
      company: "CGI",
      position: "Ingénieur informatique",
      duration: "2024- En cours"
    },
    {
      company: "Carpeto",
      position: "Alternance",
      duration: "2021-2023"
    },
    {
      company: "Image &",
      position: "Stage développement web",
      duration: "2020-2020"
    },
    {
      company: "Asterion VR",
      position: "Stage développement web",
      duration: "2019-2019"
    },

  ]
}

const education = {
  icon: 'assets/resume/cap.svg',
  title: 'Formations',
  description: 'Mon parcours académique, comprenant un MBA en développement full-stack et un Bachelor en numérique, m’a permis de maîtriser les principaux langages et outils du développement web, ainsi que les stratégies de gestion de projet. Ces formations m’ont fourni une base théorique et pratique pour aborder les défis de l’univers digital avec rigueur et créativité.',
  items: [
    {
      institution: "My Digital School",
      degree: "MBA DÉVELOPPEUR FULL-STACK",
      duration: "2021-2023"
    },
    {
      institution: "Esaip",
      degree: "Bachelor 3 numérique",
      duration: "2021-2023"
    },
    {
      institution: "Lycée De La Salle",
      degree: "BTS SIO",
      duration: "2021-2023"
    },
  ]
}

const skills = {
  title: "Compétences",
  description: "Polyvalent et passionné par les nouvelles technologies, je maîtrise plusieurs langages et frameworks de développement, ainsi que des outils de design pour offrir des solutions complètes et esthétiques. Grâce à cette polyvalence, je peux prendre en charge des projets variés, de la conception à la mise en ligne, en garantissant une qualité optimale.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },

    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },

    {
      icon: <RiSvelteFill />,
      name: "Svelte.js",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },    
  ]
}
const Resume = () => {
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
      className="min-h-[80vh] flex items-center justify-center py-22 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Expérience pro</TabsTrigger>
            <TabsTrigger value="education">Formations</TabsTrigger>
            <TabsTrigger value="skills">Compéténces</TabsTrigger>
            <TabsTrigger value="about">À propos de moi</TabsTrigger>
          </TabsList>

          <div className="min-h-[7vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key= {index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) =>{
                    return (
                      <li 
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fialedValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume