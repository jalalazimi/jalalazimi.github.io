import React from 'react';
import Link from 'gatsby-link';

class Topbar extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.topbar = {};
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle() {
    if (window.innerWidth <= 600) {
      this.setState({ showMenu: !this.state.showMenu });
    }
  }

  render() {
    const { scrollTop } = this.state;

    return (
      <div className="topbar">
        <div
          className={`sans-serif grid container${this.state.showMenu
            ? ' showMenu'
            : ''}`}
        >
          <div className="col">
            <span className="name">
              <Link to="/" className="link">
                Jalal Azimi
              </Link>
            </span>
          </div>
          <div className="col">
            <nav onClick={this.handleMenuToggle}>
              <ul>
                <li>
                  <Link className="link" to="/#work">
                    Work
                  </Link>
                </li>
                {/*<li>*/}
                  {/*<Link className="link" to="/about">*/}
                    {/*About*/}
                  {/*</Link>*/}
                {/*</li>*/}
                <li>
                  <a
                    className="external link"
                    href="mailto:jalalazimi@gmail.com?subject=Inquiry"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="menuicon" onClick={this.handleMenuToggle}>
            <span className="top" />
            <span className="bottom" />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
