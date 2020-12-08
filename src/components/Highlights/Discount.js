import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Button from '../utilities/MyButton'

class Discount extends Component {

    state={
        discountStart:0,
        discountEnd:35
    }

    porcentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({discountStart:this.state.discountStart + 1})
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{this.porcentage()},30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={()=>this.porcentage()} >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}% </span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right >
                        <div className="discount_description">
                            <h3>Purcahse ticket before 23rd June</h3>
                            <p>Nam diam arcu, suscipit ac magna rutrum, ullamcorper commodo est. Fusce quis maximus neque. Morbi sem turpis, auctor et odio ac, aliquet fermentum mi. Nam euismod odio vitae elit pulvinar rutrum. Donec at ipsum porta, aliquet libero non, bibendum elit. In lectus ipsum, ornare sed laoreet non, semper vitae lectus. Duis vel pulvinar turpis. Vivamus elementum dui consectetur, mollis augue in, bibendum nisi. </p>
                           <Button text="Purchase tickets" bck="#ffa800" color="#ffffff" link="http://ankit9905.github.io" />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;