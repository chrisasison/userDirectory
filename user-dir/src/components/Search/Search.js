import React from 'react';
import "./Search.css";


function Search(props) {
    return (
        <form>
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control w-25 d-flex justify-content-center"
                    placeholder="Search by Name"
                    id="search"
                    list="name-list"
                />
                <datalist id="name-list">
                    {props.list}
                </datalist>
                <button onClick={props.handleFormSubmit} className="btn btn-primary" id="searchbtn">
                    Find User
                </button>
            </div>
        </form>
    )
}

export default Search
