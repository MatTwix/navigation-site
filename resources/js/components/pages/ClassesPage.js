import React from 'react';
import {useSelector} from "react-redux";
import {classesSelectors} from "../redux/reducers/Classes/index";
import {teachersSelectors} from "../redux/reducers/Teachers/index"

const ClassesPage = () => {
    const classesList = useSelector(classesSelectors.classesList);
    const teachersList = useSelector(teachersSelectors.teachersList);

    const studyClassesList = classesList.filter(item => item.destination === 1);
    const serviceClassesList = classesList.filter(item => item.destination === 0);

    return (
        <div>
            <h1>classes</h1>
            {studyClassesList.map(item => {
                return (
                    <div key={item.id}>
                        <p>Class name: {item.name}</p>
                        <p>Subjects that taught in this class: {typeof item.subjects === 'string' ? item.subjects : item.subjects.join`, `}</p>
                        <p>Way: {item.way}</p>
                        <p>Owner: {item.ownerId !== 0 ? teachersList.find(teacher => teacher.id === item.ownerId).name : 'none'}</p>
                        <p>Photos links : {item.photos.map(photoId => `${item.destination}/${photoId}.jpg`).join`, `}</p>
                        <hr/>
                    </div>
                )
            })}
            <h1>Service rooms</h1>
            {serviceClassesList.map(item => {
                return (
                    <div key={item.id}>
                        <p>Class name: {item.name}</p>
                        <p>Way: {item.way}</p>
                        <p>Photos links : {item.photos.map(photoId => `${item.destination}/${photoId}.jpg`).join`, `}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

export default ClassesPage;
