const blogPosts = [
    {
        id: 1,
        title: "The Rise of Agentic AI: A New Era",
        excerpt: "Discover how autonomous agents are reshaping the software development lifecycle and what it means for engineers.",
        tag: "AI & Future",
        date: "Jan 28, 2026",
        author: "Doniyorbek",
        image: "/assets/ai-post.png"
    },
    {
        id: 2,
        title: "Mastering Modern CSS Layouts",
        excerpt: "Beyond Flexbox and Grid: exploring container queries, subgrid, and the new era of responsive design.",
        tag: "Development",
        date: "Jan 25, 2026",
        author: "Doniyorbek",
        image: "/assets/css-post.png"
    },
    {
        id: 3,
        title: "Glassmorphism in 2026: Trends",
        excerpt: "Why translucency and depth are still king in modern UI/UX design, and how to implement them performantly.",
        tag: "Design",
        date: "Jan 22, 2026",
        author: "Doniyorbek",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
    }
];

function createPostCard(post) {
    return `
    <article class="blog-card glass fade-in">
      <img src="${post.image}" alt="${post.title}" class="card-image">
      <div class="card-content">
        <span class="card-tag">${post.tag}</span>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-excerpt">${post.excerpt}</p>
        <div class="card-footer">
          <div class="author">
            <div class="author-img"></div>
            <span class="author-name">${post.author}</span>
          </div>
          <span class="date">${post.date}</span>
        </div>
      </div>
    </article>
  `;
}

function renderPosts(posts) {
    const grid = document.getElementById('blog-grid');
    if (grid) {
        grid.innerHTML = posts.map(createPostCard).join('');
    }
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(blogPosts);

    // Simple search functionality
    const searchInput = document.getElementById('blog-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = blogPosts.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.tag.toLowerCase().includes(query)
            );
            renderPosts(filtered);
        });
    }
});
