export default function CryptoForm() {

    const handleSubmit =(e)=> {
        e.preventDefault()
    }

  return (
    <div className='crypto-form'>
        <form onSubmit={handleSubmit}>
            <div className="formInput">
                <label>Project Name</label>
                <input className="cryptoinput" type="text"/>
            </div>
            <div className="formInput">
                <label>Start Date</label>
                <input className="cryptoinput date-input" type="date"/>
            </div>
            
            <button className='suggestForm-btn'>Suggest Ads</button>
        </form>
    </div>
  )
}
