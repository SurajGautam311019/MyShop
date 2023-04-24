import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductItem(props) {

    let { title, desc, imageUrl, price, discount, id } = props;
    discount = parseInt(discount);
    const priceStyle = {
        display: 'flex',
    }
    const itemStyle = {
        margin: '10px'
    }
    const imgStyle = {
        width: '413px',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '20px'
    }
    return (
        <>
            <div className='my-3'>
                <div className="card" style={{ backgroundColor: 'aliceblue', borderRadius: '20px' }}>

                    <img src={imageUrl} className="card-img-top" alt="..." style={imgStyle} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <div className='price' style={priceStyle}>
                            <Link to={`/details/${id}`} className="btn btn-sm btn-dark" style={itemStyle}><h6>Details</h6></Link>
                            <h5 style={itemStyle} >Price: ${price}</h5>
                            <h5 style={itemStyle}>Discount: {discount}%</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
