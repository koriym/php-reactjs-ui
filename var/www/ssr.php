<?php

require __DIR__ . '/../../vendor/autoload.php';

$rjs = new ReactJS(
    // location of React's code
    file_get_contents('build/react.bundle.js'),
    // app code
    file_get_contents('build/table.bundle.js')
);

// data to be passed to the component
$data =
    ['data' => [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]];

// set the component and its data
// after this you can call getMarkup()/getJS()
// Then you can set another component to render
// and do that as many times as the components you need
// all the while reusing the $rjs instance
$rjs->setComponent('Table', $data);
?>
<!doctype>
<html>
<head>
    <title>React server-side rendering (SSR)</title>
    <!-- css and stuff -->
</head>
<body>

<!-- render server content here -->
<div id="page"><?php echo $rjs->getMarkup(); ?></div>

<!-- load react and app code -->
<script src="build/react.bundle.js"></script>
<script src="build/table.bundle.js"></script>

<script>
    // client init/render
    // this is a straight echo of the JS because the JS resources
    // were loaded synchronously
    // You may want to load JS async and wrap the return of getJS()
    // in a function you can call later
    <?php echo $rjs->getJS('#page', 'GLOB'); ?>
</script>
</body>
</html>
