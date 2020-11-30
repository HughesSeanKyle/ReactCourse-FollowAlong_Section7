import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const Imagelist = props => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return <div className="image-list">{images}</div>;
};

export default Imagelist;

/*
When building a component: 

First create a functional component with a simple name (perhaps name of component)
Then hook the component up to the parent to see if that component will render. 
If the component needs info from then parent create props and pass down from parent to component 
If component needs state then change component from functional to class based component. 
    If NO state needed then leave as functional
When happy with component then extract logic from parent into child.
*/