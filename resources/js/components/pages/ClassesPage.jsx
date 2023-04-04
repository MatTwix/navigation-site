import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import {classesSelectors} from "../redux/reducers/Classes/index";
import {Link} from "react-router-dom";
import axios from 'axios';

const ClassesPage = () => {
    // const classesList = useSelector(classesSelectors.classesList);

    const [studyClassesList, setStudyClassesList] = useState([]);
    const [serviceRoomsList, setServiceRoomsList] = useState([]);

    const fetchClassrooms = async() => {
        await axios.get('http://localhost:8000/api/classrooms').then(({data}) => {
            setStudyClassesList(data.data.filter(item => item.destination == 1));
            setServiceRoomsList(data.data.filter(item => item.destination == 0));
        });
    }

    useEffect(() => {
        fetchClassrooms();
    }, []);

    return (
        <div>
            <h1>Classes</h1>
            { studyClassesList.length != 0 
                ? studyClassesList.map(classroom => {
                    return (
                        <div key={classroom.id}>
                            <p>{classroom.name}</p>
                            <p>{classroom.number}</p>
                            <p>{classroom.way_to}</p>
                            <p>{classroom.owner.name}</p>
                            <div>{classroom.images.map(image => {
                                return (
                                    <div key={image.id}>
                                        <p>{image.path}</p>
                                    </div>
                                );
                            })}</div>
                            <Link to={`/classes/${classroom.id}`}>Watch more</Link>
                            <hr/>
                        </div>
                    )
                })
                : <p>Учебные классы отсутствуют</p>
            }
            <h1>Service rooms</h1>
            { serviceRoomsList.length != 0 
                ? serviceRoomsList.map(classroom => {
                    return (
                        <div key={classroom.id}>
                            <p>{classroom.name}</p>
                            <p>{classroom.number}</p>
                            <p>{classroom.way_to}</p>
                            <p>{classroom.owner.name}</p>
                            <div>{classroom.images.map(image => {
                                return (
                                    <div key={image.id}>
                                        <p>{image.path}</p>
                                    </div>
                                );
                            })}</div>
                            <Link to={`/classes/${classroom.id}`}>Watch more</Link>
                            <hr/>
                        </div>
                    )
                })
                : <p>Cлужебные помещения отсутствуют</p>
            }
        </div>
    );
};

export default ClassesPage;
