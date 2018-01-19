import React from 'react';
import github from '~/static/icons/github.svg';
import stacko from '~/static/icons/stacko.svg';
import twitter from '~/static/icons/twitter.svg';
import dribbble from '~/static/icons/dribbble.svg';

export default ({ scrollTop }) => (
  <footer>
    <div className="container grid">
      <div className="col">
        <nav>
          <ul>
            <li className="email">
              <a
                className="link"
                href="mailto:jalalazimi@gmail.com?subject=Inquiry"
              >
                jalalazimi@gmail.com
              </a>
            </li>
            <li>
              <a href="//github.com/jalalazimi" title="GitHub">
                <img src={github} alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="//twitter.com/jalalazimi" title="Twitter">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>

            <li>
              <a
                href="https://stackoverflow.com/users/1568399/jalal-azimi?tab=profile"
                title="Stack Overflow"
              >
                <img src={stacko} alt="Stack Overflow" />
              </a>
            </li>
            <li>
              <a href="//dribbble.com/fws" title="Dribbble">
                <img src={dribbble} alt="Dribbble" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col">
        <span>&copy; {new Date().getFullYear()} Jalal azimi</span>
      </div>
    </div>
  </footer>
);
