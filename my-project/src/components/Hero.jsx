import { heroCopy } from "../constants"
import { Button_S } from "./Buttons"
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={` bg-lightRed w-full pt-[64px]`}>
      <div className={`${styles.boxWidth} gap-[48px]`}>
        <div className="flex flex-col gap-[48px] ">
          <div className="max-w-[457px] flex flex-col gap-4">
            <p className={`${styles.heading_M}`}>{heroCopy.subheader}</p>
            <h1 className={`${styles.heading_XXL} font-bold`}>
                {heroCopy.headerPart1}
                <br className="sm:block hidden"/>
                <span className="text-red">{heroCopy.name}</span>
                {heroCopy.headerPart2}
            </h1>
            
            <p>{heroCopy.content}</p>
          </div>
          <div className="flex xs:flex-row flex-col gap-6 mb-[60px]">
            <Button_S 
              label="Let's Talk"
              visuals="text-white bg-dimBlack w-[177px]"
            />
            <Button_S 
              label="Projects"
              visuals="text-dimBlack bg-white w-[177px]"
            />
          </div>
        </div>
        <div className="sm:block hidden">
        <img src={heroCopy.image} className="w-full object-contain"/>
        </div>
      </div>
      
      
    </section>
  )
}

export default Hero