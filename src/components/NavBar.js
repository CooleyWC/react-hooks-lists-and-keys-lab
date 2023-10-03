import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link)=>{
    console.log(link)
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{linkElements}</nav>;
}

export default NavBar;
