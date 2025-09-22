import "./aboutUs.css";
import { usePage } from "../states/hero";
import { useView } from "../states/storeCart";
import { useEffect, useState } from "react";

const GetStarted = () => {
  const { setShowHero } = usePage();
  const { switchView } = useView();
  const [fontSize, setFontSize] = useState("1.25rem"); // default lead size
  const [lineHeight, setLineHeight] = useState(1.6);

  const handleGetStarted = () => {
    setShowHero(false);
    switchView("store");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        // iPhone SE and similar
        setFontSize("0.9rem");
        setLineHeight(1.4);
      } else {
        setFontSize("1.25rem");
        setLineHeight(1.6);
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex-grow-1 d-flex justify-content-center align-items-center text-center px-3"
      style={{ paddingTop: "70px", minHeight: "calc(100vh - 70px)" }}
    >
      <div className="row w-100">
        <div className="col-12">
          <h1 className="m-4 text-light display-4 display-md-3 display-lg-2">
            Welcome To Paradise Nursery!
          </h1>
        </div>

        <div className="col-12 fs-6 fs-md-4">
          <p
            className="lead mb-4 text-light"
            style={{ fontSize: fontSize, lineHeight: lineHeight }}
          >
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance the beauty of your surroundings but
            also contribute to a healthier and more sustainable lifestyle. From
            air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast.
          </p>
        </div>

        <div className="col-12 fs-6 fs-md-5">
          <p className="mb-4 text-light">
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature right at
            your doorstep.
          </p>
        </div>

        <div className="col-12">
          <button
            className="btn btn-primary btn-lg my-4 w-75 w-md-50 w-lg-25"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
