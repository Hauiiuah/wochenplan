const ModalFrame = ({title, visible, children, onSuccess, onClose, hasFailure=false}) => {
    return visible ? (
        <div className="modal-frame">
            <div className="modal-content">
                <span className="modal-close" onClick={onClose}>&times;</span>
                <h1 className="modal-title">{title}</h1>
                {children}
                <div className="modal-buttons">
                    {hasFailure && <button className="modal-button mb-failure" onClick={onClose}>Abbruch </button>}
                    <button className="modal-button mb-success" onClick={onSuccess}>Ok</button>
                </div>
            </div>
        </div>
    ) : <></>
}

export default ModalFrame