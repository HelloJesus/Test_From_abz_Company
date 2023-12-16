import { HashLink } from 'react-router-hash-link';


type Props = {
    text: string
    link: string
}

export const LocalLink = ({ text, link }: Props) => {
    return (
        <HashLink to={link} className={`w-max text-center min-w-25 py-1 px-[18px] bg-primary hover:bg-primary-hover
        transition rounded-4xl`}  >
            {text}
        </HashLink>
    )
}