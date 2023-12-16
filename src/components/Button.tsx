
type Props = {
    text: string,
    type: string,
    func?: () => void
}

export const Button = ({ text, type, func }: Props) => {
    return (
        <button onClick={func ? () => func() : undefined} className={`w-max	min-w-25 py-1 px-[18px]
        ${type === 'yellow' ? 'bg-primary hover:bg-primary-hover' : 'bg-disabled text-white-500 cursor-default'} 
        transition rounded-4xl`}>
            {text}
        </button>
    )
}