import { useState } from 'react';
import { Button } from './Button';
import axios from 'axios';
import { InputRadioPost } from './formElements/InputRadioPost';
import { InputFile } from './formElements/InputFile';

type Props = {
    token: string
}

export const Form = ({ token }: Props) => {
    const [fileName, setFileName] = useState('Upload your photo')
    const [file, setFile] = useState('Upload your photo')
    const [post, setPost] = useState('1')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState<any>({})

    const handlerChangeFile = (e: any) => {
        setFileName(e.currentTarget.value)
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        let errors = {}

        if (name === '') {
            errors = { ...errors, name: 'name is empty' }
        }
        if (email === '') {
            errors = { ...errors, email: 'email is empty' }
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors = { ...errors, email: 'Invalid email address' }
        }
        if (phone === '') {
            errors = { ...errors, phone: 'phone is empty' }
        }
        if (file === 'Upload your photo') {
            errors = { ...errors, photo: 'photo is empty' }
        }
        if (typeof (errors) === 'object' && Object.keys(errors).length !== 0) {
            setError(errors)
            return
        }

        let formData = new FormData()

        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('position_id', post)
        formData.append('photo', file)

        axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, formData, {
            headers: {
                'Token': token,
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            window.location.reload() // reset page
        }).catch(function (error) {
            if (error.response) {
                setError(error.response.data.fails)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('Error', error.message)
            }
        });
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col max-w-[380px] m-auto pb-4'>
            <div className='mb-12.5'>
            {error?.name ? <p className='text-start text-error'>{error.name}</p> : ''}
                <input type="text" className={`py-[14px] px-4 text-gray-300 w-full rounded outline-none
                 ${error?.name ? 'border-2 border-error' : 'border border-black-100'}`} placeholder='Your name' name='name'
                    onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className='mb-12.5'>
            <input type="email" className={`py-[14px] px-4 text-gray-300 w-full rounded outline-none
                 ${error?.email ? 'border-2 border-error' : 'border border-black-100'}`} placeholder='Email' name='email'
                onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
            <div className='w-full mb-[25px]'>
                {error?.phone ? <p className='text-start text-error'>{error.phone}</p> : ''}
                <input type="phone" className={`py-[14px] px-4 text-gray-300 w-full rounded outline-none
                 ${error?.phone ? 'border-2 border-error' : 'border border-black-100'}`} placeholder='Phone' name='phone'
                    onChange={(e) => setPhone(e.target.value)} value={phone} />
                <p className='text-xs text-gray-300 text-start ms-4' >+38 (XXX) XXX - XX - XX</p>
            </div>
            <InputRadioPost setPost={setPost} post={post}/>
            <InputFile error={error} handlerChangeFile={handlerChangeFile} fileName={fileName}/>
            <div className='m-auto'>
                <Button 
                type={`${name === '' || email === '' || phone === '' || file === 'Upload your photo' ? '' : 'yellow' }`} 
                text='Sign Up ' 
                />
            </div>
        </form>
    )
}