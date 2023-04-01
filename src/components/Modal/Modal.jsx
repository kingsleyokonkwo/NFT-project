import React from 'react'
import "./Modal.css"
import arrow from "../data/arrow-right.png"
import nft from "../data/nft3.png"
import diamond from "../data/diamond.png"

export default function Modal() {
  return (
    <div className='modal-container'>
      <div className="modalContainer-inner">
        <img className='modal-img' src={nft} alt="NFT" />
        <div className="modal-content">
          <p className='modal-name'>Drunk NFT</p>
          <p className='modal-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet velit morbi metus vitae scelerisque metus, donec habitant. Lorem dolor venenatis, orci enim nunc egestas maecenas erat facilisis. Nunc vulputate nunc eu diam diam id elementum leo. Eu nunc lorem eu interdum massa. Nulla nunc urna tortor volutpat nunc tortor dui pellentesque. Odio augue at quisque morbi nunc varius arcu luctus. Lacus odio lobortis blandit enim quisque. Tempus sollicitudin mauris libero eleifend. Et sed sed at turpis a nullam sit massa lobortis. Quam tincidunt aliquam elit sit molestie faucibus nam.</p>
          <div className='modal-market'>
            <div className='modal-price'>
              <p>Price:</p>
              <div className='modal-amount'>
                <img src={diamond} alt="diamond" />
                <p>20000</p>
              </div>
            </div>
            <div className='modal-supply'>
              <p>Supply:</p>
              <p>500000</p>
            </div>
          </div>
          <button>Claim Reward <img src={arrow} alt="arrow right" /></button>
        </div>
      </div>
    </div>
  )
}
