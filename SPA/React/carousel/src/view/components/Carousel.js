import React, {useState} from 'react';
import './Carousel.css';


export default (props) => {
    const { entering, exiting } = props
    const [screens, setCreens] = useState([ exiting,entering])

    console.dir(screens)
    
    function startTransition(){
        console.log('start');
        const carousel = document.getElementById('carousel');
        carousel.style.right = '100vw';
        setTimeout(()=>{
            setCreens([entering])
            carousel.style.transition = 'all 0s';
            carousel.style.right = '0vw';
            carousel.style.width = '100vw';
            carousel.style.gridTemplateColumns = 'repeat(1, 1fr)';
        }, 1000)
    }
    return (
        <div className='main'>
            <div className='header'>
                <div className='button' onClick={startTransition}>Start 2</div>
            </div>
            <div className='carousel' id='carousel'>
                {
                    screens.map((screen, index)=>{
                        return(<div key={index} style={{height:'100%'}}>{screen}</div>)
                    })
                }
            </div>
        </div>
    )
}