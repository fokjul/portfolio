import { layout, styles } from "../styles";
import { portfolioCopy } from "../constants";
import { Button_Icon } from "./Buttons";

const Portfolio = () => {
  return (
    <>
    <section className={`${layout.section} pb-[128px] ${styles.bg_red}`}>
      <div className={`flex-col ${layout.boxWidth} items-center gap-[48px] `}>
          <div className={`${styles.sectionHeading} `}>
              <h2 className={`${styles.heading_XL} font-bold text-center`}>
                {portfolioCopy.header}
              </h2>
              <p className={`${styles.paragraph_S} max-w-[760px] text-center`}>
                {portfolioCopy.content}
              </p>
          </div>
      </div>
    </section>
    <section className={`w-full py-[64px] mt-[-128px]`}>
        <div className={`grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[48px] ${layout.boxWidth}`}>
            {portfolioCopy.items.map((project, index) =>(
              <div key={project.id} className={`sm:${ index !== portfolioCopy.items.length - 1 ? "pr-8" : "pr-0"} pr-0`}>
                <img src={project.image} className="w-[355px] h-[199px] mb-8"/>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className={`${styles.heading_M} font-bold mb-4`}>       {project.title}
                    </h4>
                    <p className={`${styles.paragraph_XS}`}>
                      {project.description}
                    </p>
                  </div>
                  <Button_Icon />
                </div>
              </div>
            ))}
        </div>
    </section>
    </>
  )
}
    
    

export default Portfolio