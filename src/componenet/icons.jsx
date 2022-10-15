import React, { Component } from 'react';
import iconsCss from '../style/icons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUser,faBriefcase,faEnvelope} from '@fortawesome/fontawesome-free-solid';


class Icons extends Component {
    render() {
        return (
            <div >
                <button onClick={this.props.onchangeActive1} className={this.activeButt(1)}>
                        <FontAwesomeIcon className={iconsCss.icon1} icon={faHome} />
                </button>
                <button onClick={this.props.onchangeActive2} className={this.activeButt(2)}>
                        <FontAwesomeIcon className={iconsCss.icon2} icon={faUser} />
                </button>
                <button onClick={this.props.onchangeActive3} className={this.activeButt(3)}>
                        <FontAwesomeIcon className={iconsCss.icon3} icon={faBriefcase}/>
                </button>
                <button onClick={this.props.onchangeActive4} className={this.activeButt(4)}>
                        <FontAwesomeIcon className={iconsCss.icon4} icon={faEnvelope}/>
                </button>
            </div>
        );
    }
    activeButt=(index)=>{
        return (this.props.theActivepage===index)?iconsCss.active:iconsCss.notActive;
    };
}

export default Icons;