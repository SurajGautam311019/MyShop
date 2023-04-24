import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function ProductDetails() {
  const { id } = useParams();
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const url = `https://dummyjson.com/products/${id}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setProducts([parsedData])
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [])

  const imgStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  }
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
  }
  const descStyle={
    display: 'flex',
    flexDirection: 'row',
    marginTop:'20px',
    justifyContent:'space-between'
  }

  return (
    <>
      {products.map((element) => {
        return (
          <div style={divStyle}>

            

            <div className='row' style={imgStyle}>
              {element.images.map((image)=>{
                return <img src={image} alt=""  style={{margin:'10px'}} className='col-md-3'/>
              }
              )}
            </div>

            <div key={element.id} style={descStyle}>
              <div style={{marginRight:'338px'}}>
              <h1>Product: {element.title}</h1>
              <h3>Price: {element.price}</h3>
              <h3>Discount: {element.discountPercentage}%</h3>
              </div>
              <div style={{marginLeft:'200px'}}>
              <h6> <h3>Description:</h3> {element.description}</h6>
              <h3>Rating: {element.rating}</h3>
              <h3>Brand: {element.brand}</h3>
              </div>
            </div>

          </div>
        )
      })}
    </>
  )
}
