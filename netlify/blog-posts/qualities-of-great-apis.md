---
path: /blog/qualities-of-great-apis
tags:
  - blog
  - blog-design
  - blog-general
relatedTags:
  - blog-design
publishedDate: 2019-05-14T20:46:10.485Z
author: Robert Wallach
title: Qualities of Great APIs
subtitle: Strategies for battle hardening your API development process
image: /images/tabea-damm-579138-unsplash-1-.jpg
color: green
tabs:
  - {}
includeToc: true
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: Strategies for battle hardening your API development process
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Qualities of Great APIs | Stoplight API Corner
  image: /images/tabea-damm-579138-unsplash-1-.jpg
  twitter:
    description: Strategies for battle hardening your API development process
    title: Qualities of Great APIs | Stoplight API Corner
    image: /images/tabea-damm-579138-unsplash-1-.jpg
    username: '@stoplightio'
---
Photo by Tabea Damm on Unsplash

Making a great API is no easy task. Just defining what qualifies as a great API can be difficult to pin down. There are, nonetheless, some effective strategies that can be applied universally for modern, RESTful APIs. These strategies will assist not only API consumers, but also API developers moving forward. For the first piece in this series, I will be discussing broader industry wide strategies including: defining your audience, [future proofing](https://stoplight.io/api-design-guide/basics/), consistency and conciseness, and a brief introduction into the [importance of documentation](https://stoplight.io/api-documentation-guide/basics/). 

![API Qualities Overview](/images/great-api-qualities-image-2x.png "API Qualities Overview")

## Define your Audience

Defining your API consumers’ needs is critical to building a strong foundation for your API. Your API is, in fact, a product, and like any product, should be designed around who is going to be using it. Some questions that need to be addressed before designing your API include: 

* Is the API for internal or external users? 
  * For a partner program?
* What business value is it trying to achieve? 
* How can we measure the success of the API? 

Being able to answer these questions before designing your API will ensure that the design meets your users needs and decreases overall design time. 

## Future Proof your API

With such an abundance of formats, choosing one that meets your users needs and is future proof can be overwhelming. The paradox of choice has levelled many a developer. Luckily, the industry at large has adopted some standards that help make this decision simpler. 

### Stoplight Suggestions

#### Format

* JSON 
* YAML

#### Specification

* OAS 

#### Architecture

* REST 

> GraphQL is a reliable alternative as well (we even use it some at Stoplight), but REST’s history and adoption make it a safer choice in the long run 

## Be Concise and Consistent with Models

Maintaining a clear, concise structure for your API will pay dividends in the long run and will promote long term API success. When designing endpoints, a defined naming strategy will help your users and other developers working on your API. This can ultimately be achieved by putting together an API style guide which will promote conciseness and consistency throughout your organizations [API design process](https://stoplight.io/api-design-guide/basics/). API style guides should describe naming and design conventions so that developers and consumers can predict your APIs behavior and should also help eliminate design errors. Utilizing models as well, can help reduce the chance of duplication and further establish clear naming conventions. 

## The Importance of Great Documentation

[Great documentation](https://stoplight.io/api-documentation-guide/basics/) is one of the more overlooked aspects of a great API but cannot be ignored. It is how your API consumer interacts with your API and greatly influences their perception.  It is so important, that I will be digging into the specifics in my next post. Here is a brief glimpse into some of the topics I will be covering: 

* Developer Experience
* Supplemental Materials 
  * Tutorials 
  * Reference Materials 
* Real Time Testing 
* Examples 
* Layouts and Navigation 
* And more...

## How Great APIs Happen

Great APIs don’t just happen. They require a well thought out strategy and design process from step one. Trying to meet these needs in the middle of the design process or post design is a recipe for disaster. Define your audience to meet their needs, choose formats, specifications, and architecture that will persist, maintain consistency and clarity with a style guide, and always provide great documentation (more on that next month).
