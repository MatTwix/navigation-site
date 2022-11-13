import React from 'react';
import {useSelector} from "react-redux";
import {teachersSelectors} from "../redux/reducers/Teachers/index"

const TeachersPage = () => {
    const teachersList = useSelector(teachersSelectors.teachersList);

    return (
        <div>
            <h1>teachers</h1>
            {teachersList.map(teacher => {
                return (
                    <div key={teacher.id}>
                        <p>Name: {teacher.name}</p>
                        <p>Subjects that taught by this teacher: {typeof teacher.subjects === 'string' ? teacher.subjects : teacher.subjects.join`, `}</p>
                        <p>Class whose class leader is this teacher: {teacher.class_leader !== '' ? teacher.class_leader : 'none'}</p>
                        <p>Photos: 3/{teacher.photo_id}.jpg</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

export default TeachersPage;
