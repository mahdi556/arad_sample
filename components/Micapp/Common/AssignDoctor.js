import Box from "@mui/material/Box";
import axios from "../../../axios";
import Modal from "@mui/material/Modal";
import { useContext, useEffect, useState } from "react";
import ButtonAd from "./ButtonAdd";
import SelectOption from "../../Employee/Resume/FormInputs/SelectOption";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "#C7E4E5",
  boxShadow: 24,
  borderRadius: 5,
  // p: 2,
};
const AssignDoctor = ({ id }) => {
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [clinics, setClinics] = useState({});
  const [clinic, setClinic] = useState("");
  useEffect(() => {}, []);
  const getClinics = () => {
    axios({
      url: "/clinics",
      method: "get",
    })
      .then((response) => {
         setClinics(response.data.data.clinics);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const clinicHandler = (id, name) => {
    setClinic(id);
  };

  const AssignHandler = () => {
    axios({
      url: "/assignClinic",
      method: "post",
      data: {
        clinic_id: clinic,
        medical_id: id,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   };
   return (
    <>
      <div
        onClick={() => {
          handleOpen1();
          getClinics();
        }}
      >
        <ButtonAd data="الصاق دکتر" />
      </div>

      <Modal open={open1} onClose={handleClose1}>
        <Box sx={style} className="px-4 py-3">
          <div className="col-12 d-flex flex-column  justify-content-between">
            <div>
              <div
                className="fw-bold text-center"
                style={{
                  fontSize: 30,
                }}
              >
                الصاق پزشک به کلینیک
              </div>
            </div>
            <div className="d-flex flex-column col-6  mx-4">
              {clinics.length && (
                <SelectOption
                  data={clinics}
                  name="لیست پزشکان"
                  valueHandler={clinicHandler}
                  // predata={normalAdContext.data.jobCategory.fa}
                />
              )}
            </div>

            <div
              className="py-2 text-white   px-2 mx-auto"
              style={{
                marginTop: 100,
                fontSize: "1.9rem",
                backgroundColor: "#E92B59",
                textAlign: "center",
                borderRadius: 8,
                cursor: "pointer",
                width: "80%",
              }}
              onClick={() => {
                AssignHandler();
                handleClose1();
              }}
            >
              ثبت پزشک
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AssignDoctor;
