"use client";

import { BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { motion} from "framer-motion";
const services = [
  {
    num:'01',
    title: 'Développement web',
    description: 'Je propose un service de développement web sur mesure pour répondre aux besoins spécifiques de votre entreprise. Création de sites vitrines, e-commerce ou plateformes complexes, je vous accompagne de la conception à la mise en ligne pour garantir un site optimisé, rapide et sécurisé.',
    href:"/services"
  },
  {
    num:'02',
    title: 'Développement d\'applications web',
    description: 'Mon expertise en développement d\'applications web permet de créer des solutions parfaitement adaptées à vos processus métier. Que ce soit pour gérer des données, automatiser des tâches ou améliorer l\'expérience de vos utilisateurs, je développe des applications puissantes, scalables et sécurisées.',
    href:"/services"  
  },
  {
    num:'03',
    title: 'Refonte de site web',
    description: 'Offrez à votre site une seconde jeunesse avec une refonte complète et moderne. Amélioration de l\'expérience utilisateur, optimisation pour le référencement, adaptation aux standards actuels : une refonte web permet de capter de nouveaux clients et de fidéliser ceux qui vous suivent déjà.',
    href:"/services"
  },
  {
    num:'04',
    title: 'Maintenance et support',
    description: 'La maintenance et le support sont essentiels pour garantir la sécurité et la performance de votre site. Mises à jour régulières, corrections de bugs, sauvegardes et surveillance de sécurité : je veille sur votre site pour qu\'il reste opérationnel et protégé.',
    href:"/services"
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
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
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link 
                    href={service.href} 
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services