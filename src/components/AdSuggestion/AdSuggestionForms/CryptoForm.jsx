import React from 'react'

export default function CryptoForm() {

    const handleSubmit =(e)=> {
        e.preventDefault()
    }

  return (
    <div className='crypto-form'>
        <form onSubmit={handleSubmit}>
            <div className="formInput">
                <label>Project Name</label>
                <input className='cryptoinput' type="text"/>
            </div>
            <div className="formInput">
                <label>Contact Address</label>
                <input className='cryptoinput' type="text"/>
            </div>
            <div className="formInput">
                <label>
                    <p>Project Discord Url</p>
                    <p className='label-url'>URL e.g <span>https://aliens.com/nft/create</span></p>
                </label>
                <input className='cryptoinput' type="text"/>
            </div>
            <div className="formInput">
                <label>
                    <p>Project Twitter Url</p>
                    <p className='label-url'>URL e.g <span>https://aliens.com/nft/create</span></p>
                </label>
                <input className='cryptoinput' type="text"/>
            </div>
            <div className="formInput">
                <label>
                    <p>Project Telegram Url</p>
                    <p className='label-url'>URL e.g <span>https://aliens.com/nft/create</span></p>
                </label>
                <input className='cryptoinput' type="text"/>
            </div>
            <button className='suggestForm-btn'>Suggest Ads</button>
        </form>
    </div>
  )
}
