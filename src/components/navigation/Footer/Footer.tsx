import React, {memo} from "react";
import "../../../styles/coponentStyles/nav.css";


const Footer: React.FC = () => {

  return (
    <footer className={"w-full footerMainContainer py-5"}>
      <div className="text-white  container w-full px-4 md:px-6 lg:px-8  gap-8">
        <div className={"grid-col-1 flex flex-column "}>
          <h3 className="text-lg font-bold mb-4">Sales Detective</h3>
          <ul className="list-unstyled ">
            <li>
              <a className="footerAnchor" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="footerAnchor" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="footerAnchor" href="#">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div className={"grid-col-2 flex flex-column"}>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2 list-unstyled">
            <li>
              <a className="footerAnchor" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="footerAnchor" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="footerAnchor" href="#">
                Imprint
              </a>
            </li>
          </ul>
        </div>
        <div className={"grid-col-3 flex flex-column"}>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2 list-unstyled">
            <li>
              <a className="footerAnchor" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="footerAnchor" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="footerAnchor" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
        <p>© 2024 Affiliate Marketing. All rights reserved.</p>
      </div>

    </footer>
  );
}
export default memo(Footer);
