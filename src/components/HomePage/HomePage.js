import React, { useState, useEffect } from "react";
import './HomePage.css'
import tracker from '../assets/images/tracker.png'
import DonutGraph from '../Donut/DonutGraph'
import LineGraph from '../Line/LineGraph'
import Table from '../Tables/Table'
import India from '../Map/India'
import Boxes from '../Boxes/Boxes'
import axios from 'axios'

const HomePage = () => {

    const [confirmed, setConfirmed] = useState(0);
    const [active, setActive] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [decreased, setDecreased] = useState(0);
    const [statewise, setStatewise] = useState([]);
    const [total, setTotal] = useState([]);
    const [error, setErrors] = useState("");

    useEffect(() => {
        async function fetchData() {
            const url = "https://api.covid19india.org/data.json"
            
            const res = await axios.get(url);
            setStatewise(res.data.statewise)
            setTotal(res.data.statewise[0])
            setConfirmed(res.data.statewise[0].confirmed)
            setActive(res.data.statewise[0].active)
            setRecovered(res.data.statewise[0].recovered)
            setDecreased(res.data.statewise[0].deaths)

            return res;
        }
        fetchData();
    }, []);
  
    
    return (
        <div>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-xl-6 mb-4">
                        <div className='float-left header'>
                            <img width='80' src={tracker} alt=''/>
                            <h2 className='m-0 p-0'>INDIA COVID-19 TRACKER</h2>
                            <h6>Lets all pray to make earth Covid-19 free soon,<br/>Stay safe and do TheLocate.</h6>
                        </div>
                        {/* width: '15rem',  */}
                        <div className='card mt-4'>
                            {/* <div className="card-deck m-2" > */}

                                <div className="container-fluid ">
                                    <div className="row">
                                        {/* <div className='card container-fluid' style={{ height: '20rem' }} > */}

                                            <div className="col-sm-6 mb-2 ">
                                        <div className="card  " style={{ height: '14rem' }}>
                                                    <DonutGraph confirmed={confirmed} active={active} recovered={recovered} deaths={decreased}/>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 mb-2 ">
                                                <div className="card d1" style={{ height: '14rem' }}>
                                                    <LineGraph />
                                                </div>  
                                            </div>

                                        {/* </div> */}
                                    </div>
                                </div>

                                <div className="card m-1">
                                    <div className="card-body">
                                        <Table statewise={statewise}/>
                                    </div>
                                </div> 

                            </div>
                        {/* </div> */}
                    </div>

                    <div className="col-xl-6 mb-4">
                        <div>
                            <h2 className='m-0 p-0'>Hover over a state for more details</h2>
                            <br/>
                            <br/>
                        </div>
                        <div className='card m-2'>
                            <div className="card-deck m-2" >
                                <Boxes confirmed={confirmed} active={active} recovered={recovered} deaths={decreased} />
                            </div>

                            <div className="card m-1">
                                <div className="card-body">
                                    <India statewise={statewise}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage
