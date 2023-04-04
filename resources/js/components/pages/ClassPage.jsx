import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {classesSelectors} from "../redux/reducers/Classes/index";
import {teachersSelectors} from "../redux/reducers/Teachers/index";
import axios from 'axios';

const ClassPage = () => {
    const params = useParams();

    const classroom_id = +params.id;
    // const classesList = useSelector(classesSelectors.classesList);
    // const teachersList = useSelector(teachersSelectors.teachersList)

    const [classroom, setClassroom] = useState([]);

    const fetchClassroom = async() => {
        await axios.get(`http://localhost:8000/api/classrooms/${classroom_id}`).then(({data}) => {
            setClassroom(data.data);
        });
    }

    useEffect(() => {
        fetchClassroom();
    }, []);

    return (
        <div>
            <Link to={"/classes"}>Go back</Link>
            <h1>Class #{classroom_id}</h1>
            {classroom.length != 0
                ?  <div>
                        <p>Class name: {classroom.name}</p>
                        <p>Number: {classroom.number}</p>
                        {classroom.destination == 1 ? <p>Subjects that taught in this class: {classroom.subjects.map(subject => subject.name).join`, `}</p> : <p>В этом классе не ведутся уроки</p>}
                        <p>Way to: {classroom.way_to}</p>
                        <p>Owner: {classroom.owner.name ? classroom.owner.name : 'none'}</p>
                        <div>{classroom.images.map(image => {
                            return (
                                <div key={image.id}>
                                <p>{image.path}</p>
                                </div>
                            );
                        })}
                        </div>
                    </div>
                : <p>Ошибка поиска класса #{classroom_id}</p>
            }
        </div>
    );
};

export default ClassPage;
