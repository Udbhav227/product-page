import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedDiv = styled.div`
  opacity: 0;
  animation: ${({ inView }) => (inView ? fadeIn : 'none')} 0.5s ease-out forwards;
`;

const FadeInOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AnimatedDiv ref={ref} inView={inView}>
      {children}
    </AnimatedDiv>
  );
};

export default FadeInOnScroll;