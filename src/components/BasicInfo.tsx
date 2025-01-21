import { TextField } from '@mui/material'
import React, { useImperativeHandle, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const fields = [
    {
        name: 'name',
        label: 'Enter Your Full Name',
        type: 'text'
    },
    {
        name: 'job',
        label: 'Enter Your Job Position',
        type: 'text'
    },
    {
        name: 'phone',
        label: 'Enter Your Phone Number',
        type: 'number'
    },
    {
        name: 'email',
        label: 'Enter Your Email',
        type: 'email'
    },
    {
        name: 'summary',
        label: 'Enter Your Summary',
        type: 'textarea'
    }
]


const BasicInfo = React.forwardRef(({},ref) => {
    const[basicInfo,setBasicInfo]=useState({})
    const basicInfoData = useSelector((state:RootState)=>state)
    console.log('basicInfoData',basicInfoData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBasicInfo((prev)=>({...prev,[name]:value}))
    }
    
    useImperativeHandle(ref,()=>({
        getData:()=>basicInfo
    }))
    return (
        <>
            <h6 className="font-normal text-center text-4xl pb-4">Basic Info</h6>
            <form className="flex flex-col gap-4 items-center w-full">
                {fields?.map((field, index) => (
                    <TextField
                        key={index}
                        required
                        id={`outlined-${field.name}`}
                        label={field.label}
                        name={field.name}
                        type={field.type === 'textarea' ? undefined : field.type}
                        multiline={field.type === 'textarea'}
                        rows={field.type === 'textarea' ? 5 : undefined}
                        onChange={handleChange}
                        defaultValue=""
                        className='w-full'
                    />
                ))}
            </form>
        </>
    )
})

export default BasicInfo