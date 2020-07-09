# Portfolio Project

Specs to run the Portfolio project:
![ScreenShot](app/services/assets/img/propject.jpg)

# Files

index.html: presentation page
twitter.php: PHP run file to connect with Twitter API

**app/services:** Assets and libraries used on the project
 **.. assets/:** css, js and img files
***.. api/:*** Slim php framework based project to gettigng the funcionality to the project
**TwitterAPIExchange:** External library to connect with Twitter API.
**test.sql**: DB schema used on the project

1. Install the project and run a apache folder.

2. locate the api folder, and run:
> composer update

3. and run the api:
> php -S localhost:8080 -t public

4.  Open project on the web browser

# API
I used the SlimPHP v3 framework, with the https://github.com/slimphp/Slim-Skeleton/tree/3.1.8 clone version.
This structure puts the settings and routes on src/ folder

* **api/src/settings.php:** Settings to DB and header for the project.
* **api/src/routes.php:** Logic routes and endpoint funcionality.