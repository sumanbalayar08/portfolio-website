import {skillsSection} from '../portfolio'
import React from 'react'

const SoftwareSkills = () => {
  return (
    <div>
        {skillsSection.softwareSkill.map((skill,i)=>{
            return (
                <p>{skill.skillName}</p>
            )
        })}
    </div>
  )
}

export default SoftwareSkills