import Box from "@mui/material/Box";
import Modal from "react-modal";
import { useState } from "react";
import moment from "moment-jalaali";
import DatePicker from "react-datepicker2";

const customStyles = {
  content: {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    transform: "translate(-120%, 30%)",
    width: 500,
    height: 500,
    bgcolor: "#fff",
    boxShadow: 24,
    borderRadius: 5,
  },
};
const RequsetInterview = ({ visible }) => {
  const [modalIsOpen, setIsOpen] = useState(visible);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className="col-12 d-flex flex-column  justify-content-between"
          style={{
            width: 400,
          }}
        >
          <h5 className="text-center">درخواست مصاحبه</h5>
          <div className="d-flex justify-content-between col-12">
            <div className="d-flex flex-column col-5">
              <h6>تاریخ</h6>
              <div
                className="  col-12 d-flex align-items-start col-10"
                style={
                  {
                    //   borderRadius: 5,
                    //   border: "1px #000 solid",
                  }
                }
              >
                <div className="col-4">
                  <DatePicker
                    inputReadOnly={true}
                    isGregorian={false}
                    timePicker={false}
                    
                    onChange={(value) =>
                      console.log(moment(value).format("YYYY/M/D HH:mm:ss"))
                    }
                  />
                </div>

                <div className="ms-auto">
                  <img src="/assets/images/calendar.svg" />
                </div>
              </div>
            </div>
            <div className="d-flex flex-column col-5">
              <h6>ساعت</h6>
              <div
                className="px-2 col-12 d-flex align-items-start"
                
              >
                  <input type="text" 
                  style={{
                    borderRadius: 5,
                    border: "1px #000 solid",
                  }}
                  placeholder="..:.."
                  />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RequsetInterview;
