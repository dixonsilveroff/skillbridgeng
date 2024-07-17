import styles from "./Footer.module.css";
import Logo from "/icons/icon2.svg";

export default function Footer() {
   return (
      <>
         <div
            className="d-flex flex-column"
            style={{
               maxWidth: "100vw",
               maxHeight: "497px",
               backgroundColor: "#202430",
               padding: "2rem 7rem",
            }}
         >
            <a href="../index.html" className={styles.logo}>
               <img src={Logo} alt="skillbridge logo" />
               SkillBridge
            </a>
            <div
               className="d-flex justify-content-between"
               style={{
                  marginBottom: "4rem"
               }}
            >
               <div>
                  <p
                     className="fw-semibold text-white text-start m-0"
                     style={{
                        fontFamily: "Epilogue",
                        fontSize: "1.06rem",
                        lineHeight: "1.8rem",
                     }}
                  >
                     Sitemap
                  </p>
                  <div className="d-flex" style={{ gap: "30px" }}>
                     <div className="d-flex flex-column text-start">
                        <a className={styles.linkStyle} href="">
                           Home
                        </a>
                        <a className={styles.linkStyle} href="">
                           About
                        </a>
                        <a className={styles.linkStyle} href="">
                           Courses
                        </a>
                     </div>
                     <div className="d-flex flex-column text-start">
                        <a className={styles.linkStyle} href="">
                           Mentorship
                        </a>
                        <a className={styles.linkStyle} href="">
                           Networking
                        </a>
                        <a className={styles.linkStyle} href="">
                           Entrepreneurship
                        </a>
                     </div>
                  </div>
               </div>
               <div>
                  <p
                     className="fw-semibold text-white text-start m-0"
                     style={{
                        fontFamily: "Epilogue",
                        fontSize: "1.06rem",
                        lineHeight: "1.8rem",
                     }}
                  >
                     Contact
                  </p>
                  <a
                     className={styles.linkStyleContact}
                     href="mailto:info@skillbridgenigeria.com"
                  >
                     info@skillbridgenigeria.com
                  </a>
                  <p className={styles.linkStyleContact}>
                     Phone: +234-XXX-XXXX
                  </p>
                  <p className={styles.linkStyleContact}>
                     Address: Lagos, Nigeria
                  </p>
               </div>
               <div className="d-flex flex-column align-items-start">
                  <p
                     className="fw-semibold text-white text-start m-0"
                     style={{
                        fontFamily: "Epilogue",
                        fontSize: "1.06rem",
                        lineHeight: "1.8rem",
                     }}
                  >
                     Partner With Us
                  </p>
                  <p className={styles.partnerText}>
                     Partner with SkillBridge Nigeria to empower Nigerian youth
                     and contribute to economic development. Explore
                     opportunities to offer courses, mentorship, internships, or
                     sponsorships.
                  </p>
                  <form
                     className="d-flex"
                     style={{ gap: ".5rem", maxHeight: "50px" }}
                     id="Email Address"
                  >
                     <input
                        type="email"
                        placeholder="Email Address"
                        style={{
                           padding: ".75rem 1rem",
                           backgroundColor: "#fff",
                        }}
                        className={styles.emailInput}
                        required
                     />
                     <button className={styles.emailInputButton}>
                        Subscribe
                     </button>
                  </form>
               </div>
            </div>
            <hr style={{
               border: "none",
               height: "1px",
               backgroundColor: "#d6ddeb",
               marginBottom: "2.5rem",
            }}/>
            <div className="d-flex justify-content-between">
               <p style={{color: "#d6ddeb", fontFamily: "Epilogue", fontWeight: "500"}}>2024@SkillBridge. All rights reserved.</p>
               <figure className="d-flex justify-content-between" style={{maxHeight: "2rem", maxWidth: "18rem", gap: "30px"}}>
                  <a target="_blank" href="https://facebook.com"><img width="32px" src="public/images/Facebook-white.svg" alt="facebook logo" /></a>
                  <a target="_blank" href="https://instagram.com"><img width="32px" src="public/images/Instagram-white.svg" alt="instagram logo" /></a>
                  <a target="_blank" href="https://dribbble.com"><img width="32px" src="public/images/Dribbble-white.svg" alt="dribble logo" /></a>
                  <a target="_blank" href="https://linkedin.com"><img width="32px" src="public/images/LinkedIn-white.svg" alt="linkedin logo" /></a>
                  <a target="_blank" href="https://x.com"><img width="32px" src="public/images/Twitter-white.svg" alt="twitter logo" /></a>
               </figure>
            </div>
         </div>
      </>
   );
}
