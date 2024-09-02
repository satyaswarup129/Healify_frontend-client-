import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" className="animated-image" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Healify is dedicated to transforming healthcare by providing compassionate, patient-centered services that prioritize your well-being. Our team of experienced professionals is committed to delivering personalized care, using the latest medical advancements to ensure the best outcomes. At Healify, we believe in a holistic approach to health, focusing on prevention, treatment, and continuous support to help you lead a healthier, more fulfilling life.
          </p>
          <h6>WE LIVE UP TO FULFILL OUR PROMISES !</h6>
          <h5>"PATIENT is our FIRST PRIORITY"</h5>
          <p>
          At Healify, we work tirelessly to ensure that you receive the best possible healthcare services. Our dedicated team is always striving to exceed expectations, offering round-the-clock support and personalized care tailored to your unique needs. We leverage cutting-edge technology and innovative practices to stay ahead in the rapidly evolving healthcare landscape, ensuring that you have access to the most effective treatments and services. Your health and satisfaction are our top priorities, and we are committed to making your healthcare experience as seamless and supportive as possible.
          </p>
          <p>"Healify: Where your health is our "MISSION", and excellence is our "PROMISE"!!"</p>
          <h4>"Your health, our priority"</h4>
        </div>
      </div>
    </>
  );
};

export default Biography;
