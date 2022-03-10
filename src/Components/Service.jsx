import styled from "styled-components";

const Container = styled.div`
  min-height: 95vh;
  background: #191d2b;
`;
const Wrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;
  padding: 20px 0 80px;
`;
const Heading = styled.span`
  font-size: 2rem;
  font-weight: 600;
  position: relative;
  color: #fff;
  ::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 3px;
    left: 0;
    background: #fff;
    bottom: -2px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;
const Section = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  margin: 0 auto;
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const CardWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  padding: 35px 0;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  box-shadow:  0px 1px 30px #00000067;
  &:hover {
    box-shadow:  0px 1px 40px #00000067;
    transform: scale(1.05);
  }
  @media screen and (max-width: 1100px) {
    max-width: 280px;
  }
  @media screen and (max-width: 1000px) {
    margin: 0 auto 30px;
  }
  @media screen and (max-width: 400px) {
    transform: scale(0.9);
    margin: 0 auto 20px;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;
const Illustration = styled.img`
  width: 200px;
  padding: 10px 0;
`;
const Title = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 10px 0 15px;
  color: #fff;
`;
const Subtitle = styled.span`
  line-height: 28px;
  color: #fff;
`;

const Service = () => {
  return (
    <Container id="service">
      <Wrapper>
        <Heading>Service</Heading>
        <Section>
          <CardWrapper>
            <Card>
              <Illustration src="./assets/card-ill1.svg" alt="" style={{ width: "190px" ,marginBottom: "30px"}}/>
              <Title style={{marginTop: "0px"}}>Build Website</Title>
              <Subtitle style={{marginLeft: "-10px"}}> >> Portfolio</Subtitle>
              <Subtitle style={{marginLeft: "-10px"}}> >> Landing Page</Subtitle>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <Illustration src="./assets/card-ill2.svg" alt="" style={{ width: "250px" ,marginBottom: "50px"}}/>
              <Title style={{marginTop: "0px"}}>Website Design</Title>
              <Subtitle style={{marginLeft: "10px"}}> >> Web Design</Subtitle>
              <Subtitle style={{marginLeft: "10px"}}> >> App Design</Subtitle>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <Illustration
                src="./assets/card-ill3.svg"
                alt=""
                style={{ width: "200px" ,marginTop: "-10px"}}
              />
              <Title style={{marginTop: "30px"}}>Web Application</Title>
              <Subtitle style={{marginLeft: "-10px"}}> >> Blog</Subtitle>
              <Subtitle style={{marginLeft: "-10px"}}> >> E-commerce</Subtitle>
              <Subtitle style={{marginLeft: "-10px"}}> >> Social Media</Subtitle>
            </Card>
          </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Service;
