const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".blogs-list")
  .addEventListener("click", delButtonHandler);

document
  .querySelector(".create-blog-btn")
  .addEventListener("click", () => {
    document.location.replace("/create");
  });