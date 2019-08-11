import React from 'react';
import { Dropdown } from "semantic-ui-react";

const style = {
    color: 'white',
    display: "flex",
    justifyContent: "center"
}

const style2 = {
    marginBottom: "0px",
    marginTop: "0px",
    backgroundColor: "#B33434"
}

const style3 = {
    color: 'black'
}

const shareFriends = [
    { key: "John", text: "John", value: "John" },
    { key: "Joe", text: "Joe", value: "Joe" },
    { key: "Jason", text: "Jason", value: "Jason" },
    { key: "Frank", text: "Frank", value: "Frank" },
    { key: "Jane", text: "Jane", value: "Jane" }
]

export default function BookListItem(props) {
    return (
        <div>
            <div style={style} className="row mt-2 mb-2 align-items-center">

                <div className="col-md-6">
                    <p style={{ textAlign: "left" }}>{props.bookData.title}</p>
                </div>

                <div className="col-md-3">
                    <p style={style}>{props.bookData.author}</p>
                </div>

                <div className="col-md-2">
                    <button style={style2} type="button" className="btn btn-md" data-toggle="modal" data-target={props.modalRef}>View Media</button>
                </div>

                {/* Modal HTML */}
                <div style={style3} className="modal fade" id={props.modalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">

                            <div className="modal-header">
                                <img src={props.bookData.artUri} alt="work of art artwork"></img>
                                {/* <h5 style={style3} className="modal-title" id="exampleModalLabel"></h5> */}
                                <button type="button" className="close text-center" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">{props.bookData.title}</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                {props.bookData.synopsis}
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* TODO: Make this a datalist of current friends */}
                                {/* <button type="button" className="btn btn-primary">Recommend to friend</button> */}
                                <Dropdown
                                    placeholder="Select Friend"
                                    fluid
                                    search
                                    selection
                                    options={shareFriends}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
