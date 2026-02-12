---
layout: default
title: 我如何为 OpenClaw 构建了一个自动学习技能
date: 2026-02-12 23:00:00 +0800
tags: [OpenClaw, AI, JavaScript, 项目总结]
---

<div class="container">
  <article class="content">
    <header class="post-header">
      <h1>{{ page.title }}</h1>
      <p class="post-date">{{ page.date | date: "%Y年%m月%d日" }}</p>
      <div style="margin-top: 1rem;">
        {% for tag in page.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </header>
    
    <div class="post-content">
      <p class="lead">今天，我的第一个开源项目 <strong>Continuous Learning Skill</strong> 正式发布了。这是一个为 OpenClaw 开发的智能技能，能够让 AI 助手持续学习用户的偏好、习惯和知识。这篇文章记录了整个开发过程。</p>

      <h2>🎯 为什么要做这个项目？</h2>
      
      <p>在使用 OpenClaw 的过程中，我发现一个有趣的问题：每次对话都是全新的开始，AI 不会"记住"我们之间之前的交流。虽然 OpenClaw 提供了记忆功能，但我想让它更智能——不仅能存储记忆，还能主动从多个维度学习和进化。</p>
      
      <p>于是有了这个想法：构建一个<strong>自动学习技能</strong>，让 AI 能够：</p>
      
      <ul>
        <li>从对话中提取关键信息和用户偏好</li>
        <li>分析 Obsidian 笔记库，构建知识图谱</li>
        <li>观察用户行为模式，优化响应策略</li>
        <li>自动聚合网络内容，扩展知识边界</li>
      </ul>

      <h2>🏗️ 架构设计</h2>
      
      <p>整个技能分为四个核心模块：</p>

      <h3>1. 对话学习模块 (Conversation Learning)</h3>
      <p>这个模块负责分析用户与 AI 的每一次对话。它会识别重要的信息片段，比如用户的职业、兴趣爱好、决策偏好等，并将这些洞察存储到长期记忆中。</p>
      
      <p>关键技术点：</p>
      <ul>
        <li>使用语义分析提取关键信息</li>
        <li>置信度评分系统，确保只存储可靠的信息</li>
        <li>自动分类：偏好、习惯、决策、知识</li>
      </ul>

      <h3>2. 笔记分析模块 (Note Analysis)</h3>
      <p>连接用户的 Obsidian 知识库，解析笔记内容，识别知识节点和关联关系。这个模块帮助 AI 理解用户的知识体系。</p>
      
      <p>功能特性：</p>
      <ul>
        <li>支持 Frontmatter 元数据解析</li>
        <li>自动提取标签和链接关系</li>
        <li>构建个人知识图谱</li>
        <li>支持中英文混合内容</li>
      </ul>

      <h3>3. 行为观察模块 (Behavior Observation)</h3>
      <p>记录用户的使用模式，比如何时最活跃、偏好什么类型的回复、常用的工作流等。这些信息用于优化 AI 的响应策略。</p>

      <h3>4. 网络聚合模块 (Web Aggregation)</h3>
      <p>自动收集和整理用户感兴趣的网络内容，支持 RSS 订阅和关键词监控。</p>

      <h2>🛠️ 技术栈</h2>
      
      <ul>
        <li><strong>运行时</strong>: Node.js</li>
        <li><strong>语言</strong>: JavaScript (ES Modules)</li>
        <li><strong>AI 服务</strong>: Gemini API (嵌入和摘要)</li>
        <li><strong>数据存储</strong>: 本地 JSON 文件</li>
        <li><strong>文档</strong>: Markdown</li>
      </ul>

      <h2>💡 开发过程中的挑战</h2>

      <h3>挑战 1: 会话格式解析</h3>
      <p>OpenClaw 的会话记录是 JSON Lines 格式，包含系统事件、用户消息、工具调用等多种类型。最大的挑战是正确解析这些复杂的嵌套结构，提取有价值的对话内容。</p>
      
      <p><strong>解决方案</strong>: 编写了专门的解析器，能够识别不同类型的消息，过滤掉系统内部事件，只保留有意义的用户-AI 交互。</p>

      <h3>挑战 2: 中文内容处理</h3>
      <p>作为一个中文用户，我需要确保技能能够正确处理中文内容。包括中文分词、语义理解、以及中英文混合场景。</p>
      
      <p><strong>解决方案</strong>: 使用 Gemini 的嵌入模型，它对多语言支持很好，能够准确理解中文语义。</p>

      <h3>挑战 3: 国际化发布</h3>
      <p>为了让技能能够被全球 OpenClaw 用户使用，我需要将整个项目国际化，以英文为主语言，同时保留中文翻译。</p>
      
      <p><strong>解决方案</strong>:</p>
      <ul>
        <li>重构项目结构，主文档使用英文</li>
        <li>创建完整的 <code>docs/</code> 目录存放中文翻译</li>
        <li>更新所有示例数据和配置文件</li>
      </ul>

      <h2>📊 项目数据</h2>
      
      <p>开发这个技能的过程中，我积累了一些有趣的数据：</p>
      
      <ul>
        <li>从 <strong>267 个会话</strong>中提取了 <strong>209 条有效消息</strong></li>
        <li>编写了超过 <strong>3000 行代码</strong></li>
        <li>创建了 <strong>4 个核心模块</strong></li>
        <li>撰写了 <strong>中英双语文档</strong>（总计约 50KB）</li>
      </ul>

      <h2>🚀 如何使用</h2>
      
      <p>如果你想使用这个技能，步骤很简单：</p>
      
      <ol>
        <li>克隆仓库: <code>git clone https://github.com/fjmw123/continuous-learning-skill.git</code></li>
        <li>安装依赖: <code>npm install</code></li>
        <li>初始化配置: <code>node scripts/init-learning.mjs</code></li>
        <li>配置 <code>.env</code> 文件，添加你的 API 密钥</li>
        <li>运行学习流程: <code>node scripts/learning-pipeline.mjs</code></li>
      </ol>

      <h2>🎯 未来规划</h2>
      
      <p>这个技能的第一个版本只是一个开始。我计划在未来添加更多功能：</p>
      
      <ul>
        <li><strong>知识图谱可视化</strong> - 用图形方式展示知识关联</li>
        <li><strong>智能推荐</strong> - 基于学习内容推荐相关文章和资源</li>
        <li><strong>多用户支持</strong> - 区分不同用户的学习数据</li>
        <li><strong>云同步</strong> - 支持将学习数据同步到云端</li>
      </ul>

      <h2>🙏 感谢</h2>
      
      <p>这个项目的完成离不开 OpenClaw 社区的支持。特别感谢 OpenClaw 提供的强大平台，让我能够构建这样有趣的东西。</p>
      
      <p>如果你对这个技能感兴趣，欢迎访问 <a href="https://github.com/fjmw123/continuous-learning-skill">GitHub 仓库</a>，给个 ⭐ 或者提交 Issue 和 PR！</p>

      <hr style="margin: 3rem 0;">
      
      <p style="color: var(--text-tertiary); font-size: 0.9375rem;">
        <em>Published on {{ page.date | date: "%B %d, %Y" }} · 标签: {{ page.tags | join: ", " }}</em>
      </p>
    </div>
  </article>
</div>
