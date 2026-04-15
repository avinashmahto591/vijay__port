function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
         hey, i am vijay kumar . A passionate and hardworking computer science Engineering student with good knowledge of software development and programming skills. Seeking an opportunity to apply my Knowledge , gain practice experience ,and contribute to a growing organization.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <span>
  {/* Current Education */}
  <strong>Bachelor of Technology (B.Tech)</strong>, 
  IES College of Technology, Bhopal (MP), 2022 - 2026  <br />
  <em>Current CGPA: 7.92 </em>
  
  <br /><br />

  {/* Class 12 */}
  <strong>Class XII (Science)</strong>, 
  DAV Public School, Moonidih(JH), 2020 - 2022 <br />
  <em>Result: 71.2</em>

  <br /><br />

  {/* Class 10 */}
  <strong>Class X</strong>, 
   DAV Public School Mahuda, Dhanbad (JH), 2018 - 2020 <br />
  <em>Result: 79.2%</em>
</span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
       <span>
  <section id="skills">
  <h2>Technical Skills</h2>
  <ul>
    <li><strong>Proficient in:</strong> Java, JavaScript (ES6+), Python, MySQL Database, SQL Queries</li>
    <li><strong>Experienced with:</strong>React.js, Node.js, Git/GitHub, NumPy, Pandas, Matplotlib, Seaborn, Power BI</li>
    <li><strong>Strong grasp of:</strong> Relational & Non-Relational Databases, RESTful APIs, Responsive Web Design, Data Analysis & Visualization</li>
    <li><strong>Soft Skills:</strong> Excellent problem-solving, Analytical thinking, Effective team collaboration</li>
  </ul>
</section>
</span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
       <span>
Java Intern, Coding Thinker, 08th July 2024 to 24th July 2024. Completed an intensive program covering Java syntax, data structures, and file handling. Developed projects using object-oriented programming (OOP) and exception handling. Student Trainee, IES College of Technology, Bhopal, July 2024. Applied theoretical CSE knowledge to practical Java programming and project development. Java Developer, Coding Thinker Project, 2024. Focused on building core programming logic and implementing robust exception handling for software reliability. </span>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative Software Field solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
