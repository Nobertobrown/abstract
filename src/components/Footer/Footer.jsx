import "./footer.css";
import "boxicons/css/boxicons.min.css";

export default function Footer() {
  return (
    <div className="bg-gray-950 text-white px-7 pb-14">
      <div className="pb-24 relative mx-20">
        <div className="blk">
          <h2>Abstract</h2>
          <a href="#">Start Trial</a>
          <a href="#">Pricing</a>
          <a href="#">Download</a>
        </div>
        <div className="blk">
          <h2>Resources</h2>
          <a href="#">Blog</a>
          <a href="#">Help Center</a>
          <a href="#">Release Notes</a>
          <a href="#">Status</a>
        </div>
        <div className="blk">
          <h2>Community</h2>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Dribble</a>
          <a href="#">Podcast</a>
        </div>
        <div className="blk">
          <h2>Company</h2>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#" className="pb-7">
            Legal
          </a>

          <strong>Contact Us</strong>
          <a href="#">info@abstract.com</a>
        </div>
        <div className="absolute bottom-0 right-0">
          <i className="bx bxs-balloon text-4xl mb-5"></i>
          <p>© Copyright 2023</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
