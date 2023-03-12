import React from 'react'
import chart from "../../../data/chart.png"
import BtcStats from './BtcStats'
import "./Chart.css"

export default function Chart() {
  return (
    <div className='chart-container'>
        <div className="chart">
            <h3>Bitcoin to USD Chart</h3>
            <div className="interval">
                <span id='first'>24H</span>
                <span>1D</span>
                <span>1M</span>
                <span>1Y</span>
                <span>ALL</span>
            </div>
        </div>
        {/* chart placeholder */}
        <img src={chart} alt="chart"  style={{width: "100%"}}/>
        <div className="bitcoin-information">
                    <BtcStats />
                    <div className="history">
                        <h3>History</h3>
                        <p>Morbi amet, dolor mi et quis senectus feugiat id morbi. Malesuada in est suspendisse et ultrices integer malesuada. Venenatis lorem aliquet id adipiscing vulputate tincidunt diam lacus. Morbi risus integer pretium massa dictum sagittis orci velit cursus. Morbi est tellus, lacus, posuere viverra id euismod. Vel amet, in maecenas pretium tincidunt ipsum. Facilisi gravida eu, mauris faucibus tincidunt non aenean. Duis ut sed et at. Gravida sed at eu interdum at sit. Est vitae ultricies nunc ornare.
                            Arcu praesent ut eu quis netus facilisis nunc. Semper purus enim feugiat amet velit ultricies sed. Congue nunc tincidunt tincidunt urna consequat justo id malesuada. Phasellus rhoncus orci eu purus. Adipiscing id id blandit vulputate. Morbi hendrerit amet, sed euismod lectus sit nulla.</p>
                    </div>
                </div>
    </div>
  )
}
