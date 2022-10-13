const Term = () => {
    return (
        <section id="hero" className="d-flex">
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h2 style={{textAlignLast: 'left'}}>Hope, you have liked our services and made a WILL at itiseasy.in.</h2>
          <p style={{textAlignLast: 'left'}}>If you believe that itiseasy.in has been useful for you, please do consider to contribute to itieasy.in.<br /><br />
            Any amount is welcome.</p><br />
          <a href="#" style={{fontFamily: 'Roboto, sans-serif', cursor: 'pointer', fontWeight: 500, fontSize: '14px', letterSpacing: '1px', display: 'inline-block', padding: '10px 28px', borderRadius: '5px', transition: '0.5s', color: '#fff', background: '#4D4D4D'}}>Contribute</a>
        </div>
      </section>
    );
}

export default Term;