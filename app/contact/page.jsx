"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "07 86 10 30 59",
  },
  {
    icon: <FaEnvelope />,
    title: "Mail",
    description: "nicolasgurak@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Ville",
    description: "Rennes",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeIn"
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              {/* Champ caché pour identifier le formulaire pour Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              <h3 className="text-4xl text-accent">Transformons Vos Idées en Réalité !</h3>
              <p className="text-white/60">Votre projet mérite une attention sur-mesure. Contactez-moi dès maintenant pour le concrétiser ensemble !</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="hidden" name="form-name" value="contact" />


                <Input
                  name="firstname"
                  type="text"
                  placeholder="Prénom"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Nom"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choisissez un service</SelectLabel>
                    <SelectItem value="Développement web">Développement web</SelectItem>
                    <SelectItem value="Développement d'application web">Développement d'application web</SelectItem>
                    <SelectItem value="Site Vitrine">Site Vitrine</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Décrivez moi votre projet."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button size="md" type="submit">
                Envoyer le message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
