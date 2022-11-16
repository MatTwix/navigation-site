import React from 'react';
import {useSelector} from "react-redux";
import {teachersSelectors} from "../redux/reducers/Teachers/index"
import {Link} from "react-router-dom";

const TeachersPage = () => {
    const teachersList = useSelector(teachersSelectors.teachersList);
    const teachersImagesDir = useSelector(teachersSelectors.teachersImagesDir);
    const path = '/storage/images'

    const makePath = (dir, id) => `${path}/${dir}/${id}.jpg`

    return (
        <div>
            <h1>Teachers</h1>
            {teachersList.map(teacher => {
                return (
                    <div key={teacher.id}>
                        <p>{teacher.name}</p>
                        <img src={makePath(teachersImagesDir, teacher.photo_id)} alt="photo"/>
                        <br/>
                        <Link to={`/teachers/${teacher.id}`}>Watch more</Link>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

export default TeachersPage;
