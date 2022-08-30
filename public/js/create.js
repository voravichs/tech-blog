const newBlogHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#blog-title").value.trim();
  const content = document.querySelector("#blog-content").value.trim();

  console.log(name);
  console.log(content);
  if (name && content) {
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ name, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create project");
    }
  } else {
    alert("Please enter a title and content of the blog.");
  }
};

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newBlogHandler);