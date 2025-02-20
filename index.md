---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Frontend Study"
  tagline: "기본 개념부터 실전 대비까지 한 번에!"
  image:
    loading: eager
    fetchpriority: high
    decoding: async
    src: /images/hero.webp
    alt: Frontend Study Hero

  actions:
    - theme: brand
      text: 시작하기
      link: /study
    - theme: alt
      text: 기여하기
      link: https://github.com/dango0812/frontend-study/discussions

features:
  - icon: 📗
    title: Javascript & Typescript
    details: 기본 개념과 테스트 코드를 제공해요.
  - icon: 📒
    title: CS
    details: 프론트엔드 개발자를 위한 핵심 CS 지식을 제공해요.
  - icon: 🌐
    title: Framewrok
    details: React, Next.js 등 프레임워크에 대한 설명을 제공해요.
  - icon: 📑
    title: Interview
    details: 기술 면접에서 자주 묻는 질문과 답변 전략을 제공해요.
---

