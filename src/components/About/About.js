import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>Be Organized!</PageTitle>
      <h1>Why is making lists important?</h1>
      <p>
        By keeping such a list, you make sure that your tasks are written down
        all in one place so you don't forget anything important.
      </p>
      <h2>
While there are many negative effects of disorganization, here are five benefits of being organized:</h2>
<ul className={styles.aboutList}>
    <li>Organization reduces stress.</li>
    <li>Organization helps you sleep better.</li>
    <li>Organization promotes a healthier diet.</li>
    <li>Organization increases productivity at work. </li>
    <li>Organization can improve your relationships.</li>
</ul>
    </div>
  );
};

export default About;
