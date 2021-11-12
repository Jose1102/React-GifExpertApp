import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ categoria }) => {


    const {data:images, loading} = useFetchGifs( categoria );
  

    return (
        <>
            <h3> { categoria }</h3>

            { loading && <p className="animate__animated animate__flash"> Loading..</p> }

            <div className="card-grid"> 
                
                    { images.map( imagenes=> {
                        return( 
                        <GifGridItem 
                            key={imagenes.id}
                            img={ imagenes }
                        />)
                    }) }     
            </div>
        </>
        
    )
}

export default GifGrid
