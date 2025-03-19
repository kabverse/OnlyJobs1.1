import { Link } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="section-title">
        <h2 className="tnlu">Pricing</h2>
        <p>Flexible plans for every need</p>
      </div>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Job Seekers</h3>
          <div className="price">Free</div>
          <p className="p-p">Everything you need to find your next role</p>
          <ul className="price-features">
            <li>Apply to unlimited jobs</li>
            <li>Basic job matching</li>
            <li>Chat with employers</li>
          </ul>
          <Link to="/questions/jobseeker" className="button button-success">
            Get Started
          </Link>
        </div>

        <div className="price-card">
          <h3>Employers Basic</h3>
          <div className="price">
          ₹299<span>/mo</span>
          </div>
          <p className="p-p">Perfect for small businesses</p>
          <ul className="price-features">
            <li>Up to 5 active job posts</li>
            <li>Basic candidate filtering</li>
            <li>Team inbox</li>
          </ul>
          <Link to="/questions/employer" className="button button-success">
            Start Hiring
          </Link>
        </div>

        <div className="price-card three">
          <h3>Employers Pro</h3>
          <div className="price">
          ₹899<span>/mo</span>
          </div>
          <p className="p-p">For growing companies</p>
          <ul className="price-features">
            <li>Unlimited job posts</li>
            <li>Advanced AI matching</li>
            <li>Priority support</li>
          </ul>
          <Link to="/questions/employer" className="button button-success">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
