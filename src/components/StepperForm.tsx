import * as React from 'react';
import BasicInfo from './BasicInfo';
import { Button } from '@mui/material';
import ExperienceInfo from './ExperienceInfo';
import ProjectsInfo from './ProjectsInfo';
import { useDispatch } from 'react-redux';
import { setBasicInfo } from '../features/basicInfo/basicInfoSlice';
import { setExperienceInfo } from '../features/experienceInfo/experienceInfoSlice';

export default function StepperForm() {
    const [step, setStep] = React.useState(1)
    const stepRef = React.useRef<{[key:number]:React.RefObject<any>}>({})
    const dispatch=useDispatch()

    const getRef =(key:number)=>{
        if(!stepRef.current[key]){
            stepRef.current[key]=React.createRef()
        }
        return stepRef.current[key]
    }

    const handleNextStep=()=>{
        const currentRef = stepRef.current[step]
        if(currentRef?.current){
            const data = currentRef.current.getData()
            if(step===1){
                dispatch(setBasicInfo(data))
            }
            if(step===2){
                dispatch(setExperienceInfo(data))
            }
            console.log(`Step ${step} data:`, data);
        }
        setStep((prev) => prev + 1);
    }

    const handlePrevStep=()=>{
        if(step>0){
            setStep(step-1)
        }
    }

    const renderBody = () => {
        switch (step) {
            case 1:
                return <BasicInfo ref={getRef(1)}/>;
            case 2:
                return <ExperienceInfo ref={getRef(2)}/>;
            case 3:
                return <ProjectsInfo ref={getRef(3)}/>;
            default:
                return <div>Step {step}</div>;
        }
    };


    return (
        <div className='container mx-auto py-8'>
            {renderBody()}
            <Button onClick={handlePrevStep}>Previous</Button>
            <Button onClick={handleNextStep}>Next</Button>
        </div>
    );
}
