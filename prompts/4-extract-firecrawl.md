Instead of an input filed to paste the case study content, turn the input field into a url field.

Make a POST request to the `api/chat/structured_output` endpoint with the url as the payload.

Then send the URL to firecrawl. This will return the case study content in markdown format in the specified format.

Extract the markdown from the response, and pass it on to the LLM with the existing structured output prompt and retain the rest of the functionality as is.
