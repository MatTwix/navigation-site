import React from 'react';
import {useParams} from "react-router-dom";

const ClassPage = () => {
    const params = useParams();
    const id = +params.id;

    return (
        <div>
            class {id}
        </div>
    );
};

export default ClassPage;
