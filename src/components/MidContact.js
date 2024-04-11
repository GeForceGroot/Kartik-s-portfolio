import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../style/contact-us.css'

const ShortContact = () => {
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
            <section className='midContac'>
                <div className='container'>

                    <div className='row' id='rC'>
                        <div className='col' >
                            <div className='kl'>
                                <img style={{ color: "rgb(19 70 58)" }} src="https://www.svgrepo.com/show/5236/phone-call.svg" width={'40px'} height={'40x'} alt="phone" />
                                <h5 style={{ marginTop: '25px', color: "rgb(19 70 58)" }}>Interested to work together? Let's talk</h5>
                                <p style={{ fontSize: '16px' }}>We have served thousands of clients from a wide range of business domains from around the world.</p>
                            </div>
                        </div>
                        <div className='col' style={{ marginLeft: '100px' }}>
                            <form className="form" ref={form} onSubmit={sendEmail}>
                                <div className='row'>
                                    <div className="col form-group">
                                        <label htmlFor="name">Your Name (Required)</label>
                                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="col form-group">
                                        <label htmlFor="email">Your Email (Required)</label>
                                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone (Optional)</label>
                                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="requirement">Tell Us About Your Requirement</label>
                                    <textarea id="requirement" name="requirement" rows="4" placeholder="Describe your needs in detail"></textarea>
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

export default ShortContact