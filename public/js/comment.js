const newCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comment-content").value.trim();
  const commentAuthor = document.querySelector("#comment-author").textContent;
  const blogID = document.location.href.split("/")[document.location.href.split("/").length - 1];
  if (content) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ content, commentAuthor, blogID }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/blog/"+ blogID);
    } else {
      alert("Failed to create project");
    }
  } else {
    alert("Please enter a title and content of the blog.");
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);