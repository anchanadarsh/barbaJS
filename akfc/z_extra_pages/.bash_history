#1497433954
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
#1497433987
php -r "if (hash_file('SHA384', 'composer-setup.php') === '669656bab3166a7aff8a7506b8cb2d1c292f042046c5a994c43155c0be6190fa0355160742ab2e1c88d40d5be660b410') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
#1497433996
php composer-setup.php
#1497434007
php -r "unlink('composer-setup.php');"
#1497434013
composer
#1497434084
cd public_html
#1497434087
cd devlopement/
#1497434090
cd laravel/
#1497434101
composer global require "laravel/installer"
#1497434262
composer create-project --prefer-dist laravel/laravel laravel_test
#1508923162
ls
#1508923190
cd public_html
#1508923192
ls
#1508923203
cd websites
#1508923204
ls
#1508923267
zip -r eddy_new.zip eddy_new
#1509444238
ls
#1509444252
cd public_html
#1509444254
ls
#1509444265
cd websites
#1509444267
ls
#1509444326
zip -r TufRopes_website.zip TufRopes_website
#1509444730
exit
#1511948578
ls
#1511948602
cd public_html
#1511948604
ls
#1511948613
cd websites
#1511948616
ls
#1511948740
zip -r tuffropes.zip TufRopes_website
#1511949387
cd 
#1511949391
ls
#1511949408
cd public_html
#1511949410
ls
#1511949417
cd chennai
#1511949420
ls
#1511949443
zip -r eten.zip eten15
#1511949478
ls
#1511950560
exit
