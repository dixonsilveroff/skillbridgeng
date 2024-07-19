import logo from "/icons/icon2.svg";

export default function Logo() {
   return (
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
         <img src={logo} alt="logo" />
         SkillBridge
      </a>
   );
}
