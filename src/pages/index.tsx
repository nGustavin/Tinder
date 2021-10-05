import Head from 'next/head'
import { useState } from 'react'
import { NoContentModal } from '../components/LoginModal/NoContent/no-content'
import styles from './index.module.scss'

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)
  const [currentStep, setCurrentStep] = useState<number>(null)

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
          <NoContentModal 
            visible={isModalVisible} 
            buttonAction={
              () => {setIsModalVisible(!isModalVisible); setCurrentStep(1)}
            }/>
    </main>
    </div>
  )
}

export default Home
