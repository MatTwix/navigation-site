import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {teachersSelectors} from "../redux/reducers/Teachers/index";

const TeacherPage = () => {
    const params = useParams();

    const teachersList = useSelector(teachersSelectors.teachersList);
    const teachersImagesDir = useSelector(teachersSelectors.teachersImagesDir);
    const path = '../../../../storage/app/public/images'

    const makePath = (dir, id) => `${path}/${dir}/${id}.jpg`

    const id = +params.id;

    const teacher = teachersList.find(item => item.id === id);

    return (
        <div>
            <h1>Teacher #{id}</h1>
            <Link to={"/teachers"}>Go back</Link>
            <div>
                <p>Name: {teacher.name}</p>
                <p>Subjects that taught by this teacher: {typeof teacher.subjects === 'string' ? teacher.subjects : teacher.subjects.join`, `}</p>
                <p>Class whose class leader is this teacher: {teacher.class_leader !== '' ? teacher.class_leader : 'none'}</p>
                <img src={makePath(teachersImagesDir, teacher.photo_id)} alt="photo"/>
            </div>
        </div>
    )
};

export default TeacherPage;
