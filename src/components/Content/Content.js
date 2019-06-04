import React from 'react'
import './Content.css'

const Content = () =>
<>
<section className="experiences">
  <h2 className="experience__heading">Work Experience</h2>
  <div className="experience">
    <div className="experience__role">
      <h3 className="experience__role__title">Website Designer and Developer</h3>
      <div className="experience__role__organization">
        <h4 className="experience__role__organization-name">Arkansas Hemp Association</h4>
        <a href="http://arkansashemp.org" className="experience__link">arkansashemp.org</a>
      </div>
    </div>
    <div className="experience__date-location">
      <h5 className="experience__date">01/2019 - 05/2019</h5>
      <h5 className="experience__location">Conway, AR</h5>
    </div>
    <ul className="experience__details">
      <li className="experience__details__segment">Designed and built brand new web presence using Wordpress with fully customized HTML and CSS on every page to deliver a tailor-made product.</li>
      <li className="experience__details__segment">Implemented all technical back-end and front-end aspects of website, from selecting hosting through deployment, while prioritizing a responsive and accessible user experience.</li>
      <li className="experience__details__segment">Collaborated closely with client stakeholders to customize website design and functionality.</li>
      <li className="experience__details__segment">Created design from client’s copy to invoke a spirit of healthy agricultural growth in the state, to act as a functional education resource for producers navigating dynamic regulatory environment.
      </li>
    </ul>
  </div>
  <div className="experience">
    <div className="experience__role">
      <h3 className="experience__role__title">Website Designer and Developer</h3>
      <div className="experience__role__organization">
        <h4 className="experience__role__organization-name">Arkansas Catholic Charismatic</h4>
        <a href="http://arkcc.org" className="experience__link">arkcc.org</a>
      </div>
    </div>
    <div className="experience__date-location">
      <h5 className="experience__date">01/2019 - 05/2019</h5>
      <h5 className="experience__location">Conway, AR</h5>
    </div>
    <ul className="experience__details">
      <li className="experience__details__segment">Designed and updated new iteration of existing website in WordPress enhanced with HTML and CSS throughout, utilizing content from previous web development platform.</li>
      <li className="experience__details__segment">Optimized user experience in easily maintainable, accessible, and functional website for client-facing elements and user-facing front end.</li>
      <li className="experience__details__segment">Implemented full design overhaul of website construction, user flow, color, and assets, while introducing new features including event registration and ticketing.</li>
      <li className="experience__details__segment">Delighted client by delivering product on time and under budget, translating their vision into a brand new adaptation of their previous website.</li>
    </ul>
  </div>
  <div className="experience">
    <div className="experience__role">
      <h3 className="experience__role__title">Developer</h3>
      <h4 className="experience__role__organization-name">Metova, Inc</h4>
    </div>
    <div className="experience__date-location">
      <h5 className="experience__date">01/2017 - Present</h5>
      <h5 className="experience__location">Conway, AR</h5>
    </div>
    <ul className="experience__details">
      <li className="experience__details__segment">Worked on a site-wide redesign and revamp using WordPress customized with HTML &amp; CSS, while focusing on responsive design, accessibility, and maintainability.</li>
      <li className="experience__details__segment">Performed quality assurance on multiple devices and browsers, and contributed to improving site SEO.</li>
      <li className="experience__details__segment">Drove first week-over-week traffic growth since previous release and single largest day of web traffic over previous 30 days within first week of launch.</li>
      <li className="experience__details__segment">Received direct praise from CEO and other C-level executives for effort, ideas, and attention.</li>
      <li className="experience__details__segment">Contributed to team of nearly 20 developers to maintain and refactor a multi-threaded audio streaming codebase, bridge data from multiple sources, and develop new features for in-car Android
        applications utilizing agile methodologies.</li>
      <li className="experience__details__segment">Volunteered for nearly 10 events to encourage girls to pursue STEM careers, teaching coding and history of women in tech, working with nearly 1000 girls from across the state of Arkansas.</li>
    </ul>
  </div>
  <div>
    <h2 className="experience__heading">Education</h2>
    <div className="experience">
      <h3 className="experience__role__title">Android Development Student</h3>
      <h4 className="experience__role__organization">Arkansas Coding Academy</h4>
      <div>
        <h5 className="experience__date-education">08/2016 - 11/2016</h5>
      </div>
    </div>
    <div className="experience">
      <h3 className="experience__role__title">Bachelor of Arts - Anthropology &amp; Art History</h3>
      <h4 className="experience__role__organization">University of Arkansas, Fayetteville</h4>
      <div>
        <h5 className="experience__date-education">08/2009 - 05/2013</h5>
      </div>
    </div>
  </div>
</section>
</>

export default Content