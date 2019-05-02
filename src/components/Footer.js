import React from "react";
// import { Link } from 'gatsby'

import icon1 from "../img/img/icon1.svg";
import icon2 from "../img/img/icon2.svg";
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
import contactus from "../img/img/contactus.svg";

const Footer = class extends React.Component {
  render() {
    return (
      // <footer className="footer has-background-black has-text-white-ter">
      //   <div className="content has-text-centered">
      //     <img
      //       src={logo}
      //       alt="Kaldi"
      //       style={{ width: '14em', height: '10em' }}
      //     />
      //   </div>
      //   <div className="content has-text-centered has-background-black has-text-white-ter">
      //     <div className="container has-background-black has-text-white-ter">
      //       <div className="columns">
      //         <div className="column is-4">
      //           <section className="menu">
      //             <ul className="menu-list">
      //               <li>
      //                 <Link to="/" className="navbar-item">
      //                   Home
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/about">
      //                   About
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/products">
      //                   Products
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/contact/examples">
      //                   Form Examples
      //                 </Link>
      //               </li>
      //               <li>
      //                 <a
      //                   className="navbar-item"
      //                   href="/admin/"
      //                   target="_blank"
      //                   rel="noopener noreferrer"
      //                 >
      //                   Admin
      //                 </a>
      //               </li>
      //             </ul>
      //           </section>
      //         </div>
      //         <div className="column is-4">
      //           <section>
      //             <ul className="menu-list">
      //               <li>
      //                 <Link className="navbar-item" to="/blog">
      //                   Latest Stories
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/contact">
      //                   Contact
      //                 </Link>
      //               </li>
      //             </ul>
      //           </section>
      //         </div>
      //         <div className="column is-4 social">
      //           <a title="facebook" href="https://facebook.com">
      //             <img
      //               src={facebook}
      //               alt="Facebook"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="twitter" href="https://twitter.com">
      //             <img
      //               className="fas fa-lg"
      //               src={twitter}
      //               alt="Twitter"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="instagram" href="https://instagram.com">
      //             <img
      //               src={instagram}
      //               alt="Instagram"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="vimeo" href="https://vimeo.com">
      //             <img
      //               src={vimeo}
      //               alt="Vimeo"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </footer>

      <footer id="contact-us">
        <div className="container">
          <div className="footer-content">
            <h1 className="header-txt scroll-reveal">Contact Us</h1>
            <div className="divider scroll-reveal">
              <img src={contactus} alt="contactus" />
            </div>
            <div className="contact-info scroll-reveal">
              <div className="info-address">
                <h3>Location</h3>
                <p>Bagwatibhal,Nepal</p>
              </div>
              <div className="reservations">
                <h3>Further Info</h3>
                <p>
                  info@kriticraft.com
                  <br />
                  9803871287
                </p>
              </div>
            </div>
            <div
              className="contact-form scroll-reveal"
              data-origin="bottom"
              data-distance="20%"
            >
              <h3>Contact us</h3>
              <form data-netlify="true">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea placeholder="Message" />
                <button className="send-form" type="button">
                  Send
                </button>
              </form>
            </div>
            <div className="social-icons scroll-reveal" data-duration="1500">
              <div className="fb-i">
                <img src={icon1} alt="icon" />
              </div>
              <div className="insta-i">
                <img src={icon2} alt="icon" />
              </div>
            </div>
          </div>
          <p className="copy-info">Copyright 2017 © by Anna Dadej</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
