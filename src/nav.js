import React, { useEffect } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  let navbarClasses=["nav-container"];

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="nav">
        <div className="nav-logo">
          <p>Sarah Rondon</p>
        </div>
        <nav className="navigation">
          <a target="_blank" href="https://sarahrondon.blogspot.com/?m=1">Blog</a>
        </nav>
      </div>
    </header>
  )
}

export default Nav;
