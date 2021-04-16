// const marked = require('marked');

const editor = document.querySelector('#editor')

const markdownStr = "# I'm header\n\n## hello\nhello\nhello\n\n[I'm a link](https://github.com)\n- unordered list item\n1. ordered item list\n\n![](react.png)\n\n> That's what they said...\n\nI'm **bold**\n\n```\nfunction() {\n\tconsole.log('I'm inside code block')\n}\n\n```\nI'm `inline code`"
editor.innerHTML = markdownStr

const preview = document.getElementById("preview")

const option = {
    gfm: true,
    breaks: true
}
preview.innerHTML = marked(editor.innerHTML, option)

editor.oninput = function() {
    preview.innerHTML = marked(editor.value, option)
}

