import React, {useState, useEffect} from 'react';
import Image from './Image';
import Form from './Form';
import Showcase from './Showcase';
import firebase from '../firebase';

const Gallery = () => {
    const [showcaseUrl, setShowcaseUrl] = useState("");

    const defaultImages = [
    //     "https://pbs.twimg.com/media/EoVcSwEU4AA3E8i?format=jpg&name=medium",
    //     "https://image.shutterstock.com/image-illustration/red-dragon-portrait-digital-painting-260nw-1543370009.jpg",
    //     "https://media.wired.com/photos/5ada3a2c1e66870735eada27/2:1/w_1396,h_698,c_limit/DragonPasswordFINAL.jpg",
    //     "https://cdn.vox-cdn.com/thumbor/rohTXEQ9QKNZKk23cC-kf_Q6t2I=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65579617/drason.0.jpeg",
    //     "https://i.pinimg.com/originals/f0/fc/ff/f0fcff3905127994eed1cbb2a7742984.jpg"
    ];

    const [images, setImages] = useState(defaultImages);
    const [inputUrl, setInputUrl] = useState("");

    useEffect(() => {
        const unsub = firebase
            .firestore()
            .collection("Images")
            .get()
            .then(images => {
                const loadedImages = images.docs.map(image => image.data().url);
                setImages(loadedImages);
            })
        return () => unsub();
    }, []);

    const imageComponents = images.map( url => {
        return <Image key={url} url={url} setShowcaseUrl={setShowcaseUrl} />
    });

    const handleOnClick = event => {
        event.preventDefault();
        event.stopPropagation();
        setImages([...images, inputUrl]);
        firebase
            .firestore()
            .collection("Images")
            .add({ url: inputUrl});
    };

    return (
        <>
            <Form 
                formInputUrl = {inputUrl}
                formHandleOnClick = {handleOnClick} 
                formSetInputUrl = {setInputUrl}
            />
            {imageComponents}
            <Showcase showcaseUrl = {showcaseUrl}/>
        </>
    );
}

export default Gallery;