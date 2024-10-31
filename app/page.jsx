import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24"> 
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Développeur Web</span>
            <h1 className="h1 mb-6">Hello, je suis<br /> <span className="text-accent">Nicolas Gurak</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras a feugiat urna, sit amet congue velit. Nam hendrerit, risus id auctor laoreet, arcu ante tincidunt dolor, 
            vitae lobortis nisl ipsum eu velit. Aenean tincidunt vehicula venenatis. ulla, aliquet vel varius nec, condimentum vel lacus.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline" size="lg" className="uppercase flex items-center gap-2"
              >
                <span>Télécharger mon CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home