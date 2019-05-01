import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import "./apps.css";
import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
// import Navbar from "../components/Navbar";
// import latestProd1 from "../img/assets/latestProduct1.svg";
// import iconVeggie from "../img/assets/icon-vege.svg";
// import iconCoffee from "../img/assets/icon-coffee.svg";
// import sweets from "../img/assets/icon-sweet.svg";
// import special2 from "../img/assets/img/special-2.png";
// import categoryIcon from "../img/assets/yellow-bg.png";
// import special1 from "../img/assets/img/special-1.png";
// import special3 from "../img/assets/img/special-3.png";
// import special4 from "../img/assets/img/special-4.png";
// import special5 from "../img/assets/img/special-5.png";
// import special6 from "../img/assets/img/special-6.png";
// import signature from "../img/assets/signature.png";
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
          {/* <img src={latestProd1} alt="svg" /> */}
        </div>
        <div className="specials-content">
          <div className="special">
            <div className="special-img img-01">
              {/* <img src="latest/cat pet.jpg" /> */}
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
              {/* <img src="latest/cat-toy.jpg" /> */}
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
              {/* <img src="latest/shoes.jpg" /> */}
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
              {/* <img src="latest/nest.jpg" /> */}
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
              {/* <img src="latest/flower.jpg" /> */}
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
              {/* <img src="latest/purse.jpg" /> */}
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
            {/* <?xml version="1.0" encoding="utf-8"?>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1930 255.5" style="enable-background:new 0 0 1930 255.5;" xml:space="preserve">
                <style type="text/css">
                    .st0{fill:none;stroke:#3c3c3c;stroke-width:10;stroke-linecap:square;stroke-miterlimit:10;}
                </style>
                <polyline className="st0" points="1224,171.8 1181.3,171.8 1139.2,129.6 1065,203.9 970.5,110.4 876,203.6 801.8,129.4 759.7,171.5 
                    717,171.5 "/>
                <polyline className="st0" points="5,131.5 757.3,131.5 801.8,176.1 885.9,91.9 868.3,74.2 831.5,111 870.4,149.9 970.2,50.2 1070,149.9 
                    1108.8,111 1072.1,74.2 1054.4,91.9 1138.5,176.1 1183.1,131.5 1925,131.5 "/>
                <rect x="921.9" y="26.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 231.426 707.2043)" className="st0" width="95" height="95"/>
                <rect x="921.9" y="99.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 179.8072 728.5855)" className="st0" width="95" height="95"/>
                <rect x="940.3" y="178.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 137.3893 746.1556)" className="st0" width="58.2" height="58.2"/>
                </svg> */}
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
                <img src="peth/cat pet.jpg" className="center" />
                <div className="desc" title="pet house">
                  Pure Woolen Cat Shape Pet house
                </div>
              </div>

              <div className="item-block " className="center">
                <img src="peth/lantern.jpg" />
                <div className="desc" title="pet house">
                  Pure Woolen Lantern Shape Pet house
                </div>
              </div>
              <br />
              <div className="item-block " className="center">
                <img src="peth/turtle pet.jpg" />
                <div className="desc" title="pet house">
                  Pure Woolen Turtle Shape Pet house
                </div>
              </div>

              <div className="item-block " className="center">
                <img src="peth/wolf pet.jpg" />
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
                  <img src="shoes/gshoes.jpg" className="center" />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Green Shoes
                  </div>
                </div>

                <div className="item-block " className="center">
                  <img src="shoes/shoes.jpg" />
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
                  <img src="flower/flower.jpg" className="center" />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Flower
                  </div>
                </div>

                <div className="item-block " className="center">
                  <img src="flower/flower1.jpg" />
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
                <img src="rug/rug1.jpg" className="center" />
                <div className="des" title="rug">
                  Pure Woolen Rug
                </div>
              </div>

              <div className="item-block">
                <img src="rug/felt pebble rug.jpg" />
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
              {/* <?xml version="1.0" encoding="utf-8"?>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1930 255.5" style="enable-background:new 0 0 1930 255.5;" xml:space="preserve">
                                <style type="text/css">
                                    .st0{
                                    fill:white;stroke:#3c3c3c;stroke-width:100;stroke-linecap:square;stroke-miterlimit:10;
                                    }
                                </style>
                                <polyline className="st0" points="1224,171.8 1181.3,171.8 1139.2,129.6 1065,203.9 970.5,110.4 876,203.6 801.8,129.4 759.7,171.5 
                                    717,171.5 "/>
                                <polyline className="st0" points="5,131.5 757.3,131.5 801.8,176.1 885.9,91.9 868.3,74.2 831.5,111 870.4,149.9 970.2,50.2 1070,149.9 
                                    1108.8,111 1072.1,74.2 1054.4,91.9 1138.5,176.1 1183.1,131.5 1925,131.5 "/>
                                <rect x="921.9" y="26.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 231.426 707.2043)" className="st0" width="95" height="95"/>
                                <rect x="921.9" y="99.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 179.8072 728.5855)" className="st0" width="95" height="95"/>
                                <rect x="940.3" y="178.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 137.3893 746.1556)" className="st0" width="58.2" height="58.2"/>
                                </svg> */}
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
