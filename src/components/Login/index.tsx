import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { InputText } from '../Input/index'
import { InitialModal } from './Initial'
import { FirstStepModal } from './Step 1'
import { SecondStepModal } from './Step 2'
import { ThirdStepModal } from './Step 3'
import {Tag} from '../Tag/index'
import styles from './login.module.scss'
import { ForthStepModal } from './Step 4'
import { ForthStepContent } from './Step 4/card'


export const Login = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [tags, setTags] = useState([])
    const [selected, setSelected] = useState([])

   
    const [data, setData] = useState([
        {
          "id": "616738be776114c382184c4b",
          "active": false,
          "name": "est"
        },
        {
          "id": "616738be1441f935b8d3574b",
          "active": false,
          "name": "do"
        },
        {
          "id": "616738bef76a7b4f6da2f1ae",
          "active": false,
          "name": "proident"
        },
        {
          "id": "616738be47133875078c86df",
          "active": false,
          "name": "aliquip"
        },
        {
          "id": "616738be913cee56fb67edb4",
          "active": false,
          "name": "eiusmod"
        },
        {
          "id": "616738be934cb9da1c08c0b1",
          "active": false,
          "name": "esse"
        },
        {
          "id": "616738be74cc7347f2957fa6",
          "active": false,
          "name": "duis"
        },
        {
          "id": "616738be9d2ddfd387311e76",
          "active": false,
          "name": "ad"
        },
        {
          "id": "616738becef4b8ec58aafebb",
          "active": false,
          "name": "elit"
        },
        {
          "id": "616738be648516a4abf18c20",
          "active": false,
          "name": "labore"
        },
        {
          "id": "616738be542ad6a512e61a38",
          "active": false,
          "name": "Lorem"
        },
        {
          "id": "616738be23cbb353b1a01330",
          "active": false,
          "name": "anim"
        },
        {
          "id": "616738bee4a3c40fa4cea4af",
          "active": false,
          "name": "non"
        },
        {
          "id": "616738be64996da70aa1dd90",
          "active": false,
          "name": "proident"
        },
        {
          "id": "616738bedc22e2e0071d6384",
          "active": false,
          "name": "aliquip"
        },
        {
          "id": "616738be1bbd8a4cd2f0eed1",
          "active": false,
          "name": "consequat"
        },
        {
          "id": "616738bed06b6d8da0b019d8",
          "active": false,
          "name": "non"
        },
        {
          "id": "616738be4ffcf5bf3b498e21",
          "active": false,
          "name": "velit"
        },
        {
          "id": "616738be99f1453600071cdb",
          "active": false,
          "name": "Lorem"
        }
      ])

    const handleSelectTag = (tagId: string) => {
        const tmpdata = [...data]
        const index = tmpdata.findIndex((item) => item.id === tagId)
       
        const tagAlreadySelected = selected.findIndex((item) => item.id === tmpdata[index].id)
        
       
        if(tagAlreadySelected !== -1){
            const data = [...selected]
            data.splice(tagAlreadySelected, 1)
            setSelected(data)
            return
        }
    
        setSelected([...selected, tmpdata[index]])
    }



    switch (currentStep) {
        case 0:
            return(
                <AnimatePresence>
                    <InitialModal buttonAction={() => setCurrentStep(self => self + 1)}/>
                </AnimatePresence>
            )
    
        case 1:
            return(
                <AnimatePresence>
                    <FirstStepModal buttonAction={() => setCurrentStep(self => self + 1)}>
                        <InputText placeholder="Email" type="text"/>
                        <InputText placeholder="Password" type="password"/>
                    </FirstStepModal>
                </AnimatePresence>
            )
        case 2:
            return(
                <AnimatePresence>
                    <SecondStepModal buttonAction={() => setCurrentStep(self => self + 1)}>
                        <div
                            style={{
                                display: 'flex',
                                gap: '2rem'
                            }}
                        >
                            <InputText placeholder="Name" type="text"/>
                            <InputText placeholder="age" type="text" style={{width: '7rem'}}/>
                        </div>
                        <InputText placeholder="Bio" type="text" style={{height: '10rem'}} textarea/>
                    </SecondStepModal>
                </AnimatePresence>
            )
            case 3:
                return(
                    <AnimatePresence>
                        <ThirdStepModal buttonAction={() => setCurrentStep(self => self + 1)}>
                            <div
                                className={styles.tagContainer}
                            >
                                {selected.map((tagData) => (
                                    <Tag active text={tagData.name} key={tagData.id} onClick={() => handleSelectTag(tagData.id)}/>
                                    ))}
                                {data.map((tagData) => {
                                    const tagAlreadySelected = selected.findIndex((item) => item.id === tagData.id)
                                    if(tagAlreadySelected !== -1){
                                        return
                                    }
                                    return (<Tag text={tagData.name} key={tagData.id} onClick={() => handleSelectTag(tagData.id)}/>)
                                })}
                            </div>
                        </ThirdStepModal>
                    </AnimatePresence>
                )
                case 4: 
                return(
                    <AnimatePresence>
                        <ForthStepModal buttonAction={() => setCurrentStep(0)}>
                          <ForthStepContent />
                        </ForthStepModal>
                    </AnimatePresence>
                )
    }
}

