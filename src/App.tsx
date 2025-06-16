import { AnimatePresence, motion } from 'framer-motion'
import { Suspense, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import LoadingSpinner from './components/ui/LoadingSpinner'
import SEO from './components/ui/SEO'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <SEO />
          <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  role="region"
                  aria-label={`${currentSection} section`}
                >
                  {currentSection === 'home' && <Hero setCurrentSection={setCurrentSection} />}
                  {currentSection === 'about' && <About setCurrentSection={setCurrentSection} />}
                  {currentSection === 'projects' && <Projects />}
                  {currentSection === 'skills' && <Skills />}
                  {currentSection === 'contact' && <Contact />}
                </motion.div>
              </AnimatePresence>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
