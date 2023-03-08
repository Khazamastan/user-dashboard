import "./Modal.css";

const Modal = ({
  isOpen,
  modalTitle,
  content,
  data,
  onCancel,
  onAction,
  actionText = "Delete",
  cancelText = "Cancel"
}) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal-container">
        <h1 className="modal-header">{modalTitle}</h1>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
        <div className="modal-footer">
          <button className="button-green" onClick={() => onAction(data)}>{actionText}</button>
          <button className="button-cancel" onClick={onCancel}>{cancelText}</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
