/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/edu.css'

const Eduexp = () => {
    return (
        <>
            <div className='container' id='edu' style={{marginTop:'125px'}}>
                <div class="container-fluid" style={{ textAlign: 'center' }}>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h2 class="card-title mb-5" style={{fontFamily:"cursive", color:"blueviolet"}}>Education</h2>
                                    <div class="hori-timeline" dir="ltr" style={{marginTop:'100px'}}>
                                        <ul class="list-inline events">
                                            <li class="list-inline-item event-list">
                                                <div class="px-4">
                                                    <div class="event-date bg-soft-primary text-primary">2 June</div>
                                                    <h5 class="font-size-16">Event One</h5>
                                                    <p class="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>
                                                    <div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list">
                                                <div class="px-4">
                                                    <div class="event-date bg-soft-success text-success">5 June</div>
                                                    <h5 class="font-size-16">Event Two</h5>
                                                    <p class="text-muted">Everyone realizes why a new common language one could refuse translators.</p>
                                                    <div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list">
                                                <div class="px-4">
                                                    <div class="event-date bg-soft-danger text-danger">7 June</div>
                                                    <h5 class="font-size-16">Event Three</h5>
                                                    <p class="text-muted">If several languages coalesce the grammar of the resulting simple and regular</p>
                                                    <div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list">
                                                <div class="px-4">
                                                    <div class="event-date bg-soft-warning text-warning">8 June</div>
                                                    <h5 class="font-size-16">Event Four</h5>
                                                    <p class="text-muted">Languages only differ in their pronunciation and their most common words.</p>
                                                    <div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eduexp
