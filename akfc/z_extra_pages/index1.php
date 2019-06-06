<!doctype html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->

<head>
    <?php include("includes/include_css.html") ?>
</head>

<body>
    <?php include("includes/browser_upgrade.html") ?>
    <?php include("includes/loader.html") ?>
<!--    <php include("includes/header.html") ?>-->
<!--    <php include("includes/sidebar.html") ?>-->

    <?php include("includes/barba_open.html") ?>

    <!--  insert body content  -->
    <section id="intro_page" class="intro">

        <div class="intro_video_sec">
            <video id="introVideo" width="100%" height="100%" autoplay muted>
                <source src="videos/ACCESS_ARCHITECTURE_LOGO_ANIMATION_NEW_03.mp4" type="video/mp4">
            </video>
        </div>

    </section>

    <?php include("includes/barba_close.html") ?>
    <!--  end body content -->
    <?php include("includes/include_js.html") ?>
    <script>
        $(document).ready(function() {
            var introVideo = document.getElementById('introVideo');
            introVideo.onended = function() {
                window.location.href = 'home.php';
            }
        });

    </script>
</body>

</html>
