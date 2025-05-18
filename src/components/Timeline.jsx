import React, { useRef, useEffect } from 'react';
import '../style/Timeline.css';

export default function Timeline() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentItems = itemsRef.current.filter(Boolean);

    currentItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      currentItems.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const journeyData = [
    {
      date: 'Sept 2014 - Sept 2016',
      title: 'National Service',
      company: 'Singapore Police Force - Airport Police',
      points: [
        'Served as a police officer at Changi Airport',
        'Handled security operations and emergency responses',
        'Gained experience in public service and crisis management',
      ],
    },
    {
      date: 'Nov 2017 - Feb 2021',
      title: 'Security Officer',
      company: 'Various Security Companies',
      points: [
        'Provided security services at various locations',
        'Developed strong observational and problem-solving skills',
        'Gained experience in risk assessment and mitigation',
      ],
    },
    {
      date: 'Mar 2021 - Oct 2021',
      title: 'Advanced IT Course',
      company: 'Lithan Academy',
      points: [
        'Completed Advanced Certificate in Infocomm Technology',
        'Learned fundamentals of IT systems and support',
        'Gained technical skills that enabled career transition',
      ],
    },
    {
      date: 'Jan 2022 - Aug 2022',
      title: 'IT Support Specialist',
      company: 'OCH (Under IBM)',
      points: [
        'First professional IT role providing desktop support',
        'Troubleshot hardware and software issues',
        'Managed user accounts and access permissions',
      ],
    },
    {
      date: 'Dec 2022 - Jan 2024',
      title: 'IT Support Specialist',
      company: 'AIC (Under IBM)',
      points: [
        'Supported over 500 users in enterprise environment',
        'Managed system upgrades and deployments',
        'Optimized workflows to improve efficiency',
      ],
    },
    {
      date: 'Apr 2024 - Jul 2024',
      title: 'IT Support',
      company: 'DBS Bank',
      points: [
        'Provided technical support in banking environment',
        'Gained experience with financial systems',
        'Worked with strict security protocols',
      ],
    },
    {
      date: 'Aug 2024 - Feb 2025',
      title: 'Full Stack Web Development with AI',
      company: 'MAGES Institute of Excellence',
      points: [
        'IMDA Tech Immersion and Placement Programme (TIPP)',
        'Learning modern web development technologies',
        'Building AI-enhanced web applications',
      ],
    },
  ];

  const technicalSkills = {
    frontend: ['HTML/CSS', 'JavaScript', 'React.js', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
    other: ['C#', 'Unity', 'AI Integration', 'Git', 'Troubleshooting']
  };

  return (
    <section id="timeline">
      <div className="container">
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-container">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <h2>My Journey</h2>
        <div className="timeline">
          {journeyData.map((item, index) => (
            <div 
              className="timeline-item" 
              key={`${item.company}-${index}`}
              ref={(el) => (itemsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={`point-${i}`}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}