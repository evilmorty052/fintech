import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Chatra from '@chatra/chatra'
import Section from "./components/Section";
const App = () => {
  let config = {
    ID: 'YDBmqoDdg8pfH4ZJz'
}

Chatra('init', config)
  return(
<div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        <Billing />
        <CardDeal />
        <Section text1={'Step into'} text2={'the Future Today'}/>
        <Section text1={'Level Up Quick'} text2={'With Recipes'}/>
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  )
  
  };

export default App;
