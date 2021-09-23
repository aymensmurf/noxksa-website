import Dropzone from 'react-dropzone'
import Image from 'next/image'

const PictureDropZone = ({ picture, placeholder, handleDrop }) => {
    return (
        <>
            <Dropzone
                multiple={false}
                onDrop={files => handleDrop(files)}
                accept={['image/*']}
            >
                {({ getRootProps, getInputProps }) => (
                    <div className="dropzone" {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            !picture ?
                                <p>{placeholder || "Drag 'n' drop image here, or click to select one."}</p>
                                :
                                (typeof picture === 'object') ?
                                    <Image src={picture.preview} alt="picture" width="100%" height="100%" objectFit="contain" />
                                    :
                                    <Image src={``} alt="picture" width="100%" height="100%" objectFit="contain" />
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
                    height: 140px;
                    position: relative;
                    width: 100%;
                }

                p {
                    font-size: 13px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            `}</style>

        </>
    )
}

export default PictureDropZone
