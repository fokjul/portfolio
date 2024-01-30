import { Link } from 'react-router-dom';
import { SectionHeader, ProjectCard} from '../components';
import { uxCopy, uiCopy, devCopy, portfolioCopy } from '../constants';
import { layout, styles } from '../styles';

const Projects = () => {
  return (
    <section className={`${layout.section} flex flex-col gap-[124px] my-[64px]`}>
      <div className={`${layout.boxWidth} flex-col items-center gap-[48px]`}>
        <SectionHeader 
          header = {uxCopy.header}
          content= {uxCopy.description}
          visuals= "text-center"
        />
        <div className={`grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[48px] w-full`}>
              {uxCopy.items.map((project, index) =>(
                <ProjectCard 
                  key = {project.id}
                  image = {project.image}
                  title = {project.title}
                  description = {project.description}
                  link = { project.link}
                />
              ))}
          </div>
      </div>
      <div className={`${layout.section} items-center flex flex-col pb-[128px]`}>
        <SectionHeader 
          header = {uiCopy.header}
          content= {uiCopy.description}
          visuals= "text-center"
        />
      </div>
      <div className={`${layout.boxWidth} flex-col items-center gap-[48px] mt-[-192px]`}>
        <div className={`grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[48px] w-full`}>
              {uiCopy.items.map((project, index) =>(
                <ProjectCard 
                  key = {project.id}
                  image = {project.image}
                  title = {project.title}
                  description = {project.description}
                />
              ))}
        </div>
      </div>
      <div className={`${layout.section} items-center flex flex-col pb-[128px]`}>
        <SectionHeader 
          header = {devCopy.header}
          content= {devCopy.description}
          visuals= "text-center"
        />
        </div>
        <div className={`${layout.boxWidth} flex-col items-center gap-[48px] mt-[-192px]`}>
            <div className={`grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[48px] w-full`}>
                {devCopy.items.map((project, index) =>(
                  <ProjectCard 
                    key = {project.id}
                    image = {project.image}
                    title = {project.title}
                    description = {project.description}
                  />
                ))}
            </div>
          </div>
    </section>
    
  )
}

export default Projects