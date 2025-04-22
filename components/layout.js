import { AnimatePresence, motion } from 'framer-motion'
import { faDev, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const DarkModeToggle = dynamic(() => import('dark-mode-toggle-animation'), { ssr: false })

export default function Layout({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (theme == 'dark') {
      document.getElementsByTagName('html')[0].classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [theme])

  const toggleDarkMode = () => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 transition duration-1000 ease-in-out dark:text-white dark:bg-blueGray-700">
      <Head>
        <title>Rama Subba Reddy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         {/* Open Graph Meta Tags */}
         <meta property="og:title" content="Rama Subba Reddy - Senior Software Engineer" />
        <meta property="og:description" content="Hi, I'm Rama! I am a Senior Software Engineer with a passion for developing impactful web applications." />
        <meta property="og:image" content="https://therama.dev/therama-dev-mobile.png" />
        <meta property="og:url" content="https://therama.dev" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rama Subba Reddy - Senior Software Engineer" />
        <meta name="twitter:description" content="Hi, I'm Rama! I am a Senior Software Engineer with a passion for developing impactful web applications." />
        <meta name="twitter:image" content="https://therama.dev/therama-dev-large.png" />

        {/* Google Analytics */}

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XJRSB73WJX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XJRSB73WJX');
          `}
        </script>
      </Head>
      <div
        style={{ minWidth: '24rem', maxWidth: '37rem' }}
        className="flex flex-col items-center justify-center w-2/3"
      >
        <div className="fixed cursor-pointer top-3 right-3">
          <DarkModeToggle
            mode={theme == 'dark' ? 'sun' : 'moon'}
            onClick={toggleDarkMode}
            width="3rem"
            moonColor="#334155"
            sunColor="white"
            animationDuration={1}
          />
        </div>
        <motion.div layoutId="nav" className="flex justify-center gap-2 w-full max-w-md px-2">
          <Link href="/">
            <button className="w-20 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              HOME
            </button>
          </Link>
          <Link href="/about">
            <button className="w-20 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              ABOUT
            </button>
          </Link>
          <button
            className="w-20 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500"
            onClick={() => window.open('https://portfolio.therama.dev', '_blank')}
          >
            PROFILE
          </button>
          <button
            className="w-20 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500"
            onClick={() => window.open('https://apps.therama.dev', '_blank')}
          >
            APPS
          </button>
        </motion.div>
        <motion.div
          layoutId="border-div"
          className="flex flex-col items-center justify-center w-full py-8 my-6 border-t border-b border-gray-300 dark:border-white"
        >
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </motion.div>
        <motion.div layoutId="social-icons" className="flex items-center justify-center">
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://github.com/ramaeon"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl " icon={faGithub} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://twitter.com/ramaeon"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faTwitter} />
          </a>
          <a
            className="text-gray-400 dark:text-white hover:text-lightBlue-600 dark:hover:text-pink-500"
            href="https://www.linkedin.com/in/ramaeon/"
            target="_blank"
          >
            <FontAwesomeIcon className="mr-6 text-2xl" icon={faLinkedinIn} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
