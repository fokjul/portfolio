import { styles, layout } from "../styles";
import { skillsCopy } from "../constants";

const Skills = () => {

  return (
    <section className={`${layout.section}`}>
        <div className={`flex-col ${layout.boxWidth} items-center gap-[48px]`}>
            <div className={`${styles.sectionHeading}`}>
                <h2 className={`${styles.heading_XL} font-bold text-center`}>
                    {skillsCopy.header}
                </h2>
                <p className={`${styles.paragraph_S} max-w-[760px] text-center`}>
                    {skillsCopy.content}
                </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-3 w-full justify-items-center gap-2">
                {skillsCopy.skills.map((skill, index) => (
                    <div key={skill.id} className="px-8">
                        <p className={`${styles.paragraph_S} font-bold`}>   {skill.name}
                        </p> 
                        <div className="flex gap-2 items-center">
                            <div className="flex w-[350px]">
                                <div className="h-[5px] bg-red" style={{ width: `${skill.scale * Math.round(skillsCopy.barchartWidth / 10)}px` }} />
                                <div className="h-[5px] bg-grey" style={{ width: `${skillsCopy.barchartWidth - (skill.scale * Math.round(skillsCopy.barchartWidth / 10))}px` }}/>
                            </div>
                            <p className={`${styles.paragraph_S} font-bold`}>   {skill.scale}
                            </p>
                        </div>       
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills