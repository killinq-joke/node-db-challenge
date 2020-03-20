const db = require("./db-configs");

module.exports = {
  getProjects,
  getProjectById,
  postProject,
  getResources,
  postResource,
  getTasks,
  postTask
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
    return db("projects").where({id}).first()
}

function postProject(project) {
  return db("projects").insert(project);
}

function getResources() {
  return db("resources");
}

function postResource(resource) {
  return db("resources").insert(resource);
}

function getTasks() {
  return db("tasks")
    .select(
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "projects.name as project_name",
      "projects.description as project_description"
    )
    .join("projects", "projects.id", "=", "tasks.project_id");
}

function postTask(task) {
  return db("tasks").insert(task);
}
