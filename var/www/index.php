<?php $appState = require dirname(__DIR__, 2) . '/src/greeting.php'; ?>
<!doctype>
<html>
<head>
    <title>CSR</title>
</head>

<body>
    <div id="root"></div>
    <script>
        var appState = <?php echo json_encode($appState, JSON_HEX_TAG);?>;
    </script>
    <script src="build/helloworld.bundle.js"></script>
</body>
</html>
