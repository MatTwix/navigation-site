import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import {teachersSelectors} from "../redux/reducers/Teachers/index"
import {Link} from "react-router-dom";
import axios from 'axios';

const TeachersPage = () => {
    // const teachersList = useSelector(teachersSelectors.teachersList);
    // const teachersImagesDir = useSelector(teachersSelectors.teachersImagesDir);
    const [teachersList, setTeachersList] = useState([]);

    const fetchTeachers = async() => {
        await axios.get('http://localhost:8000/api/teachers').then(({data}) => {
            setTeachersList(data.data);
        })
    }

    useEffect(() => {
        fetchTeachers();
    }, []);

    return (
        <div>
            <h1>Teachers</h1>
            {teachersList.length != 0 
                ? teachersList.map(teacher => {
                    return (
                        <div key={teacher.id}>
                            <p>{teacher.name}</p>
                            <p>{teacher.image}</p>
                            <div>{teacher.subjects.length != 0
                                ? teacher.subjects.map(subject => {
                                    return(
                                        <p key={subject.id}>{subject.name}</p>
                                    )
                                })
                                : <p>Данный учитель не ведет никаких предметов.</p>
                            }</div>
                            <br/>
                            <Link to={`/teachers/${teacher.id}`}>Watch more</Link>
                            <hr/>
                        </div>
                    )
                })
                : <p>Учителей нет.</p>
            }
        </div>
    );
};

export default TeachersPage;
