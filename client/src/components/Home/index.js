import React from "react"
import { Link } from "react-router-dom"

import "./Home.css"

const Home = () => {

	return (
		<main className='home' id='topID'>
			<div className='home__contentWrapper' data-aos='slide-up'>
				<p className='home__name'>Utkarsh Singh</p>
				<p className='home__profession'>
					<span>F</span>
					<span>u</span>
					<span>l</span>
					<span>l</span>
					<span>-</span>
					<span>S</span>
					<span>t</span>
					<span>a</span>
					<span>c</span>
					<span>k</span>
					<br />
					<span>D</span>
					<span>e</span>
					<span>v</span>
					<span>e</span>
					<span>l</span>
					<span>o</span>
					<span>p</span>
					<span>e</span>
					<span>r</span>
				</p>
				<p className='home__intro'>
					I'm a Computer Science student at VIT building full-stack applications that solve real coordination and workflow problems. Currently working with React, Node.js, and MongoDB, with a growing focus on real-time systems and backend architecture.
				</p>
                <div className='home__btns'>
                    <Link to='/projects'>View Projects</Link>
                    <span>or</span>
                    <Link to='/about'>Know Me</Link>
                </div>
                    <a href='https://drive.google.com/file/d/1n2HOu8cn4v2O4s8Mx2loTGfczi6RDKty/view?usp=sharing' className='home__resume' target='_blank' rel='noopener noreferrer' title={`Utkarsh Singh Resume`}>
                    View My Resume
                </a>
            </div>
        </main>
    )
}

export default Home