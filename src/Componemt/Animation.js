import React from 'react';



const Animation = () => {
    return (
        <div className="animation">
            <div className="contenair">
                <div className='l1'></div>
                <div className='l2'></div>
            </div>
            <div className='container-first'>
                <h1><span> you </span><span>need </span><span>some </span><span>rest</span></h1>
            </div>
            <div className='container-btns'>
                <button className='first-btn'>discorver</button>
                <button className='seconde-btn'>contact</button>
            </div>
            <div className='icone'>
                <span><i className="fa-brands fa-facebook"></i></span>
                <span><i className="fa-brands fa-github-square"></i></span>
                <span><i className="fa-brands fa-firefox-browser"></i></span>
                <span><i className="fa-brands fa-youtube-square"></i></span>
            </div>



        </div >

    )
}

export default Animation;