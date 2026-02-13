---
layout: default
title: Home
lang: en
---

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="hero-badge">
      <span>🚀</span>
      <span>OpenClaw Skill Developer</span>
    </div>
    <h1 class="hero-title">SoSME's Lab</h1>
    <p class="hero-subtitle">Metro Engineer × AI Explorer. Seeking optimal efficiency between code and rails.</p>
    <div class="hero-actions">
      <a href="/en/projects/" class="btn btn-primary">View Projects</a>
      <a href="/en/blog/" class="btn btn-secondary">Read Blog</a>
    </div>
  </div>
</section>

<!-- Featured Projects -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">What I'm working on</p>
    </div>
    
    <div class="card-grid">
      <article class="card">
        <div class="card-icon">🧠</div>
        <h3 class="card-title">Continuous Learning Skill</h3>
        <p class="card-desc">An automated learning skill for OpenClaw that extracts insights from conversations, notes, behavior, and web to build personal knowledge graphs.</p>
        <div class="card-meta">
          <span class="tag">OpenClaw</span>
          <span class="tag">JavaScript</span>
        </div>
      </article>
      
      <article class="card">
        <div class="card-icon">🚇</div>
        <h3 class="card-title">Metro Digitalization</h3>
        <p class="card-desc">Applying AI and automation to metro vehicle maintenance management to improve efficiency and reduce costs.</p>
        <div class="card-meta">
          <span class="tag">AI</span>
          <span class="tag">Project Mgmt</span>
        </div>
      </article>
      
      <article class="card">
        <div class="card-icon">🌐</div>
        <h3 class="card-title">Personal Website</h3>
        <p class="card-desc">Built with Jekyll + GitHub Pages. Supports dark/light mode. Simple but powerful.</p>
        <div class="card-meta">
          <span class="tag">Jekyll</span>
          <span class="tag">CSS</span>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- Latest Posts -->
<section class="section" style="background-color: var(--bg-secondary);">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Latest Posts</h2>
      <p class="section-subtitle">Thoughts & Logs</p>
    </div>
    
    <div class="post-list">
      {% assign en_posts = site.posts | where: "lang", "en" %}
      {% for post in en_posts limit:3 %}
        <article class="post-item">
          <h3 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <div class="post-meta">
            <span>{{ post.date | date: "%B %d, %Y" }}</span>
            <span>📖 {{ post.content | number_of_words }} words</span>
          </div>
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
        </article>
      {% endfor %}
    </div>
    
    {% if en_posts.size > 3 %}
      <div class="text-center mt-4">
        <a href="/en/blog/" class="btn btn-secondary">View All Posts</a>
      </div>
    {% endif %}
  </div>
</section>