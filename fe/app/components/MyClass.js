import React from 'react';
import StdList from './StdList';

class MyClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            students : [
            {
                name: "jimi",
                major: "컴퓨터",
                score: 84
            },
            {
                name: "ami",
                major: "수학",
                score: 81
            },
            {
                name: "nara",
                major: "토목",
                score: 87
            },
            {
                name: "sarang",
                major: "의료정보",
                score: 87
            },
            {
                name: "star",
                major: "식품공학",
                score: 89
            }
        ]}
    }

    render() {
        return ( 
            <div>
                <h1>Student List</h1>
                <ul>
                    {this.state.students.map( (student, i) =>{
                        return (<StdList name={student.name} key={i} major={student.major} score={student.score} />)
                    })}
                </ul>
            </div>
        )
    }
}

export default MyClass;