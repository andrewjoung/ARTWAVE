import React, { Component } from "react";
import "./style.css";
import MainBody from "../MainBody";

class Header extends Component {

    state = {
        page:""
    }

    componentDidMount() {
        this.setState({page: "cinema"});
        //console.log("initial state = " + this.state.page);
    }

    handleClick = event => {
        //console.log(event.target.name);
        this.setState({
            page: event.target.name
        });

        //console.log("clicked nav state is now = " + this.state.page);
    }



    render() {
        return (

            <div>
                <div id="userInformation">

                </div>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" onClick={this.handleClick}>
                        <a className="nav-link active" id="cinema-tab" data-toggle="tab" name="cinema" role="tab">Cinema</a>
                    </li>
                    <li className="nav-item" onClick={this.handleClick}>
                        <a className="nav-link" id="profile-tab" data-toggle="tab" name="literature" role="tab">Literature</a>
                    </li>
                    <li className="nav-item" onClick={this.handleClick}>
                        <a className="nav-link" id="contact-tab" data-toggle="tab" name="music" role="tab">Music</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                {/* <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Raw denim you
                    probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                    keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
                    placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi
                    qui.</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Food truck fixie
                    locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,
                    blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
                    Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                    PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS
                    salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                    sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester
                    stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape
                    wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack
                    lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
                    locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify
                    squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie
                    etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog
                    stumptown. Pitchfork sustainable tofu synth chambray yr.</div> */}

                    <MainBody page={this.state.page}/>
                </div>
            </div>
        );
    }
}

export default Header;