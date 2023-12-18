import './Popup.css'

const Popup = (props) => {
    return (props.trigger) ? (
        <div id="popup" className="popup">
            <div className="popup-content">
                <button className="close" onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
            </div>
        </div >
    ) : ""
}

export default Popup