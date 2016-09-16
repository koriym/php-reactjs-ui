<?php
require __DIR__ . '/../../vendor/autoload.php';
$rjs = new ReactJS(
    // location of React's code
    file_get_contents('build/react.bundle.js'),
    // app code
    file_get_contents('build/ssr.bundle.js')
);

// data to be passed to the component
$data = ['name' => 'SSR World'];

// set the component and its data
// after this you can call getMarkup()/getJS()
// Then you can set another component to render
// and do that as many times as the components you need
// all the while reusing the $rjs instance
$rjs->setComponent('HelloWorld', $data);
?>
<!doctype>
<html>
<head>
    <title>SSR</title>
    <!-- css and stuff -->
</head>
<body>

<!-- render server content here -->
<div id="root"><?php echo $rjs->getMarkup(); ?></div>

<!-- load react and app code -->
<script src="build/react.bundle.js"></script>
<script src="build/ssr.bundle.js"></script>

<script>
    // client init/render
    // this is a straight echo of the JS because the JS resources
    // were loaded synchronously
    // You may want to load JS async and wrap the return of getJS()
    // in a function you can call later
    <?php echo $rjs->getJS('#root', 'GLOB'); ?>
</script>
</body>
</html>
