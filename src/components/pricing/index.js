import React, { Component } from 'react';
import Button from '../utilities/MyButton'
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

    state={
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        desc:['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking ',
              'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'],
        linkTo:['http://ankit9905.github.io','http://ankit9905.github.io','http://ankit9905.github.io'],
        delay:['500','0','500']
    }

    showBoxes = () =>(
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.desc[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <Button text="Purchase" bck="#ffa800" color="#ffffff" link={this.state.linkTo[i]} />
                        </div>
                </div>
            </div>
            </Zoom>
            
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    
                    <div className="pricing_wrapper">{this.showBoxes()}</div>

                </div>
            </div>
        );
    }
}

export default Pricing;