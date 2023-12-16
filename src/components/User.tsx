import avatar from '../images/avatar.jpg';

type Props = {
    photo: string | null,
    name: string | null,
    position: string | null,
    email: string | null,
    phone: string | null
}

export const User = ({ photo, name, position, email, phone }: Props) => {
    return (
        <div className='p-5 bg-white flex flex-col rounded-xl'>
            <img src={photo ? photo : avatar} alt="avatar" className='w-[70px] h-[70px] rounded-full bg-gray-100 m-auto' />
            <p className='mt-5 truncate'>{name}</p>
            <p className='mt-5 truncate'>{position}</p>
            <div data-title={email}>
                <p
                    className='mt-5 truncate '>{email}
                </p>
            </div>
            <p className='mt-5 truncate'>{phone}</p>
        </div>
    )
}