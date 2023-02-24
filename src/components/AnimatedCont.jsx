import React, {useContext, useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import styled from 'styled-components'

const Cont = styled(motion.div)`
  position: relative;
  z-index: ${props => props.zIndex || 0};
`
const boxVariant = {
  visible: ({ duration }) => ({ opacity: 1, scale: 1, transition: { duration } }),
  hidden: { opacity: 0, scale: 0.8 }
};

export const ScrollAnim = ({ children, zIndex, duration }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <>
      <Cont
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        zIndex={zIndex}
        custom={{ duration: duration }}
      >
        { children }
      </Cont>
    </>
  )
}
