import React from "react"

import "./About.css"
import waveData from "../../assets/lotties/wave.json"
import LottieComp from "../../utils/Comp/LottieComp"

const About = () => {
	return (
		<div className='about'>
			<div className='about__section about__intro' data-aos='slide-up'>
				<div className='about__introGreet'>
					<h3>Hello Visitors!</h3>
					<LottieComp lotteData={waveData} height={100} width={100} />
				</div>

				<p>Myself,</p>
				<h1>Utkarsh Singh</h1>
				<h4>B.Tech CSE Student & Full-Stack Developer</h4>
				<p>I'm Utkarsh, a B.Tech Computer Science student at VIT (2023–2027) with a deep passion for software engineering. I specialize in developing scalable, full-stack web applications and thrive on solving complex technical challenges. I am dedicated to continuously expanding my skill set, whether through competitive programming, exploring robust backend systems, or contributing to creative design initiatives. Apart from this, I love to play Cricket.</p>
			</div>

			<span className='line'></span>

			<div className='about__section about__edu' data-aos='slide-up'>
				<h4>I studied</h4>
				<h3>B.Tech Computer Science</h3>
				<p>from</p>
				<h1>Vellore Institute of Technology</h1>
				<div className='about__eduDate'>
					<span>2023</span>
					<span></span>
					<span>2027</span>
				</div>
				<p>CGPA: 8.72</p>
			</div>

			<span className='line'></span>

			<div className='about__section about__edu'>
				<h4>Here are some of my achievements & certifications</h4>
				<div className='about__interest'>
					<h3>Competitive Programming</h3>
					<p></p>
					<h1>150+ problems solved across LeetCode, GeeksforGeeks, Codeforces</h1>
					<div className='about__eduDate'>
						<span>Consolidated on Codolio</span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div className='verticalLine'></div>

				<div className='about__interest'>
					<h3>NPTEL Marketing Analytics</h3>
					<p></p>
					<h1>96/100, Elite category</h1>
					<div className='about__eduDate'>
						<span>NPTEL</span>
						<span></span>
						<span>Certification</span>
					</div>
				</div>

				<div className='verticalLine'></div>

				<div className='about__interest'>
					<h3>Google 'The Bits and Bytes of Computer Networking'</h3>
					<p></p>
					<div className='about__eduDate'>
						<span>Google</span>
						<span></span>
						<span>Certification</span>
					</div>
				</div>

				<div className='verticalLine'></div>

				<div className='about__interest'>
					<h3>NPTEL Introduction to Machine Learning</h3>
					<p></p>
					<div className='about__eduDate'>
						<span>NPTEL</span>
						<span></span>
						<span>Certification</span>
					</div>
				</div>
			</div>

			<div className='about__closingTag' data-aos='slide-up'>
				<span></span>
				<h1>There's more to my story to discover.</h1>
				<span></span>
			</div>
		</div>
	)
}

export default About
