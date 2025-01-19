import { Button, TextField } from '@mui/material'
import React, { useImperativeHandle, useState } from 'react'
import { ExperienceFormType } from '../types/types'

const ExperienceInfo = React.forwardRef(({ }, ref) => {
    const [experience, setExperience] = useState<ExperienceFormType[]>([{
        company_name: '',
        job_role: '',
        start_date: '',
        end_date: '',
        job_summary: '',
    }])

    const addExperience = () => {
        setExperience([...experience, {
            company_name: '',
            job_role: '',
            start_date: '',
            end_date: '',
            job_summary: '',
        }])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const updatedExperience = [...experience];
        updatedExperience[index][name as keyof ExperienceFormType] = value;
        setExperience(updatedExperience)
    }

    const handleDelete = (index: number) => {
        if (experience?.length > 1)
            setExperience(experience?.filter((_, indx) => indx !== index))
    }

    useImperativeHandle(ref, () => ({
        getData: () => experience
    }))
    return (
        <>
            <h6 className="font-normal text-center text-4xl pb-4">Experince Info</h6>
            <form>
                <ul className='list-disc'>
                    {experience?.map((item, index) => (
                        <li key={index} className='flex flex-col gap-4 items-center w-full mb-6'>
                            <TextField
                                required
                                id={`outlined-${item.company_name}`}
                                label='Enter Your Company Name'
                                name='company_name'
                                type='text'
                                onChange={(e) => handleChange(e, index)}
                                defaultValue=""
                                className='w-full'
                            />
                            <TextField
                                required
                                id={`outlined-${item.job_role}`}
                                label='Enter Job'
                                name='job_role'
                                type='text'
                                onChange={(e) => handleChange(e, index)}
                                defaultValue=""
                                className='w-full'
                            />
                            <TextField
                                required
                                id={`outlined-${item.start_date}`}
                                label='Start Date'
                                name='start_date'
                                type='text'
                                onChange={(e) => handleChange(e, index)}
                                defaultValue=""
                                className='w-full'
                            />
                            <TextField
                                required
                                id={`outlined-${item.end_date}`}
                                label='End Date'
                                name='end_date'
                                type='text'
                                onChange={(e) => handleChange(e, index)}
                                defaultValue=""
                                className='w-full'
                            />
                            <TextField
                                required
                                id={`outlined-${item.job_summary}`}
                                label='Job Summary'
                                name='job_summary'
                                type='textarea'
                                multiline
                                rows={5}
                                onChange={(e) => handleChange(e, index)}
                                defaultValue=""
                                className='w-full'
                            />
                            <Button
                                onClick={() => handleDelete(index)}
                                className='!bg-red-600 !text-white !uppercase'>
                                Delete
                            </Button>
                        </li>
                    ))}
                </ul>
            </form>
            <Button onClick={addExperience}>Add Experience</Button>
        </>
    )
})

export default ExperienceInfo