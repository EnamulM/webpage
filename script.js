document.addEventListener('DOMContentLoaded', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      let usersDiv = document.getElementById('users');
      usersDiv.innerHTML = `<h2>Users</h2>`;
      users.forEach(user => {
        usersDiv.innerHTML += `<p>${user.name}</p>`;
      });
    });

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      let postsDiv = document.getElementById('posts');
      postsDiv.innerHTML = `<h2>Posts</h2>`;
      posts.forEach(post => {
        postsDiv.innerHTML += `<p>${post.title}</p>`;
      });
    });

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      let todosDiv = document.getElementById('todos');
      todosDiv.innerHTML = `<h2>To-dos</h2>`;
      todos.forEach(todo => {
        todosDiv.innerHTML += `<p>${todo.title}</p>`;
      });
    });
  
  
});
