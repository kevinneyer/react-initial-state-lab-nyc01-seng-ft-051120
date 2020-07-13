
import React from 'react';
// your ImageSlider code here!
class ImageSlider extends React.Component {

    constructor(){
        super() 

        this.state = {
            currentSlideIndex: 0
        }
    }
    render(){
        let currentSlide = this.state.currentSlideIndex
        return ( `I am on slide ${currentSlide}`)
      
    }
}

export default ImageSlider