import React, { Component } from 'react'
// export default class BasicInfo extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//            <div>
//             <li>{this.props.person.name}</li>
//             <li>{this.props.person.number}</li>
//             <li>{this.props.person.DOB}</li>
//         </div> 
//         )
//     }
// }
//hard
export default class BasicInfo extends Component {
    render() {
        return (
            <div className='info-block'>
                <div className='content'>
                    <h2>Name: {this.props.person.name}</h2>
                    <h3>Number: {this.props.person.name}</h3>
                    <h3>DOB: {this.props.person.DOB}</h3>
                </div>
            </div>
        );
    };
};