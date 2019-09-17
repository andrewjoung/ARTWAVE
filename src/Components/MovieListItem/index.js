import React from 'react';

const style = {
    color: 'white',
    // display: "flex",
    // justifyContent: "center"
}

const style2 = {
    marginBottom: "0px",
    marginTop: "0px",
    backgroundColor: "#B33434"
}

const style3 = {
    color: 'black'
}

export default function MovieListItem(props) {
    return (
        <div>
            <div style={style} className="row mt-2 mb-2">

                <div className="col-sm-6">
                    <p>{props.movieData.title}</p>
                </div>

                <div className="col-sm-3">
                    <p>{props.movieData.director}</p>
                </div>

                <div className="col-sm-3 text-center">
                    <button style={style2} type="button" className="btn btn-md" data-toggle="modal" data-target={props.modalRef}>View Media</button>
                </div>

                {/* Modal HTML */}
                <div style={style3} className="modal fade" id={props.modalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">

                            <div className="modal-header">
                                <img src={props.movieData.artUri} alt="work of art artwork"></img>
                                {/* <h5 style={style3} className="modal-title" id="exampleModalLabel"></h5> */}
                                <button type="button" className="close text-center" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">{props.movieData.title}</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                {props.movieData.synopsis}
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-md" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
