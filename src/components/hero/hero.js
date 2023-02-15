import React, {useState, useEffect} from "react";
import './hero.css';

import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";

function HeroComponent() {
    // loop number, indicates the index of the word currently being displayed in the animation 
    const [loopNum, setLoopNUm] = useState(0)

    // is word being deleted or being typed out
    const [isDeleting, setIsDeleting] = useState(false)

    // list of words that will be displayed in animation
    const toRotate = ["Software Engineer", "Full-Stack Developer"]

    // sets what text we are showing right now
    const [text, setText] = useState('')

    // determines how fast each letter is being typed after the first one
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    // indicates transition between each words
    const period = 2000;

    // handles the transitions
   useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta)
    return () => {clearInterval(ticker)}
   }, [text])

   // function that types out the animations 
   const tick = () => {
    // index is increased this way so that it can go back to 0 once the last word has been processed
    let i = loopNum % toRotate.length;

    // current text that we are animating
    let fullText = toRotate[i];

    // update text whether we are deleting or typing it out
    let updatedText = isDeleting ? fullText.substring(0,text.length - 1):fullText.substring(0, text.length + 1)

    // update the state for text 
    setText(updatedText)

    // if we are deleting, we need to compare prev deltas and set it to have
    if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2)
    }

    // if we have finished typing and not deleting, we set animation to start deleting again
    if (!isDeleting && updatedText == fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNUm(loopNum + 1);
        setDelta(500);
    }
   }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi, my name is Joyce: `}<span className="wrap">{text}</span></h1>
            <p>
                I am a fullstack engineer based in Austin, Texas. 
                I have 3 years of experience as a fullstack engineer with 
                extensive knowledge in javascript-based front-end frameworks such as 
                React Js, Angular10, etc. 
            </p>
            <p>
                I am passionate about building user-friendly interfaces and high quality, 
                reusable code. 
            </p>
            <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/> </button>
          </Col> 
          {/* <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default HeroComponent;
