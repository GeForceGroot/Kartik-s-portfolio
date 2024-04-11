import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../style/contact-us.css'
import { Helmet } from 'react-helmet'

const Contact_us = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rw2gu5k', 'template_ojz2pk8', form.current, {
                publicKey: 'ljK8_Qd1p3N6fl0Bq',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Thank you I will get back to you as soon as possible ! (:');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content='Contact Smart Study Assist for expert academic writing services. Get help with essays, research papers, and more from our qualified team. Reach out today!' />
                <title>Contact Smart Study Assist | Get Expert Academic Writing Help</title>
            </Helmet>
            <section className='contactUs'>
                <div className='container'>
                    <div className='row' >
                        <div className='col' style={{ marginTop: '150px', marginBottom: '175px' }}>
                            <div className='phone' style={{ marginTop: '75px', display: 'flex' }}>
                                <img style={{ marginTop: '15px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoaOAd4729IT4l4BO3txtJZdE9Ifv_BED_mXw3U0S-9w&s" width={'40px'} height={'40px'} alt="" />
                                <div className='mix' style={{ marginLeft: '20px' }}>
                                    <h6 style={{ color: "#030264" }}>TALK TO OUR CLIENT SUPPORT TEAM</h6>
                                    <h5 style={{ color: 'darkorange' }}>+91-9530473222</h5>
                                </div>
                            </div>
                            <div className='phone' style={{ marginTop: '50px', display: 'flex' }}>
                                <img style={{ marginTop: '15px' }} src='https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png' width={'40px'} height={'40px'} alt="" />
                                <div className='mix' style={{ marginLeft: '20px' }}>
                                    <h6 style={{ color: "#030264" }}>WRITE TO US ABOUT YOUR NEEDS</h6>
                                    <h5 style={{ color: 'darkorange' }}>info@smartstudyassist.com</h5>
                                </div>
                            </div>
                            <div className='phone' style={{ marginTop: '50px', display: 'flex' }}>
                                <img style={{ marginTop: '15px' }} src="https://www.svgrepo.com/show/493957/address.svg" width={'40px'} height={'40px'} alt="" />
                                <div className='mix' style={{ marginLeft: '20px' }}>
                                    <h6 style={{ color: "#030264" }}>TALK TO OUR CLIENT SUPPORT TEAM</h6>
                                    <h5 style={{ color: 'darkorange' }}>73 B Block, Padmapur, Sri Ganganagar</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col' style={{ marginTop: '150px', marginBottom: '175px', textAlign: "center" }}>
                            {/* <!-- Contact 1 - Bootstrap Brain Component --> */}
                            <h5>Quick response and express delivery guaranteed !!!</h5>
                            <form ref={form} className="form" onSubmit={sendEmail}>
                                <div className='row' id='rowForm' >
                                    <div className="col form-group" id='colForm'>
                                        <label htmlFor="name">Your Name (Required)</label>
                                        <input style={{ border: '2px solid' }} type="text" id="name" name="name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="col form-group">
                                        <label htmlFor="email">Your Email (Required)</label>
                                        <input style={{ border: '2px solid' }} type="email" id="email" name="email" placeholder="Enter your email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone (Optional)</label>
                                    <input style={{ border: '2px solid' }} type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="requirement">Tell Us About Your Requirement</label>
                                    <textarea style={{ border: '2px solid' }} id="requirement" name="requirement" rows="4" placeholder="Describe your needs in detail"></textarea>
                                </div>
                                <button id='btnHvn' type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact_us