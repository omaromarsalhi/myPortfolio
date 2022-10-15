import React, { Component } from 'react';
import Home from './componenet/home';
import Icons from './componenet/icons';
import AboutMe from './componenet/aboutMe';
import Projects from './componenet/projects';
import ContactMe from './componenet/contactMe';


class App extends Component {
    state={
       theActivepage:1,
    }
    render() {
        return (
            <div>
                <Home
                theActivepage={this.state.theActivepage}
                />
                <AboutMe
                theActivepage={this.state.theActivepage}
                />
                <Projects
                theActivepage={this.state.theActivepage}
                />
                <ContactMe
                theActivepage={this.state.theActivepage}
                />
                <Icons
                    theActivepage={ this.state.theActivepage}
                    onchangeActive1={this.resteActive1}
                    onchangeActive2={this.resteActive2}
                    onchangeActive3={this.resteActive3}
                    onchangeActive4={this.resteActive4}
                />
            </div>
        );
    }
    resteActive1=()=>{
        this.setState({theActivepage:1});
    };
    resteActive2=()=>{
        this.setState({theActivepage:2});
    };
    resteActive3=()=>{
        this.setState({theActivepage:3});
    };
    resteActive4=()=>{
        this.setState({theActivepage:4});
    };
}

export default App;
// class App() {
//     state={
//         theActiveButt:0,
//     }
//     return (
//         <div>
//             <Home
//             home={this.state.theActiveButt}
//             />
//             {/* <AboutMe/> */}
//             <Icons/>
//         </div>
//     );
// }
// export default App;