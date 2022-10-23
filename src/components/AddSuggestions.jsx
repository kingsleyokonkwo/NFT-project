import React from 'react'
import "./AddSuggestions.css"
import { Link } from 'react-router-dom'
import watch from '../data/watch.png'
import plus from '../data/plus.png'
import bell from '../data/bell.png'
import desk from '../data/desk.png'
import NftProjectAd from './NftProjectAd'
import CryptoProjectAd from './CryptoProjectAd'
import MetaverseProjects from './MetaverseProjects'
import IcoProjectAds from './IcoProjectAds'

export default function AddSuggestions() {
    return (
        <div className='add-suggestion-container'>
            <div className="add-suggestion-inner">
                <div className="featured-ads">
                    <h3 className="featured-ads-h3">Featured Ads</h3>
                    <div className="featured-ads-btns">
                        <button className='status-btn'><img src={watch} alt="ad status" />Ad Status</button>
                        <button className='suggest-btn'><img src={plus} alt="plus sign" />Suggest Ads</button>
                    </div>
                </div>
                <div className="ad-boxes">
                    <div className="ad-box-big" style={{ backgroundImage: `url(${bell})`, backgroundSize: "contain", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}>
                        <div className="big-box-content" >
                            <h3>The Right NFT At the festival</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales mollis quisque commodo facilisis adipiscing curabitur fringilla. Elit netus sed sit fermentum vel ornare sit feugiat felis.</p>
                            <Link to='/'className='ad-readmore-link' >Read More</Link>
                        </div>
                    </div>
                    <div className="ad-box-small" style={{ backgroundImage: `url(${desk})`, backgroundSize: "contain", backgroundPosition: "bottom", backgroundRepeat: "no-repeat"}}>
                        <h3>The Right NFT At the festival</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales mollis quisque commodo facilisis adipiscing curabitur fringilla. Elit netus sed sit fermentum vel ornare sit feugiat felis.</p>
                        {/* <img src={desk} alt="bell" /> */}
                    </div>
                </div>
            </div>
            <NftProjectAd />
            <CryptoProjectAd />
            <MetaverseProjects />
            <IcoProjectAds />

            {/* <AdSuggestionStatus /> Render this component */}
        </div>
    )
}
