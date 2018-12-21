import React from 'react'
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const jobs = [
  {
    id: 0,
    title: '.NET SharePoint Developer',
    company: 'DXC Technology',
    period: '05/2018 - Present',
    description: () => <p>
      Current position at DXC. In May 2018, got an opportunity for a new position and moved to a SharePoint Development team where I plan, design, develop and deploy Microsoft SharePoint solutions for our biggest customers.
      Working close with customers and collegues from around the globe.
      <br />
      <br />
      Activities and projects: SharePoint hosted apps, provider hosted apps, remote apps, InfoPath forms, Windows Services, provisioning jobs, tenant management, custom actions, Power Bi reports, etc.
    </p>,
    achievements: []
  }, {
    id: 1,
    title: '.NET Developer & Platform Support',
    company: 'DXC Technology',
    period: '04/2017 - 05/2018',
    description: () => <p>
      First position at DXC, same responsibilities as before becoming an employee (see below)
      plus leading my own initiatives and other's for implementing DevOps methodologies in the team.
    </p>,
    achievements: [
      'Reduced manual effort in around 60% and response times in 80%, which lead to positions reduction and increased profits for my organization.',
      'Created a ChatBot to help customers in repetitive tasks such as raising support tickets and answering questions.'
    ]
  }, {
    id: 2,
    title: 'IT Engineer',
    company: 'Softtek - HPE/DXC Account',
    period: '10/2016 - 04/2017',
    description: () => <>
      <p>Responsibilities:</p>
      <ul>
        <li>Develop software solutions for internal team and customers in order to improve support ticket response time average.</li>
        <li>L4 Support: Qlik View, Qlik Sense and Informatica.</li>
      </ul>
    </>,
    achievements: [
      "Created tools to improve productivity and response time for the support team.",
      "As contractor from Softtek in HPE account, I got an offer to become DXC employee after six months in the team (at the end of the HPE - DXC split)."
    ]
  }, {
    id: 3,
    title: 'IT Engineer',
    company: 'GTCO',
    period: '08/2015 - 10/2016',
    description: () => <>
      <p>Responsibilities:</p>
      <ul>
        <li>Develop .NET solutions for company's apps and services (financial-related mostly).</li>
        <li>Network administrator (Windows Server, Active Directory, Virtual Machines, Router, Switch, etc).</li>
      </ul>
    </>,
    achievements: [
      "Built network infrastrucutre for home-network-hosted web applications accessible from Intranet and Internet."
    ]
  }
]

export const Experience = (jobs) =>
  <div className='experience'>
    {jobs && jobs.map(job => (
      <div className='position' key={job.id}>
        <span className="period"><Icon sty iconName="Clock" styles={{ fontSize: '0.5em !important;' }} /> {job.period}</span>
        <h4 className='ms-font-xl title'>{job.title}</h4>
        <span className='company'><Icon sty iconName="POISolid" styles={{ fontSize: '0.5em !important;' }} /> {job.company}</span>
        <div className="description"><job.description /></div>
        {job.achievements && job.achievements.length > 0 &&
          <div className="description">
            <span>Achievements:</span>
            <ul>
              {job.achievements.map((ach, i) => (<li key={i}>{ach}</li>))}
            </ul>
          </div>
        }
      </div>
    ))}
  </div>
