import styles from "./page.module.css";

export default function Footer() {
  return (
    <footer className="w-full d-flex center">
      <div className="container w-max">
          {/* <div className=@(hideSocial ? "d-none socialmedia" : "social-media")> */}
          <div className="social-media">
              <a href="" className="btn-social">
                  <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="" className="btn-social">
                  <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="" className="btn-social">
                  <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a href="" className="btn-social">
                  <i className="fa-brands fa-youtube"></i>
              </a>
          </div>
          {/* <div className="copyright">© @(DateTime.Now.Year.ToString()) Silicon. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</div> */}
          <div className="copyright">© 2024 Silicon. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</div>
      </div>
    </footer>
)}
