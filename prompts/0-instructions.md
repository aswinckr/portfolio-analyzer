**# Project overview**

I'm building an application that takes a URL from a user, then scrapes the content of the page with Firecrawl, and displays a report for the case study in a structured format.

**# File structure**

.
├── LICENSE
├── README.md
├── app
│ ├── agents
│ │ └── page.tsx
│ ├── ai_sdk
│ │ ├── README.md
│ │ ├── agent
│ │ ├── page.tsx
│ │ └── tools
│ ├── api
│ │ └── chat
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.tsx
│ └── structured_output
│ └── page.tsx
├── components
│ ├── ChatMessageBubble.tsx
│ ├── ChatWindow.tsx
│ ├── IntermediateStep.tsx
│ ├── Navbar.tsx
│ └── UploadDocumentsForm.tsx
├── data
│ └── DefaultRetrievalText.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── prompts
│ └── 0-instructions.md
├── public
│ └── images
│ ├── agent-conversation.png
│ ├── agent-convo.gif
│ ├── bundle-size.png
│ ├── chat-conversation.png
│ ├── favicon.ico
│ ├── og-image.png
│ ├── retrieval-agent-conversation.png
│ ├── retrieval-chain-conversation.png
│ ├── structured-output-conversation.png
│ └── title-card.png
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock

**# Documentation**

## Example scraping with Firecrawl:

To scrape:

```
const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"url":"<string>","skipTlsVerification":true,"formats":["markdown"],"onlyMainContent":true,"includeTags":["<string>"],"excludeTags":["<string>"],"headers":{},"waitFor":123,"timeout":123,"extract":{"schema":{},"systemPrompt":"<string>","prompt":"<string>"},"actions":[{"type":"wait","milliseconds":2}],"location":{"country":"<string>","languages":["en-US"]}}'
};

fetch('https://api.firecrawl.dev/v1/scrape', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

Here's how the response should look like:

```
{
  "success": true,
  "data": {
    "markdown": "<string>",
    "html": "<string>",
    "rawHtml": "<string>",
    "screenshot": "<string>",
    "links": [
      "<string>"
    ],
    "actions": {
      "screenshots": [
        "<string>"
      ]
    },
    "metadata": {
      "title": "<string>",
      "description": "<string>",
      "language": "<string>",
      "sourceURL": "<string>",
      "<any other metadata> ": "<string>",
      "statusCode": 123,
      "error": "<string>"
    },
    "llm_extraction": {},
    "warning": "<string>"
  }
}
```

**# Other instructions**

- Use the existing code as examples to build new features
