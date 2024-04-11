import React from 'react'
import '../style/project.css'

const Projetcs = () => {
    return (
        <>
            <div className='container' style={{marginTop:'150px', textAlign:'center'}}>
                <h2 style={{marginBottom:"100px", fontFamily:'monospace'}}>Things I Have Developed For <br/>My Projets 🤖</h2>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" style={{boxShadow:'2px 2px 6px 6px lightgray', borderRadius:"30px"}}>
                        <div className="carousel-item active">
                            <img className="d-block w-100" style={{borderRadius:'40px'}}  src="https://scooboo.in/cdn/shop/products/kalp-notes-wiro-notebooknotebooks-notepadskalpscooboo-kw019695896128574-976274_9e4f8edc-a6e4-4bd6-ace5-b579a8c4641d_1800x1800.jpg?v=1678431493" width={'100px'} height={'600px'} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Hello Silde Number</h5>
                                <p>ksahdkjk</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:'40px'}} src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/14190804/e-commerce-.jpg" alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Hello Silde Number</h5>
                                <p>ksahdkjk</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" style={{borderRadius:'40px'}} src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Hello Silde Number</h5>
                                <p>ksahdkjk</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span  className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span  className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span  className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projetcs
