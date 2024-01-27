import { styles } from "../styles";
import { Hero, About, Services, Portfolio, Skills, Testimonials, Contacts, Footer } from "../components";

const Home = () => {
  return (
    <section >
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Skills />
      <Contacts />
    </section>
  )
}

export default Home