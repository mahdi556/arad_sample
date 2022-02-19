import ButtonTag from "../../components/Employee/FormInputs/ButtonTag";
const Filters = () => {
  return (
    <>
      <div className="fiterBox">
        <div className="d-flex align-items-center">
          <ButtonTag data="دورکاری" />
          <ButtonTag data="اصفهان" />
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
