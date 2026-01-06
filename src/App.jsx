import styles from './App.module.css'
import { Hero } from './components/HERO/hero'
import { About } from './components/About/About'
import { Navbar } from './components/Navbar'
import { Experience } from './components/Experience/Experience'
import { Projects } from './Projects/Projects'
import { Contacts } from './components/Contacts/Contacts'
function App() {
return (
    <div className={styles.App}>
      <Navbar />
      <Hero></Hero>
      <About/>
      <Experience/>
      <Projects/>
      <Contacts/>
    </div>
  )
}
export default App
