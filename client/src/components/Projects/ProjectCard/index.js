import React from "react"

import "./ProjectCard.css"

// We add liveLink and githubLink to the props so it catches the data correctly!
const ProjectCard = ({ name, image, link, liveLink, github, githubLink }) => {
    
    // This creates a bulletproof check: it will use whatever link exists in your data
    const actualLink = link || liveLink;
    const actualGithub = github || githubLink;

    return (
        <div className='projectCard'>
            <div className='projectCard__img'>
                <img src={image} alt={`Utkarsh Singh ${name}`} loading='lazy' decoding='async' />
            </div>
            <div className='projectCard__overlay'>
                <h2>{name}</h2>
            </div>

            <div className='projectCard__shutter'>
                <div className='projectCard__viewLinks'>
                    {actualLink && (
                        <a href={actualLink} target='_blank' rel='noreferrer noopener' title={`Live - ${name}`}>
                            <p>Live</p>
                        </a>
                    )}
                    {/* The separator '/' only shows if BOTH links exist */}
                    {actualLink && actualGithub && (
                        <span>/</span>
                    )}
                    {actualGithub && (
                        <a href={actualGithub} target='_blank' rel='noreferrer noopener' title={`Github - ${name}`}>
                            <p>Github</p>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard