<h1>First Project: Travel Blog</h1>

<h2>Objective</h2>

The goal for this project is to build a Travel Blog with HTML, CSS, and JS.

Features

Homepage

A list of travel locations

    Build a list of locations you travelled to
        The list can display information from an array of objects
        The array can be read from Localstorage
    The following information should be shown in the list:
        The name of the city and country
        The date of the visit (when you arrived)
        A thumbnail of the city

The detail of the city (exemplified on the right)

    When an element on the left is clicked the detail should update with:
        An image of the city
        City and Country name
        The date of the visit (from and to)
        A description of the travel (can be Lipsum)
        The current weather in the city

How to show the current weather of the travel location

    You can fetch the current weather (including an icon) of the travel location using the OpenWeatherMap API
    Show it as part of the information of your travel location

Add new location page

    A form to add new locations to an array in Localstorage
    After adding the city, it should appear in the homepage with the other travel locations
    You can experiment with the various input elements, e.g. <input type="date" /> or <textarea>
    You can add a images: Uploading images is out of context for this project, but you can add the URL to an online image and save it to Localstorage same as any other field

The Traveler page

    A static page to showcase the author of the blog
    Be as creative as you want :

<h2>Bonus tasks</h2>

Delete Location

    Add the ability to delete locations from the Localstorage array
