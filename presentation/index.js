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
              in plain css
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
              in styled-components
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/snippets/styled-basic.example")}
              textSize="24px"
              margin="1em 0 0"
            />
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

          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
              Standard List
            </Heading>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Example Quote</Quote>
              <Cite>Author</Cite>
            </BlockQuote>
          </Slide>
        </Deck>
      </Fragment>
    );
  }
}
