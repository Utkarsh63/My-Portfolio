import React from 'react'

import './ProjectSlide.css'



const ProjectSlide = (project) => {

const { image, name, description, technologies, type, link, github } = project;



return (

<div className="projectSlide">

<div className="projectSlide__imgWrapper">

<img src={image} alt={`Utkarsh Singh ${name}`} />

{link && (

<div className="projectSlide__imgOverlay">

<a

href={link}

target="_blank"

rel="noopener noreferrer"

title={`Utkarsh Singh ${name}`}

>

View Live

</a>

</div>

)}

</div>


{/* 👇 FIX: We turn the wrapper into a flexbox column so we can pin the links to the bottom */}

<div className="projectSlide__descWrapper" style={{ display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '60vh' }}>


{/* 👇 FIX: Only this text area scrolls! */}

<div style={{ flex: 1, overflowY: 'auto', paddingRight: '15px' }}>

<h2>{name}</h2>

<p>{description}</p>

<h3 style={{ marginTop: '10px' }}>Technologies Used:</h3>

<div className="projectSlide__techUsed">

{technologies.map((technology, index) => (

<span key={index}>{technology}</span>

))}

</div>

<h3>Project Type:</h3>

<p>{type}</p>

</div>


{/* 👇 FIX: These links are PINNED to the bottom and will NEVER be cut off. Thick black lines included! */}

<div style={{ paddingTop: '15px', paddingBottom: '10px', marginTop: '10px', flexShrink: 0, backgroundColor: '#fff' }}>

<h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', color: 'black' }}>View Project:</h3>

<div style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '18px' }}>

{link && (

<>

<a href={link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none', borderBottom: '3px solid black', paddingBottom: '3px' }}>

See Live

</a>

<span style={{ fontWeight: 'bold', color: '#6b7280' }}>or</span>

</>

)}

{github && (

<a href={github} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none', borderBottom: '3px solid black', paddingBottom: '3px' }}>

Code on Github

</a>

)}

</div>

</div>



</div>

</div>

)

}



export default ProjectSlide