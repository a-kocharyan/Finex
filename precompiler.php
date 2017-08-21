<?php

$dir = __DIR__ . "/templates/";
$dirTemplates = scandir($dir);
$fileForWriting = $dir . "templateWrapper.js";
$templateWrapper = fopen($fileForWriting, "w");

foreach ($dirTemplates as $file) {
    if (preg_match("/.*\.html/", $file) != 0) {
        $content = file_get_contents($dir . $file);
        $templateName = str_replace(".html", "", $file);
        $content = str_replace("\r\n", "", $content);
        $content = str_replace("\n", "", $content);
        $content = str_replace('"', '\"', $content);
        $serviceString =
"
//" . $templateName . ".js
(function () {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['" . $templateName . "'] = template({
        'compiler': [7, '>= 4.0.0'], 'main': function (container, depth0, helpers, partials, data) {
            return \"". $content . "\";
    }, 'useData': true
    });
})();
";
        fwrite($templateWrapper, $serviceString);
    }
}
fclose($templateWrapper);
