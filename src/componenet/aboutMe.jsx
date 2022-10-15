import React, { Component } from 'react';
import aboutMeCss from '../style/aboutMe.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload,faBuilding} from '@fortawesome/fontawesome-free-solid';
import spectrum from '../images/images.png';

class AboutMe extends Component {
    render() {
        return (
            <div className={this.activeOrNot()}>
                <div className={aboutMeCss.Title}>
                    <h1>MY STATS</h1>
                    <h2><span>ABOUT</span> ME</h2>
                </div>
                <main className={aboutMeCss.bigGridContainer}>
                    <div className={aboutMeCss.infoAboutMe}>
                        <span>
                            <h2>INFORMATION ABOUT ME</h2>
                            <pre> </pre>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, debitis nesciunt! Incidunt ex, debitis nesciunt! Incidunt ex!</p>
                            <pre>    </pre>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, debitis nesciunt! Incidunt ex, debitis nesciunt! Incidunt ex ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, debitis nesciunt! Incidunt ex, debitis nesciunt! Incidunt ex!</p>
                        </span>
                        <a  href="" >
                                <p className={aboutMeCss.cv}>Download Cv</p>
                                <FontAwesomeIcon className={aboutMeCss.iconDownload} icon={faDownload}/>
                            </a>
                    </div>
                    <div className={aboutMeCss.gridContainer}>
                        <div className={aboutMeCss.grid1}>
                            <h3>650+</h3>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <div className={aboutMeCss.grid2}>
                            <h3>10+</h3>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className={aboutMeCss.grid3}>
                            <h3>300+</h3>
                            <p>HAPPY CLIENTS</p>
                        </div>
                        <div className={aboutMeCss.grid4}>
                            <h3>400+</h3>
                            <p>CUSTOMERS REWIES</p>
                        </div>
                    </div>
                    <div className={aboutMeCss.horizantalLine}>
                            <h2>MY SKILLS</h2>
                    </div>
                    <div className={aboutMeCss.skillsGrid}>
                        <div className={aboutMeCss.stausBarColum1}>
                            <div>
                                <h2>PYTHON</h2>
                                <p className={aboutMeCss.stausBar11}>49%</p>
                            </div>
                            <div>
                                <h2>C++</h2>
                                <p className={aboutMeCss.stausBar12}>30%</p>
                            </div>
                            <div>
                                <h2>HTML</h2>
                                <p className={aboutMeCss.stausBar13}>50%</p>
                            </div>
                        </div>
                        <div className={aboutMeCss.stausBarColum2}>
                        <div>
                                <h2>REACTJS</h2>
                                <p className={aboutMeCss.stausBar21}>60%</p>
                            </div>
                            <div>
                                <h2>JAVASCRIPT</h2>
                                <p className={aboutMeCss.stausBar22}>35%</p>
                            </div>
                            <div>
                                <h2>CSS</h2>
                                <p className={aboutMeCss.stausBar23}>50%</p>
                            </div>
                        </div>
                    </div>
                    <div className={aboutMeCss.horizantalLine2}>
                            <h2>MY EXPERIENCE</h2>
                    </div>
                    <div className={aboutMeCss.experienceGrid}>
                        <div className={aboutMeCss.spectrum}>
                            <img src={spectrum} alt="spectrum" />
                        </div>
                        <div className={aboutMeCss.spectrumDescription}>
                            <FontAwesomeIcon className={aboutMeCss.iconBuilding} icon={faBuilding}/>
                            <h2>SPECTRUM GROUP COMPANY</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio rerum veniam quia libero minima dolorem reiciendis corrupti! Labore adipisci cupiditate dicta eaque blanditiis quaerat modi sint dolor aperiam asperiores, fugit ea eveniet, id similique minus quo aut quas laboriosam culpa dolores. Qui culpa possimus harum, nulla architecto consequuntur quam veniam.</p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
    activeOrNot=()=>{
        return (this.props.theActivepage===2)?aboutMeCss.active:aboutMeCss.notActive;
    };
}

export default AboutMe;