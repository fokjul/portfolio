import { styles } from "../styles";
import { portfolioCopy } from "../constants";
import { Button_Icon } from "./Buttons";

const Portfolio = () => {
  return (
    <section className="w-full py-[64px] bg-lightRed ">
      <div className={`relative ${styles.boxWidth}`}>
        <div className={`flex-col items-center gap-[48px]`}>
          <div className={`flex flex-col items-center ${styles.sectionHeading} pb-[42px]`}>
            <h4 className={`${styles.heading_XL} font-bold text-center`}>
              {portfolioCopy.header}
            </h4>
            <p className={`${styles.paragraph_S} max-w-[760px] text-center`}>
            {portfolioCopy.content}
            </p>
          </div>
        </div>
        <div className={`flex flex-1 absolute top-[100%] items-start`}>
          {portfolioCopy.items.map((project, index) =>(
            <div key={project.id} className="px-8">
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
      </div>
      
    </section>
  )
}

export default Portfolio