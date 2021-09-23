import Dropzone from 'react-dropzone'

const FileDropZone = ({ file, handleDrop }) => {
    return (
        <>
            <Dropzone
                multiple={false}
                onDrop={files => handleDrop(files)}
                accept={['application/pdf']}
            >
                {({ getRootProps, getInputProps }) => (
                    <div className="dropzone" {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            !file ?
                                <p>Drag 'n' drop file here, or click to select one.</p>
                                :
                                (typeof file === 'object') ?
                                    <p>{file.name}</p>
                                    :
                                    <p>{file.split('/')[3].substr(14, file.length)}</p>
                        }

                    </div>
                )}
            </Dropzone>

            <style jsx>{`
                .dropzone {
                    padding: 15px;
                    border: 1px dashed #b2b2b2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    cursor: pointer;
                    width: 100%;
                    height: 140px;
                }

                p {
                    font-size: 13px;
                }
            `}</style>

        </>
    )
}

export default FileDropZone
