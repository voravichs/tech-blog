const updateHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#update-name").value.trim();
  const content = document.querySelector("#update-content").value.trim();
  const blogID = document.location.href.split("/")[document.location.href.split("/").length - 1];

  if (name && content) {
    const response = await fetch("/api/blogs/" + blogID, {
      method: "PUT",
      body: JSON.stringify({ name, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update project");
    }
  } else {
    alert("Please enter a title and content of the blog.");
  }
};

const deleteHandler = async (event) => {
  event.preventDefault();

  const blogID = document.location.href.split("/")[document.location.href.split("/").length - 1];

  const response = await fetch("/api/blogs/" + blogID, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete project");
  }
};

document
  .querySelector(".update-form")
  .addEventListener("submit", updateHandler);

document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteHandler);