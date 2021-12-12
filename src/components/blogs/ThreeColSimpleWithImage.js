import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-6.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
// const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc:
        "https://www.linkpicture.com/q/undraw_Security_on_re_e491.png",
      title: "שידור אמינות",
      category: "אתר מראה על עסק יותר אמין וכי יש למי לפנות",
    },
    {
      imageSrc:
        "https://www.linkpicture.com/q/undraw_Word_of_mouth_re_ndo0.png",
      title: "חשיפה לקהל נרחב יותר",
      category: `האניטרנט הוא המקום שבו מבקרים הכי הרבה אנשים
       בעולם מידי יום פרסום באינטרנט נחוץ לקידום העסק שלך`,
    },
    {
      imageSrc:
        "https://www.linkpicture.com/q/undraw_working_remotely_jh40_1.png",
      title: "שידור עסקים גם מחוץ לשעות הפעילות",
      category: "האתר פעיל 24/7 ככה לקוחות יוכלו להיחשף וליצור קשר איתכם כל הזמן",
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>אז למה אתה צריך אתר</HeadingTitle>
          <HeadingDescription>3 סיבות למה אתר זה מה שאתם צריכים</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Title>{post.title}</Title>
                <Category>{post.category}</Category>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
