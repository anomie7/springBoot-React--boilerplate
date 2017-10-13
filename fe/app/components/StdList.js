import React from 'react';

class StdList extends React.Component{
    render(){
        return(
           <li>{this.props.name } {this.props.major} {this.props.score }</li>
        )
    }
}


export default StdList;