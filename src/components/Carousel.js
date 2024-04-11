import React from 'react'
import '../style/carousel.css'

const Carousel = () => {
    return (
        <>
            <div className='container' id='carousel' >
                <div className='row' id='rM'>
                    <div className='col'>
                        <div className='wow container fadeInUp pst'>
                            <span className="pro-status">Welcome To Kartik's portfolio!</span>
                            <p className="mtb40">Hey folks, I'm<br/> Web Developer</p>
                            <p className='nxtpara'>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                        </div>
                        <div className='btnTalk' >
                            <a href="/contact_us" target='_blank'>
                                <button type="button" className="btn btn-primary " id='btnHvn' >
                                    <img src="https://static-00.iconduck.com/assets.00/resume-icon-1586x2048-icyvzr1b.png" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                    Download Resume
                                </button>
                            </a>
                            <a href="/contact_us" target='_blank'>
                                <button type="button" className="btn btn-primary " id='btnHvn' style={{marginLeft:"10px"}}>
                                    <img src="https://static.thenounproject.com/png/4972750-200.png" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                    Contact us
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='col mtb41'>
                        <img id='imgBgCS' src="https://www.free-css.com/assets/files/free-css-templates/preview/page270/marvel/assets/images/undraw/undraw_software_engineer_lvl5.svg" height={"400px"} alt="BannerImg" />
                    </div>
                </div>
            </div>
            <hr style={{ borderTop: '2px dashed black' }} />
        </>
    )
}

export default Carousel