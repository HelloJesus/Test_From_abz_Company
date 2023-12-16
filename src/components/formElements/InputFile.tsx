type Props = {
    error: { photo: string }
    handlerChangeFile: (e: any) => void
    fileName: string
}

export const InputFile = ({ error, handlerChangeFile, fileName }: Props) => {
    return (
        <div className={`file-upload mb-12.5 ${error?.photo ? 'error' : ''}`}>
            <label>
                <input type="file" name="file" onChange={handlerChangeFile} />
                <span>Upload</span>
            </label>
            <input type="text" id="filename" className="filename" placeholder={fileName} disabled></input>
        </div>
    )
}