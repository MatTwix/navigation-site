import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { subjectsSelectors } from '../redux/reducers/Subjects';

const SubjectPage = () => {
    const params = useParams();

    const subject_id = +params.id;
    const subjectsList = useSelector(subjectsSelectors.subjectsList);

    const subject = subjectsList.find(item => item.id === subject_id);

    return ( 
        <div>
            <p>{subject.name}</p>
        </div> 
    );
}
 
export default SubjectPage;