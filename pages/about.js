import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          Hi, I'm Rama! I am a Senior Software Engineer at Wipro with a passion for developing web
          applications that make a positive impact on peoples lives.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          In addition to coding and learning new tech, I enjoy exploring the outdoors, traveling, and
          spending time with my family and friends. I also love to play video games, watch movies, and
          TV shows, Cricket, Tennis and listen to music. Some of my favorite hobbies include cooking,
          photography, hanging with my dog. 
        </div>
      </motion.div>
    </Layout>
  )
}
