import { useContext, useEffect, useState } from "react";
import ContactForm from "./FormInputs/Contact";
import JobConditionVip from "./FormInputs/JobConditionVip";
import StepButton from "./FormInputs/StepButton";
import ResumeContext from "../../../context/employeeContext/CreateResume/ResumeContext";
import VerifyFirstForm from "./FormInputs/VerifyFirstForm";
import FirstFormVip from "./FormInputs/FirstFormVip";
import axios from "../../../axios";
const CreateResumeBody = () => {
  const resumeContext = useContext(ResumeContext);
  const [step, setStep] = useState(1);
  useEffect(() => {
    setStep(resumeContext.data.step);
  }, [resumeContext.data.step]);
  useEffect(() => {
    axios({
      url: "/getUserResume",
      method: "post",
      data: {
        user_id: 81,
      },
      // headers: {
      //   Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      // },
    })
      .then((response) => {
        console.log(response.data.data);

        resumeContext.dispatch({
          type: "data",
          payload: {
            userImage: response.data.data.ad.image,
            userImageFile: {},
            userVideo: "",
            socials: {
              twitter: "",
              instagram: "",
              youtube: "",
              dribble: "",
            },
            companyId: response.data.data.ad.company_id,
            fieldCheck: false,
            stepClick: false,
            type: response.data.data.ad.type,
            step: response.data.data.ad.step,
            title: response.data.data.ad.title,
            entitle: response.data.data.ad.entitle,
            name: response.data.data.ad.personal.fa_name,
            companyName: response.data.data.ad.personal.company_name,
            lastname: response.data.data.ad.personal.fa_last_name,
            Ename: response.data.data.ad.personal.en_name,
            Elastname: response.data.data.ad.personal.en_last_name,
            corporateType: response.data.data.ad.personal,
            birthday: {
              day: response.data.data.ad.personal.fa_birth_d,
              month: response.data.data.ad.personal.fa_birth_m,
              year: response.data.data.ad.personal.fa_birth_y,
            },
            Ebirthday: {
              day: response.data.data.ad.personal.en_birth_d,
              month: response.data.data.ad.personal.en_birth_m,
              year: response.data.data.ad.personal.en_birth_y,
            },
            sex: {
              id: response.data.data.ad.personal,
              fa: response.data.data.ad.personal,
            },

            married: response.data.data.ad.personal,
            insurrance: response.data.data.ad.personal,
            province: {
              id: response.data.data.ad.personal,
              fa: response.data.data.ad.personal,
              en: response.data.data.ad.personal,
            },
            city: {
              id: response.data.data.ad.personal.city_id,
              fa: response.data.data.ad.personal.city_fa,
              en: "",
            },
            jobCategory: response.data.data.ad.jobCategory,

            salary: {
              fa: {
                from: response.data.data.ad.personal.fa_salary_from,
                to: response.data.data.ad.personal.fa_salary_to,
              },
              en: {
                from: response.data.data.ad.personal.en_salary_from,
                to: response.data.data.ad.personal.en_salary_to,
              },
            },
            workHour: {
              fa: {
                from: response.data.data.ad.personal.fa_work_hour_from,
                to: response.data.data.ad.personal.fa_work_hour_to,
              },
            },

            corporateTime: {
              id: response.data.data.ad.personal.corporate_time,
              fa: "",
            },
            ageRange: {
              fa: {
                from: response.data.data.ad.personal.fa_age_range_from,
                to: response.data.data.ad.personal.fa_age_range_to,
              },
            },
            experiences: response.data.data.ad.experiences,
            degree: response.data.data.ad.personal,
            langExpert: response.data.data.ad.langExperts,
            langExpertEn: "",
            softExpert: response.data.data.ad.softExperts,
            softExpertEn: "",
            sampleEx: "",
            adComment: "",
            description: response.data.data.ad.personal.description,
            progressBar: {
              a: 0,
              b: 0,
              c: 0,
              d: 0,
              e: 0,
              f: 0,
              g: 0,
              h: 0,
            },
            cellphone: response.data.data.ad.personal.cellphone,
            whatsapp: response.data.data.ad.personal.whatsapp,
            telegram: response.data.data.ad.personal.telegram,
            email: response.data.data.ad.personal.email,
          },
        });
      })

      .catch(function (error) {
        // console.log(error.response.data.errors);
        // Swal.fire({
        //   position: "center",
        //   icon: "error",
        //   title: "مشکلی در ذخیره آگهی پیش آمد",
        //   showConfirmButton: true,
        //   // timer:3500
        // });
      });
  }, []);
  console.log(resumeContext.data);
  const handleStep = (sn) => {
    setStep(sn);
    resumeContext.dispatch({ type: "step", payload: sn });
  };
  return (
    <>
      <div
        className="mx-auto mt-5"
        style={{
          width: "80%",
          // backgroundColor: "#f2f5f6",
          paddingTop: "2rem",
          paddingBottom: 400,
        }}
      >
        <div className="d-flex justify-content-between  ">
          <div
            style={{
              width: "100%",
            }}
          >
            {step == 1 && <FirstFormVip />}
            {step > 1 && <VerifyFirstForm />}
            {step >= 2 && <JobConditionVip step={step} />}
            {step == 10 && <ContactForm />}

            <StepButton handleStep={handleStep} step={step} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateResumeBody;
