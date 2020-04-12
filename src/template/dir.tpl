<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
  <style>
    body {
      margin: 30px;
    }
    a {
      display: block;
      font-size: 24px;
    }
  </style>
</head>
<body>
{{#each files}}
  <a href="{{../dir}}/{{this}}">{{this}}</a>
{{/each}}
</body>
</html>
