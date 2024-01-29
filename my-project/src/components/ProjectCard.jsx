import { Button_Icon } from "./Buttons";
import { styles } from "../styles";

const ProjectCard = ({image, title, description}) => {
  return (
    <div className={` max-w-[355px] bg-white `}>
        <img src={image} className="w-full h-[199px] mb-8"/>
        <div className="flex justify-between items-end">
            <div>
              <h4 className={`${styles.heading_M} font-bold mb-4`}>
                  {title}
              </h4>
              <p className={`${styles.paragraph_XS}`}>
                  {description}
              </p>
            </div>
            <Button_Icon />
        </div>
    </div>

  )
}

export default ProjectCard