import React from 'react'
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';


export default function Products() {
    const [products, setProducts] = useState([])
    let [skip, setSkip] = useState(0);

    const fetchData = async () => {
        const url = `https://dummyjson.com/products?limit=10&skip=${skip}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setProducts(parsedData.products)
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])

    const fetchNext = ()=> {
        setSkip(skip += 10);
        fetchData();
    };

    const fetchPrev = () => {
        setSkip(skip -= 10);
        fetchData();
    };


    return (
        <>
            <div className="container">

                <div className="row">
                    {products.map((element) => {
                        return <div className="col-md-4" key={element.id}>
                            <ProductItem title={element.title} desc={element.description} imageUrl={element.thumbnail} price={element.price} discount={element.discountPercentage} id={element.id}/>
                        </div>
                    })}
                </div>

                <div className='container d-flex justify-content-between' style={{margin:'30px'}}>
                    <button type='button' disabled={skip===0} className='btn btn-dark' onClick={fetchPrev}> &larr; Previous</button>
                    <button type='button' disabled={skip===90} className='btn btn-dark' onClick={fetchNext}>Next &rarr;</button>
                </div>

            </div>

        </>
    )
}
