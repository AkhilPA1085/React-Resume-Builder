import { Button, TextField } from '@mui/material'
import React, { useImperativeHandle, useState } from 'react'
import { ProjectsFormType } from '../types/types'

const ProjectsInfo = React.forwardRef(({ }, ref) => {
    const [projects, setProjects] = useState<ProjectsFormType[]>([{
        name: '',
        live_url: '',
        git_url: '',
        details: '',
    }])

    const addProject = () => {
        setProjects([...projects, {
            name: '',
            live_url: '',
            git_url: '',
            details: '',
        }])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const updatedProjects = [...projects];
        updatedProjects[index][name as keyof ProjectsFormType] = value;
        setProjects(updatedProjects)
    }

    const handleDelete = (index: number) => {
        if (projects?.length > 1)
            setProjects(projects?.filter((_, indx) => indx !== index))
    }

    useImperativeHandle(ref, () => ({
        getData: () => projects
    }))
    return (
        <>
            <h6 className="font-normal text-center text-4xl pb-4">Projects Info</h6>
            <form>
                <ul className='list-disc'>
                    {projects?.map((item, index) => (
                        <li key={index} className='flex flex-col gap-4 items-center w-full mb-6'>
                            <TextField
                                required
                                id={`outlined-${item.name}`}
                                label='Enter Your Project Name'
                                name='name'
                                type='text'
                                onChange={(e) => handleChange(e, index)}
                                defaultValue=""
                                className='w-full'
                            />
                            <TextField
                                required
                                id={`outlined-${item.live_url}`}
                                label='Enter Project Live URL'
                                name='live_url'
                                type='text'
                                onChange={(e) => handleChange(e, index)}
                                defaultValue=""
                                className='w-full'
                            />
                            <TextField
                                required
                                id={`outlined-${item.git_url}`}
                                label='Enter Git URL'
                                name='git_url'
                                type='text'
                                onChange={(e) => handleChange(e, index)}
                                defaultValue=""
                                className='w-full'
                            />
                            <TextField
                                required
                                id={`outlined-${item.details}`}
                                label='End Description'
                                name='details'
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
            <Button onClick={addProject}>Add Project</Button>
        </>
    )
})

export default ProjectsInfo