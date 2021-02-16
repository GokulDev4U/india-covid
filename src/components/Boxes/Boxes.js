import React from 'react'
import './Boxes.css'

const Boxes = ({ confirmed,active, recovered, deaths}) => {
    return (
        <div>
            <div class="container">
                <div className="row">
                    <div className="col-lg-3 mb-2">
                        <div className="card" style={{ backgroundColor: 'rgb(252, 215, 215)' }}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "red" }}>CONFIRMED</h5>
                                <p className="card-text" style={{ color: "red" }}>{confirmed}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-2">
                        <div className="card" style={{ backgroundColor: 'rgb(215, 240, 252)' }}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "blue" }}>ACTIVE</h5>
                                <p className="card-text" style={{ color: "blue" }}>{active}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-2">
                        <div className="card" style={{ backgroundColor: 'rgb(179, 245, 196)' }}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "green",size:'1px' }}>RECOVERED</h5>
                                <p className="card-text" style={{ color: "green", size: '0px' }}>{recovered}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-2">
                        <div className="card" style={{ backgroundColor: 'rgb(215, 240, 252)' }}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "gray" }}>DECREASED</h5>
                                <p className="card-text" style={{ color: "gray" }}>{deaths}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Boxes

