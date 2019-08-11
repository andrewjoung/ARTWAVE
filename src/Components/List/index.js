import React, {Component} from 'react';
import "./style.css";
import API from "../../API/api.js";
import ListDisplay from "../ListDisplay";

class List extends Component {
    state = {
        id: this.props.match.params.id,
        category: this.props.match.params.category,
        // listData: this.props.location.state.listData
        listData: {},
        listComments: [],
        renderList: false,
        textarea: ""
    }

    // we have to make this api call here unless we can figure out how to pass all the api data from header through as a prop
    componentDidMount = () => {
        console.log("Attempt to get list data");
        console.log("List ID: ", this.state.id, "\n");
        API.getListData(this.state.id).then(data => {
            console.log("\nAxios response: ", data.data, "\n")
            this.setState({
                listData: data.data,
                listComments: data.data.comments,
                renderList: true
            });
        }).catch(err => {
            console.log(err);
        });
    }

    //
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    //
    sendComment = (id) => {
        // console.log(id);
        const commentData = {
            submittingUserId: JSON.parse(localStorage.getItem("loginInfo")).id,
            comment: this.state.textarea,
            listId: this.state.cardClickId
        }
        API.createComment(commentData).then(data => {
            // console.log(data.data);
            const updateData = {
                listId: this.state.id,
                commentId: data.data._id
            }
            API.addCommentToList(updateData).then(res => {
                console.log("\nNew comment id pushed to list comment array in db: ", res, "\n");
                const newCommentArray = this.state.listComments;
                newCommentArray.push(data.data);
                this.setState({
                    listComments: newCommentArray
                });
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });    
    }
    
    render = () => {
        if (this.state.renderList) {
            return (
                <div>
                    {/* Make sure everything in the bootstrap container is gridded out with rows and cols */}
                    <div className="container">

                        {/* Testing purposes - will leave this until cinema and music are also working */}
                        {/* <p>This is a {this.state.category} list with id {this.state.id}</p>
                        <hr/> */}

                        <h1>
                            {this.state.listData.title}
                            <span>                            
                                <h3>
                                    by {JSON.parse(localStorage.getItem("loginInfo")).firstName}
                                </h3>
                            </span>
                        </h1>
                        {/* make a form here when sharing with friend */}
                        <button id="shareListBtn" className="btn">Share This List</button>
                        <hr/>

                        {this.state.listData.items.map(item => (
                            <div>
                                <ListDisplay comments={this.listComments} clickId={this.state.id} synopsis={item.synopsis} id={item._id} name={item.title} image={item.artUri} author={item.author}/>
                                <hr className="underItemRule"/>
                            </div>
                        ))}
                        <hr/>

                        <h3>Discussion</h3>
                        <hr/>
                     
                        {this.state.listComments.map(comment => (
                            <div className="row commentRow">
                                <div className="col-md-11">
                                    <p className="comments">Submitted by UserID: {comment.user}: {comment.body}</p>
                                    <hr className="underCommentRule"/>
                                </div>
                            </div>
                        ))}
                      
                        <h3>Share Your Thoughts</h3>
                        <hr/>

                        <div className='row addCommentRow'>
                            <div id="addCommentCol" className="col-md-6">
                                <textarea onChange={this.handleChange} name="textarea" value={this.state.textarea}></textarea>
                                <button onClick={() => this.sendComment(this.state.id)} className="btn btn-md addCommentBtn">Submit Comment</button>
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <h1>Nothing to display</h1>
            )
        }
    }
}

export default List;
