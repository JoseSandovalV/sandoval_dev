    async function cargarPosts() {
      try {
        const res = await fetch('posts.json');
        const posts = await res.json();
        const main = document.querySelector('main');

        posts.forEach(post => {
          const article = document.createElement('article');
          article.className = 'mb-10 bg-white p-6 rounded-lg shadow-md';

          article.innerHTML = `
            <h3 class="text-2xl font-semibold mb-2 text-indigo-700">${post.title}</h3>
            <p class="text-gray-600 text-sm mb-4">Publicado el ${post.date}</p>
            <p class="text-gray-800 mb-4">${post.summary}</p>
            <a href="${post.link}" class="text-indigo-600 hover:underline font-medium">Leer más →</a>
          `;

          main.appendChild(article);
        });
      } catch (error) {
        console.error('Error al cargar posts:', error);
      }
    }

    cargarPosts();