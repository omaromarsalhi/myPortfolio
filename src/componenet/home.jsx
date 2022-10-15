import React, { Component } from 'react';
import hero from '../images/hero.png';
import homeCss from '../style/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from '@fortawesome/fontawesome-free-solid';

class Home extends Component {
    render() {
        return (
            <div className={this.activeOrNot()} >
                        <div className={homeCss.shape}></div>
                        <img src={hero} alt='taswera' className={homeCss.heroStyling}/>
                        <div className={homeCss.mainDescreption}>
                            <h1>
                                <span>Hi</span>, I'm <span>Omar Salhi</span> a software engineer student.
                            </h1>
                            <p>I'm a software engineering student at ESPRIT: Private School of Engineering and Technology</p>
                        </div>
                        <a href="../src/images/hero2.png" >
                            <p className={homeCss.downloadButt}>Download Cv</p>
                            <FontAwesomeIcon className={homeCss.iconDownload} icon={faDownload}/>
                        </a>
            </div>
        );
    }
    activeOrNot=()=>{
        return (this.props.theActivepage===1?homeCss.active:homeCss.notActive);

    };
}

export default Home;