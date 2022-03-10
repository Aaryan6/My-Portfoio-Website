import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #3742fa;
  @media screen and (max-width: 1100px) {
    min-height: 80vh;
  }
`;
const Wrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;
  padding: 30px 0 60px;
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
  display: grid;
  grid-template-columns: 150px 150px 150px 150px;
  row-gap: 90px;
  justify-content: space-between;
  padding-top: 80px;
  margin: 0 auto;
  @media screen and (max-width: 1100px) {
    row-gap: 50px;
    grid-template-columns: 120px 120px 120px 120px;
  }
  @media screen and (max-width: 800px) {
    row-gap: 50px;
    grid-template-columns: 120px 120px;
    max-width: 400px;
  }
  @media screen and (max-width: 400px) {
    row-gap: 30px;
    grid-template-columns: 100px 100px;
    max-width: 400px;
  }
`;
const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 10px 31px -10px #478df7;
    transform: scale(1.1);
  }
  @media screen and (max-width: 1100px) {
    min-height: 120px;
  }
  @media screen and (max-width: 400px) {
    min-height: 100px;
  }
`;
const Image = styled.img`
  @media screen and (max-width: 400px) {
    width: 60px !important;
  }
`;

const Skill = () => {
  return (
    <Container id="skill">
      <Wrapper>
        <Heading>Skills</Heading>
        <Section>
          <Card>
            <Image src="./assets/html.png" alt="" style={{ width: "70px" }} />
          </Card>
          <Card>
            <Image src="./assets/css.png" alt="" style={{ width: "80px" }} />
          </Card>
          <Card>
            <Image src="./assets/js.png" alt="" style={{ width: "70px" }} />
          </Card>
          <Card>
            <Image src="./assets/python.png" alt="" style={{ width: "80px" }} />
          </Card>
          <Card>
            <Image
              src="./assets/mongodb.png"
              alt=""
              style={{ width: "80px" }}
            />
          </Card>
          <Card>
            <Image
              src="./assets/express.png"
              alt=""
              style={{ width: "110px" }}
            />
          </Card>
          <Card>
            <Image src="./assets/react.png" alt="" style={{ width: "70px" }} />
          </Card>
          <Card>
            <Image src="./assets/nodejs.png" alt="" style={{ width: "80px" }} />
          </Card>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Skill;
