Create a new React component for displaying a report for a given case study.

The component should be a new file in the `app/components` directory.

It has two columns:

- Left column: an overall score for the case study from 1 to 5
- Right column: A breakdown of different sections of the report and their scores

Each breakdown section can be expanded to show a detailed report. The details are named as 'Content', 'Comments' and 'Suggestions'.

Render the component in `app/structured_output/page.tsx` in the info card section.

Here are the specs for the component:

{
"id": "2:136",
"name": "MacBook Pro 16\" - 2",
"type": "FRAME",
"x": 4152,
"y": -15,
"width": 1728,
"height": 1399,
"relativeTransform": [
[
1,
0,
4152
],
[
0,
1,
-15
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.0784313753247261,
"g": 0.0784313753247261,
"b": 0.09019608050584793
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "2:226",
"name": "Overall Scorecard",
"type": "GROUP",
"x": 433,
"y": 156,
"width": 182,
"height": 111,
"relativeTransform": [
[
1,
0,
433
],
[
0,
1,
156
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:137",
"name": "Overall Score",
"type": "TEXT",
"x": 433,
"y": 156,
"width": 139,
"height": 26,
"relativeTransform": [
[
1,
0,
433
],
[
0,
1,
156
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:138",
"name": "9.2/10",
"type": "TEXT",
"x": 433,
"y": 192,
"width": 182,
"height": 75,
"relativeTransform": [
[
1,
0,
433
],
[
0,
1,
192
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
},
{
"id": "2:227",
"name": "Scorecard Breakdown",
"type": "GROUP",
"x": 780,
"y": 153,
"width": 528,
"height": 1141,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
153
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:139",
"name": "Breakdown 1",
"type": "GROUP",
"x": 780,
"y": 153,
"width": 528,
"height": 329,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
153
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:140",
"name": "Background",
"type": "TEXT",
"x": 780,
"y": 156,
"width": 126,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
156
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:141",
"name": "•••••••••••••",
"type": "TEXT",
"x": 922,
"y": 156,
"width": 249,
"height": 26,
"relativeTransform": [
[
1,
0,
922
],
[
0,
1,
156
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:142",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 156,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
156
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:143",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1308,
"y": 185,
"width": 32,
"height": 32,
"relativeTransform": [
[
-1,
0,
1308
],
[
0,
-1,
185
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:143;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
},
{
"id": "2:229",
"name": "Breakdown Expanded",
"type": "GROUP",
"x": 780,
"y": 198,
"width": 528,
"height": 284,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
198
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:230",
"name": "Comment",
"type": "GROUP",
"x": 780,
"y": 198,
"width": 528,
"height": 84,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
198
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:231",
"name": "This section displays the content on which the assessment report is made",
"type": "TEXT",
"x": 780,
"y": 230,
"width": 528,
"height": 52,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
230
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:232",
"name": "Content",
"type": "TEXT",
"x": 780,
"y": 198,
"width": 528,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
198
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
},
{
"id": "7:30",
"name": "Comment",
"type": "GROUP",
"x": 780,
"y": 298,
"width": 528,
"height": 110,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
298
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "7:31",
"name": "The background effectively sets the scene by clearly establishing the problem space related to the impersonal nature of online cocktail recipes and the increasing demand for personalized options",
"type": "TEXT",
"x": 780,
"y": 330,
"width": 528,
"height": 78,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
330
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "7:32",
"name": "Comment",
"type": "TEXT",
"x": 780,
"y": 298,
"width": 528,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
298
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
},
{
"id": "2:233",
"name": "Suggestion",
"type": "GROUP",
"x": 780,
"y": 424,
"width": 528,
"height": 58,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
424
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:234",
"name": "Continue to ensure clarity and relatability for all defined key problems",
"type": "TEXT",
"x": 780,
"y": 456,
"width": 528,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
456
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:235",
"name": "Suggestion",
"type": "TEXT",
"x": 780,
"y": 424,
"width": 528,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
424
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
}
]
},
{
"id": "2:144",
"name": "Breakdown 2",
"type": "GROUP",
"x": 780,
"y": 514,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
514
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:145",
"name": "Key Problem",
"type": "TEXT",
"x": 780,
"y": 517,
"width": 132,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
517
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:146",
"name": "•••••••••••••",
"type": "TEXT",
"x": 922,
"y": 517,
"width": 249,
"height": 26,
"relativeTransform": [
[
1,
0,
922
],
[
0,
1,
517
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:147",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 517,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
517
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:148",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 514,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
514
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:148;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:149",
"name": "Breakdown 3",
"type": "GROUP",
"x": 780,
"y": 582,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
582
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:150",
"name": "Who does it impact",
"type": "TEXT",
"x": 780,
"y": 585,
"width": 197,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
585
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:151",
"name": "•••••••••",
"type": "TEXT",
"x": 1003,
"y": 585,
"width": 169,
"height": 26,
"relativeTransform": [
[
1,
0,
1003
],
[
0,
1,
585
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:152",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 585,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
585
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:153",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 582,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
582
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:153;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:154",
"name": "Breakdown 4",
"type": "GROUP",
"x": 780,
"y": 650,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
650
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:155",
"name": "What are we designing",
"type": "TEXT",
"x": 780,
"y": 653,
"width": 235,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
653
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:156",
"name": "•••••••",
"type": "TEXT",
"x": 1043,
"y": 653,
"width": 128,
"height": 26,
"relativeTransform": [
[
1,
0,
1043
],
[
0,
1,
653
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:157",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 653,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
653
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:158",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 650,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
650
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:158;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:159",
"name": "Breakdown 5",
"type": "GROUP",
"x": 780,
"y": 718,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
718
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:160",
"name": "Problems Solved",
"type": "TEXT",
"x": 780,
"y": 721,
"width": 175,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
721
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:161",
"name": "••••••••••",
"type": "TEXT",
"x": 984,
"y": 721,
"width": 189,
"height": 26,
"relativeTransform": [
[
1,
0,
984
],
[
0,
1,
721
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:162",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 721,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
721
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:163",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 718,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
718
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:163;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:164",
"name": "Breakdown 6",
"type": "GROUP",
"x": 780,
"y": 786,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
786
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:165",
"name": "Key Research Insights",
"type": "TEXT",
"x": 780,
"y": 789,
"width": 230,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
789
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:166",
"name": "•••••••",
"type": "TEXT",
"x": 1043,
"y": 789,
"width": 128,
"height": 26,
"relativeTransform": [
[
1,
0,
1043
],
[
0,
1,
789
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:167",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 789,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
789
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:168",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 786,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
786
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:168;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:169",
"name": "Breakdown 7",
"type": "GROUP",
"x": 780,
"y": 854,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
854
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:170",
"name": "Design Goal",
"type": "TEXT",
"x": 780,
"y": 857,
"width": 126,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
857
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:171",
"name": "•••••••••••••",
"type": "TEXT",
"x": 922,
"y": 857,
"width": 249,
"height": 26,
"relativeTransform": [
[
1,
0,
922
],
[
0,
1,
857
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:172",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 857,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
857
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:173",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 854,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
854
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:173;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:174",
"name": "Breakdown 8",
"type": "GROUP",
"x": 780,
"y": 922,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
922
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:175",
"name": "Solutions",
"type": "TEXT",
"x": 780,
"y": 925,
"width": 99,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
925
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:176",
"name": "••••••••••••••",
"type": "TEXT",
"x": 902,
"y": 925,
"width": 270,
"height": 26,
"relativeTransform": [
[
1,
0,
902
],
[
0,
1,
925
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:177",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 925,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
925
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:178",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 922,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
922
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:178;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:179",
"name": "Breakdown 9",
"type": "GROUP",
"x": 780,
"y": 990,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
990
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:180",
"name": "User Flows",
"type": "TEXT",
"x": 780,
"y": 993,
"width": 115,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
993
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:181",
"name": "•••••••••••••",
"type": "TEXT",
"x": 922,
"y": 993,
"width": 249,
"height": 26,
"relativeTransform": [
[
1,
0,
922
],
[
0,
1,
993
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:182",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 993,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
993
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:183",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 990,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
990
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:183;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:184",
"name": "Breakdown 10",
"type": "GROUP",
"x": 780,
"y": 1058,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
1058
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:185",
"name": "Learnings",
"type": "TEXT",
"x": 780,
"y": 1061,
"width": 103,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
1061
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:186",
"name": "•••••••••••••",
"type": "TEXT",
"x": 922,
"y": 1061,
"width": 249,
"height": 26,
"relativeTransform": [
[
1,
0,
922
],
[
0,
1,
1061
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:187",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 1061,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
1061
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:188",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 1058,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
1058
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:188;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:189",
"name": "Breakdown 11",
"type": "GROUP",
"x": 780,
"y": 1126,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
1126
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:190",
"name": "Tone",
"type": "TEXT",
"x": 780,
"y": 1129,
"width": 50,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
1129
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:191",
"name": "••••••••••••••••",
"type": "TEXT",
"x": 862,
"y": 1129,
"width": 310,
"height": 26,
"relativeTransform": [
[
1,
0,
862
],
[
0,
1,
1129
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:192",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 1129,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
1129
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:193",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 1126,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
1126
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:193;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:194",
"name": "Breakdown 12",
"type": "GROUP",
"x": 780,
"y": 1194,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
1194
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:195",
"name": "Values",
"type": "TEXT",
"x": 780,
"y": 1197,
"width": 70,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
1197
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:196",
"name": "•••••••••••••••",
"type": "TEXT",
"x": 882,
"y": 1197,
"width": 290,
"height": 26,
"relativeTransform": [
[
1,
0,
882
],
[
0,
1,
1197
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:197",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 1194,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
1194
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:197;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
},
{
"id": "2:203",
"name": "close",
"type": "INSTANCE",
"x": 1220,
"y": 1199,
"width": 24,
"height": 24,
"relativeTransform": [
[
1,
0,
1220
],
[
0,
1,
1199
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:203;54616:25406",
"name": "icon",
"type": "VECTOR",
"x": 5,
"y": 5,
"width": 14,
"height": 14,
"relativeTransform": [
[
1,
0,
5
],
[
0,
1,
5
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.14901961386203766,
"b": 0.11764705926179886
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:e1a47274c0e369e5d527533bc0639058333d3894/57299:22430"
}
}
}
],
"strokes": [],
"strokeWeight": 0.02500000037252903,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
},
{
"id": "2:198",
"name": "Breakdown 13",
"type": "GROUP",
"x": 780,
"y": 1262,
"width": 528,
"height": 32,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
1262
]
],
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": [
{
"id": "2:199",
"name": "Competitor Analysis",
"type": "TEXT",
"x": 780,
"y": 1265,
"width": 211,
"height": 26,
"relativeTransform": [
[
1,
0,
780
],
[
0,
1,
1265
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:200",
"name": "•••••••••",
"type": "TEXT",
"x": 1002,
"y": 1265,
"width": 169,
"height": 26,
"relativeTransform": [
[
1,
0,
1002
],
[
0,
1,
1265
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:201",
"name": "5 / 5",
"type": "TEXT",
"x": 1208,
"y": 1265,
"width": 48,
"height": 26,
"relativeTransform": [
[
1,
0,
1208
],
[
0,
1,
1265
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.9686274528503418,
"g": 0.9764705896377563,
"b": 0.9843137264251709
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
},
{
"id": "2:202",
"name": "Chevron down",
"type": "INSTANCE",
"x": 1276,
"y": 1262,
"width": 32,
"height": 32,
"relativeTransform": [
[
1,
0,
1276
],
[
0,
1,
1262
]
],
"constraints": {
"horizontal": "MIN",
"vertical": "MIN"
},
"fills": [
{
"type": "SOLID",
"visible": false,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 1,
"g": 1,
"b": 1
},
"boundVariables": {}
}
],
"strokes": [],
"strokeWeight": 1,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"layoutMode": "NONE",
"itemSpacing": 0,
"children": [
{
"id": "I2:202;7758:11220",
"name": "Icon",
"type": "VECTOR",
"x": 8,
"y": 12,
"width": 16,
"height": 8,
"relativeTransform": [
[
1,
0,
8
],
[
0,
1,
12
]
],
"constraints": {
"horizontal": "SCALE",
"vertical": "SCALE"
},
"fills": [],
"strokes": [
{
"type": "SOLID",
"visible": true,
"opacity": 1,
"blendMode": "NORMAL",
"color": {
"r": 0.7019608020782471,
"g": 0.7019608020782471,
"b": 0.7019608020782471
},
"boundVariables": {
"color": {
"type": "VARIABLE_ALIAS",
"id": "VariableID:558e824a9793b0141ab4bbb77b067eaaac23323d/668:42"
}
}
}
],
"strokeWeight": 3,
"cornerRadius": 0,
"effects": [],
"blendMode": "PASS_THROUGH",
"layoutAlign": "INHERIT",
"layoutGrow": 0,
"children": []
}
]
}
]
}
]
}
]
}
