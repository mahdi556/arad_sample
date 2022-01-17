const ButtonTag = ({data}) => {
  return (
   
      <div className="d-flex TagButton">
        {data}
        <img
          className="deleteTag"
          src= "../../../../assets/images/delete.png" 
          sizes="cover"
          width={10}
          height={10}
        />
      </div>
     
  );
};

export default ButtonTag;
