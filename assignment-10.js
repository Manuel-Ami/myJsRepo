async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    posts.slice(0, 5).forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

fetchPosts();
