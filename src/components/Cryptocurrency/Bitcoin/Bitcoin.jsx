import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import btc from "../../../data/btcbig.png"
import share from "../../../data/share.png"
import greenangle from "../../../data/greenangle.png"
import arrowdown from "../../../data/arrow-down.png"
import yellow from "../../../data/yellow.png"
import thumb from "../../../data/thumb.png"
import redangle from "../../../data/redangle.png"
import white from "../../../data/white.png"
import map from "../../../data/map.png"
import { btcLinks } from '../../../data/data'
import Chart from "./Chart"
import Roadmap from "./Roadmap"
import Review from "./Review"
import "./Bitcoin.css"
import ReviewIpad from './ReviewIpad'


export default function Bitcoin() {

    const [info, setInfo] = useState("chart")

    const btcLink = (props) => {
        return (
            <div >
                <span className="btc-link">
                    <img className='btclink-icon' src={props.logo} alt="logo" />
                    <p className='btclink-name'>{props.name}</p>
                    <img className='btclink-arrow' src={props.img} alt="" />
                </span>
            </div>
        )
    }
    return (
        <div className='bitcoin-container'>
            <div className="bitcoin-details">
                <div className="btc-detail">
                    <div className="btc-prop">
                        <div className="btc-name">
                            <div className="btc-logo">
                                <img src={btc} alt="btc logo" />
                                <div className="btc-online"></div>
                            </div>
                            <div >
                                <div className="bitcoin-h3">
                                    <h3>Bitcoin</h3>
                                    <p className='BTC'>BTC</p>
                                    <img className='share-logo' src={share} alt="share" />
                                </div>
                                <span className='rank1'>Rank #1</span>
                            </div>
                        </div>
                        <div className="btc-links">
                            {btcLinks.map(btcLink)}
                        </div>
                    </div>
                    <div className="btc-price">
                        <p className='btcprice-p'>Bitcoin Price</p>
                        <span className='price-span'>
                            <h3 className='pricespan-h3'>49,000,830</h3>
                            <img className='pricespan-img' src={greenangle} alt="angle" />
                            <p className='pricespan-p'>+62.50%</p>
                        </span>
                        <div className="btc-range">
                            <span>Low: $42,0000</span>
                            <span>High: $42,0000</span>
                        </div>
                        <div className="range">
                            <input type="range" min='0' max='100' value="65" id='slider'/>
                            <div className='selector'>
                                <div className="selectBtn"></div>
                            </div>
                        </div>
                        <span className='time-span'>24 Hr <img className='btclink-arrow' src={arrowdown} alt="arrow" /></span>
                    </div>
                </div>
                <div className="btc-rating">
                    <p className='p-rating'>Project Rating</p>
                    <span className='p-rating-span'>
                        <h3 className='p-rating-h3'>5.0</h3>
                        <div>
                            <img src={yellow} alt="star" />
                            <img src={yellow} alt="star" />
                            <img src={yellow} alt="star" />
                            <img src={yellow} alt="star" />
                            <img src={yellow} alt="star" />
                        </div>
                        <Link to='/' className='p-rating-link'>add rating</Link>
                    </span>
                    <div className="reaction">
                        <div className="like">
                            <img className='thumb' src={thumb} alt="thumb" />
                            <p>50</p>
                        </div>
                        <div className="like">
                            <img className='star' src={yellow} alt="star" />
                            <p>123</p>
                        </div>
                    </div>
                </div>
                <div className="bitcoin-market">
                    <div className="col-1">
                        <div className="market-cap">
                            <span><img src={greenangle} alt="angle" /> +62.50%</span>
                            <p className='marketcap-price'>$831,056,257</p>
                            <p className='marketcap-name'>Market Cap</p>
                        </div>
                        <div className="market-cap">
                            <span><img src={redangle} alt="angle" /> -22.50%</span>
                            <p className='marketcap-price'>$2,831,056,257</p>
                            <p className='marketcap-name'>Fully Diluted Market Cap</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="market-cap">
                            <span><img src={redangle} alt="angle" />-22.50%</span>
                            <p className='marketcap-price'>$8,572,500</p>
                            <div className="vol">
                                <p className='marketcap-name'>Volume</p>
                                <p className='time-24'>24h</p>
                            </div>
                        </div>
                        <div className="vol-cap">
                            <p className='marketcap-price'>0.012</p>
                            <div className="vol">
                                <p className='marketcap-name'>Volume/Market Cap</p>
                                <p className='time-24'>24h</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <p className='marketcap-price'>188,572,500 BTC</p>
                        <p className='marketcap-name'> Circulating Supply </p>
                    </div>
                    <div className="col-4">
                        <div className="max-supply">
                            <p className='marketcap-price'>188,572,500 BTC</p>
                            <p className='marketcap-name'>Max Supply</p>
                        </div>
                        <div className="min-supply">
                            <p className='marketcap-price'>188,572,500 BTC</p>
                            <p className='marketcap-name'>Min Supply</p>
                        </div>
                    </div>
                </div>
                <div className="bitcoin-info">
                    <div className="info-title">
                        <div className="overview">
                            <div style={{display: "flex"}} onClick={()=>{setInfo("chart")}}>
                                <img src={white} alt="star" />
                                <h3>Overview</h3>
                            </div>
                            {info === "chart" && <hr className='straight-line'/>}
                        </div>
                        <div className="overview">
                            <div style={{display: "flex"}} onClick={()=>{setInfo("roadmap")}}>
                                <img src={map} alt="map" />
                                <h3>Roadmap</h3>
                            </div>
                            {info === "roadmap" && <hr className='straight-line'/>}
                        </div>

                        <div className="review-button">
                            <div className="reviewbtn-inner" onClick={()=>{setInfo("review")}}>
                                <p className='reviewbtn-review'>Review</p>
                                <p className='review-button-number'>4</p>
                            </div>
                        </div>
                    </div>
                    <hr className='horizontal-line'/>
                    {info === "chart" && <Chart />}
                    {info === "roadmap" && <Roadmap />}
                    {info === "review" && <ReviewIpad />}
                </div>
                
            </div>
            <div className="review">
                <Review />
            </div>
        </div>
    )
}
