import React from 'react';

const Imagelist = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        return <img key={id} alt={description} src={urls.regular} />
    });

    return <div>{images}</div>;
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