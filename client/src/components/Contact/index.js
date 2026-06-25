import React from "react"

import { SOCIAL } from "../../utils/constants"
import ContactForm from "./ContactForm"
import TreeItem from "./TreeItem"
import "./Contact.css"

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact__treeWrapper'>
    	<div className='contact__treeSection'>
        	<TreeItem name={"Gmail"} iconClass={"far fa-envelope"} link='mailto:utkarshsingha000@gmail.com' />
        	<div style={{visibility: 'hidden'}}>
            <TreeItem name={"placeholder"} iconClass={""} link='' />
        </div>
        	<TreeItem name={"Linkedin"} iconClass={"fab fa-linkedin"} link={SOCIAL.LINKEDIN} />
   		 </div>
    	<div className='contact__treeStem'></div>
    	<div className='contact__treeSection'>
        	<div style={{visibility: 'hidden'}}>
            	<TreeItem name={"placeholder"} iconClass={""} link='' />
        	</div>
			<TreeItem right={true} name={"GitHub"} iconClass={"fab fa-github"} link={SOCIAL.GITHUB} />
			<div style={{visibility: 'hidden'}}>
        		<TreeItem name={"placeholder"} iconClass={""} link='' />
    		</div>
        	<TreeItem right={true} name={"Twitter"} iconClass={"fab fa-x-twitter"} link={SOCIAL.TWITTER} />
			
    	</div>
		</div>

			<div className='contact__header' id='formID' data-aos='slide-up'>
				<span></span>
				<h1>Drop a message here!</h1>
				<span></span>
			</div>
			<p className='contact__headerDesc' data-aos='slide-up'>
				Got a project? Drop me a line if you want to work together on something exciting.
			</p>

			<ContactForm />
		</div>
	)
}

export default Contact
