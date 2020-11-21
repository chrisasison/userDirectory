import React from 'react';
import "./Modal.css";

function Modal(props) {
    return (
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{props.title}</h5>
            </div>
            <div className="modal-body">
                <img id="modal-img" src={props.imageLg} alt={props.name} />
                <p>Phone Number: {props.phone}</p>
                <p>Email: <a id="modal-a" href={`mailto:${props.email}`}>{props.email}</a></p>
                <p>Birthday: {props.dob}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Modal
