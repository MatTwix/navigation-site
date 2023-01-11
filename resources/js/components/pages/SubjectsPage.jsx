import React from 'react';
import {useSelector} from "react-redux";
import {subjectsSelectors} from "../redux/reducers/Subjects/index"
import {Link} from "react-router-dom";

const SubjectsPage = () => {
    const subjectsList = useSelector(subjectsSelectors.subjectsList);
  
    return (
        <div>
            <h1>Subjects</h1>
            {subjectsList.map(subject => {
                return (
                    <div key={subject.id}>
                        <p>{subject.name}</p>
                        <br/>
                        <Link to={`/subjects/${subject.id}`}>Watch more</Link>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

export default SubjectsPage;
