const FieldError = ({ data,display }) => {
  return (
    data == "" && (
      <div className=""
        style={{
          fontSize: 14,
          color: "red",
          display: display,
        }}
      >
        تکمیل این فیلد الزامی می باشد
      </div>
    )
  );
};

export default FieldError;
