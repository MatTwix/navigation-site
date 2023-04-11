import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TeacherCard from '../components/TeacherCard';

const TeachersList = () => {
  const [teachersList, setTeachersList] = useState([]);

  const fetchTeachers = async () => {
    await axios.get('http://localhost:8000/api/teachers').then(({ data }) => {
      setTeachersList(data.data);
    });
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <Grid container>
      {teachersList.map((teacher) => (
        <Grid item key={teacher.id}>
          <TeacherCard teacher={teacher} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TeachersList;