Modify the structured output to include a score for each section and an overall score for the case study.

Here's the format for the output. Rewrite it to match the current page syntax.

--

Schema for structured output:

{
"name": "case_study_evaluation",
"strict": true,
"schema": {
"type": "object",
"properties": {
"background": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the background element."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the effectiveness of the background."
},
"suggestion": {
"type": "string",
"description": "Suggestion to improve the background's effectiveness."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"key_problem": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the key problem element."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the effectiveness of the key problem description."
},
"suggestion": {
"type": "string",
"description": "Suggestion to provide a clearer description of the key problem."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"whom_does_it_impact": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the impact description."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the effectiveness of the impact description."
},
"suggestion": {
"type": "string",
"description": "Suggestion to enhance the clarity of the impact description."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"what_are_we_designing": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the product description."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on how well the product addresses user needs."
},
"suggestion": {
"type": "string",
"description": "Suggestion to better align the product with user needs."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"problems_solved": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the problems solved."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the rationales provided."
},
"suggestion": {
"type": "string",
"description": "Suggestion to articulate the problems solved more clearly."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"key_research_insights": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the research insights."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the methodology and data points."
},
"suggestion": {
"type": "string",
"description": "Suggestion to improve the research insights."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"design_goal": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the design goal."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the description of the design goal."
},
"suggestion": {
"type": "string",
"description": "Suggestion to refine the design goal."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"design_solutions": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the design solutions."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the details and metrics for success."
},
"suggestion": {
"type": "string",
"description": "Suggestion to improve the design solutions."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"user_flows": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the user flows."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the key interactions presented."
},
"suggestion": {
"type": "string",
"description": "Suggestion to clarify the user flows."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"learning": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the learning summary."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on what was learned."
},
"suggestion": {
"type": "string",
"description": "Suggestion to highlight key learnings more effectively."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"unique_selling_point": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the unique selling point."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on what makes the solution unique."
},
"suggestion": {
"type": "string",
"description": "Suggestion to enhance the unique selling point."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"tone": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the tone assessment."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on how the tone was set."
},
"suggestion": {
"type": "string",
"description": "Suggestion to adjust the tone if necessary."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"values": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the values emphasized."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the values portrayed."
},
"suggestion": {
"type": "string",
"description": "Suggestion to emphasize values more clearly."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"competitor_analysis": {
"type": "object",
"properties": {
"score": {
"type": "number",
"description": "Score given to the competitor analysis."
},
"content": {
"type": "string",
"description": "Extract relevant content of this section from the input content"
},
"comment": {
"type": "string",
"description": "Comment on the inclusion of competitor examples."
},
"suggestion": {
"type": "string",
"description": "Suggestion to incorporate more competitor examples."
}
},
"required": [
"score",
"content",
"comment",
"suggestion"
],
"additionalProperties": false
},
"overall_score": {
"type": "number",
"description": "Overall score for the case study."
}
},
"required": [
"background",
"key_problem",
"whom_does_it_impact",
"what_are_we_designing",
"problems_solved",
"key_research_insights",
"design_goal",
"design_solutions",
"user_flows",
"learning",
"unique_selling_point",
"tone",
"values",
"competitor_analysis",
"overall_score"
],
"additionalProperties": false
}
}
