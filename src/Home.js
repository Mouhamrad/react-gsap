import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import {
  Hero,
  Container,
  HeroInner,
  HeroContent,
  HeroContentInner,
  HeroContentLine,
  BtnRow,
  ExploreButton,
  ArrowIcon,
  HeroImages,
  Img,
  Girl,
  Boy
} from "./styles";

const Home = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = gsap.timeline({ delay: 0.8 });

  useEffect(() => {
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    const headLineFirst = content.children[0].children[0];
    const headLineSecond = headLineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    gsap.to(app, { duration: 0, css: { visibility: "visible" } });

    tl.from(
      girlImage,
      { duration: 1.2, y: 1280, ease: "power3.out" },
      "someLabel"
    )
      .from(
        girlImage.firstElementChild,
        { duration: 2, scale: 1.6, ease: "power3.out" },
        0.2
      )
      .from(boyImage, { duration: 1.2, y: 1280, ease: "power3.out" }, 0.2)
      .from(
        boyImage.firstElementChild,
        { duration: 2, scale: 1.6, ease: "power3.out" },
        0.2
      );

    tl.from(
      [headLineFirst.children, headLineSecond.children, headLineThird.children],
      {
        duration: 1,
        y: 44,
        ease: "power3.out",
        delay: 0.8,
        stagger: 0.15
      },
      "someLabel"
    )
      .from(
        contentP,
        { duration: 1, y: 20, opacity: 0, ease: "power3.out" },
        1.4
      )
      .from(
        contentButton,
        { duration: 1, y: 20, opacity: 0, ease: "power3.out" },
        1.4
      );
  }, [tl]);

  return (
    <Hero ref={(el) => (app = el)}>
      <Container>
        <HeroInner>
          <HeroContent>
            <HeroContentInner ref={(el) => (content = el)}>
              <h1>
                <HeroContentLine>
                  <div>Relieving the burden</div>
                </HeroContentLine>
                <HeroContentLine>
                  <div>of disease caused</div>
                </HeroContentLine>
                <HeroContentLine>
                  <div>by behaviors.</div>
                </HeroContentLine>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics. Trying this PR from codeSandBox
              </p>
              <BtnRow>
                <ExploreButton>
                  Explore
                  <ArrowIcon>
                    <img src="/images/arrow-right.svg" alt="row" />
                  </ArrowIcon>
                </ExploreButton>
              </BtnRow>
            </HeroContentInner>
          </HeroContent>
          <HeroImages>
            <div ref={(el) => (images = el)}>
              <Girl>
                <Img src="/images/girl.webp" alt="girl" />
              </Girl>
              <Boy>
                <Img src="/images/boy.webp" alt="boy" />
              </Boy>
            </div>
          </HeroImages>
        </HeroInner>
      </Container>
    </Hero>
  );
};
export default Home;
