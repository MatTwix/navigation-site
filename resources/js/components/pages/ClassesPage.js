import React from 'react';
import {useSelector} from "react-redux";
import {classesSelectors} from "../redux/reducers/Classes/index";
import {teachersSelectors} from "../redux/reducers/Teachers/index"
import {Link} from "react-router-dom";

const ClassesPage = () => {
    const classesList = useSelector(classesSelectors.classesList);

    const studyClassesList = classesList.filter(item => item.destination === 1);
    const serviceClassesList = classesList.filter(item => item.destination === 0);

    const path = '../../../../storage/app/public/images'

    const makePath = (dir, id) => `${path}/${dir}/${id}.jpg`

    return (
        <div>
            <h1>Classes</h1>
            {studyClassesList.map(classroom => {
                return (
                    <div key={classroom.id}>
                        <p>{classroom.name}</p>
                        <p>{classroom.number}</p>
                        {typeof classroom.photos === 'number'
                            ? <img src={makePath(classroom.destination, classroom.photos)} alt="photo"/>
                            : <div>{classroom.photos.map(photoId => {
                                return (
                                    <img src={makePath(classroom.destination, photoId)} alt="photo"/>
                                )
                            }) 
                            } </div>
                        }
                        <Link to={`/classes/${classroom.id}`}>Watch more</Link>
                        <hr/>
                    </div>
                )
            })}
            <h1>Service rooms</h1>
            {serviceClassesList.map(serviceRoom => {
                return (
                    <div key={serviceRoom.id}>
                        <p>{serviceRoom.name}</p>
                        <p>{serviceRoom.number}</p>
                        {typeof serviceRoom.photos === 'number'
                            ? <img src={makePath(serviceRoom.destination, serviceRoom.photos)} alt="photo"/>
                            : <div>{serviceRoom.photos.map(photoId => {
                                    return (
                                        <img src={makePath(serviceRoom.destination, photoId)} alt="photo"/>
                                    )
                                })
                            } </div>
                        }
                        <br/>
                        <Link to={`/classes/${serviceRoom.id}`}>Watch more</Link>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

export default ClassesPage;
