import React, { Component } from 'react';
import projectsCss from '../style/projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub } from "react-icons/fa";


class Projects extends Component {
    render() {
        return (
            <div className={this.activeOrNot()}>
                <div className={projectsCss.Title}>
                    <h1>MY WORK</h1>
                    <h2><span>MY</span>PORTFIOLIO</h2>
                    <p>Here is some of my work that i've done in various programming languages</p>
                </div>
                <main className={projectsCss.bigGridContainer}>
                    <div className={projectsCss.firstProj}>
                        <h2>SOURCE CODE</h2>
                        <a href="https://github.com/omaromarsalhi/simple_c_game">
                            <FaGithub className={projectsCss.gitIcon}/>
                        </a>
                    </div>
                    <div className={projectsCss.secondProj}>
                        <h2>SOURCE CODE</h2>
                        <a href="https://github.com/omaromarsalhi/X-O_c-">
                            <FaGithub className={projectsCss.gitIcon}/>
                        </a>
                    </div>
                    <div className={projectsCss.thirdProj}>
                        <h2>SOURCE CODE</h2>
                        <a href="https://github.com/omaromarsalhi/gestion-des-collaborateur">
                            <FaGithub className={projectsCss.gitIcon}/>
                        </a>
                    </div>
                </main>
            </div>
        );
    }
    activeOrNot=()=>{
        return (this.props.theActivepage===3)?projectsCss.active:projectsCss.notActive;
    }
}

export default Projects;