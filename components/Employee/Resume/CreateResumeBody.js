import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./FormInputs/Contact";
import JobConditionVip from "./FormInputs/JobConditionVip";
import StepButton from "./FormInputs/StepButton";
import ResumeContext from "context/Ad/CreateResume/ResumeContext";
import VerifyFirstForm from "./FormInputs/VerifyFirstForm";
import FirstFormVip from "./FormInputs/FirstFormVip";
import AuthContext from "context/Auth/AuthContext";
const CreateResumeBody = () => {
  const resumeContext = useContext(ResumeContext);
  const [step, setStep] = useState(1);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setStep(resumeContext.data.step);
  }, [resumeContext.data.step]);
  useEffect(() => {
    user && user.id != "" && getUserData();
  }, [user]);
  const getUserData = () => {
    axios({
      url: "/getUserResume",
      method: "post",
      data: {
        user_id: user.id,
      },
      // headers: {
      //   Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      // },
    })
      .then((response) => {
        console.log(response.data.data.ad);
        let degrees = [];
        response.data.data.ad.degrees.forEach((element) => {
          degrees.push({
            id: element.id,
            title: element.fa_title,
            degree: element.fa_degree,
            date: {
              d: element.fa_date_d,
              m: element.fa_date_m,
              y: element.fa_date_y,
            },
            active: element.fa_active,
            Entitle: element.en_title,
            Endegree: element.en_degree,
            Endate: {
              d: element.en_date_d,
              m: element.en_date_m,
              y: element.en_date_y,
            },
            Enactive: element.en_active,
          });
        });
        let exps = [];
        response.data.data.ad.experiences.forEach((element) => {
          exps.push({
            id: element.id,
            title: element.fa_title,
            name: element.fa_org,
            reason: element.fa_reason,
            start: {
              m: element.fa_start_m,
              y: element.fa_start_y,
            },
            finish: {
              m: element.fa_finish_m,
              y: element.fa_finish_y,
            },
            active: element.fa_active,
            Entitle: element.en_title,
            Enname: element.en_org,
            Enreason: element.en_reason,
            Enstart: {
              m: element.en_start_m,
              y: element.en_start_y,
            },
            Enfinish: {
              m: element.en_finish_m,
              y: element.en_finish_y,
            },
            Enactive: element.en_active,
          });
        });
        let langs = [];
        response.data.data.ad.langExperts.forEach((element) => {
          langs.push({
            text: element.text,
            level: {
              id: element.level,
              name:
                element.level == 1
                  ? "مقدماتی"
                  : element.level == 2
                  ? "متوسط"
                  : "پیشرفته",
            },
          });
        });
        let softs = [];
        response.data.data.ad.softExperts.forEach((element) => {
          softs.push({
            text: element.text,
            level: {
              id: element.level,
              name:
                element.level == 1
                  ? "مقدماتی"
                  : element.level == 2
                  ? "متوسط"
                  : "پیشرفته",
            },
          });
        });
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
            user_id: response.data.data.ad.user.id,
            step: response.data.data.ad.user.step,
            companyId: response.data.data.ad.personal.company_id,
            fieldCheck: false,
            stepClick: false,
            type: response.data.data.ad.type,
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

            province: {
              id: response.data.data.ad.personal.province_id,
              fa: "",
              en: "",
            },
            Ebirthday: {
              day: response.data.data.ad.personal.en_birth_d,
              month: response.data.data.ad.personal.en_birth_m,
              year: response.data.data.ad.personal.en_birth_y,
            },

            sex: {
              id: response.data.data.ad.personal.sex,
              fa: "",
            },

            married: response.data.data.ad.personal.married,
            insurrance: response.data.data.ad.personal.insurrance,

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
            experiences: exps,
            degree: degrees,
            langExpert: langs,
            langExpertEn: "",
            softExpert: softs,
            softExpertEn: "",
            sampleEx: response.data.data.ad.samples,
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
  };
  const handleStep = (sn) => {
    setStep(sn);
    resumeContext.dispatch({ type: "step", payload: sn });
  };
  console.log(resumeContext.data);
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
