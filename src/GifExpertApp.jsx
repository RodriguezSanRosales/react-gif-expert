import { useState } from "react";

import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( ['Dragon'] )

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;

        //setCategories([ ...categories, 'Otro' ]);
        //setCategories(cat => [...cat, 'Otro']);
        setCategories([ newCategory , ...categories ] );
        //console.log(newCategory);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            {/*Input */}
            <AddCategory  
                    //setCategories={setCategories}
                    onNewCategory={ (event) => onAddCategory(event) }
            />

            {/*<button onClick={onAddCategory}>Agregar</button>*/}

            {/* Listado Gif */}
            {
                categories.map( category => ( 
                    <GifGrid key= { category } 
                            category={category} /> 
                ) ) 
            }

        </>
    )
}