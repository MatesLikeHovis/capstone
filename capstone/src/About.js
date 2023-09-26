import { useRef } from "react"

function About() {

    const aboutRef = useRef(null);

    return (
        <section className="About" ref={aboutRef}>
            <div className="AboutTextBox">
                <h3>Little Lemon</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  Exercitation variam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit alliqua dolor do amet sint. Velit oficia consequat duis enim velit mollit.</p>
            </div>
            <img className="frontPic" src="/restaurant chef B.jpg"></img>
            <img className="rearPic" src="/Mario and Adrian A.jpg"></img>
        </section>
    )    
}

export default About