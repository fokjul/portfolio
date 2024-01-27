import { servicesCopy } from "../constants";
import { styles, layout } from "../styles";

const Services = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`flex-col ${layout.boxWidth} items-center gap-[48px]`}>
        <div className={`${styles.sectionHeading}`}>
          <h2 className={`${styles.heading_XL} font-bold text-center`}>
            {servicesCopy.header}
          </h2>
          <p className={`${styles.paragraph_S} max-w-[760px] text-center`}>
            {servicesCopy.content}
          </p>
        </div>
        <div className="flex flex-1 flex-wrap sm:justify-evenly justify-center w-full gap-9">
          {servicesCopy.items.map((service, index) =>(
            <div key={service.id} className={`flex flex-col items-start gap-4 md:${index !== servicesCopy.items.length - 1 ? "pr-8" : "pr-0"} xs:pr-0`}>
              <img src={service.icon} className="max-h-[54px]"/>
              <h4 className={`${styles.heading_M} font-bold text-start`}>{service.title}</h4>
              <p className={`${styles.paragraph_XS} max-w-[242px]`}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Services