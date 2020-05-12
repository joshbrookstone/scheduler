import React, { useState } from "react";

import "components/Application.scss";
import DayList from './DayList'
import "components/Appointment"
import Appointment from "components/Appointment";


const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "3pm",
    interview: {
      student: "David-Henry",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 1,
    time: "12pm",
  },
  
];


export default function Application(props) {

  const [day, setDay] = useState('Monday');
 

  return (
    <main className="layout">
            <section className="sidebar">
            <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList
            days={days}
            day={day}
            setDay={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        <ul>
        {appointments.map(appointment => {
          return <Appointment key={appointment.id} {...appointment}/>
        })}
        <Appointment key="last" time="5pm" />
        </ul>
      </section>
    </main>
  );
  
}

// return (
//   <ul>
//     {days.map(singleDay => {
//       return <DayListItem 
//       key={ singleDay.id } 
//       name={ singleDay.name } 
//       spots={ singleDay.spots } 
//       selected={ singleDay.name === day } 
//       setDay={ () => setDay(singleDay.name) }  />
//     })}
//   </ul> 
//   )


