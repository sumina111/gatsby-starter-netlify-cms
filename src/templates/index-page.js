import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "./apps.css";
import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
// import Navbar from "../components/Navbar";
import contactImg from "../img/assets/contact.svg";
import iconVeggie from "../img/assets/icon-vege.svg";
import iconCoffee from "../img/assets/icon-coffee.svg";
import sweets from "../img/assets/icon-sweet.svg";
import special2 from "../img/assets/img/special-2.png";
import categoryIcon from "../img/assets/yellow-bg.png";
import special1 from "../img/assets/img/special-1.png";
import special3 from "../img/assets/img/special-3.png";
import special4 from "../img/assets/img/special-4.png";
import special5 from "../img/assets/img/special-5.png";
import special6 from "../img/assets/img/special-6.png";
import signature from "../img/assets/signature.png";
import hero01 from "../img/assets/img/hero01.png";

export const IndexPageTemplate = (
  {
    // image,
    // title,
    // heading,
    // subheading,
    // mainpitch,
    // description,
    // intro
  }
) => (
  <div>
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="top-menu  scroll-reveal">
            <div className="menu">
              <div
                className="title-bar"
                data-responsive-toggle="main-nav"
                data-hide-for="medium"
              >
                <button
                  className="menu-icon dark"
                  type="button"
                  data-toggle="main-nav"
                />
                <div className="title-bar-title">Menu</div>
              </div>

              <nav
                id="main-nav"
                data-animate="menu-in menu-out"
                style={{ zIndex: 10 }}
              >
                <ul className="main-navigation">
                  <li>
                    <a className="m-active" href="#" data-text="Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="m-anim"
                      href="#specials-grid"
                      data-text="Specials"
                    >
                      Specials
                    </a>
                  </li>
                  <li>
                    <a className="m-anim" href="#about-us" data-text="About">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="m-anim"
                      href="#main-menu"
                      data-text="Menu Cart"
                    >
                      Menu Cart
                    </a>
                  </li>
                  <li>
                    <a
                      className="m-anim"
                      href="#contact-us"
                      data-text="Contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="slider">
        <div
          className="a-slide slide1"
          style={{
            background: `url(${hero01}) no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "20% 0%"
          }}
        >
          <div className="container">
            <div
              className="bottom-section scroll-reveal"
              data-origin="right"
              data-distance="20%"
            >
              <h1 className="header-txt">
                Veggie gram fava bean leek dandelion silver beet eggplant bush
                tomato
              </h1>
            </div>
          </div>
        </div>
        <div className="a-slide slide2">
          <div className="container">
            <div className="bottom-section">
              <h1 className="header-txt">
                Dandelion cucumber earthnut pea peanut soko zucchini
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section
      className="category-icons"
      style={{
        backgroundImage: `url(${categoryIcon})`,
        boxShadow: "inset 0px 9px 19px -9px rgba(176, 145, 9, 0.62)"
      }}
    >
      <div className="container">
        <div className="yellow-content">
          <div className="icon">
            <img
              className="scroll-reveal"
              data-origin="top"
              data-distance="20%"
              src={iconVeggie}
              alt="template"
            />
            <h3 className="scroll-reveal" data-origin="top" data-distance="20%">
              Turnip greens
            </h3>
            <br />
            <p className="scroll-reveal" data-distance="0" data-duration="500">
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea
              lettuce kohlrabi amaranth water spinach avocado daikon napa
              cabbage.
            </p>
          </div>
          <div className="icon">
            <img
              className="scroll-reveal"
              data-origin="top"
              data-distance="20%"
              src={iconCoffee}
              alt="template"
            />
            <h3 className="scroll-reveal" data-origin="top" data-distance="20%">
              beetroot water
            </h3>
            <p className="scroll-reveal" data-distance="0" data-duration="700">
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek.
            </p>
          </div>
          <div className="icon">
            <img
              className="scroll-reveal"
              data-origin="top"
              data-distance="20%"
              src={sweets}
              alt="template"
            />
            <h3 className="scroll-reveal" data-origin="top" data-distance="20%">
              get social
            </h3>
            <p className="scroll-reveal" data-distance="0" data-duration="900">
              Pea horseradish azuki bean lettuce avocado asparagus okra.
              Kohlrabi radish okra azuki bean corn fava bean mustard tigernut
              jícama.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="specials-grid"
      className="month-specials"
      data-scroll-reveal="enter from the bottom after 0.9s"
    >
      <div className="container">
        <h1 className="header-txt">This month specials</h1>
        <div className="specials-content">
          <div className="special">
            <div className="special-img img-01">
              <img src={special1} alt="template" />
            </div>
            <div className="special-items spec-01">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Greens fava
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Nori grape silver beet broccoli kombu beet greens fava
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              >
                19$
              </span>
            </div>
          </div>
          <div className="special">
            <div className="special-img img-02">
              <img src={special2} alt="template" />
            </div>
            <div className="special-items spec-02">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Celery quand
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Celery quandong swiss chard chicory earthnut pea
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              >
                18$
              </span>
            </div>
          </div>
          <div className="special">
            <div className="special-img img-03">
              <img src={special3} alt="template" />
            </div>
            <div className="special-items spec-03">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Pea horser
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Kohlrabi radish okra azuki bean corn fava bean mustard
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              >
                7$
              </span>
            </div>
          </div>
          <div className="special">
            <div className="special-items spec-04">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Soko radicchio
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Dandelion zucchini burdock yarrow chickpea dandelion
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              >
                25$
              </span>
            </div>
            <div className="special-img img-04">
              <img src={special4} alt="template" />
            </div>
          </div>
          <div className="special">
            <div className="special-items spec-05">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Tigernut
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Grape silver beet watercress potato tigernut
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              >
                14$
              </span>
            </div>
            <div className="special-img img-05">
              <img src={special5} alt="template" />
            </div>
          </div>
          <div className="special">
            <div className="special-items spec-06">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Yarrow sweet
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Gumbo kakadu plum komatsuna black-eyed pea green
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              >
                8$
              </span>
            </div>
            <div className="special-img img-06">
              <img src={special6} alt="template" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-us" className="about">
      <div className="container">
        <div className="about-content">
          <h1 className="header-txt scroll-reveal">About us</h1>
          <p className="scroll-reveal" data-origin="top" data-distance="10%">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img
            className="signature scroll-reveal"
            data-origin="right"
            data-distance="20%"
            src={signature}
            alt="template"
          />
        </div>
      </div>
    </section>

    <section id="main-menu" className="menu-cart scroll-reveal">
      <div className="container">
        <h1 className="header-txt">Menu Cart</h1>
        <div className="divider" />
        <ul
          className="menu-navigation"
          data-tabs
          data-match-height="true"
          id="example-tabs"
        >
          <li className="tabs-title is-active">
            <a className="m-anim" href="#panel1" data-text="Starters">
              Starters
            </a>
          </li>
          <li className="tabs-title">
            <a
              className="m-anim"
              data-tabs-target="panel2"
              href="#panel2"
              data-text="Main Dishes"
            >
              Main Dishes
            </a>
          </li>
          <li className="tabs-title">
            <a
              className="m-anim"
              data-tabs-target="panel3"
              href="#panel3"
              data-text="Desserts"
            >
              Desserts
            </a>
          </li>
          <li className="tabs-title">
            <a
              className="m-anim"
              data-tabs-target="panel4"
              href="#panel4"
              data-text="Drinks"
            >
              Drinks
            </a>
          </li>
        </ul>

        <div className="tabs-content" data-tabs-content="example-tabs">
          <div className="tabs-panel is-active" id="panel1">
            <div className="menu-content">
              <div className="menu-section">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                    <tr>
                      <td>
                        <span>SAMPHIRE FRITTERS WITH FENNEL CEVICHE </span>
                      </td>
                      <td>
                        <span>$19</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        fresh samphire, plain flour, cornflower, eggs, fennel
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$13</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$11</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$16</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="menu-section">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                    <tr>
                      <td>
                        <span>SAMPHIRE FRITTERS WITH FENNEL CEVICHE </span>
                      </td>
                      <td>
                        <span>$19</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        fresh samphire, plain flour, cornflower, eggs, fennel
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$13</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$11</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$16</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="tabs-panel" id="panel2">
            <div className="menu-content">
              <div className="menu-section">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>SAMPHIRE FRITTERS WITH FENNEL CEVICHE </span>
                      </td>
                      <td>
                        <span>$19</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        fresh samphire, plain flour, cornflower, eggs, fennel
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$13</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$11</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$16</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="menu-section">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>SAMPHIRE FRITTERS WITH FENNEL CEVICHE </span>
                      </td>
                      <td>
                        <span>$19</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        fresh samphire, plain flour, cornflower, eggs, fennel
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$13</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$11</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$16</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tabs-panel" id="panel3">
            <div className="menu-content">
              <div className="menu-section">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$11</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$16</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="menu-section">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                    <tr>
                      <td>
                        <span>PAN FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$11</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>FRIED COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$16</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tabs-panel" id="panel4">
            <div className="menu-content">
              <div className="menu-section">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$11</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="menu-section">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>COURGETTE FLOWERS</span>
                      </td>
                      <td>
                        <span>$11</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        courgette flowers, goats cheese, red onion, pine nuts
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>SMOKED RICOTTA TERRINE</span>
                      </td>
                      <td>
                        <span>$12</span>
                      </td>
                    </tr>
                    <tr>
                      <td>ricotta, shallots, cheddar, capers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <a href="#0" className="cd-top">
      Top
    </a>

    <div id="contact-us" className="footer">
      <div className="container">
        <div className="footer-content">
          <h1 className="header-txt scroll-reveal">Contact</h1>
          <div className="divider scroll-reveal">
            <img src={contactImg} alt="contact" alt="template" />
          </div>
          <div className="contact-info scroll-reveal">
            <div className="info-address">
              <h3>Veggie</h3>
              <p>
                3428 Magnolia Avenue <br />
                Hackettstown, NJ 07840
              </p>
            </div>
            <div className="reservations">
              <h3>Reservations</h3>
              <p>
                reservations@vegggie.com
                <br />
                +48 202-555-0114
              </p>
            </div>
          </div>
          <div
            className="contact-form scroll-reveal"
            data-origin="bottom"
            data-distance="20%"
          >
            <h3>Contact us</h3>
            <form>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <textarea placeholder="Message" />
              <button className="send-form">Send</button>
            </form>
          </div>
          {/* <div className="social-icons scroll-reveal" data-duration="1500">
                <div className="fb-i">

                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 288.861 288.861" style="enable-background:new 0 0 288.861 288.861;" xml:space="preserve" width="30px" height="30px">
                            <path d="M167.172,288.861h-62.16V159.347H70.769v-59.48h34.242v-33.4C105.011,35.804,124.195,0,178.284,0   c19.068,0,33.066,1.787,33.651,1.864l5.739,0.746l-1.382,55.663l-6.324-0.058c-0.013,0-14.223-0.135-29.724-0.135   c-11.536,0-13.066,2.847-13.066,14.171v27.629h50.913l-2.821,59.48h-48.086v129.501H167.172z M117.858,276.007h36.453V146.5h48.677   l1.607-33.779h-50.284V72.238c0-13.368,3.078-27.025,25.919-27.025c9.178,0,17.899,0.045,23.509,0.09l0.778-31.292   c-5.675-0.508-15.116-1.157-26.247-1.157c-44.544,0-60.419,27.693-60.419,53.613v46.254H83.61V146.5h34.242v129.507H117.858z" fill="#3c3c3c"/>
                        </svg>
                </div>
                <div className="insta-i">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve" width="30px" height="30px">
                        <path d="M40.4,5.5H35.6c-1.434,0-2.6,1.166-2.6,2.6V12.9c0,1.434,1.166,2.6,2.6,2.6H40.4c1.434,0,2.6-1.166,2.6-2.6V8.1    C43,6.666,41.834,5.5,40.4,5.5z M41,12.9c0,0.331-0.269,0.6-0.6,0.6H35.6c-0.331,0-0.6-0.269-0.6-0.6V8.1    c0-0.331,0.269-0.6,0.6-0.6H40.4c0.331,0,0.6,0.269,0.6,0.6V12.9z" fill="#3c3c3c"/>
                        <path d="M37.8,0.5H10.2C4.576,0.5,0,5.089,0,10.731V17.5v2v17.77C0,42.911,4.576,47.5,10.2,47.5h27.6    c5.624,0,10.2-4.589,10.2-10.23V19.5v-2v-6.769C48,5.089,43.424,0.5,37.8,0.5z M46,37.27c0,4.538-3.679,8.23-8.2,8.23H10.2    c-4.522,0-8.2-3.692-8.2-8.23V19.5h12.221C11.62,22.043,10,25.584,10,29.5c0,7.72,6.28,14,14,14s14-6.28,14-14    c0-3.916-1.62-7.457-4.221-10H46V37.27z M36,29.5c0,6.617-5.383,12-12,12s-12-5.383-12-12s5.383-12,12-12S36,22.883,36,29.5z     M31.174,17.5c-2.101-1.261-4.55-2-7.174-2s-5.073,0.739-7.174,2H2v-6.769C2,6.192,5.679,2.5,10.2,2.5h27.6    c4.521,0,8.2,3.692,8.2,8.231V17.5H31.174z" fill="#3c3c3c"/>
                        <path d="M15,29.5c0,4.962,4.037,9,9,9s9-4.038,9-9s-4.037-9-9-9S15,24.538,15,29.5z M31,29.5c0,3.86-3.141,7-7,7s-7-3.14-7-7    s3.141-7,7-7S31,25.64,31,29.5z" fill="#3c3c3c"/>

                    </svg>
                </div>
            </div> */}
        </div>
        <p className="copy-info">Copyright 2017 © by Anna Dadej</p>
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
