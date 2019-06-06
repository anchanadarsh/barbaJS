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
	<title>AKFC</title>
</head>

<body>
	<?php include("includes/browser_upgrade.html") ?>
	<?php include("includes/loader.html") ?>
	<?php include("includes/header.html") ?>
	<?php include("includes/sidebar.html") ?>

	<div id="barba-wrapper">
		<div class="barba-container" data-namespace="homepage">

			<section id="index_page" class="">
				<!--  insert body content  -->

				<div class="anim_area">

					<div class="text_bg_wrapper">
						<div class="intro_sec_with_logo">
							<img src="dist/img/home/logo_anim_1.png" alt="" class="logo_big_img logo_anim_1 img-responsive">
							<img src="dist/img/home/logo_anim_2.png" alt="" class="logo_big_img logo_anim_2 img-responsive">
							<div class="show_progress">
								<span class="fill"></span>
							</div>
						</div>
						<div id="slider_content_back">
							<div class="slide_wrapper_back">
								<div class="slide_back_item"></div>
								<div class="slide_back_item"></div>
								<div class="slide_back_item"></div>
								<div class="slide_back_item"></div>
							</div>
						</div>
						<div class="canvas_area" id="canvas_area">

							<div id="slider_content">
								<div class="slide-wrapper">
									<div class="slide-item">
										<img src="dist/img/home/film_bg.jpg" class="slide-item__image">
									</div>
									<div class="slide-item">
										<img src="dist/img/home/tv_bg.jpg" class="slide-item__image">
									</div>
									<div class="slide-item">
										<img src="dist/img/home/1.jpg" class="slide-item__image">
									</div>
									<div class="slide-item">
										<img src="dist/img/home/black_bg.jpg" class="slide-item__image">
									</div>
									<div class="slide-item">
										<img src="dist/img/home/black_bg.jpg" class="slide-item__image">
									</div>
								</div>
								<button id="trigger_film" class="scene-nav scene-nav-- scene-nav--one" data-nav="zero"></button>
								<button id="trigger_tv" class="scene-nav scene-nav-- scene-nav--two" data-nav="one"></button>
								<button id="trigger_team" class="scene-nav scene-nav-- scene-nav--three" data-nav="two"></button>
								<button id="trigger_contact" class="scene-nav scene-nav-- scene-nav--four" data-nav="three"></button>
							</div>
						</div>

						<div class="text_wrap">
							<div class="texts text_film" data-click="#trigger_film">
								<h2 class="catText"><a class="rem_link_style" data-href="films.php" href="films.php">Films</a></h2>
							</div>
							<div class="texts text_tv" data-click="#trigger_tv">
								<h2 class="catText"><a class="rem_link_style" data-href="tv.php" href="javascript:void(0)">TV</a></h2>
							</div>
							<div class="texts text_team" data-click="#trigger_team">
								<h2 class="catText"><a class="rem_link_style" data-href="team.php" href="javascript:void(0)">Team</a></h2>
							</div>
							<div class="texts text_contact" data-click="#trigger_contact">
								<h2 class="catText"><a class="rem_link_style" data-href="contact.php" href="javascript:void(0)">Contact</a></h2>
							</div>
						</div>

					</div>

				</div>


			</section>

		</div>
	</div>
	<!--  end body content -->
	<?php include("includes/include_js.html") ?>
</body>

</html>
