/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/footerStyle.css'

const Footer = () => {
    return (
        <>
            <section style={{ backgroundColor: "#f4f4f4" }}>
                <section className='portfolio' style={{ backgroundColor: "#f4f4f4" }}>
                    <div className='container' style={{ textAlign: "center" }}>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.png" style={{ marginTop: "100px", borderRadius: '50%' }} width={"125px"} height={"125px"} alt="logo" />
                        <h6 style={{ marginTop: '50px', fontWeight: "bold" }}>Meet kartik, Your Expert web developer</h6>
                        <p style={{ fontSize: "15px", marginTop: "30px" }}>My journey is defined by a relentless pursuit of excellence and innovation in education. I established a strong foundation during my secondary education and honed my technical proficiency through certifications and skills development. This paved the way for my venture into leadership and entrepreneurship. Mobilizing critical projects and implementing Total Productive Maintenance (TPM) with zero defects underscore my dedication to driving efficiency and quality.</p>
                        <p style={{ fontSize: "15px" }}>My ability to pinpoint areas for improvement has resulted in significant boosts in productivity, employee skills, and key performance indicators. The inception of Smart Study Assist reflects my belief in leveraging technology to enhance academic services and foster student success. Through a blend of leadership, problem-solving, and a commitment to customer satisfaction, Smart Study Assist stands as a trusted partner in academic and professional growth.</p>
                    </div>
                    <div className='container' style={{ display: 'flex', fontWeight: 'bold', justifyContent: 'center' }} id='foornabvar'>
                        <ul id='unOrderFoot' >
                            <a href="https://www.facebook.com/shruti.assignments" style={{ color: 'blue', textDecoration: 'none' }}>
                                <li style={{ marginLeft: "30px" }}><i className="fab fa-facebook-f"></i></li>
                            </a>
                            <a href="/" style={{ color: 'red', textDecoration: 'none' }}>
                                <li style={{ marginLeft: "30px" }}><i className="fab fa-youtube"></i></li>
                            </a>
                            <a href="https://www.instagram.com/shruti.assignments/?utm_source=qr&igsh=MWgwaDV1djF5ejB3bw%3D%3D" style={{ color: 'purple', textDecoration: 'none' }}>
                                <li style={{ marginLeft: "30px" }}><i className="fab fa-instagram"></i ></li>
                            </a>
                            <a href="https://www.linkedin.com/in/shruti-jain-ab953a20/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{ color: 'blue', textDecoration: 'none' }}>
                                <li style={{ marginLeft: "30px" }}><i className="fab fa-linkedin-in"></i ></li>
                            </a>
                        </ul>
                    </div>
                    <div className='btnTalk' style={{ textAlign: "center" }}>
                        <a href="/contact_us" target='_blank'>
                            <button type="button" id='portfolio' className="btn btn-primary ">
                                <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" />
                                Contact Us for assistance.</button>
                        </a>
                    </div>
                </section>
                <hr style={{ marginLeft: "150px", marginRight: "150px", marginTop: '75px', marginBottom: "100px", border: "1px solid black" }} />
                <footer className="text-center text-lg-start text-black mt-10" style={{ backgroundColor: '#f4f4f4', marginTop: '25px' }}>
                    <div className="p-4 pb-0">
                        <section>
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Kartik's Portfolio</h6>
                                    <p>Welcome to Smart Study Assist, your reliable companion in achieving academic success through our writing assistance services. Established with the mission to empower students in their educational endeavors, we excel in delivering customized support to individuals across diverse disciplines and academic levels.</p>
                                </div>
                                <hr className="w-100 clearfix d-md-none" id='lineFix' />
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Projets</h6>
                                    <p><a className="text-black">100% originality guaranteed</a></p>
                                    <p><a className="text-black">On-time delivery</a></p>
                                    <p><a className="text-black">Affordable price</a></p>
                                    <p><a className="text-black">24*7 online support</a></p>
                                </div>
                                <hr className="w-100 clearfix d-md-none" id='lineFix' />
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><img style={{ marginBottom: '8px' }} width={'20px'} height={'20px'} src='https://www.svgrepo.com/show/13696/house.svg' /> :- 73 B Block, Padmapur, Sri Ganganagar</p>
                                    <p><img style={{ marginBottom: '5px' }} width={'20px'} height={'20px'} src='https://www.svgrepo.com/show/168219/email.svg' /> :- info@smartstudyassist.com</p>
                                    <p><img style={{ marginBottom: '5px' }} width={'20px'} height={'20px'} src='https://www.svgrepo.com/show/5236/phone-call.svg' /> :- +919530473222</p>
                                    {/* <p><img style={{ marginBottom: '5px' }} width={'20px'} height={'20px'} src='https://www.svgrepo.com/show/14899/printer.svg' /> :- + 01 234 567 89</p> */}
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998', borderColor: '#3b5998' }} href="https://www.facebook.com/shruti.assignments" role="button" ><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39', borderColor: '#dd4b39' }} href="/" role="button"><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac', borderColor: '#ac2bac' }} href="https://www.instagram.com/shruti.assignments/?utm_source=qr&igsh=MWgwaDV1djF5ejB3bw%3D%3D" role="button" ><i className="fab fa-instagram"></i ></a>
                                    <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca', borderColor: '#0082ca' }} href="https://www.linkedin.com/in/shruti-jain-ab953a20/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" role="button" ><i className="fab fa-linkedin-in"></i ></a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
                        © 2024 Copyright :
                        <a className="text-black" style={{ color: 'black' }} href="https://mdbootstrap.com/"> Shreyansh Tiwari</a>
                    </div>
                </footer >
            </section>
        </>
    )
}

export default Footer