import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  min-height: 90vh;
  background: #191d2b;
`;
const Wrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;
  padding: 30px 0;
`;
const Section = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding-top: 50px;
  }
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
const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1100px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  input {
    border: none;
    background: #262c41;
    max-width: 350px;
    border-radius: 50px;
    padding: 18px 0 18px 18px;
    font-size: 1rem;
    margin: 10px 0;
    outline: none;
    color: #fff;
    font-weight: 400;
    transition: .2s all;
    :hover{
    box-shadow:  0px 1px 15px #0000003b;
    }
    ::placeholder{
      color: #fff;
    }
  }
  textarea {
    border: none;
    background: #262c41;
    resize: none;
    max-width: 350px;
    border-radius: 30px;
    padding: 18px 0 18px 18px;
    height: 120px;
    margin: 10px 0 20px;
    font-size: 1rem;
    outline: none;
    font-weight: 400;
    color: #fff;
    transition: .2s all;
    :hover{
    box-shadow:  0px 1px 15px #0000003b;
    }
    ::placeholder{
      color: #fff;
    }
  }
`;
const Name = styled.input``;
const Email = styled.input``;
const Message = styled.textarea``;
const Right = styled.div`
  width: 40%;
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 100% 100%;
    width: 50%;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
const Title = styled.span`
  font-weight: 500;
  margin-bottom: 5px;
  color: #fff;
`;
const Subtitle = styled.span`
  font-weight: 400;
  color: #ffffffe4;
`;
const Button = styled.button`
  border: none;
  border-radius: 50px;
  background: #3742fa;
  width: fit-content;
  padding: 10px 30px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    background: #4a53fc;
  }
  :active{
    background: #2930bb;
  }
`;
const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
const Icons = styled.div`
  display: flex;
  margin-top: 10px;
`;
const IconImage = styled.img`
  width: 25px;
  margin-right: 15px;
  cursor: pointer;
  :hover {
    transition: 0.2s ease-in;
    transform: scale(1.2);
  }
`;

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4ahkqb8', 'template_puv6sx1', e.target, '86feE1BDwZ8FCRZEr')
      .then((result) => {
          console.log(result.text);
          window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
    <Container id="contact">
      <Wrapper>
        <Heading>Contact me</Heading>
        <Section>
          <Left>
            <Form onSubmit={sendEmail}>
              <Name type="text" name="user_name" placeholder="Name" required/>
              <Email
                type="email"
                name="user_email"
                placeholder="Email Id"
                required
              />
              <Message
                type="text"
                name="message"
                placeholder="Message"
                required
              ></Message>
              <Button type="submit">Send</Button>
            </Form>
          </Left>
          <Right>
            <Info>
              <Title>Email Id</Title>
              <Subtitle>aaryanpatel683@gmail.com</Subtitle>
            </Info>
            <Info>
              <Title>Contact no.</Title>
              <Subtitle>+91 62601 33508</Subtitle>
            </Info>
            <Info>
              <Title>Address</Title>
              <Subtitle>Khargone, MP, India</Subtitle>
            </Info>
            <SocialBox>
              <Title>Follow on</Title>
              <Icons>
                <a href="https://www.instagram.com/codewith_aaryan/?utm_medium=copy_link"><IconImage src="./assets/instagram.png" alt="" /></a>
                <a href="https://twitter.com/aaryanpatel_06?t=YLe6i89JdF9ifZz3a8xXew&s=08"><IconImage src="./assets/twitter.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/aaryan-patel-144028233"><IconImage src="./assets/linkedin.png" alt="" /></a>
                <a href="https://youtube.com/channel/UC0NXl9KXOz5Uss__QP_Lhog"><IconImage src="./assets/youtube.png" alt="" style={{transform: "scale(1.3)"}}/></a>
              </Icons>
            </SocialBox>
          </Right>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Contact;
