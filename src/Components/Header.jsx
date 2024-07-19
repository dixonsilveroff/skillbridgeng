import Logo from "/icons/icon2.svg";
import styles from "./Header.module.css";

export default function Header() {
   return (
      <>
         <div
            className="container d-flex justify-content-between align-items-center mx-0"
            style={{
               maxHeight: "110px",
               padding: "2rem 7rem",
               maxWidth: "100%",
            }}
         >
            <a
               href="../index.html"
               style={{
                  color: "#170f49",
                  textDecoration: "none",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  fontFamily: "Red Hat Display",
               }}
            >
               <img src={Logo} alt="logo" />
               SkillBridge
            </a>
            <nav className={styles.navBar}>
               <a className={styles.linkActive}>Home</a>
               <a className={styles.linkStyle}>Mentorship</a>
               <a className={styles.linkStyle}>Jobs</a>
               <a className={styles.linkStyle}>Courses</a>
               <a className={styles.linkStyle}>Entrepreneurship</a>
               <a className={styles.navButton}>
                  Sign Up
               </a>
            </nav>
         </div>
      </>
   );
}
