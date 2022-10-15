import React, { Component } from 'react';
import contactMeCss from '../style/contactMe.module.css';
import { FaLocationArrow,FaGithub,FaFacebookF } from "react-icons/fa";
import { FiMail,FiLinkedin} from "react-icons/fi";
import { MdCastForEducation } from "react-icons/md";
import { TbNumbers,TbLanguageHiragana } from "react-icons/tb";


class ContactMe extends Component {
    render() {
        return (
            <div className={this.activeOrNot()}>
                <div className={contactMeCss.Title}>
                    <h1>MY BLOGS</h1>
                    <h2><span>CONTACT</span>ME</h2>
                </div>
                <main className={contactMeCss.bigGridContainer}>
                    <div className={contactMeCss.columnOne}>
                        <h2>CONTACT ME HERE</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, enim. Magnam, harum molestiae. Illum porro hic tempora veniam maxime et?</p>
                        <div>
                            <p><FaLocationArrow className={contactMeCss.icon1}/> Location <span className={contactMeCss.span1}>:Tunisia,Tunis</span></p>
                        </div>
                        <div>
                            <p><FiMail className={contactMeCss.icon2}/> Email  <span className={contactMeCss.span2}>:omar.salhi.job@gmail.com</span> </p>
                        </div>
                        <div>
                            <p><MdCastForEducation className={contactMeCss.icon3}/> Education  <span className={contactMeCss.span3}>:ESPRIT</span></p>
                        </div>
                        <div>
                            <p><TbNumbers className={contactMeCss.icon4}/> Mobile number <span className={contactMeCss.span4}>:+216 29624921</span></p>
                        </div>
                        <div>
                            <p><TbLanguageHiragana className={contactMeCss.icon5}/> Languages <span className={contactMeCss.span5}>:Arabic,English</span></p>
                        </div>
                    </div>
                    <div className={contactMeCss.columnTwo}>
                        <div className={contactMeCss.columnTwoRow1}>
                            <input type="text" placeholder="your name"/>
                            <input type="text" placeholder="your email"/>
                        </div>
                        <div className={contactMeCss.columnTwoRow2}>
                            <textarea placeholder="your subject..." cols="65" rows="2"></textarea>
                        </div>
                        <div className={contactMeCss.columnTwoRow3}>
                        <textarea placeholder="message here..." cols="65" rows="14"></textarea>
                        </div>
                    </div>
                    <div className={contactMeCss.SocialMedia}>
                        <FaGithub className={contactMeCss.gitIcon}/>
                        <FaFacebookF className={contactMeCss.fcbIcon}/>
                        <FiLinkedin className={contactMeCss.linkedinIcon}/>
                    </div>
                </main>
            </div>
        );
    }
    activeOrNot=()=>{
        return (this.props.theActivepage===4)?contactMeCss.active:contactMeCss.notActive;
    }
}

export default ContactMe;