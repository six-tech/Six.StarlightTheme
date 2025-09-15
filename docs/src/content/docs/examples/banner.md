---
title: Banner
description: Learn how to use the banner frontmatter property to display important announcements and notifications at the top of your documentation pages.
banner:
  content: |
    Aenean eleifend, felis quis <a href="https://example.com">faucibus</a> lobortis, nunc erat interdum turpis, quis consectetur orci mauris eget leo.
---

# Introduction

The banner feature allows you to display important announcements, notifications, or alerts at the top of your documentation pages. Banners are configured through the frontmatter of your markdown files and appear prominently above the page content to ensure maximum visibility.

## Props

| Prop Name        | Prop Type | Description                                                                                           |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `banner.content` | `string`  | The HTML content to display in the banner. Supports multiline content using the pipe (`\|`) operator. |

# Basic Banner

This page demonstrates a basic banner implementation. The banner you see at the top of this page is configured using the `banner` property in the frontmatter.

## Simple Banner

```yaml
---
title: Banner
banner:
  content: |
    Aenean eleifend, felis quis <a href="https://example.com">faucibus</a> lobortis, nunc erat interdum turpis, quis consectetur orci mauris eget leo.
---
```

The banner appears at the top of this page with the content specified in the frontmatter.

---

# Banner Configuration

The banner is configured through the page's frontmatter using the `banner` property.

## Content Property

The `content` property accepts HTML content, allowing you to include:

- Plain text messages
- HTML formatting (bold, italic, etc.)
- Links to external resources
- Inline styling

---

# Advanced Usage

## HTML Content in Banners

Banners support rich HTML content, as demonstrated in the example above:

```yaml
banner:
  content: |
    <strong>Important Update:</strong> Our API has been updated to version 2.0.
    Please review the <a href="/migration-guide">migration guide</a> for breaking changes.
```

## Multiline Banner Content

Use the YAML pipe (`|`) operator to create multiline banner content:

```yaml
banner:
  content: |
    This is a multiline banner that can contain
    multiple paragraphs and complex HTML content
    with proper line breaks preserved.
```

## Banner with Links

Include links in your banner to guide users to relevant resources:

```yaml
banner:
  content: |
    🎉 New release available! <a href="/changelog">View changelog</a> or
    <a href="/upgrade-guide">read the upgrade guide</a>.
```

## Banner with Styling

You can include inline styles or CSS classes in your banner content:

```yaml
banner:
  content: |
    <div style="text-align: center; font-weight: bold;">
      🚨 Maintenance scheduled for tonight at 2 AM UTC 🚨
    </div>
```

---

# Best Practices

- Use banners for important, time-sensitive announcements
- Keep banner content concise and actionable
- Include relevant links to guide users to more information
- Use appropriate HTML formatting to emphasize key points
- Test banner content across different screen sizes
- Remove or update banners when they're no longer relevant

---

# What to Avoid

- **Don't use banners for permanent content** - Banners are best for temporary announcements
- **Don't make banners too long** - Keep content focused and scannable
- **Don't use banners for navigation** - Use proper navigation components instead
- **Don't include too many links** - Focus on the most important actions
- **Don't use banners without clear purpose** - Every banner should have a specific goal
- **Don't forget to remove outdated banners** - Keep content current and relevant
