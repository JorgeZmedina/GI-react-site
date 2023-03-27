import { Component } from 'react';
import BasicInfo from './components/BasicInfo';
import './App.css';
import './components/BasicInfo.css';


// Very Easy
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>Jorge Medina</p>
//         <p>Phone #(248) 434-5508</p>
//         <p>DOB: 02/18/2001</p>
//       </div>
//     );
//   };
// };

// Easy
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {}
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>Jorge Medina</p>
//         <p>Phone #(248) 434-5508</p>
//         <p>DOB: 02/18/2001</p>
//       </div>
//     );
//   }
// }

// Medium
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         firstName: 'Jorge',
//         number: '(248)434-5508',
//         DOB: '02/18/2001'
//       }
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.person.firstName}
//         <BasicInfo person={this.state.person} />
//       </div>
//     );
//   }
// }

//Hard
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "Jorge Medina",
          number: "(248)434-5508",
          DOB: "02/18/2001",
        },
        {
          name: "barack Obama",
          number: "(845) 354-9912",
          DOB: "08/04/1961",
        },
        {
          name: "Spikey",
          number: "(845) 354-9912",
          DOB: "09/30/2017",
        },
        {
          name: "lisbeth Delgado",
          number: "(858)-651-5050",
          DOB: "05/30/2001",
        },
        {
          name: "Kevin Hart",
          number: "(206) 569-5829",
          DOB: "07/06/1979",
        }
      ]
    }
  }


render() {
  return (
    <div>
      <BasicInfo person={this.state.person[0]} />
      <BasicInfo person={this.state.person[1]} />
      <BasicInfo person={this.state.person[2]} />
      <BasicInfo person={this.state.person[3]} />
      <BasicInfo person={this.state.person[4]} />
    </div>
  )
}
}
export default App;

