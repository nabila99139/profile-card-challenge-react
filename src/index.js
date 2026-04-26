import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    // <div className="avatar">
    <img className="avatar" src="focaccia.jpg" alt="avatar" />
    //   <h1>Coba Nama Avatar</h1>
    // </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Coba Nama Avatar</h1>
      <p>
        ndsjdsf dsncduishcuidsncudsnc dhucbduc du cdycyud cyvyu dgh ygwgc
        gvcybdjasbas ch sh ashjdbyusabduiasdunsjda sd hdadbabdjasbdn sdh ha
        dhabdhd vhb vh bvh bvbv h hvb h bhj jfnkjdscdskcji
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObject={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObject }) {
  console.log("ini ", skillObject);
  const style = { backgroundColor: skillObject.color };

  let emoji;

  if (skillObject.level === "advance") {
    emoji = "💪";
  } else if (skillObject.level === "intermediate") {
    emoji = "👍";
  } else {
    emoji = "✌️";
  }

  return (
    <div>
      <span className="skill" style={style}>
        {skillObject.skill}
        <span className="emoji">{emoji}</span>
        <span className="emoji">{emoji}</span>
        {/* atau bisa juga kondisinya begini */}
        {emoji === "advance" && "💪"}
        {emoji === "intermediate" && "👍"}
        {emoji === "beginner" && "✌️"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
