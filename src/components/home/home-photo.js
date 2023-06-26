"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


  export default function HomePhoto() {
  const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
    <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-height-100%"
          >
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src="https://api.hitech.mn/uploads/images/2023/5/9/ORICO-1683642779960040729-original.jpg"
                alt="main image"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src="https://api.hitech.mn/uploads/images/2022/5/4/leasing-1651426528247953218-original-1651678259454428388-original.jpg"
                alt="main image"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Carousel>
  );
}