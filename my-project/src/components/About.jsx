import { layout, styles } from "../styles";
import { aboutCopy } from "../constants";
import { ellipse02 } from "../assets";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section className={` ${layout.section} ${styles.bg_black} relative`}>
      <div className={`${layout.boxWidth} flex-col items-center gap-[48px]`}>
      <SectionHeader 
            header = { aboutCopy.header }
            content= { aboutCopy.content}
            visuals = "text-center text-white"
          />
        <div className="flex ss:flex-row flex-col w-full justify-between max-w-[896px]">
          {aboutCopy.stat.map((item, index) =>(
            <div key={item.id} className="flex flex-col">
                <h3 className={`${styles.heading_XXXL} text-lightRed font-bold text-center`}>{item.number}</h3>
                <h4 className={`${styles.heading_M} text-white font-bold text-center mb-8`}>{item.label}</h4>
            </div>
          ))}
        </div>
        <img src={ellipse02} className="absolute bottom-0"/>
      </div> 
    </section>
  )
}

export default About