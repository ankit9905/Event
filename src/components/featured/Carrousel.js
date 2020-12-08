import React from 'react';
import Slider from 'react-slick'
import first from '../../resources/images/slide_one.jpg'
import second from '../../resources/images/slide_two.jpg'
import third from '../../resources/images/slide_three.jpg'

const Carrousel = () => {

    const settings = {
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    }

    return (
        <div 
            className="carrousel_wrapper" 
            style={{height:`${window.innerHeight}px`,overflow:'hidden'}}
        >
          
          <Slider {...settings}>
            <div>
               <div 
                    className="carrousel_image"
                    style={{
                        background:`url(${first})`,
                        height:`${window.innerHeight}px`
                    }}
               >

               </div>
            </div>
            <div>
               <div 
                    className="carrousel_image"
                    style={{
                        background:`url(${second})`,
                        height:`${window.innerHeight}px`
                    }}
               >

               </div>
            </div>
            <div>
               <div 
                    className="carrousel_image"
                    style={{
                        background:`url(${third})`,
                        height:`${window.innerHeight}px`
                    }}
               >

               </div>
            </div>
        </Slider>
            
        </div>
    );
};

export default Carrousel;