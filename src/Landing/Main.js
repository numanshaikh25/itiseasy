import { useHistory } from "react-router-dom";
const Main = () => {
  let history = useHistory();
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay={100}>
          <h1>
            Welcome to
            <a href="itiseasy.in"> itiseasy.in</a>
          </h1>
          <br />
          <h2>Get legally valid will in less than 10 minutes.</h2>
          <h2>Regular price: Rs 999, Introductory offer : Rs 0</h2>
          <h5 style={{ marginTop: "-30px" }}>Use Code : itiseasy</h5>
          <br />
          <div className="d-flex" />
          <a
            style={{ cursor: "pointer" }}
            className="btn-get-started scrollto"
            onClick={() => history.push("/will")}
          >
            Make My Will
          </a>
          <br />
          <br />
          <h5>Fill online. Print and keep.</h5>
        </div>
      </section>
    </>
  );
};

export default Main;
