import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1498eb, #2024f0);
  @media screen and (max-width: 500px) {
    min-height: 80vh;
  }
`;
const Wrapper = styled.div`
  display: flex;
  max-width: 85%;
  padding: 10vh 0;
  margin: 0 auto;
  justify-content: space-between;
  color: #fff;
  @media screen and (max-width: 950px) {
    max-width: 95%;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    padding: 5vh 0;
  }
`;
const Left = styled.div`
  width: 50%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 10px;
    text-align: left;
  }
  @media screen and (max-width: 600px) {
    padding-left: 5px;
  }
`;
const Right = styled.div`
  width: 50%;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;
const Heading1 = styled.span`
  font-size: 5rem;
  font-weight: 600;
  margin-bottom: -25px;
  color: #fff;
  line-height: 8rem;
  @media screen and (max-width: 1200px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 3rem;
    margin-bottom: -15px;
    line-height: 5rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 2.5rem;
  }
`;
const Heading2 = styled.span`
  font-size: 5rem;
  font-weight: 600;
  color: #fff;
  line-height: 8rem;
  @media screen and (max-width: 1200px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 3rem;
    line-height: 5rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 2.5rem;
  }
`;
const SubText = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  margin-left: 5px;
  @media screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;
const Editable = styled.span`
  color: #fff;
  text-decoration: underline;
  font-weight: 600;
`;
const Desc = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 20px 0 40px 5px;
  max-width: 450px;
  line-height: 1.7rem;
  color: #fff;
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
    margin: 20px 0 20px 5px;
  }
  @media screen and (max-width: 1000px) {
    margin: 20px auto 40px;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    max-width: 400px;
    margin: 20px auto 20px 5px;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.9rem;
  max-width: 380px;
  }
`;
const Button = styled.button`
  width: fit-content;
  background: #fff;
  padding: 10px 25px;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 5px;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  transition: .2s all;
  a {
    color: #111;
  }
  :hover{
    background: #111;
  }
  :hover a{
    color: #fff;
  }
  @media screen and (max-width: 1200px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1000px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    margin:0;
  }
  @media screen and (max-width: 350px) {
    padding: 8px 20px;
  }
`;
const Illustration = styled.img`
  width: 500px;
  padding-top: 80px;
  float: right;
  @media screen and (max-width: 1200px) {
    width: 450px;
  }
`;

const Home = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Left>
          <TextBox>
            <Heading1>Hi,</Heading1>
            <Heading2>I am Aaryan</Heading2>
            <SubText>
              I am a <Editable>Web developer</Editable>
            </SubText>
            <Desc>
              Are you looking for a web developer to build your website?
            </Desc>
            <Button>
              <a href="#contact">Hire me</a>
            </Button>
          </TextBox>
        </Left>
        <Right>
          <Illustration src="./assets/home-ill.png" alt="" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
