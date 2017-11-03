# Sprint 2, Weather Dashboard Assignment

## How to get started with the weather API.

[Sign up for a free Open Weather Map account](https://home.openweathermap.org/users/sign_up). Once signed in, go to the "Api Keys" tab and copy the API Key. You can use the API Key in the APPID parameter when making calls to the openweathermap API.

For example, to get the current weather in Stockholm, you can use the url below. Remember to replace "YOUR_API_KEY" with the API key you copied from your dashboard.

http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=YOUR_API_KEY

The response should look something like this (this has been run through jsonlint.com to add newlines and indentation):

<script src="https://gist.github.com/idlefingers/a37b414d1195516c7f18a48985afb423.js"></script>

Use the `fetch()` function in JavaScript to load the weather into your page.
