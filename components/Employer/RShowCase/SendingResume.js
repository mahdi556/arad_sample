import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "context/Auth/AuthContext";

const SendingResume = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    if (image.length > 0) {
      const newImageUrl = [];
      newImageUrl.push(URL.createObjectURL(image[0]));
      setImageUrl(newImageUrl);
    }
  }, [image]);
  //   console.log(data);
  const sendResume = (type) => {
    const formData = new FormData();
    {
      type === "upload" && formData.append("file", image[0]);
    }
    formData.append("type", type);
    formData.append("ad_id", data.id);
    formData.append("reciever_id", data.user.id);
    formData.append("sender_id", user.id);

    axios({
      url: "/sendResumeToEmployer",
      method: "post",
      data: formData,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("رزومه شما با موفقیت ارسال شد");
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="d-flex flex-column jusify-content-center align-items-center eShowCase_sec1">
        <h2>ارسال رزومه</h2>
        {image.length == 0 && (
          <>
            <h3 className="upload pt-1" onClick={() => sendResume("site")}>
              ارسال رزومه تکمیل شده
            </h3>
            <div className="orLine">یا</div>
          </>
        )}

        {image.length > 0 ? (
          <>
            <div
              className="row"
              style={{
                backgroundColor: "#EBEBEB",
                borderRadius: 7,
                width: "30%",
                cursor: "pointer",
              }}
            >
              {imageUrl.map((imageSrc) => (
                <img src={imageSrc} width="5%" />
              ))}
              <label
                className="d-flex mt-2 justify-content-center align-items-center "
                htmlFor="changeImage"
                style={{ cursor: "pointer" }}
              >
                <input
                  type="file"
                  accept="application/pdf"
                  style={{ display: "none" }}
                  id="changeImage"
                  onChange={(e) => setImage(e.target.files)}
                />
                تغییر فایل
              </label>
            </div>
          </>
        ) : (
          <label htmlFor="imageInput" className="py-1 px-3 mb-2 mt-3 upload " s>
            <input
              type="file"
              accept="application/pdf"
              style={{ display: "none" }}
              id="imageInput"
              onChange={(e) => setImage(e.target.files)}
            />
            آپلود رزومه
          </label>
        )}
        {image.length > 0 && (
          <div
            className=" px-3 mt-2 d-flex align-items-center justify-content-center "
            style={{
              color: "#fff",
              backgroundColor: "#EC4B72",
              borderRadius: 10,
              width: "100%",
              cursor: "pointer",
            }}
            onClick={() => sendResume("upload")}
          >
            <h5 className="ms-2  mt-1  ">ارسال</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default SendingResume;
