import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Tests.css";

export default class TestimonialsComponent extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Astha Singh</h3>

            <p>
              Women in Technology is a community, a girl ever wishes to join. Be
              it the Insta page or the Website, it has been very helpful in
              finding resources. It's like a one-stop tech zone for a girl in
              knowing about opportunities, competitions, webinars and various
              events.
            </p>
          </div>
        </div>

        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" style={{width:"200px",borderRadius:"50%"}}/> */}
          <div className="myCarousel">
            <h3>Yash Saraswat</h3>

            <p>
              This community has made me more aware about the lack of diversity
              in STEM. This has motivated me too to support women I know
              personally who are already in STEM / trying to enter STEM. This
              has highlighted key issues women face, and being a male I try to
              keep these in mind while working in groups, etc. so that I can do
              my part at a personal level to equalise the status quo.
            </p>
          </div>
        </div>

        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Bhavya Marya</h3>

            <p>
              Women in Technology is an awesome community with a great curation
              of resources and opportunities. The people in the community are
              dedicated, helpful, and enthusiastic. I have found many
              opportunities and good reads on the platform, and am very glad to
              be a part of the movement!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
