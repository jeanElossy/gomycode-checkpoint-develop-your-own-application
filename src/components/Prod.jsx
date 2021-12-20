import React from 'react'
import uniqueid from 'uniqueid';
import { useState } from 'react';


const Prod = ( { setCount }) => {

    const [
		data,
		setData,
	] = useState([
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
		{
			id     : uniqueid,
			img    : 'medias/5.png',
			name   : 'Jupe volante',
			count1 : 3500,
			count2 : 1500,
		},
	]);



    return (
        <div className='prod'>
            
            <div className='row'>
                {data.map((item) => {
                    return (
                        <div className='card p-4' style={{ width: '16rem', height: '24rem' }} key={item.id}>
                            <img src={item.img} alt='' className='images' />

                            <h1 className='h4'>{item.name}</h1>

                            <div className='mt-2'>
                                <div>
                                    <span className='fw-bold'>{item.count1}</span> / unité
                                </div>

                                <div>
                                    <span className='fw-bold'>{item.count2}</span> / à partie de 5 unités
                                </div>
                            </div>

                            <div className='d-flex justify-content-between gap-2 mt-3'>
                                <button className='btn btn-primary' onClick={setCount}>
                                    Achéter
                                </button>
                                <button className='btn btn-outline-primary fw-bold'>+</button>
                            </div>
                        </div>
                    );
                })}

                <div className='voir-plus text-center my-4'>
                    <button className='btn btn-outline-primary'>Voir plus</button>
                </div>
            </div>
        </div>
    )
}

export default Prod;
