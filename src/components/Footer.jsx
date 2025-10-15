import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const FooterContainer = styled.footer`
  background-color: #f9f7f4;
  padding: 0px 25px 20px 25px;
  font-size: 0.9rem;
  color: #333;

  .divider {
    margin: 50px 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const LinkSection = styled.div`
  h3 {
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 1.2rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #555;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const InfoSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  .logo {
    font-family: "Cormorant Garamond", serif;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    max-width: 400px;
    line-height: 1.6;
    color: #555;
  }
`;

const ContactInfo = styled.div`
  text-align: left;
  font-style: normal;
  color: #555;
  p {
    margin: 4px 0;
  }
  strong {
    color: #333;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1.2rem;
  a {
    color: #333;
  }
`;

const SubscribeForm = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 15px 0;
  width: 100%;
  max-width: 350px;

  input {
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 0 10px;
    background: transparent;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
`;

const BottomBar = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  font-size: 0.75rem;
  color: #888;

  p {
    margin-bottom: 10px;
  }

  a {
    color: #888;
    text-decoration: none;
    padding: 0 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <hr className="divider" />
        <ContentWrapper>
          <LinkSection>
            <h3>Info</h3>
            <ul>
              <li>
                <a href="#">BIS Hallmark</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </LinkSection>
          <LinkSection>
            <h3>Quick links</h3>
            <ul>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Special Occasion</a>
              </li>
              <li>
                <a href="#">Budget Buys</a>
              </li>
              <li>
                <a href="#">Wholesale</a>
              </li>
            </ul>
          </LinkSection>
          <InfoSection>
            <div className="logo">Shop</div>
            <p>
              <strong>Shop by Demo Company</strong>
            </p>
            <p>
              Discover our exquisite collection of fine jewelry, crafted with
              passion and precision. Each piece tells a story of beauty and
              sophistication, perfect for every moment.
            </p>
            <ContactInfo>
              <p>
                <strong>Customer Care:</strong> +91 1234567890
              </p>
              <p>
                <strong>Email:</strong> support@example.in
              </p>
              <p>
                <strong>Address:</strong> 1, Example Street, Example City, State
                - 800001
              </p>
            </ContactInfo>
            <Socials>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </Socials>
            <h3>Subscribe to our emails</h3>
            <SubscribeForm>
              <input type="email" placeholder="Email" />
              <button>
                <IoArrowForward />
              </button>
            </SubscribeForm>
          </InfoSection>
        </ContentWrapper>
        <BottomBar>
          <p>&copy; 2025, Company Name India</p>
          <div>
            <a href="#">Privacy policy</a> &middot;
            <a href="#">Shipping policy</a> &middot;
            <a href="#">Terms of service</a> &middot;
            <a href="#">Refund policy</a>
          </div>
        </BottomBar>
      </FooterContainer>
      {/* <WhatsAppButton
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </WhatsAppButton> */}
    </>
  );
};

export default Footer;
