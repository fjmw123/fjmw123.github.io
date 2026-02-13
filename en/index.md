---
layout: default
title: Home
lang: en
---

# 👋 Hi there, I'm SoSME!

Welcome to my digital garden. I'm a project manager for Shanghai Metro, maintaining trains by day, and exploring the world of AI by night. 🚇 + 🤖 = 🚀

## Latest Blog Posts

{% for post in site.posts %}
  {% if post.lang == 'en' %}
  *   **[{{ post.title }}]({{ post.url }})** - {{ post.date | date: "%Y-%m-%d" }}
  {% endif %}
{% endfor %}

[More posts](/en/blog)