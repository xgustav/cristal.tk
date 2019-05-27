---
path: /blog/api-style-guide
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-05-23T00:01:59.035Z
author: Adam DuVander
title: Enforce an API Style Guide in Your Organization
subtitle: What to include and how to keep your APIs consistent
image: /images/design-color-swatch.png
color: black
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
  description: What to include and how to keep your APIs consistent
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Enforce an API Style Guide in Your Organization | Stoplight API Corner
  image: /images/design-color-swatch.png
  twitter:
    description: What to include and how to keep your APIs consistent
    title: Enforce an API Style Guide in Your Organization | Stoplight API Corner
    image: /images/design-color-swatch.png
    username: '@stoplightio'
  url: 'https://stoplight.io/blog/api-style-guide'
---
The software your company creates is made up of many APIs and microservices. While each has its own purpose, it should not have its own style. Yet, with different teams working in tandem on many projects, divergence is natural. It's also confusing to developers using your APIs when endpoints are named differently and field names use different formats.

Just as an OpenAPI document can be a source of truth, an API style guide can keep your organization producing APIs that feel like part of the same whole. You don't even need to slow your progress to get these details right. Instead, with a clear style guide and [open source tooling](https://stoplight.io/blog/introducing-spectral/), you'll be able to streamline your API design, documentation, and testing.

## Why Have an API Style Guide?

Many organizations maintain design style guides. These documents detail the visual decisions already made in terms of colors, typography, sizing, and layout. A design style guide gives collaborators a shared vocabulary, which they can use to build consistent visual designs.

Similarly, an API style guide keeps your team on the same page. Consistency within a single API is hard enough. When your organization publishes dozens of services, a consistent API design style is imperative.

Without a defined style, developers are left guessing at naming conventions, field formats, and HTTP methods. For example, when supporting pagination, should you use `page`, `pg`, or `p` in the query string? (Or is it something else entirely?) Your hypermedia _next_ and _prev_ headers could help answer this question, but it's worth aiming for consistency, even when there are other methods to communicate a decision.

Teams building APIs want to remain consistent with each other. And developers consuming APIs will likely be using them from multiple teams. Your API style guide can bring harmony to your APIs, the teams that build them, and those that consume them.

## What to Include in Your Style Guide

Some large organizations, such as Google, have made their API style guides public. In your case, you're likely putting together an internal guide. Therefore, the needs will be specific to your organization. Start with some areas where you've seen inconsistency within your APIs. Solicit contributions from across the organization on what should be included and why each style decision was made.

With REST APIs, you'll likely want to ensure you organize your API around resources. Even with this best practice explicitly stated, there are a lot of API design decisions left to make:

* **Resource naming**: typically nouns, but will they be singular or plural?
* **Field naming**: are there consistent models or labels that should be reused? 
* **Capitalization**: in resources, fields, and data, do you use CamelCase, lowerCamel, or lowercase?
* **Punctuation**: in resources, fields, and data, how do you define multiple words--with-dashes, or_underscores?
* **Versioning**: if you version your APIs, do you use the path, a header, a sub-domain?

You may find even more areas to include in your API style guide. Committing these decisions to a written guide will help you communicate it to the rest of your organization. However, you need to include API style checks in both your human and machine processes to help maintain consistency.

## Include a Style Guide Review in Your API Design

In the [API Design Guide](https://stoplight.io/api-design-guide/basics/), we cover three high-level tenets of API design:

1. Approach design collaboratively
2. Maintain internal consistency
3. When possible, use an established convention

Each of these principles can be amplified by a style guide. In particular, including a collaborative review in your new API process will help the entire team check the design against your style guide.

In many companies there is an architect or even an architecture team. If this group exists, it can be a driving force behind a style guide. It can help maintain it and may have its own process for enforcing. That said, consistency is up to an entire organization. Each API project could include an "API stylist" who helps the team review designs against the style guide.

When you bake these best practices into your process, you make it easier to maintain consistency. While human checks are important (and part of a collaborative design), you can also turn to automation to help enforce your style guide.

## Automate Your API Style Checks

You can further engrain API styles in your organization by including style checks in your continuous integration pipeline. Many of the decisions you make in your style guide can be described in a machine-readable manner. Stoplight's [Spectral project](https://stoplight.io/blog/introducing-spectral/) is built on top of the OpenAPI or Swagger description of your API. Spectral includes JSON validation and linting, which allows you to run style checks against Spectral rules automatically.

The simplest checks you can make are validations. You can use Spectral (and other JSON validators) to ensure your API description matches the schema of the OpenAPI specification, for example. This will catch mistakes with curly brackets, missing fields that OpenAPI requires, and other issues within your JSON. You'll want a valid OpenAPI document so that your other teams can make use of it, such as for generating documentation or testing the API.

Another level of granularity is to look for fields within your OpenAPI document that you want present in every description your organization produces. Parameter descriptions, for example, aren't required by the OpenAPI spec. However, they're extremely useful for developers consuming your API. A JSON validator will see missing parameters as valid, but your style guide would suggest it should be required.

![OpenAPI style guide validation rules](/images/style-validation-rules.png)

JSON linting rules within Spectral allow you to require a field be present and non-empty. In the parameter example, you would be able to raise an error, which would alert your team that the API needs to be updated to match the style guide.

You can also include more complex rules. Capitalization and punctuation styles can be described as regular expressions. Ensure your field names are formatted like you expect:

* CamelCase -- `^[A-Z]+[A-Za-z0-9]*[a-z0-9]+$`
* lowerCamel -- `^[a-z]+[A-Za-z0-9]*[a-z0-9]+$`
* snake_case -- `^\[a-z]+[a-z0-9_]*\[a-z0-9]+$`
* kebab-case --`^[a-z]+[a-z0-9\-]*[a-z0-9]+$`
* justlowercase -- `^[a-z]+[a-z0-9]*$`

Any style checks that be written as a regular expression can be used in Spectral. And if you want to go more advanced, you can write your own custom functions. There are more details and community interaction in the [Spectral repository](https://github.com/stoplightio/spectral/).

When you share an API style guide throughout your organization, you encourage consistency within and across your APIs. You'll build a better developer experience internally and with partners. Once you have an API style guide, work it into your software processes, including automated checks that keep everyone on the same page.
