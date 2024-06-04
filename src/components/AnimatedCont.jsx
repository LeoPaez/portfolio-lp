import { useLayoutEffect } from 'react'
import { useInView } from "react-intersection-observer"
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

/* Wrapper to center and space the sections from the corners */
const Cont = styled(motion.div)`
  width: 50%;
  @media (max-width: 1700px){
    width: 60%;
  }
  @media (max-width: 1500px){
    width: 70%;
  }
  @media (max-width: 1100px){
    width: 80%;
  }
  @media (max-width: 600px){
    width: 90%;
  }
  z-index: ${props => props.zIndex || 0};
`
const boxVariant = {
  visible: ({ duration }) => ({ opacity: 1, scale: 1, transition: { duration } }),
  hidden: { opacity: 0, scale: 0.8 }
};

export const Anim = ({ children, zIndex, duration }) => {
  return (
    <>
      <Cont
        variants={boxVariant}
        zIndex={zIndex}
        custom={{ duration: duration }}
        initial="hidden"
        animate="visible"
      >
        { children }
      </Cont>
    </>
  )
}

export const ScrollAnim = ({ children, duration }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useLayoutEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [inView]);

  return (
    <>
      <Cont
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        custom={{ duration: duration }}
      >
        { children }
      </Cont>
    </>
  )
}
