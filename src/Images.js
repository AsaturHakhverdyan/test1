import { memo } from 'react';
import './Images.css';

function Images({item}) {
         return ( 
            <div className="item_product">
                <div className='item'>
                    <img src={item.image} alt="#" />
                </div>
                <div className='item_info'>
                    <div className='item_title1'>
                        <p><span>Price:</span>{item.price}$</p>
                        <p><span>Count:</span> {item.rating.count}</p>
                        <button className='btn'>Buy Now</button>
                    </div>
                    <div className='item_title2'>
                        <p>{item.title}</p>
                    </div>
                </div>
            </div>
             );   
    }
export default memo(Images);