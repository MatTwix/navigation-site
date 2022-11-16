import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {classesSelectors} from "../redux/reducers/Classes/index";
import {teachersSelectors} from "../redux/reducers/Teachers/index";

const ClassPage = () => {
    const params = useParams();

    const classroom_id = +params.id;
    const classesList = useSelector(classesSelectors.classesList);
    const teachersList = useSelector(teachersSelectors.teachersList)

    const classroom = classesList.find(item => item.id === classroom_id);

    const path = '../../../../storage/app/public/images'

    const makePath = (dir, id) => `${path}/${dir}/${id}.jpg`

    return (
        <div>
            <Link to={"/classes"}>Go back</Link>
            <h1>Class #{classroom_id}</h1>
            <div>
                <p>Class name: {classroom.name}</p>
                <p>Number: {classroom.number}</p>
                {classroom.destination === 1 ? <p>Subjects that taught in this class: {typeof classroom.subjects === 'string' ? classroom.subjects : classroom.subjects.join`, `}</p> : ''}
                <p>Way to: {classroom.way}</p>
                <p>Owner: {classroom.ownerId !== 0 ? teachersList.find(teacher => teacher.id === classroom.ownerId).name : 'none'}</p>
                {typeof classroom.photos === 'number'
                    ? <img src={makePath(classroom.destination, classroom.photos)} alt="photo"/>
                    : <div>{classroom.photos.map(photoId => {
                        return (
                            <img src={makePath(classroom.destination, photoId)} alt="photo"/>
                        )
                    })
                    } </div>
                }
            </div>
        </div>
    );
};

export default ClassPage;
