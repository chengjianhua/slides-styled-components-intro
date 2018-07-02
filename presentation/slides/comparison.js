import React from "react";

import { Heading, Slide, CodePane } from "spectacle";

const renderComparison = () => {
  return [
    <Slide key="in-plain-css" transition={["zoom"]} bgColor="primary">
      <Heading caps textColor="tertiary" size={5}>
        In Plain CSS
      </Heading>
      <CodePane
        lang="javascript"
        source={require("raw-loader!../../assets/snippets/css-basic.example")}
        textSize="24px"
        margin="1em 0 0"
      />
    </Slide>,
    <Slide key="in-styled-components" transition={["slide"]} bgColor="primary">
      <Heading caps textColor="tertiary" size={5}>
        In styled-components
      </Heading>
      <CodePane
        lang="javascript"
        source={require("raw-loader!../../assets/snippets/styled-basic.example")}
        textSize="24px"
        margin="1em 0 0"
      />
    </Slide>
  ];
};

export default renderComparison;
