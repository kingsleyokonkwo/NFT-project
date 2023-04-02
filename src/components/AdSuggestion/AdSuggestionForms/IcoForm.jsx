import Button from "../../UI/Button/Button";
import classes from './Form.module.scss'

export default function CryptoForm() {

    const handleSubmit =(e)=> {
        e.preventDefault()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className={classes.formInput}>
                <label>Project Name</label>
                <input className={classes.cryptoinput} type="text"/>
            </div>
            <div className={classes.formInput}>
                <label>Start Date</label>
                <input className={classes.cryptoinput} type="date"/>
            </div>
            
            <Button className='btn-suggestform'>Suggest Ads</Button>
        </form>
    </div>
  )
}
