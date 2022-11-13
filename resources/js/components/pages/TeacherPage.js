import React from 'react';
import {useParams} from "react-router-dom";

const TeacherPage = () => {
    const params = useParams();
    const id = +params.id

    return (
        <div>
            teacher {id}
        </div>
    );
};

export default TeacherPage;
