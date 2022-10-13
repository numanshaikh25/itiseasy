const About = () => {
    return (
        <div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-in" data-aos-delay={100}>
            <div className="section-title">
              <h3><span>Who We Are?</span></h3>
            </div>
            <p style={{textAlign: 'justify'}}>We are an organization passionate about making life easier. We endeavor to make things easy and simple which in turn makes lives easier for you and your loved ones. We aim to achieve this by leveraging latest technologies. Our journey has started by making will writing easy and online. We are sure that this will help millions in ensuring that their wealth/ assets / properties are distributed as per their wish and saves your loved ones from the pain, time and cost of disputes / legal/ court proceedings.<br /><br />
              -Founder<br />
              Shiv Kumar Goyal</p>
            <img style={{border: '1px solid #ddd', borderRadius: '50%', padding: '5px', width: '180px'}} src="/img/team/shiv.jfif" /><br /><br />
            <p style={{textAlign: 'justify'}}>Shiv is passionate about making processes simple and easy. He has a keen eye to ensure that processes are lean and get adopted at a fast rate. He has built and led large process, customer service and business teams at leading banks - ICICI Bank, Axis Bank. 
              He is an alumnus of MDI, Gurgaon and Jai Hind College, Mumbai. He is also a COPC Certified Implementation Manager. His work has been recognised by Gartner, IDC, CCW Asia.</p>
          </div>
        </section>
        {/* End Hero */}
      </div>
    );
}
 
export default About;