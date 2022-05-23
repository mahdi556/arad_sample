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
  };
  return (
    <>
      <div className="fiterBox ">
        <div className="d-flex align-items-center">
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
        </div>
        <div
          className="ms-auto"
          style={{
            color: "#d31212",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          حذف فیلترها
        </div>
      </div>
    </>
  );
};

export default Filters;
