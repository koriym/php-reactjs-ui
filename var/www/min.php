<?php

require '../../vendor/autoload.php';

$rjs = new ReactJS(
// location of React's code
    file_get_contents('build/react.bundle.js'),
    // app code
    file_get_contents('build/min.bundle.js')
);
//
var_dump($rjs);

?>
<!doctype html>
    <title>Min</title>
    <body>
    <?php
        echo '<div id="here">' . $rjs->getMarkup() . '</div>';
    ?>
    </body>
</html>
