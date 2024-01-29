import { layout, styles } from "../styles";
import { uxCopy, portfolioCopy } from "../constants";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <>
    <section className={`${layout.section} pb-[128px] ${styles.bg_red}`}>
      <div className={`flex-col ${layout.boxWidth} items-center gap-[48px] `}>
          <SectionHeader 
            header = {portfolioCopy.header}
            content= { portfolioCopy.content}
            visuals = "text-center"
          />
      </div>
    </section>
    <section className={`w-full py-[64px] mt-[-128px]`}>
        <div className={`grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[48px] ${layout.boxWidth}`}>
          < ProjectCard 
          image = {uxCopy.items[0].image}
          title = {uxCopy.items[0].title}
          description = {uxCopy.items[0].description}
          />
          < ProjectCard 
          image = {uxCopy.items[0].image}
          title = {uxCopy.items[0].title}
          description = {uxCopy.items[0].description}
          />
          < ProjectCard 
          image = {uxCopy.items[0].image}
          title = {uxCopy.items[0].title}
          description = {uxCopy.items[0].description}
          />
          
        </div>
    </section>
    </>
  )
}
    
    

export default Portfolio