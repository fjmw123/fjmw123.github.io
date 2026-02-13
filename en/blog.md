---
layout: page
title: Blog
lang: en
permalink: /en/blog/
---

<div class="container page-content">
  <header class="page-header">
    <h1 class="page-title">{{ page.title }}</h1>
    <p class="page-subtitle">Thoughts, learnings, and technical notes.</p>
  </header>
  
  <div class="post-list">
    {% assign posts = site.posts | where: "lang", "en" %}
    {% for post in posts %}
      <article class="post-item">
        <h3 class="post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="post-meta">
          <span>{{ post.date | date: "%B %d, %Y" }}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{% for tag in post.tags %}<span class="tag-sm">{{ tag }}</span>{% unless forloop.last %} {% endunless %}{% endfor %}</span>
        </div>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
      </article>
    {% endfor %}
  </div>
</div>