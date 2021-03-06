import '../Alert/Alert.css'

const Alert = ({title, description, extra, funcAlert }) => {
    return (
        <div>
            <div className="alert dFlexCol centered">
                <p className="fs5 mt1 alertText">{title}</p>
                <p className="fs5 mt3 altFont alertText">{description}</p>
                <p className='fs7  mt2 altFont alertText'>{extra}</p>
                <button className='btn btnSecondary alertClose' onClick={() => {funcAlert(false)}}>X</button>
            </div>
        </div>
    )
}

export default Alert