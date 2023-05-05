import React from 'react';

const Footer = () => {
    return (
        <div className="my-container">
            <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
    <span className="footer-title italic">About Us</span> 
   <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, <br /> per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu  <br/>felis dapibus sit amet a augue. Sed non neque elit.</p>
   <h1>In The, Kitchen Wo Do MagicWe are making the best food in town</h1>
  </div> 
  <div>
    <span className="footer-title italic">Contact Us</span> 
    <p className="link link-hover"> Recibo, 99 Knightsbridge, China</p>
    <p className="link link-hover">+44-30-3544-7658</p>
    <p className="link link-hover"> goldenfoodhuse@chefandrecipes.com</p>
  </div> 
  <div>
    <span className="footer-title">Golden Food House</span> 
   <p className="link link-hover">Chefs</p>
   <p className="link link-hover">Recipe</p>
   <p className="link link-hover">Testimonial</p>
      <p className="link link-hover">Events </p>

  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;