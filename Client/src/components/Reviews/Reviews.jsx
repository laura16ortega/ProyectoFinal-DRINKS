import React from 'react';
import s from './Reviews.module.css'
import Review from '../Review/Review';

function Reviews(props) {

    const range = [1,2,3,4,5,6,7,8,9,10];
    const obj = [{"title":"Not so good", "content":"This is a random text that is just meant to occupy space and give space notion ","username":"aribxax","rating":"★★★★☆"},{"title":"I recommend it!", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Not worth its price :/", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Good packaging!", "content":"I loved it","username":"aribxax","rating":"★★★★☆"},{"title":"Delivery was quick :)", "content":"I loved it","username":"aribxax","rating":"★★★★☆"}]

    return (
        <div>   
            {obj.map((e)=> {
            return(
            <div>
            <Review title={e.title} content={e.content} username={e.username} rating={e.rating} />
            </div>
            )})}
            
        </div>
    );
}

export default Reviews;