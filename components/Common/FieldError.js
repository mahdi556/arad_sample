const FieldError = ({ data,display }) => {
  return (
    data == "" && (
      <div className=""
        style={{
          fontSize: 14,
          color: "#EC4B72",
          display: display,
          fontWeight:300,
        }}
      >
        تکمیل این فیلد الزامی می باشد
      </div>
    )
  );
};

export default FieldError;
