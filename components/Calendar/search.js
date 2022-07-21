import NavBar from "../components/NavBar";
import moment from "jalali-moment";
import { useState, useEffect } from "react";
import { buildCalendar } from "../components/Calendar/build";
import dayStyles,{beforeToday} from "../components/Calendar/styles";
import Header from "../components/Calendar/header";
const Search = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);
  return (
    <>
       <div className="col-12" dir="ltr">
        <div
          className="d-flex col-12 mt-5"
          style={{
            paddingTop: "10rem",
            justifyContent: "center",
          }}
        >
          <div className="calendar">
            <Header value={value} setValue={setValue} />
            
            <div className="body">

            <div className="day-names">

              {
                ['s','m','t','w','t','f','s'].map((d)=>(
                  <div className="week">
                    {d}
                  </div>
                ))
              }
            </div>
              {calendar.map((week) => (
                <div>
                  {week.map((day) => (
                    <div className="day" onClick={() => ! beforeToday(day) && setValue(day)}>
                      <div className={dayStyles(day, value)}>
                        {day.format("D").toString()}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
