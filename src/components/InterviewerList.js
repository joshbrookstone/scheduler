import React from 'react';
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const {interviewers, interviewer, setInterviewer} = props;
  
  // interviewers:array - an array of objects containing the information of each interviewer
  // interviewer:number - the id of an interviewer
  // setInterviewer:function - a function that accepts an interviewer id

  return (
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list"></ul>
    </section>
  )
} 
