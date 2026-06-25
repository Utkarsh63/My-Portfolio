import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Skill from './Skill'
import { skillGetAll } from '../../store/actions'
import LottieComp from '../../utils/Comp/LottieComp'
import loaderLottie from '../../assets/lotties/loader.json'
import './Expertise.css'

const Expertise = () => {
    const dispatch = useDispatch()
    const { loading: loadingSkills, skills } = useSelector((state) => state.skills)

    useEffect(() => {
        dispatch(skillGetAll())
    }, [dispatch])

    return (
        <div className="expertise">
            <div className="expertise__expSection">
                <h1>Experience</h1>
                <h2 className="expertise__expTitle">Core Member — Design Team</h2>
                <div className="expertise__expCompany">
                    <div>| @</div>
                    <div>MUN Club, VIT Bhopal</div>
                </div>
                <div className="expertise__expDates">
                    <span>Dec 2024</span>
                    <hr className="expertise__expLine" />
                    <span>Nov 2025</span>
                </div>
                <h3 className="expertise__expTasksSub">Tasks/Roles:</h3>
                <ul className="expertise__expList">
                    <li>Produced 20+ design assets including posters, social media creatives, and branding materials for MUN conferences, maintaining consistent visual identity across all campaigns.</li>
                    <li>Coordinated with organizing and outreach teams across 3+ events, delivering cohesive branding collateral under tight deadlines.</li>
                </ul>
            </div>

            <div className="expertise__skillsSection">
                <h1>Skills</h1>

                <div className="expertise__skillsWrapper">
                    {loadingSkills ? (
                        <LottieComp lotteData={loaderLottie} height={200} width={200} />
                    ) : (
                        skills &&
                        skills.length > 0 &&
                        skills.map((skill) => <Skill key={skill._id} {...skill} />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Expertise
