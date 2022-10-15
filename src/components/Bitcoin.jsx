import React from 'react'
import { Link } from 'react-router-dom'
import btc from "../data/btc.png"
import share from "../data/share.png"
import greenangle from "../data/greenangle.png"
import arrowdown from "../data/arrow-down.png"
import yellow from "../data/yellow.png"
import thumb from "../data/thumb.png"
import redangle from "../data/redangle.png"
import white from "../data/white.png"
import map from "../data/map.png"


export default function Bitcoin() {
    const btcLinks = (props) => {
        return(
            <div className="btc-link">
                <span>
                    <img src={props.logo} alt="logo" />
                    <p>{props.name}</p>
                    <img src={props.img} alt="" />
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
                            <div className="online"></div>
                        </div>
                        <div className="bitcoin-h3">
                            <h3>Bitcoin</h3>
                            <span>Rank #1</span>
                        </div>
                        <p>BTC</p>
                        <img src={share} alt="share" />
                    </div>
                    <div className="btc-links">
                        {/* {return} */}
                    </div>
                </div>
                <div className="btc-price">
                    <p>Bitcoin Price</p>
                    <span>
                        <h3>49,000,830</h3>
                        <img src={greenangle} alt="angle" />
                        <p>+62.50%</p>
                    </span>
                    <div className="btc-range">
                        <span>Low: $42,0000</span>
                        <span>High: $42,0000</span>
                    </div>
                    <div className="range">
                        <input type="range" min='0' max='100' value="65" />
                    </div>
                    <span>24 Hr <img src={arrowdown} alt="arrow" /></span>
                </div>
            </div>
            <div className="btc-rating">
                <p>Project Rating</p>
                <span>
                    <h3>5.0</h3>
                    <div>
                        <img src={yellow} alt="star" />
                        <img src={yellow} alt="star" />
                        <img src={yellow} alt="star" />
                        <img src={yellow} alt="star" />
                        <img src={yellow} alt="star" />
                    </div>
                    <Link to='/'>add rating</Link>
                </span>
                <div className="reaction">
                    <div className="thumbs-up">
                        <img src={thumb} alt="thumb" />
                        <p>50</p>
                    </div>
                    <div className="star">
                        <img src={yellow} alt="star" />
                        <p>123</p>
                    </div>
                </div>
            </div>
            <div className="bitcoin-market">
                <div className="col-1">
                    <div className="market-cap">
                        <span><img src={greenangle} alt="angle" /> <p>+62.50%</p></span>
                        <p>$831,056,257</p>
                        <p>Market Cap</p>
                    </div>
                    <div className="diluted-market">
                        <span><img src={redangle} alt="angle" /> <p>-22.50%</p></span>
                        <p>$2,831,056,257</p>
                        <p>Fully Diluted Market Cap</p>
                    </div>
                </div>
                <div className="col-2">
                    <div className="market-vol">
                        <span><img src={redangle} alt="angle" /> <p>-22.50%</p></span>
                        <p>$8,572,500</p>
                        <div className="vol">
                            <p>Volume</p>
                            <p>24h</p>
                        </div>
                    </div>
                    <div className="vol-cap">
                        <p>0.012</p>
                        <div className="vol">
                            <p>Volume/Market Cap</p>
                            <p>24h</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <p>188,572,500 BTC</p>
                    <p>Circulating Supply </p>
                </div>
                <div className="col-4">
                    <div className="max-supply">
                        <p>188,572,500 BTC</p>
                        <p>Max Supply</p>
                    </div>
                    <div className="min-supply">
                        <p>188,572,500 BTC</p>
                        <p>Min Supply</p>
                    </div>
                </div>
            </div>
            <div className="bitcoin-info">
                <div className="info-title">
                    <div className="overview">
                        <img src={white} alt="star" />
                        <p>Overview</p>
                    </div>
                    <div className="roadmap">
                        <img src={map} alt="map" />
                        <p>Roadmap</p>
                    </div>
                </div>
                <hr/>
                <Chart/>
                <Roadmap />
            </div>
            <div className="bitcoin-information">
                <BtcStats />
                <div className="history">
                    <h3>History</h3>
                    <p>Morbi amet, dolor mi et quis senectus feugiat id morbi. Malesuada in est suspendisse et ultrices integer malesuada. Venenatis lorem aliquet id adipiscing vulputate tincidunt diam lacus. Morbi risus integer pretium massa dictum sagittis orci velit cursus. Morbi est tellus, lacus, posuere viverra id euismod. Vel amet, in maecenas pretium tincidunt ipsum. Facilisi gravida eu, mauris faucibus tincidunt non aenean. Duis ut sed et at. Gravida sed at eu interdum at sit. Est vitae ultricies nunc ornare.
                    Arcu praesent ut eu quis netus facilisis nunc. Semper purus enim feugiat amet velit ultricies sed. Congue nunc tincidunt tincidunt urna consequat justo id malesuada. Phasellus rhoncus orci eu purus. Adipiscing id id blandit vulputate. Morbi hendrerit amet, sed euismod lectus sit nulla.</p>
                </div>
            </div>
        </div>
        <div className="review">
            <Review />
        </div>
    </div>
  )
}
