import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm";
import Footer from "components/footers/MiniCenteredFooter";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Blog />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
