const ButtonTag = ({data,deleteTag,en}) => {
  return (
   
      <div className="d-flex TagButton">
        {data}
        <img
          className="deleteTag"
          src= "../../../../assets/images/delete.png" 
          sizes="cover"
          width={10}
          height={10}
          onClick={()=>deleteTag(en)}
        />
      </div>
     
  );
};

export default ButtonTag;
