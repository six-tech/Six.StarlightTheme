---
title: Markdown
description: Learn how to use markdown features and formatting options in the Six Starlight Theme documentation system.
---

# Introduction

Markdown is the foundation of content creation in the Six Starlight Theme documentation system. It provides a simple, readable syntax for creating rich, formatted content including text, links, images, tables, and more. The theme enhances standard markdown with additional features and styling to create professional, accessible documentation.

## Props

Markdown doesn't use traditional props - it's a markup language with specific syntax rules.

| Element | Syntax        | Example                       |
| ------- | ------------- | ----------------------------- |
| Heading | `# Text`      | `# Heading 1`                 |
| Bold    | `**text**`    | `**Bold text**`               |
| Italic  | `*text*`      | `*Italic text*`               |
| Link    | `[text](url)` | `[Link](https://example.com)` |
| Image   | `![alt](url)` | `![Alt text](image.jpg)`      |
| Code    | `` `code` ``  | `` `inline code` ``           |
| List    | `- item`      | `- List item`                 |

# Headings

---

Markdown supports six levels of headings for creating document structure.

## All Heading Levels

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Text Formatting

---

Markdown provides simple syntax for basic text formatting that's easy to read and write.

## Emphasis Examples

```markdown
**Bold text** makes important information stand out.

_Italic text_ provides subtle emphasis for terms or concepts.

**_Bold and italic_** combines both styles for maximum emphasis.

~~Strikethrough text~~ shows deprecated or outdated information.
```

**Bold text** makes important information stand out.

_Italic text_ provides subtle emphasis for terms or concepts.

**_Bold and italic_** combines both styles for maximum emphasis.

~~Strikethrough text~~ shows deprecated or outdated information.

# Lists

---

## Unordered Lists

```markdown
- First item in the list
- Second item with **bold text**
- Third item with _italic text_
- Nested item
  - Sub-item one
  - Sub-item two
    - Deeply nested item
```

- First item in the list
- Second item with **bold text**
- Third item with _italic text_
- Nested item
  - Sub-item one
  - Sub-item two
    - Deeply nested item

## Ordered Lists

```markdown
1. First step in the process
2. Second step with additional details
3. Third step that includes:
   - A sub-step
   - Another sub-step
4. Final step to complete the process
```

1. First step in the process
2. Second step with additional details
3. Third step that includes:
   - A sub-step
   - Another sub-step
4. Final step to complete the process

## Task Lists

```markdown
- [x] Completed task
- [ ] Pending task
- [x] Another completed task
- [ ] Task with **bold text**
- [ ] Task with _italic text_
```

- [x] Completed task
- [ ] Pending task
- [x] Another completed task
- [ ] Task with **bold text**
- [ ] Task with _italic text_

# Links and References

---

## Basic Links

```markdown
[Link to documentation](#) - Basic link with descriptive text.

[External link](https://example.com) - Link to external resources.

[Link with title](https://example.com 'Hover text') - Link with hover tooltip.
```

[Link to documentation](#) - Basic link with descriptive text.

[External link](https://example.com) - Link to external resources.

[Link with title](https://example.com 'Hover text') - Link with hover tooltip.

## Reference Links

```markdown
[Reference link][ref1] - Link using a reference.

[Another reference][ref2] - Multiple references on the same page.

[ref1]: https://example.com 'First reference'
[ref2]: https://example.com 'Second reference'
```

[Reference link][ref1] - Link using a reference.

[Another reference][ref2] - Multiple references on the same page.

[ref1]: https://example.com 'First reference'
[ref2]: https://example.com 'Second reference'

# Tables

---

## Basic Table

```markdown
| Feature             | Status | Description             |
| ------------------- | ------ | ----------------------- |
| Markdown            | ✅     | Full markdown support   |
| Syntax highlighting | ✅     | Code block highlighting |
| Responsive design   | ✅     | Mobile-friendly layouts |
| Custom components   | ✅     | Extended functionality  |
```

| Feature             | Status | Description             |
| ------------------- | ------ | ----------------------- |
| Markdown            | ✅     | Full markdown support   |
| Syntax highlighting | ✅     | Code block highlighting |
| Responsive design   | ✅     | Mobile-friendly layouts |
| Custom components   | ✅     | Extended functionality  |

## Table with Alignment

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| Content      |    Content     |       Content |
| More content |  More content  |  More content |
| Even more    |   Even more    |     Even more |
```

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| Content      |    Content     |       Content |
| More content |  More content  |  More content |
| Even more    |   Even more    |     Even more |

# Blockquotes

---

## Basic Blockquote

```markdown
> This is a basic blockquote that highlights important information or quotes from external sources.
```

> This is a basic blockquote that highlights important information or quotes from external sources.

## Nested Blockquotes

```markdown
> Main blockquote with important information.
>
> > Nested blockquote for additional context.
> >
> > > Deeply nested quote for complex discussions.
```

> Main blockquote with important information.
>
> > Nested blockquote for additional context.
> >
> > > Deeply nested quote for complex discussions.

## Blockquotes with Attribution

```markdown
> The best way to predict the future is to invent it.
>
> — Alan Kay
```

> The best way to predict the future is to invent it.
>
> — Alan Kay

# Code and Technical Content

---

## Inline Code

```markdown
This theme supports `inline code` formatting for short snippets. You can reference files like `astro.config.mjs` or use technical terms like `npm install` inline.
```

This theme supports `inline code` formatting for short snippets. You can reference files like `astro.config.mjs` or use technical terms like `npm install` inline.

## Code Blocks

````markdown
```js
// JavaScript example
function greetUser(name) {
  return `Hello, ${name}! Welcome to Six Starlight Theme.`;
}

// Usage
const message = greetUser('Developer');
console.log(message);
```
````

```js
// JavaScript example
function greetUser(name) {
  return `Hello, ${name}! Welcome to Six Starlight Theme.`
}

// Usage
const message = greetUser('Developer')
console.log(message)
```

# Advanced Features

---

## Horizontal Rules

```markdown
Use horizontal rules to separate content sections:

---

Above is a horizontal rule that creates visual separation.

---

Below is another section of content.
```

Use horizontal rules to separate content sections:

---

Above is a horizontal rule that creates visual separation.

---

Below is another section of content.

## Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content that appears at the bottom of the page.
```

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content that appears at the bottom of the page.

## Escaping Characters

```markdown
\*This text is not italic\*
\`This is not inline code\`
\[This is not a link\]
```

\*This text is not italic\*
\`This is not inline code\`
\[This is not a link\]

# Best Practices

---

- Use descriptive link text instead of generic phrases
- Keep headings logical and hierarchical
- Use tables for structured data, not layout
- Include alt text for all images
- Use code blocks for code examples
- Keep line length reasonable for readability
- Test markdown rendering on different devices

# What to Avoid

---

- **Don't use markdown for layout** - Use CSS for positioning and styling
- **Don't create overly complex nested structures** - Keep content organized and readable
- **Don't use headings for styling** - Use them for document structure
- **Don't forget alt text for images** - This is important for accessibility
- **Don't use excessive formatting** - Keep content clean and professional
- **Don't mix different heading levels randomly** - Maintain logical hierarchy
- **Don't use markdown for interactive elements** - Use proper components instead
