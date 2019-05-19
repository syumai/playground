const codeArea = document.getElementById('code');
codeArea.insertAdjacentHTML(
  'beforebegin',
  `<textarea
    itemprop="description"
    id="codeAddon"
    autocorrect="off"
    autocomplete="off"
    autocapitalize="off"
    spellcheck="false"
    ></textarea>`
);
const codeAddonArea = document.getElementById('codeAddon');
$('#code').linedtextarea();
$('#code').attr('wrap', 'off');
