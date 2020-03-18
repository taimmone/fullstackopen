import React from 'react';
import Header from './Header';
import Content from './Content/Content';


const Course = ({ course }) => (
  <table>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </table>
);

export default Course;
