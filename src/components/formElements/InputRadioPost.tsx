type Props = {
    setPost: React.Dispatch<React.SetStateAction<string>>
    post: string
}

export const InputRadioPost = ({ setPost, post }: Props) => {
    return (
        <div className='text-start text-black-500 mb-[47px]' >
            <p className=' mb-[11px]'>Select your position</p>
            <div className='mb-[7px]'>
                <input onChange={(event: any) => setPost(event.target.value)} type="radio" id="Frontend" name="position" value="1" checked={post === '1'} />
                <label htmlFor="Frontend">Frontend developer</label>
            </div>
            <div className='mb-[7px]'>
                <input onChange={(event: any) => setPost(event.target.value)} type="radio" id="Backend" name="position" value="2" checked={post === '2'} />
                <label htmlFor="Backend">Backend developer</label>
            </div>
            <div className='mb-[7px]'>
                <input onChange={(event: any) => setPost(event.target.value)} type="radio" id="Designer" name="position" value="3" checked={post === '3'} />
                <label htmlFor="Designer">Designer</label>
            </div>
            <div className='mb-[7px]'>
                <input onChange={(event: any) => setPost(event.target.value)} type="radio" id="QA" name="position" value="4" checked={post === '4'} />
                <label htmlFor="QA">QA</label>
            </div>
        </div>
    )
}