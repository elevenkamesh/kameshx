import React, { useState } from "react";

const filters = [
  "Game", "Data Science/AI", "Backend", "Frontend", "Mobile",
  "JavaScript", "TypeScript", "Go", "Python", "Java", "Swift", "SQL", "Solidity", "Dart",
  "Vue", "Nuxt", "GraphQL", "gRPC", "Tailwind", "Redis", "PostgreSQL", "React", "Native", "Node", "Docker", "SpringBoot", "MySQL",
  "MongoDB", "Tensorflow", "ScikitLearn", "Blockchain", "IndexedDB", "Flutter", "Firebase", "Electron"
];

const projects = [
  {
    tags: ["Frontend", "Backend", "Node", "TypeScript", "JavaScript", "Docker", "PostgreSQL", "Vue"],
    title: "todover",
    description: "A fullstack open-source todo application that allows to rearrange and structure your todos in a weekly planner.",
    link: "github.com/FlorianWoelki/todover"
  },
  {
    tags: ["Frontend", "TypeScript", "JavaScript", "Node"],
    title: "Obsidian Symbols Prettifier",
    description: "This plugin was made for the editor Obsidian and allows the user of the plugin to automatically format the predefined symbols to a more prettier version.",
    link: "github.com/FlorianWoelki/obsidian-symbols-prettifier"
  },
  {
    tags: ["Frontend", "JavaScript", "TypeScript", "React", "Tailwind"],
    title: "Hotel Room Booking Chatbot",
    description: "This frontend application represents a simple Chatbot which role is to guide the user through the hotel room booking process. The chatbot is really easy to use and scalable in any way.",
    link: "github.com/FlorianWoelki/hotel-room-booking-chatbot"
  }
];

const ProjectPage = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filteredProjects = selectedFilter
    ? projects.filter(project =>
        project.tags.includes(selectedFilter)
      )
    : projects;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" , background: "#fff" }}>
      <h1>Projects</h1>
      <div>
        <strong>Filter:</strong>
        <div style={{ marginBottom: 16 }}>
          {filters.map(filter => (
            <span
              key={filter}
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: "4px 12px",
                marginRight: 8,
                marginBottom: 8,
                display: "inline-block",
                background: selectedFilter === filter ? "#d1eaff" : "#fff",
                cursor: "pointer"
              }}
              onClick={() => setSelectedFilter(selectedFilter === filter ? null : filter)}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>
      <hr />
      {filteredProjects.map((project, idx) => (
        <div key={idx} style={{ marginBottom: 32  }}>

          <h2 style={{ margin: "8px 0" }}>{project.title}</h2>
          <p>{project.description}</p>
          <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">{project.link}</a>
            <div style={{ marginBottom: 8, marginTop : 10,  display: "flex", flexWrap: "wrap" }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ background: "#f5f5f5", borderRadius: 8, padding: "4px 10px", marginRight: 8, fontSize: 13 }}>{tag}</span>
            ))}
          </div>
          <hr style={{ marginTop: 24 }} />
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;