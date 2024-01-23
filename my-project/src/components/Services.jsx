import { servicesCopy } from "../constants";
import { styles } from "../styles";

const Services = () => {
  return (
    <section className="w-full py-[64px]">
      <div className={`flex-col ${styles.boxWidth} items-center gap-[48px]`}>
        <div className={`${styles.sectionHeading}`}>
          <h2 className={`${styles.heading_XL} font-bold text-center`}>
            {servicesCopy.header}
          </h2>
          <p className={`${styles.paragraph_S} max-w-[760px] text-center`}>
            {servicesCopy.content}
          </p>
        </div>
        <div className="flex flex-1 flex-wrap justify-evenly flex-row w-full">
          {servicesCopy.items.map((service, index) =>(
            <div key={service.id} className="flex flex-col items-start gap-6 p-4">
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