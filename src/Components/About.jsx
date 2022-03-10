import styled from "styled-components";

const Container = styled.div`
  min-height: 90vh;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 30px 0;
`;
const Heading = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin: 0 auto;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 3px;
    left: 0;
    background: #3742fa;
    bottom: -2px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;
const Section = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Image = styled.img`
  width: 400px;
  margin-top: -80px;
  @media screen and (max-width: 900px) {
    margin: -20px auto 0;
    width: 380px;
  }
  @media screen and (max-width: 450px) {
    margin: -50px auto 0;
    width: 300px;
  }
  @media screen and (max-width: 400px) {
    margin: -50px auto 0;
    width: 270px;
  }
`;
const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    margin: 30px auto 70px;
    width: 80%;
  }
`;
const Name = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
const Desc = styled.span`
  font-size: 1rem;
  margin: 15px 0;
  color: #2b2e4a;
  line-height: 27px;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
const EmailId = styled.span`
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <Heading>About me</Heading>
        <Section>
          <Left>
            <Image src="./assets/profile.svg" alt="" />
          </Left>
          <Right>
            <Name>Hello!</Name>
            <Desc>
              I am Aaryan Patel, I am a Web developer or Full stack developer. I
              learnt fornt end lanuages like HTML, CSS, Javascipt, React and
              Backend languages like Node.js, Python, Express, MongoDB. I
              started programming at the age of 15 and started a youtube channel
              name is “Web Coder”. I created many projects like amazon clone,
              facebook clone, Instagram clone, Blog website etc.
            </Desc>
            <EmailId>aaryanpatel683@gmail.com</EmailId>
          </Right>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default About;
