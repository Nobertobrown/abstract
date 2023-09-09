import "./footer.css";
import "boxicons/css/boxicons.min.css";
import { foooterData } from "../../data";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white px-4 md:px-7 pb-14">
      <div
        className="pb-44 grid grid-cols-1 w-full max-w-[1900px] relative mx-auto 
      lg:w-[90%] lg:block md:max-lg:grid-cols-2 md:max-[991px]:pb-44
      sm:max-md:pb-12"
      >
        {foooterData.map((footer, index) => {
          return (
            <div key={index} className="blk">
              <h2>{footer.head}</h2>
              {footer.links.map((link, index2) => {
                return (
                  <a key={index2} href="#">
                    {link}
                  </a>
                );
              })}
            </div>
          );
        })}

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
    </footer>
  );
}
