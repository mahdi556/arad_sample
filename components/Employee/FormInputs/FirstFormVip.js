import Image from "next/image";
import { useState } from "react";

const FirstFormVip = () => {
  const [socialInasta,setSocialInsta]=useState('');
  const [socialYoutube,setSocialYoutube]=useState('');
  const [socialWeb,setSocialWeb]=useState('');
  const [socialTwitter,setSocialTwitter]=useState('');
  return (
    <div
      className="row pt-4 pb-4"
      style={{
        background: "#fff",
        borderRadius: 15,
        paddingRight: "5rem",
        paddingLeft: "5rem",
      }}
    >
      <div className="d-flex align-items-start pt-1">
        <div
          className="d-flex col-6 flex-column   pe-2"
          style={{
            fontWeight: 600,
          }}
        >
          معرفی من
          <div
            className="d-flex  "
            style={{
              height: 130,
              backgroundColor: "#EBEBEB",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: 7,
              width: "50%",
              marginTop: 25,
              fontWeight: 300,
            }}
          >
            <img
              className="me-2"
              src="../../../../assets/images/upload-logo.png"
              width="10%"
            />
            آپلود تصویر
          </div>
          <div
            className="d-flex col-6  mt-3   px-2 py-2"
            style={{
              borderWidth: 2,
              borderStyle: "dotted",
              borderColor: "#11999E",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 12,
              borderRadius: 10,
              width: "50%",
            }}
          >
            <img
              className="me-4"
              src="../../../../assets/images/upload-logo.png"
              width="15%"
            />
            آپلود ویدیو
          </div>
          <div
            className="row col-12  mt-2"
            style={{
              color: "#11999E",
              fontSize: 12,
              fontWeight: 300,
            }}
          >
            با آپلود ویدیو شانس استخدام شدن خود را چندین برابر کنید.(70% درصد
            کارفرماها تقاضای رزومه ویدیویی دارند)
          </div>
        </div>
        <div className="  col-6 ps-3 pt-2 fw-bold ">
          شبکه های اجتماعی من
          <div className="row col-12 offset-1 mt-4 mb-2">
            <div className="row mb-3">
              <Image src="/assets/images/twitterx.png" width={35} height={10} />
              <input
                className="col-9 ms-2 inputStyle" style={socialTwitter == '' ? {fontSize:11} :  {fontSize:18}}
                placeholder=" وارد کردن لینک پروفایل توییتر"
                type="text"
                onChange={(e)=>setSocialTwitter(e.target.value) }
              />
            </div>
            <div className="row mb-3">
              <Image src="/assets/images/webx.png" width={35} height={25} />
              <input
                className="col-9 ms-2 inputStyle" style={socialWeb == '' ? {fontSize:11} :  {fontSize:18}}
                placeholder=" وارد کردن لینک پروفایل دریبل"
                type="text"
                onChange={(e)=>setSocialWeb(e.target.value) }
              />
            </div>
            <div className="row mb-3">
              <Image src="/assets/images/instax.png" width={35} height={25} />
              <input
                className="col-9 ms-2 inputStyle " style={socialInasta == '' ? {fontSize:11} :  {fontSize:18}}  
                placeholder=" وارد کردن لینک پروفایل ایسنتاگرام"
                type="text"
                onChange={(e)=>setSocialInsta(e.target.value) }
              />
            </div>
            <div className="row mb-3">
              <Image src="/assets/images/youtubex.png" width={35} height={25} />
              <input
                className="col-9 ms-2 inputStyle" style={socialYoutube == '' ? {fontSize:11} :  {fontSize:18}}
                placeholder=" وارد کردن لینک پروفایل یوتیوب" 
                type="text"
                onChange={(e)=>setSocialYoutube(e.target.value) }
              />
            </div>
            <div
              className="d-flex align-items-center justify-content-start p-0"
              style={{
                color: "#11999e",
                fontWeight: 300,
              }}
            >
              <svg
                className=" AddTag"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="#11999e"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 19V1"
                  stroke="#11999e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 10H19.5"
                  stroke="#11999e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 10H9.99"
                  stroke="#11999e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 19V1"
                  stroke="#11999e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              اضافه کردن
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstFormVip;
