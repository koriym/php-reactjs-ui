<?php

require '../../vendor/autoload.php';

$rjs = new ReactJS(
// location of React's code
    file_get_contents('build/react.bundle.js'),
    // app code
    file_get_contents('build/helloworld.bundle.js')
);

//$rjs->setComponent('HelloWorld', []);
var_dump($rjs);

?>
<!doctype html>
    <title>Hello World</title>
    <link rel="stylesheet" href="/build/style.css">
    <body>
        <div id='HelloWorld'></div>
        <script src="/build/helloworld.bundle.js"></script>
    </body>
</html>
