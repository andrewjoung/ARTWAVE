import React, { Component } from 'react';
import './style.css';
import api from '../../API/api';
import Form from '../Search';
import ImageCard from "../ImageCard";

import texture1 from "../../images/texture1.jpg";
import texture2 from "../../images/texture2.jpg";
import texture3 from "../../images/texture3.jpg";
import texture4 from "../../images/texture4.jpg";
import texture5 from "../../images/texture5.jpg";
import texture6 from "../../images/texture6.jpg";
import texture7 from "../../images/texture7.jpg";
import texture8 from "../../images/texture8.jpg";
import texture9 from "../../images/texture9.jpg";
import texture10 from "../../images/texture10.jpg";
import texture11 from "../../images/texture11.jpg";
import texture12 from "../../images/texture12.jpg";


class CreateList extends Component {

    state = {
        category:"",
        loginInfo:{},
        listTitle:"",
        listInfo:{},
        listPinned : false,
        titleSubmitted: false,
        imagesComponents:[],
        imagesComponents2:[],
        imagesComponents3:[],
        imageClick:""
    }

    componentDidMount = () => {
        console.log(this.props.location.state);
        console.log("Inside create list", this.props.location.state.loginInfo);
        this.setState({loginInfo: this.props.location.state.loginInfo, category: this.props.location.state.category});
        //console.log("The state of create-list", this.state.loginInfo);
        let images = <div className="noImages"/>
        this.setState({imagesComponents: images});
        let images2 = <div className="noImages"/>
        this.setState({imagesComponents2: images2});
        let images3 = <div className="noImages"/>
        this.setState({imagesComponents3: images3});
    }

    handleChange = event => {
        //const name = event.target.name;
        const value = event.target.value;
        //document.findElementById("createList").disabled = false;
        this.setState({listTitle: value});
    }

    handleClick = event => {
        event.preventDefault();

        console.log("Make API calls");

        let listData = {
            username: this.state.loginInfo.username,
            title: this.state.listTitle,
            category: this.state.category,
            pinned: this.state.listPinned
        }

        api.createList(listData).then(res => {
            console.log(res);
            let listToUse = {
                title: res.data.title,
                id: res.data._id,
                category: res.data.category
            }

            this.setState({listInfo: listToUse, titleSubmitted: true});
        });
    }

    imageOnClick = id => {
        console.log(id);
        //let imageName = event.target.imageName;
        
        //console.log(event.target.getAttribute("name"));
        //console.log(event.target.name);
        // this.setState({imageClicked: imageName});
        // let stringToDisplay = "You chose" + imageName;
        // let imageText = <div><p>{stringToDisplay}</p></div>
        // let images = <div className="noImages"/>
        // this.setState({imagesComponents:imageText, imagesComponents2:images, imagesComponents3:images})
    }

    changeFavoriteColor = event => {
        if(this.state.listPinned === false) {
            event.target.id = "clickedFavoriteIcon";
            this.setState({listPinned: true});
            console.log(event.target.className);
            let imageArray = [texture1, texture2, texture3, texture4];
            let imageArray2 =[texture5,texture6,texture7,texture8];
            let imageArray3 =[texture9,texture10,texture11,texture12];
            let count = 0;
            let images = imageArray.map(image => {
                count++;
                let idText = "texture" + count;
                //return  <div className="col imageOption" id={idText} name={image} style={{background:"url(" + image + ") center/cover"}} onClick={this.imageOnClick}></div>
                return <ImageCard onClick={this.imageOnClick} name={image} id={idText} />
            });
            this.setState({imagesComponents: images});
            let images2 = imageArray2.map(image => {
                count++;
                let idText = "texture" + count;
                //return <div className="col imageOption" id={idText} name={image} style={{background:"url(" + image + ") center/cover"}} onClick={this.imageOnClick}></div>
                return <ImageCard onClick={this.imageOnClick} name={image} id={idText} />
            });
            this.setState({imagesComponents2: images2});
            let images3 = imageArray3.map(image => {
                count++;
                let idText = "texture" + count;
                //return <div className="col imageOption" id={idText} name={image} style={{background:"url(" + image + ") center/cover"}} onClick={this.imageOnClick}></div>
                return <ImageCard onClick={this.imageOnClick} name={image} id={idText} />
            });
            this.setState({imagesComponents3: images3});
        } else {
            event.target.id = "favoriteIcon";
            this.setState({listPinned: false});
            let images = <div className="noImages"/>
            this.setState({imagesComponents: images});
            let images2 = <div className="noImages"/>
            this.setState({imagesComponents2: images2});
            let images3 = <div className="noImages"/>
            this.setState({imagesComponents3: images3});
        }
    }

    render() {
        console.log("The state of create list", this.state);
        if(this.state.titleSubmitted === false) {
            return(
                <div className="container">
                    <form className="text-center" action="#!">
    
                        <p className="h4 mb-4">Sign in</p>
    
                        <input value={this.state.listTitle} name="title" type="text" onChange={this.handleChange} id="listTitle" className="form-control mb-4" placeholder="Title" />
    
                        <i className="fas fa-star fa-lg" id="favoriteIcon" onClick={this.changeFavoriteColor}></i>
    
                    </form>
                    <div className="row imageDiv">
                        {this.state.imagesComponents}
                    </div>
                    <div className="row imageDiv">
                        {this.state.imagesComponents2}
                    </div>
                    <div className="row imageDiv">
                        {this.state.imagesComponents3}
                    </div>
                    <button className="btn btn-info btn-block my-4" id="createList" type="submit" onClick={this.handleClick} disabled={!this.state.listTitle}>Create List</button>
                </div>
            );
        } else if (this.state.titleSubmitted === true) {
            return (
                <Form list={this.state.listInfo}/>
            );
        } 

    }

}

export default CreateList;