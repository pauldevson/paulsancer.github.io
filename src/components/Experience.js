import React from 'react'

export const jobs = [
  {
    title: 'Web Developer',
    company: 'DXC Technology',
    period: 'April 2017 - ´Present',
    description: "First position at DXC, same responsibilities as before becoming an employee (see below) plus leading my own initiatives and other's for implementing DevOps methodologies in the team.",
    achievements: [
      "yada yada yada",
      "yada2 yada2 yada2"
    ]
  },{
    title: 'Web Developer',
    company: 'DXC Technology',
    period: 'April 2017 - ´Present',
    description: "First position at DXC, same responsibilities as before becoming an employee (see below) plus leading my own initiatives and other's for implementing DevOps methodologies in the team.",
    achievements: [
      
    ]
  }
]

export const Experience = (jobs) => (<div className="experience">
  {jobs && jobs.map(job => (
    <div className="position">
      <h3 className='ms-font-xxl title'>{job.title}</h3>
      <span className='company'>@ {job.company}</span>
      <p>{job.description}</p>
      {job.achievements && job.achievements.length > 0 && 
        <di>
          <span>Achievements:</span>
          <ul>
            {job.achievements.map(ach => (<li>{ach}</li>))}
          </ul>
        </di>
      }
    </div>
  ))}
</div>)
