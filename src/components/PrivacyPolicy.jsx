import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <HeroSection>
        <HeroOverlay>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your privacy is our priority. Learn how we protect and manage your data.
          </motion.p>
        </HeroOverlay>
      </HeroSection>

      <PolicyContainer>
        <PolicyContent>
          <LastUpdated>Last Updated: March 15, 2024</LastUpdated>

          <Section>
            <h2>1. Introduction</h2>
            <p>
              At Kazhuga, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </Section>

          <Section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Company details and business information</li>
              <li>Job title and professional information</li>
              <li>Payment information (when applicable)</li>
              <li>Communication preferences</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Usage patterns and preferences</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Referral source and time spent on pages</li>
            </ul>
          </Section>

          <Section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Personalizing your experience</li>
              <li>Communicating with you about our services</li>
              <li>Sending important updates and notifications</li>
              <li>Processing transactions and payments</li>
              <li>Analyzing website usage and trends</li>
              <li>Complying with legal obligations</li>
              <li>Protecting our rights and preventing fraud</li>
              <li>Marketing and promotional purposes (with consent)</li>
            </ul>
          </Section>

          <Section>
            <h2>4. Cookie Policy</h2>
            <p>Our website uses cookies and similar tracking technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our website</li>
              <li>Analyze traffic patterns and usage</li>
              <li>Provide personalized content and advertisements</li>
            </ul>
            <p>You can control cookie settings through your browser preferences.</p>
          </Section>

          <Section>
            <h2>5. Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
              <li>Professional advisors and consultants</li>
              <li>Third-party analytics services</li>
              <li>Payment processors (for transactions)</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </Section>

          <Section>
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
          </Section>

          <Section>
            <h2>7. Your Rights</h2>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
              <li>Data portability</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
          </Section>

          <Section>
            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred and processed in countries outside your residence. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </Section>

          <Section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of any material changes through our website or direct communication.
            </p>
          </Section>

          <Section>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <ContactInfo>
              <InfoItem>
                <IconWrapper>📧</IconWrapper>
                <div>
                  <strong>Email:</strong>
                  <p>info@kazhuga.com</p>
                </div>
              </InfoItem>
              <InfoItem>
                <IconWrapper>📍</IconWrapper>
                <div>
                  <strong>Address:</strong>
                  <p>Unit No 13, 1st Floor, Obel Villas</p>
                  <p>Balagere Road</p>
                  <p>Bengaluru, India 560087</p>
                </div>
              </InfoItem>
            </ContactInfo>
          </Section>
        </PolicyContent>
      </PolicyContainer>
    </>
  );
};

const HeroSection = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('/path-to-your-hero-image.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroOverlay = styled.div`
  max-width: 800px;
  padding: 0 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const PolicyContainer = styled.div`
  padding: 60px 20px;
  background: #f8f9fa;
`;

const PolicyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LastUpdated = styled.p`
  color: #666;
  font-style: italic;
  margin-bottom: 30px;
  text-align: right;
`;

const Section = styled.section`
  margin-bottom: 40px;

  h2 {
    color: #316FE2;
    font-size: 1.5rem;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #eef2ff;
  }

  h3 {
    color: #444;
    font-size: 1.2rem;
    margin: 20px 0 10px;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 15px;

    li {
      color: #555;
      line-height: 1.6;
      margin-bottom: 8px;
    }
  }
`;

const ContactInfo = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  margin-top: 15px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  
  strong {
    display: block;
    margin-bottom: 5px;
    color: #316FE2;
  }
  
  p {
    margin-bottom: 3px;
  }
`;

const IconWrapper = styled.span`
  font-size: 1.5rem;
  margin-right: 15px;
  min-width: 30px;
`;

export default PrivacyPolicy; 