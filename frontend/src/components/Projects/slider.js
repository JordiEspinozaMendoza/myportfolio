import React from "react";
import Slider from "react-slick";
import { breakpoints, HeaderTextColor } from "utils";
export const ProjectsSlider = ({ projects, phoneView }) => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <Slider
      className="projects-slider"
      {...settings}
      slidesToShow={screenWidth < breakpoints.large.replace("px", "") ? 1 : 3}
    >
      {projects?.map((project, index) => (
        <div key={index} className="project-slider-item">
          <img
            className="project-slider-item-image-mobile"
            onClick={() => window.open(project.linkGithub, "_blank")}
            src={`https://res.cloudinary.com/jordiespinoza/${project.img2}`}
            alt=""
            hidden={!phoneView}
          />

          <img
            className="project-slider-item-image-desktop"
            onClick={() => window.open(project.linkGithub, "_blank")}
            src={`https://res.cloudinary.com/jordiespinoza/${project.img}`}
            alt=""
            hidden={phoneView}
          />
          <HeaderTextColor
            className={
              phoneView
                ? "project-slider-item-title-mobile"
                : "project-slider-item-title-desktop"
            }
            modifiers={["h3"]}
          >
            {project.name}
          </HeaderTextColor>
        </div>
      ))}
    </Slider>
  );
};
