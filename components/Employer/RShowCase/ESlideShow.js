  

const ESlideShow = () => {
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      } 
  return (
    <>
      <div className="slideshow-container">
        {/* <!-- Full-width images with number and caption text --> */}
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="/assets/images/slide1.jpg" height={580} width={345} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="/assets/images/slide2.jpg" height={580} width={345} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="/assets/images/slide3.png" height={580} width={345} />
          <div className="text">Caption Three</div>
        </div>

        {/* <!-- Next and previous buttons --> */}
        {/* <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a className="next" onclick="plusSlides(1)">&#10095;</a> */}
      </div>
      <br />

      {/* <!-- The dots/circles --> */}
      <div style={{ textAlign: "center" }}>
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
      </div>
    </>
  );
};
export default ESlideShow;
