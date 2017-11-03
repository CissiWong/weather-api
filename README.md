# Sprint 2 – Build a Weather Dashboard

Today's assignment is to build a simple weather dashboard that tells today's weather and temperature using an weather API. We will start by keeping it simple and then there's great possibilities to build on with stretch goals. The weather dashboard should, at the minimum, contain the following: 

![Design](https://github.com/Technigo/assignment-1-yearbook/blob/master/design.png)


## How to get started with the weather API.

[Sign up for a free Open Weather Map account](https://home.openweathermap.org/users/sign_up). Once signed in, go to the "Api Keys" tab and copy the API Key. You can use the API Key in the APPID parameter when making calls to the openweathermap API.

For example, to get the current weather in Stockholm, you can use the url below. Remember to replace "YOUR_API_KEY" with the API key you copied from your dashboard.

http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=YOUR_API_KEY

The response should look something like this (this has been run through jsonlint.com to add newlines and indentation):

```json

{
	"coord": {
		"lon": 18.06,
		"lat": 59.33
	},
	"weather": [{
		"id": 800,
		"main": "Clear",
		"description": "clear sky",
		"icon": "01d"
	}],
	"base": "stations",
	"main": {
		"temp": 6.47,
		"pressure": 1007,
		"humidity": 56,
		"temp_min": 6,
		"temp_max": 7
	},
	"visibility": 10000,
	"wind": {
		"speed": 3.6,
		"deg": 200
	},
	"clouds": {
		"all": 0
	},
	"dt": 1509709800,
	"sys": {
		"type": 1,
		"id": 5420,
		"message": 0.0024,
		"country": "SE",
		"sunrise": 1509689610,
		"sunset": 1509720490
	},
	"id": 2673730,
	"name": "Stockholm",
	"cod": 200
}
```

Use the `fetch()` function in JavaScript to load the weather into your page.

## How to complete this assignment

The `starter-code` folder containers a boilerplate html file with the Technigo logo & color scheme to get you started. Feel free to change the theme if you'd like!

To complete this assignment, you need to fork this repository, make changes to your copy, and then submit a pull request on GitHub (from your repository into the technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

# Sprint 1: Yearbook Assignment

Today's assignment is to create a yearbook-style image gallery of the class. It should include a square photo of each student, and should follow this design:


## How to complete this assignment

The `starter-code` folder containers a boilerplate html file with the Technigo logo & color scheme to get you started. Feel free to change the theme if you'd like!

To complete this assignment, you need to fork this repository, make changes to your copy, and then submit a pull request on GitHub (from your repository into the technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

* [MDN Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Open Weather API Documentation](https://openweathermap.org/current)

---

### :boom: Success!

After completing this assignment you should be confortable in using simple API's and know what an API is and what to use it for. You should also know how to parse data and use json and how to output the data into a website. 

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Change background or background color depending on what weather or temperature it is. 
1. Add which time the sun rise and sets. 
1. Add so that you can choose by three different cities. 
1. Package your site as a Chrome extension, here's how to: 

Chrome extensions are surprisingly simple to create. By packing the app as an extension, you’ll be able to run your todo list by clicking a button in the toolbar. All you need to do to package your app is to create a manifest, give it an icon, then install it in chrome. To create the manifest, make a new file called manifest.json in the root of the project. Within it, place this:

```
{
  "manifest_version": 2,
  "name": "Weather Dashboard",
  "description": "",
  "version": "1.0",
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "index.html"
  }
}
```
Next, copy this placeholder icon to the root of the project. You can replace the icon with anything you’d like.

Finally, in chrome, go to Settings and then open Extensions in the sidebar. Make sure the ‘Developer mode’ checkbox is ticked, then click on the ‘Load unpacked extension’ button. Select the project folder and click ‘open’. You should now see the app in your extension list and and you should also see a new icon in Chrome! When you click the icon now, it’ll load your app in a popup. Just remember, when you make changes to your app, you may need to come back into the Chrome Extensions interface and click reload on your app.

