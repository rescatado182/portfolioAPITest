<?php

class Twitter{

    function getTweets($user) {

        ini_set('display_errors', 1);
        require_once('app\services\TwitterAPIExchange.php');

        $settings = array(
            'oauth_access_token' => "1220032047516921859-otvXjhExyUTZ5GLxssc9h5ORqtPZja",
            'oauth_access_token_secret' => "tmJKqM4ORfQW6CH7wIVV8uKNpmSEmeFAP8lYwGb19uYjj",
            'consumer_key' => "KRy7l0v8wex3w8Sy5zThai3Ea",
            'consumer_secret' => "X2eBm0Y21kYEuR74W3Frqc2JVIizOj8Q1EVGatDsEVVEJo0ucu"
        );

        $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
        $getfield = '?screen_name='.$user.'&count=10';        
        $requestMethod = 'GET';

        $twitter = new TwitterAPIExchange($settings);
        $json = $twitter->setGetfield($getfield)
            ->buildOauth($url, $requestMethod)
            ->performRequest();
        
        return $json;
    }
}


$twitterObject = new Twitter();
$jsondata = $twitterObject->getTweets('official_php');

echo ($jsondata);

?>