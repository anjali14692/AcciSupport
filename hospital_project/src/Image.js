import React, { useRef } from 'react';
import Webcam from 'react-webcam';


const videoConstraints = {
    width: 600,
    facingMode: 'environment'
};

const Image = () => {
    const webcamRef = useRef(null);
    const [url, setUrl] = React.useState(null);

    const capturePhoto = React.useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
    }, [webcamRef]);
    
    const onUserMedia = (e) => {
        console.log(e);
    };

    return (
        <>
            <Webcam
                ref = {webcamRef}
                audio={false}
                screensgotFormat="image/png"
                videoConstraints={videoConstraints}
                onUserMedis={onUserMedia}
                mirrored={true}
                />
                <button onClick={capturePhoto}>Capture</button>
                <button onClick={() => setUrl(null)}>Refresh</button>
                {url && (
                    <div>
                        <img src={url} alt="Screenshot" />
                    </div>
                )}
        </>
    );
};

export default Image;