import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Chethan B R, a passionate AWS and DevOps Engineer, With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          1. Completed Bachelors in Malnad Collage of Engineering, Hassan, Karnataka.
	  2. 
	  [Bachelor of Engineer], [Malnad COllage of Engineering], [2020] [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in [Programming Languages] Experienced with [Software
          Tools/Technologies] Strong grasp of [Design Principles/Concepts]
          Excellent problem-solving skills Effective communicator and
          collaborator
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span>
        <br />
        <br />
	  #---------------------------
	<style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        .experience-section {
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333;
        }
        .job {
            margin-bottom: 20px;
        }
        .job-title {
            font-size: 1.2em;
            font-weight: bold;
            color: #007BFF;
        }
        .company {
            font-size: 1em;
            color: #555;
        }
        .date {
            font-size: 0.9em;
            color: #888;
        }
        .description {
            margin-top: 5px;
            font-size: 0.95em;
            color: #333;
        }
    </style>
</head>
<body>

    <div class="experience-section">
        <h2>Experience</h2>

        <div class="job">
            <div class="job-title">Software Engineer</div>
            <div class="company">Tech Solutions Inc.</div>
            <div class="date">June 2020 - Present</div>
            <div class="description">
                <ul>
                    <li>Developed and maintained web applications using JavaScript, HTML, and CSS.</li>
                    <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                    <li>Improved application performance by optimizing code and implementing best practices.</li>
                </ul>
            </div>
        </div>

        <div class="job">
            <div class="job-title">Junior Developer</div>
            <div class="company">Web Innovations LLC</div>
            <div class="date">January 2019 - May 2020</div>
            <div class="description">
                <ul>
                    <li>Assisted in the development of client-side applications using React.</li>
                    <li>Participated in code reviews and contributed to team knowledge sharing.</li>
                    <li>Wrote unit tests to ensure code quality and reliability.</li>
                </ul>
            </div>
        </div>

        <div class="job">
            <div class="job-title">Intern</div>
            <div class="company">Creative Agency</div>
            <div class="date">June 2018 - December 2018</div>
            <div class="description">
                <ul>
                    <li>Supported the development team in building responsive websites.</li>
                    <li>Conducted research on industry trends and competitor analysis.</li>
                    <li>Assisted in creating documentation for project workflows.</li>
                </ul>
            </div>
        </div>

    </div>

	#-----------------------------
	<h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
