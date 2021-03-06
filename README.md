# Music Releases

This is a pair-programming project done by Gabriella Bolin and Mats Johansen @mats-johansen. In the project we built a Music Release site, similar to Spotify, to show new album and single releases by using React components. 

## The problem

We got pre-fetched data from an API from Spotify. We started by dividing the end result in different components, one for heading, one for the container including all albums, one for the <div> containing the information and one for the actual information. We also imported the icons in a separate component. 

We used the `.map()` function to map through the albums array and mount an 'Album' component for each album. Inside that `.map()` we created another one to sort out all artists for the albums containing more than one artist. This was to make proper links to each one of the artists.

In the app.js we combine the header and the album container as the two different elements to be inputed. 

First we added the URL for artists and albums separately - to be used as links on the website. Later we had to include the artist-link into the `.map()` function for artists to separate the links when having several artists. By doing that we did unfortunately had to add JSX into the AlbumDiv.js component. 

Another tricky part for us was to align the icons over the albums and to make them visible when hovering the album image. We had to create one container for the icons and one for the album cover and then use the `display: none` property to hide the icons when not hovering the album instead of having to delete and recreate them.

We have used some CSS in the project to make it responsive for desktop, tablet and mobile. The site is styled 'mobile-first'. In CSS we also added hovering effects. 

## Learning objectives

- How to write React components

- How to use `.map()` to iterate over an array of data and mount many components

- How to use React props to feed information to components

- How to structure React projects into small chunks

## Tech

- REACT JavaScript 

- CSS

## View it live

Link to see our project live: https://musicreleases.netlify.app/

