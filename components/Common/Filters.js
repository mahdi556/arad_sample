import { useContext, useEffect } from "react";
import ButtonTag from "../../components/Employee/FormInputs/ButtonTag";
import FilterContext from "../../context/employeeContext/FilterContext/FilterContext";
const Filters = () => {
  const filterContext = useContext(FilterContext);
  useEffect(() => {}, [filterContext.data]);
  const deleteTag = (en) => {
    en == "ins" &&
      filterContext.dispatch({
        type: "ins",
        payload: false,
      });
    en == "military" &&
      filterContext.dispatch({
        type: "military",
        payload: false,
      });
    en == "experience" &&
      filterContext.dispatch({
        type: "experience",
        payload: false,
      });
    en == "vip" &&
      filterContext.dispatch({
        type: "vip",
        payload: false,
      });
    en == "agreeType" &&
      filterContext.dispatch({
        type: "agreeTypeCancel",
        payload: false,
      });
    en == "salary" &&
      filterContext.dispatch({
        type: "salary",
        payload: { min: 0, max: 0, status: false },
      });
    en == "age" &&
      filterContext.dispatch({
        type: "age",
        payload: { min: 0, max: 0, status: false },
      });
    en == "sex" &&
      filterContext.dispatch({
        type: "sexCansel",
        payload: { min: 0, max: 0, status: false },
      });
    en == "agreeTime" &&
      filterContext.dispatch({
        type: "agreeTimeCancel",
        payload: false,
      });
  };
  return (
    <>
      <div className="fiterBox ">
        <div className="d-flex align-items-center pt-1">
          {filterContext.data.ins && (
            <ButtonTag data="بیمه" en={"ins"} deleteTag={deleteTag} />
          )}
          {filterContext.data.military && (
            <ButtonTag data="معافیت" en={"military"} deleteTag={deleteTag} />
          )}
          {filterContext.data.experience && (
            <ButtonTag
              data="سابقه کاری"
              en={"experience"}
              deleteTag={deleteTag}
            />
          )}
          {filterContext.data.vip && (
            <ButtonTag data="آگهی متخصص" en={"vip"} deleteTag={deleteTag} />
          )}
          {filterContext.data.agreeType.status && (
            <ButtonTag
              data="نوع همکاری"
              en={"agreeType"}
              deleteTag={deleteTag}
            />
          )}
          {filterContext.data.agreeTime.status && (
            <ButtonTag
              data="نوع قرارداد"
              en={"agreeTime"}
              deleteTag={deleteTag}
            />
          )}
          {filterContext.data.sex.status && (
            <ButtonTag data="جنسیت" en={"sex"} deleteTag={deleteTag} />
          )}
          {filterContext.data.salary.status && (
            <ButtonTag data=" حقوق" en={"salary"} deleteTag={deleteTag} />
          )}
          {filterContext.data.age.status && (
            <ButtonTag data=" محدوده سنی" en={"age"} deleteTag={deleteTag} />
          )}
        </div>
        <div
          className="ms-auto"
          style={{
            color: "#d31212",
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() =>
            filterContext.dispatch({
              type: "resetData",
              payload: false,
            })
          }
        >
          حذف فیلترها
        </div>
      </div>
    </>
  );
};

export default Filters;
