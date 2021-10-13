import {AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import { InputText } from '../Input'
import {InitialModal} from './Initial'
import { ModalContainer } from './ModalComponent'

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
                    <ModalContainer 
                        title="Create Account" 
                        buttonText="Next" 
                        buttonAction={() => null}
                        description="First step you need 
                        to create an login "
                    >
                        <InputText placeholder="Email" type="text"/>
                    </ModalContainer>
                </AnimatePresence>
            )
        case 2:
            return(
                <AnimatePresence>
                    <h1>step 2</h1>
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