import React from 'react'
import './Aside.css'

const Aside = () =>
<>
<aside className="bio-overview">
  <address className="bio-overview__contact">
    <ul className="contact-info">
      <li className="contact-info__method">
        <img src="./images/icons8-new-post-26.png" alt="" className="contact-info__icon" />
        <br />
        <a href="mailto:knpfletcher@gmail.com" className="contact-info__link">knpfletcher@gmail.com</a>
      </li>
      <li className="contact-info__method">
        <img src="./images/icons8-touchscreen-24.png" alt="" className="contact-info__icon" />
        <br />
        Phone number available upon request
      </li>
      <li className="contact-info__method">
        <img src="./images/icons8-github-32.png" alt="" className="contact-info__icon" />
        <br />
        <a href="https://github.com/knpFletcher" className="contact-info__link">github.com/knpFletcher</a>
      </li>
    </ul>
  </address>
  <div>
    <h2 className="bio-overview__title">Tech Skills</h2>
    <ul className="skills">
      <li>HTML5</li>
      <li>CSS3</li>
      <li>WordPress</li>
      <li>Responsive Design</li>
      <li>Accessibility</li>
      <li>Git</li>
      <li>Android</li>
      <li>Kotlin</li>
      <li>Java</li>
      <li>XML</li>
      <li>API Implementation</li>
      <li>Terminal / Command Line</li>
      <li>Continuous Integration</li>
      <li>Agile Workflow</li>
    </ul>
  </div>
  <div>
    <h2 className="bio-overview__title">Interests</h2>
    <ul className="interests">
      <li>UI</li>
      <li>UX</li>
      <li>Web Design</li>
      <li>Semantic HTML</li>
      <li>SEO</li>
      <li>Clean Code</li>
      <li>Hardware</li>
      <li>Learning</li>
      <li>Teaching</li>
    </ul>
  </div>
  <div>
    <h2 className="bio-overview__title">Volunteerism</h2>
    <p>Volunteered with GiveCamp NWA and Ragtag to build websites, and for over 10 events to encourage girls to pursue STEM careers by teaching coding and history of women in tech.</p>
  </div>
  </aside>
</>

export default Aside