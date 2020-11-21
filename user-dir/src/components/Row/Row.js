import React from 'react';
import "./Row.css";

function Row(props) {
    return (
        <tr key={props.id} className="row-tr">
            <td>
                <img
                src={props.image}
                alt={props.name}
                onClick={props.handleClick}
                data_image={props.largeImage}
                data_phone={props.phoneAttr}
                data_email={props.emailAttr}
                data_dob={props.dobAttr}
                className="id-pic"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                />
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td><a href={`mailto:${props.email}`}>{props.email}</a></td>
            <td>{props.dob}</td>
        </tr>
    )
};

export default Row