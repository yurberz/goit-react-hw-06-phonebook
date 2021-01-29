import styled from "styled-components";

const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .h1Title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 46px;
    color: honeydew;
  }

  .h2Title {
    margin-bottom: 30px;
    font-size: 32px;
    color: honeydew;
  }

  .text {
    font-size: 18px;
    font-style: italic;
    color: salmon;
  }

  .h1-appear {
    transform: translateX(-300%);
  }

  .h1-appear-active {
    transform: translateX(0);
    transition: transform 500ms linear;
  }
`;

export default Container;