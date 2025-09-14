import React, { useState } from "react";
import key from "../config";

const AddProject = () => {
  const [name, setName] = useState("");
  const [gitUrl, setGitUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Project name is required.";
    if (!gitUrl.trim()) {
      newErrors.gitUrl = "GitHub URL is required.";
    } else if (!/^https?:\/\/.+/.test(gitUrl.trim())) {
      newErrors.gitUrl = "Enter a valid URL (http/https).";
    }
    if (image && !/^https?:\/\/.+/.test(image.trim())) {
      newErrors.image = "Enter a valid image URL (http/https).";
    }
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!tags.trim()) newErrors.tags = "At least one tag is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const tagsArray = tags.split(",").map(tag => tag.trim()).filter(tag => tag);

    fetch(`${key.backend}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        gitUrl,
        image,
        description,
        tags: tagsArray
      })
    })
      .then(res => res.json())
      .then(data => {
        alert("Project added!");
        setName("");
        setGitUrl("");
        setImage("");
        setDescription("");
        setTags("");
      })
      .catch(err => {
        alert("Error adding project");
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "2rem auto", background: "#fff", padding: "2rem", borderRadius: 8 }}>
      <h2>Add Project</h2>
      <div style={{ marginBottom: 16 }}>
        <label>Project Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ width: "100%", padding: 8 }}
        />
        {errors.name && <div style={{ color: "red", fontSize: 13 }}>{errors.name}</div>}
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>GitHub URL:</label>
        <input
          type="url"
          value={gitUrl}
          onChange={e => setGitUrl(e.target.value)}
          required
          style={{ width: "100%", padding: 8 }}
        />
        {errors.gitUrl && <div style={{ color: "red", fontSize: 13 }}>{errors.gitUrl}</div>}
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}
          style={{ width: "100%", padding: 8 }}
        />
        {errors.image && <div style={{ color: "red", fontSize: 13 }}>{errors.image}</div>}
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ width: "100%", padding: 8 }}
        />
        {errors.description && <div style={{ color: "red", fontSize: 13 }}>{errors.description}</div>}
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Tags (comma separated):</label>
        <input
          type="text"
          value={tags}
          onChange={e => setTags(e.target.value)}
          placeholder="e.g. React, Node, JavaScript"
          style={{ width: "100%", padding: 8 }}
        />
        {errors.tags && <div style={{ color: "red", fontSize: 13 }}>{errors.tags}</div>}
      </div>
      <button type="submit" style={{ padding: "8px 16px" }}>Add Project</button>
    </form>
  );
};

export default AddProject;