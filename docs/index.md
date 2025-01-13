---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Home
---

Here's a list of all the pages on this site:

{% for p in site.pages %}
 {% if p.title and p.url != page.url  %}
  - [{{ p.title }}]({{ p.url | relative_url }})
 {% endif %}
{% endfor %}