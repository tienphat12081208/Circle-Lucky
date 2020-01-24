import React, { Component } from 'react';
import img_circle_luckky from './image_circle/cricle_lucky.png';
import img_press_circle from './image_circle/press_circle.png';
import '../App.css'
class Circle_Lucky extends Component {
    constructor(props) {
            super(props);
            this.state ={
                press: false,
                classNameCircleLucky:"img-circle-lucky"
            }
        }
    
    PressCircleLucky = ()=>{
        this.setState({
            press:true
        })
        this.Turned();
    }
    
    Turned=async ()=>{
       if(this.state.press) {
            this.setState({
                classNameCircleLucky:"img-circle-lucky press_circle"
            })
            var Array_Number=["1","2","10","20","0","5"]
            var rand = await Array_Number[Math.floor( Math.random() *  Array_Number.length)];
            var NameCircleLucky= "press_circle_stop"+rand+"k";
            await setTimeout(()=>{ 
                this.setState({
                   classNameCircleLucky:"img-circle-lucky " +NameCircleLucky
                })
            },4000);
            this.setState({
                press: false
            })
        }
        
    }
    render() {        
        return (
            <div>
                <div className="box-circle-luckky">
                    <img src={img_circle_luckky} alt="circle_luckky" className={this.state.classNameCircleLucky}/>
                    <img src={img_press_circle} alt="circle_luckky"  className="img-press_circle" onClick={this.PressCircleLucky}/>
                </div>
                
                
            </div>
        );
    }
}

export default Circle_Lucky;