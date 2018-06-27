// Import React
import React, { Fragment } from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
  Link,
  Image,
  Layout,
  CodePane,
  Fit,
  S,
  Fill
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Fragment>
        <Deck
          transition={["zoom", "slide"]}
          transitionDuration={500}
          theme={theme}
        >
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps textColor="secondary">
              Introducing styled-components
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" bold>
              <Link
                textColor="tertiary"
                href="https://www.styled-components.com/"
              >
                👉 Solution by CSS-in-JS 👈
              </Link>
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading caps textColor="tertiary" size={5}>
              In Plain CSS
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/snippets/css-basic.example")}
              textSize="24px"
              margin="1em 0 0"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps textColor="tertiary" size={5}>
              In styled-components
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/snippets/styled-basic.example")}
              textSize="24px"
              margin="1em 0 0"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote textSize="32px">
                Even when using regular CSS or CSS Modules, if you make your
                styles private to components (as you should), you basically end
                up with CSS-in-JS anyway.
              </Quote>
              <Cite>
                <Link
                  target="_blank"
                  textColor="tertiary"
                  href="https://twitter.com/markdalgleish"
                >
                  @markdalgleish{" "}
                  <S type="italic" textColor="quarternary">
                    (🦄 CSS Modules co-creator)
                  </S>
                </Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["fade", "zoom"]}>
            <Heading size={2} textColor="secondary">
              Cons
            </Heading>

            <List textColor="tertiary">
              <ListItem>
                <Link
                  target="_blank"
                  textColor="tertiary"
                  href="https://github.com/styled-components/styled-components/pull/1682#issuecomment-399496564"
                >
                  Drilled Props
                </Link>
              </ListItem>

              <ListItem>
                <S type="strikethrough">No support for middleware/plugin</S>
              </ListItem>

              <ListItem>
                <S type="strikethrough">Performance</S>{" "}
                <S type="normal" textColor="secondary">
                  (fast enough)
                </S>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading caps size={2} textColor="primary">
              <Link
                textColor="primary"
                target="_blank"
                href="https://github.com/cssinjs/istf-spec"
              >
                ISTF
              </Link>
            </Heading>

            <Text textColor="quarternary" margin="10px 0 0">
              Interoperable Style Transfer Format
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={6} textColor="tertiary" caps>
              Features
            </Heading>

            <List textColor="secondary">
              <ListItem>定义了一种 CSS-in-JS 的输出格式</ListItem>
              <ListItem>使得 in-JS 的 CSS 能够脱离 runtime 环境被共享</ListItem>
              <ListItem>
                发布 npm 包时可以输出为该格式, 将大幅提升 runtime
                计算出样式的速度
              </ListItem>
              <ListItem>运行时的解析速度够快, 运行时的插件也成为可能</ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading caps size={2} textColor="primary">
              <Link
                textColor="primary"
                target="_blank"
                href="https://github.com/cssinjs/istf-spec"
              >
                ISTF
              </Link>
            </Heading>

            <Text textColor="quarternary" margin="10px 0 0">
              Interoperable Style Transfer Format
            </Text>
          </Slide>

          <Slide transition={["slide", "zoom"]} bgColor="quarternary">
            <Heading textColor="secondary" caps size={5}>
              ⚡️ Blazing Fast ⚡️
            </Heading>

            <Link
              target="_blank"
              href="https://esbench.com/bench/592d599e99634800a03483d8"
            >
              <Image
                margin="1em 0 0"
                src={require("../assets/istf-benchmark.png")}
              />
            </Link>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={4} textColor="primary">
              <Link
                textColor="primary"
                target="_blank"
                href="https://github.com/kitten/sweetsour"
              >
                kitten/sweetsour
              </Link>
            </Heading>

            <Text margin="1em 0 0" textColor="quarternary">
              A CSS-in-JS parser and pipeline adhering to the ISTF spec 🍭
            </Text>
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Heading textColor="tertiary" size={5}>
              Input
            </Heading>

            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/snippets/sweetsour-input.snippet")}
              textSize="24px"
              margin="1em 0 0"
            />
          </Slide>

          <Slide transition={["slide", "fade"]}>
            <Heading size={5} textColor="tertiary">
              Output
            </Heading>

            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/snippets/sweetsour-output.snippet")}
              textSize="20px"
              margin="1em 0 0"
            />
          </Slide>
        </Deck>
      </Fragment>
    );
  }
}
