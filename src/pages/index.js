import React, { useEffect } from "react";
import "./infocard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleUp,
  faBookOpen,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import styles from "./index.module.css";
import "./index.css";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import shelogo from "../images/others/logo-womenintech.jpeg";

var linkToSheGazette =
  "https://instagram.com/women__in__tech?igshid=MzMyNGUyNmU2YQ==";

function goTo(link) {
  if (typeof window !== "undefined") {
    window.location.href = link;
  }
}

export default () => (
  <Layout>
    <div
      className={`container d-flex flex-column justify-content-around ${styles.container}`}
    >
      <div className="row">
        <div className="xs-12">
          <CarouselComponent />
        </div>
      </div>
      <div className="row">
        <div className="xs-12">
          <p className="text-justified mt-5 lead">
            Welcome to a digital space where women in tech take center stage,
            driving the wheels of innovation and shaping the future of
            technology. Our platform is a vibrant hub for empowering women in
            the tech industry, offering a supportive community, resources, and
            insights to help you excel in this dynamic field. Whether you're an
            aspiring techie, a seasoned pro, or simply curious about the world
            of tech, we're here to provide the knowledge, inspiration, and
            opportunities you need to thrive. 👨‍💻
          </p>
        </div>
      </div>
    </div>

    {/* <div
      className={`container d-flex flex-column justify-content-around ${styles.container}`}
    >
      <div className="row">
        <div className="xs-12">
          <p className="h2 pb-4">Why Women In Technology?</p>
        </div>
        <div className="xs-12 md-3 d-md-flex jstify-content-around">
          <div className="wrapper1 cardd1 card-info1">
            <div className="">
              <FontAwesomeIcon icon={faAngleDoubleUp} className="icon-icon" />
              <h3 style={{ textAlign: "center" }}>Mission</h3>
              <p>
                Increase accessibility to resources & opportunities and create a
                strong support system for women in technology.
              </p>
            </div>
          </div>

          <div className="wrapper1 cardd1 card-info1">
            <div className="">
              <FontAwesomeIcon icon={faBookOpen} className="icon-icon" />
              <h3 style={{ textAlign: "center" }}>Value</h3>
              <p>
                Inclusion and promotion of diversity in the computing field to
                empower under-represented communities and bring new perspectives
                to light.
              </p>
            </div>
          </div>

          <div className="wrapper1 cardd1 card-info1">
            <div className="">
              <FontAwesomeIcon icon={faIdBadge} className="icon-icon" />
              <h3 style={{ textAlign: "center" }}>Vision</h3>
              <p>
                A large and strong community of women who uplift, encourage and
                support each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <div
      className={`container  d-flex flex-column justify-content-center ${styles.container}`}
    >
      <div className="row">
        <div className="xs-12">
          <p className="h2 pb-4">Follow our Page on Instagram</p>
        </div>
      </div>
      <div className="row justify-content-around align-items-center">
        <div className="col-xs-12 col-md-5">
          <div>
            <p className="text-justified lead">
              Join us in championing women in tech! Follow us for exciting
              opportunities, empowering stories, and a brighter future in tech.
              💪👩‍💻 #TechInclusion
            </p>
            <button
              class="sub-button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                goTo(linkToSheGazette);
              }}
            >
              Follow
            </button>
          </div>
        </div>
        <div className="col-xs-12 col-md-5">
          <img
            className="img-fluid"
            src={shelogo}
            onClick={() => goTo(linkToSheGazette)}
          />
        </div>
      </div>
    </div>
  </Layout>
);
