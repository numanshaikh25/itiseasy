const Security = () => {
    return (
        <section id="hero" className="d-flex">
        <div className="container" style={{textAlign: 'left'}} data-aos="zoom-in" data-aos-delay={100}>
          <div className="section-title">
            <h3><span>We are passionate about privacy and security.</span></h3>
          </div>
          <p><b>Encryption</b></p>
          <li>We encrypt your data at rest and in-transit.</li>
          <li>Data at-rest is backed up and encrypted using AES-256 GCM encryption with root keys stored in an HSM.</li>
          <li>We use modern, secure SSL/TLS settings and HTTP headers to ensure you can safely and securely browse our site.</li>
          <li>We never store passwords in plaintext.</li>
          <li style={{textAlign: 'left'}}>This site is protected by Comodo Positive SSL Certificate that support 128-bit encryption levels and are signed with 2048-bit signatures for SSL root key strength.</li>
          <br />
          <p><b>Application</b></p>
          <li>We filter and sanitize all user input to prevent code injection and XSS attacks.</li>
          <li>Code is carefully written and reviewed to ensure proper security practices are followed.</li>
          <br />
          <p><b>Operations</b></p>
          <li>Access to user data is strictly protected by operational procedures and user data is never shared without permission.</li>
        </div>
      </section>
    );
}
 
export default Security;