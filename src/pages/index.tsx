import Head from 'next/head'
import { useState } from 'react'
import { Login } from '../components/Login'
import styles from './index.module.scss'

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)
  const [currentStep, setCurrentStep] = useState<number>(0)

  const DataSteps = [
    {
      title: "Create Account",
      desc: "First step you need to create and login"
    },
    {
      title: "Tell me a little about you",
      desc: ""
    },
    {
      title: "Now, pick some interests",
      desc: "First step you need to create and login"
    },
    {
      title: "Now, select a cool profile photo.",
      desc: "First step you need to create and login"
    }
  ]

  return (
    <div>
      <Head>
        <title>NextJS template</title>
      </Head>
        
    <main className={styles.backgroundDetail}>
     <Login />
    </main>
    </div>
  )
}

export default Home
