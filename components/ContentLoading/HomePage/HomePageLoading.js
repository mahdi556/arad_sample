import style from "./homeLoading.module.scss";
const HomePageLoading = () => {
  return (
    <>
      <main className={`${style.page}`}>
        <h1 className={`${style.page_title}`}>Content Loading Placeholder</h1>

        <div className={`${style.page_content}`}>
          <div className={`${style.placeholder_content} `}>
           
          </div>
        </div>
        <div
          className={`${style.placeholder_content} `}
          style={{
            height: 100,
            width: 500,
          }}
        ></div>
      </main>
    </>
  );
};
export default HomePageLoading;
