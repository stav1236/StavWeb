import React, { useRef } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm";
import Footer from "components/footers/MiniCenteredFooter";

const LadningPage = () => {
  const aboutRef = useRef(null)
  const contactUsRef = useRef(null)
  const goToAbout = () => aboutRef.current.scrollIntoView()
  const goToContactUs = () => contactUsRef.current.scrollIntoView()
  const linksFuncs = [goToAbout, goToContactUs]

  return (
    <AnimationRevealPage>
      <Hero linksFuncs={linksFuncs} />
      <div ref={aboutRef}>
        <Blog />
      </div>
      <div ref={contactUsRef}>
        <ContactUsForm />
      </div>
      <Footer linksFuncs={linksFuncs} />
    </AnimationRevealPage>
  )

};

export default LadningPage;