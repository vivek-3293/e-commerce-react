// import React, { useState } from "react";
// import "../styles/Navbar.css";
// import Logo from "../images/headerlogo/shopee-logo-white.webp";

// function HeaderRsponsive() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="Header-rsponsive">
//       <nav className="header-navbar d-flex align-items-center justify-content-between">
//         <div className="header-navbar-logo d-flex align-items-center justify-content-between">
//           <img src={Logo} alt="Logo" />
//           <div class="hamburger" onClick={toggleMenu}>
//             <i class="fa-solid fa-bars"></i>
//           </div>
//         </div>

//         <div className={`header-navbar-links d-flex  ${isOpen ? "open" : ""}`}>
//           <a className="text-decoration-none text-white" href="/">
//             Home
//           </a>
//           <a className="text-decoration-none text-white" href="/shop">
//             Shop
//           </a>
//           <a className="text-decoration-none text-white" href="/review">
//             Review
//           </a>
//           <a className="text-decoration-none text-white" href="/product">
//             Product
//           </a>
//           <a className="text-decoration-none text-white" href="/blog">
//             Blog
//           </a>
//           <a className="text-decoration-none text-white" href="/contact">
//             Contact
//           </a>
//           <div className="d-flex flex-column align-items-srart">
//             <a className="text-decoration-none text-white" href="/login">
//               Login
//             </a>

//             <a className="text-decoration-none text-white mt-20px">
//               Logout
//             </a>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default HeaderRsponsive;














// import React, { useState } from "react";
// import "../styles/Navbar.css";
// import Logo from "../images/headerlogo/shopee-logo-white.webp";

// const Header = () => {
//   return (
//     <div className="web-header">
//       <nav className="header-navbar d-flex align-items-center justify-content-between">
//         <div className="container d-flex align-items-center justify-content-between">
//           <div className="header-navbar-logo">
//             <img src={Logo} alt="Logo" />
//           </div>

//           <div className={"header-navbar-links d-flex align-items-center"}>
//             <a className="text-decoration-none text-white" href="/">
//               Home
//             </a>
//             <a className="text-decoration-none text-white" href="/shop">
//               Shop
//             </a>
//             <a className="text-decoration-none text-white" href="/review">
//               Review
//             </a>
//             <a className="text-decoration-none text-white" href="/product">
//               Product
//             </a>
//             <a className="text-decoration-none text-white" href="/blog">
//               Blog
//             </a>
//             <a className="text-decoration-none text-white" href="/contact">
//               Contact
//             </a>

//             <div className="d-flex align-items-center">
//               <a className="text-decoration-none text-white" href="/login">Login</a>

//               <a className="text-decoration-none text-white">Logout</a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;