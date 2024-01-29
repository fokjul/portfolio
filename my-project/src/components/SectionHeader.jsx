import { styles } from "../styles";

const SectionHeader = ({header, content, visuals}) => {
  return (
    <div className={`${styles.sectionHeading} `}>
        <h2 className={`${styles.heading_XL} font-bold ${visuals}`}>
        {header}
        </h2>
        <p className={`${styles.paragraph_S} max-w-[760px] ${visuals}`}>
        {content}
        </p>
    </div>
  )
}

export default SectionHeader