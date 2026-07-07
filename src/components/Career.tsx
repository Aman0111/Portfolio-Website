import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Advantage AI Engineering Private Limited</h5>
              </div>
              <h3>2024–2026</h3>
            </div>
            <p>
              Led full-stack development of AI-powered healthcare applications using React, Node.js, Express.js, MongoDB, Python microservices, and real-time communication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>NIIT</h5>
              </div>
              <h3>2023–2024</h3>
            </div>
            <p>
              Delivered 15+ end-to-end features with React, TypeScript, Node, Express, and PHP/MySQL while improving cross-service reliability and frontend architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Developer</h4>
                <h5>Ksolves India Limited</h5>
              </div>
              <h3>2021–2023</h3>
            </div>
            <p>
              Built scalable SaaS products with React, Next.js, Node.js, Express.js, and MongoDB, serving 10,000+ users and improving performance through optimized data models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
