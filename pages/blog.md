---
layout: default
title: 博客
---

<div class="page-header">
  <div class="container">
    <h1 class="page-title">博客</h1>
    <p class="page-subtitle">思考、记录、分享</p>
  </div>
</div>

<div class="container">
  <div class="content">
    {% if site.posts.size > 0 %}
      <div class="post-list">
        {% for post in site.posts %}
          <article class="post-item">
            <h2 class="post-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h2>
            <div class="post-meta">
              <span>📅 {{ post.date | date: "%Y年%m月%d日" }}</span>
              <span>⏱️ {{ post.content | number_of_words | divided_by: 200 | plus: 1 }} 分钟阅读</span>
              {% if post.tags.size > 0 %}
                <span>
                  {% for tag in post.tags %}
                    <span class="tag">{{ tag }}</span>
                  {% endfor %}
                </span>
              {% endif %}
            </div>
            <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <div class="text-center" style="padding: 4rem 0;">
        <p style="font-size: 3rem; margin-bottom: 1rem;">📝</p>
        <h2>博客文章即将上线</h2>
        <p style="color: var(--text-secondary);">正在准备第一篇内容，敬请期待...</p>
      </div>
    {% endif %}
  </div>
</div>
