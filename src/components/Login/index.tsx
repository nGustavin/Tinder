import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { InputText } from '../Input/index'
import { InitialModal } from './Initial'
import { FirstStepModal } from './Step 1'
import { SecondStepModal } from './Step 2'

export const Login = () => {
    const [currentStep, setCurrentStep] = useState(0)

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
                        <h1>step 3</h1>
                    </AnimatePresence>
                )
                case 4: 
                return(
                    <AnimatePresence>
                        <h1>step 4</h1>
                    </AnimatePresence>
                )
    }
}