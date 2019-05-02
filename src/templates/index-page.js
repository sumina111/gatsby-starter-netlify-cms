import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import "./apps.css";
import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
// import Navbar from "../components/Navbar";
import latestProd1 from "../img/img/latestProduct1.svg";
import aboutUs from "../img/img/aboutUs.svg";
import testimonial from "../img/img/testimonial.svg";
import pethcat from "../img/img/peth/catpet.jpg";
import shoes from "../img/img/shoes/shoes.jpg";
import lantern from "../img/img/peth/lantern.jpg";
import turtle from "../img/img/peth/turtlepet.jpg";
import cattoy from "../img/img/latest/cat-toy.jpg";
import catnest from "../img/img/latest/cat pet.jpg";
import wolf from "../img/img/peth/wolfpet.jpg";
import flower from "../img/img/flower/flower.jpg";
import flower1 from "../img/img/flower/flower1.jpg";
import purewool from "../img/img/latest/shoes.jpg";
import birdnest from "../img/img/latest/nest.jpg";
import feltflower from "../img/img/latest/flower.jpg";
import latestpurse from "../img/img/latest/purse.jpg";
import rug from "../img/img/rug/rug1.jpg";
import feltrug from "../img/img/rug/feltpebblerug.jpg";
import shoes1 from "../img/img/shoes/gshoes.jpg";
// import hero01 from "../img/assets/img/hero01.png";

export const IndexPageTemplate = () => (
  <div>
    <section
      id="specials-grid"
      className="latest-products"
      data-scroll-reveal="enter from the bottom after 0.9s"
    >
      <div className="container">
        <h1 className="header-txt">Latest Products</h1>
        <div className="divider">
          <img src={latestProd1} alt="svg" />
        </div>
        <div className="specials-content">
          <div className="special">
            <div className="special-img img-01">
              <img src={catnest} alt="product" />
            </div>
            <div className="special-items spec-01">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Cat Nest
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
                Natural Wool Handmade Felt Cat Cave{" "}
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
          </div>
          <div className="special">
            <div className="special-img img-02">
              <img src={cattoy} alt="product" />
            </div>
            <div className="special-items spec-02">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Cat Toy
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
                Pure Wool Handmade Felt Ball For Pet
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
          </div>
          <div className="special">
            <div className="special-img img-03">
              <img src={purewool} alt="product" />
            </div>
            <div className="special-items spec-03">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Shoes
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
                Pure Wool Handmade Felt Shoes
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
          </div>
          <div className="special">
            <div className="special-items spec-04">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Bird Nest
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
                Eco-friendly Mushroom Style Bird Nest
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
              <img src={birdnest} alt="product" />
            </div>
          </div>
          <div className="special">
            <div className="special-items spec-05">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Woolen Flower
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
                Felt Flower With Beads Work
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
            <div className="special-img img-05">
              <img src={feltflower} alt="product" />
            </div>
          </div>
          <div className="special">
            <div className="special-items spec-06">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Strawberry Purse
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
                Pure Wool Handmade Felt Purse
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
            <div className="special-img img-06">
              <img src={latestpurse} alt="product" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-us" className="about">
      <div className="container">
        <div className="about-content">
          <h1 className="header-txt scroll-reveal">About us</h1>
          <div className="divider scroll-reveal">
            <img src={aboutUs} alt="aboutus" />
          </div>
          <p className="scroll-reveal" data-origin="top" data-distance="10%">
            Kriti Craft Pvt.Ltd is a leading brand from Nepal operating
            globally.It was founded in 2005 with it's headquater in Thamel.Our
            all products are totally handmade of Pure New-Zealand Lambs wool
            which are non-allergic,non-toxic and AZO free.We deals in felt
            bag,felt purse,felt christmas-items,felt shoes,felt accessories.
          </p>
        </div>
      </div>
    </section>

    <section id="main-menu" className="our-products scroll-reveal">
      <div className="container">
        <h1 className="header-txt">Our Products</h1>
        <div className="divider" />
        <ul
          className="menu-navigation"
          data-tabs
          data-match-height="true"
          id="example-tabs"
        >
          <li className="tabs-title">
            <a
              className="m-anim"
              href="#panel1"
              aria-selected="true"
              data-text="Pet House"
            >
              Pet House
            </a>
          </li>
          <li className="tabs-title">
            <a
              className="m-anim"
              dat-tabs-target="panel2"
              href="#panel2"
              data-text="Shoes"
            >
              Shoes
            </a>
          </li>
          <li className="tabs-title">
            <a
              className="m-anim"
              data-tabs-target="panel3"
              href="#panel3"
              data-text="Woolen Flowers"
            >
              Woolen Flowers
            </a>
          </li>
          <li className="tabs-title">
            <a
              className="m-anim"
              data-tabs-target="panel4"
              href="#panel4"
              data-text="Rug"
            >
              Rug
            </a>
          </li>
        </ul>

        <div className="tabs-content" data-tabs-content="example-tabs">
          <div className="tabs-panel is-active" id="panel1" />
          <div className="row">
            <div className="menu-section">
              <div className="item-block ">
                <img src={pethcat} className="center" alt="products" />
                <div className="desc" title="pet house">
                  Pure Woolen Cat Shape Pet house
                </div>
              </div>

              <div className="item-block " className="center">
                <img src={lantern} alt="products" />
                <div className="desc" title="pet house">
                  Pure Woolen Lantern Shape Pet house
                </div>
              </div>
              <br />
              <div className="item-block " className="center">
                <img src={turtle} alt="products" />
                <div className="desc" title="pet house">
                  Pure Woolen Turtle Shape Pet house
                </div>
              </div>

              <div className="item-block " className="center">
                <img src={wolf} alt="products" />
                <div className="desc" title="pet house">
                  Pure Woolen Wolf Shape Pet house
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs-content" data-tabs-content="examples-tabs">
          <div className="tabs-panel is-active " id="panel2">
            <div className="row">
              <div className="menu-section">
                <div className="item-block ">
                  <img src={shoes1} className="center" alt="products" />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Green Shoes
                  </div>
                </div>

                <div className="item-block " className="center">
                  <img src={shoes} alt="products" />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Pink Shoes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs-content" data-tabs-content="examples-tabs">
          <div className="tabs-panel is-active" id="panel3">
            <div className="row">
              <div className="menu-section">
                <div className="item-block ">
                  <img src={flower} className="center" alt="products" />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Flower
                  </div>
                </div>

                <div className="item-block " className="center">
                  <img src={flower1} alt="products" />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Flower
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs-panel" id="panel4">
          <div className="menu-content">
            <div className="menu-section">
              <div className="item-block">
                <img src={rug} className="center" alt="products" />
                <div className="des" title="rug">
                  Pure Woolen Rug
                </div>
              </div>

              <div className="item-block">
                <img src={feltrug} alt="products" />
                <div className="des" title="pebble rug">
                  Felt Pebble Rug
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="testimonial" id="testimonial">
      <div className="container">
        <div className="red-content">
          <div className="icon">
            <h1 className="header-txt scroll-reveal" style={{ color: "#fff" }}>
              Testimonial
            </h1>
            <div className="divider scroll-reveal">
              <img src={testimonial} alt="svg" />
            </div>
          </div>
          <p
            className="scroll-reveal"
            data-origin="top"
            data-distance="10%"
            style={{ color: "#fff" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>
      </div>
    </section>
  </div>
);

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
