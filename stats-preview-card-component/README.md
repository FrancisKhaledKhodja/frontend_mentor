# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Stats preview card - desktop](./screenshots/Stats-preview-card-desktop.png)
![Stats preview card - mobile](./screenshots/Stats-preview-card-desktop.png)

### Links

- Solution URL: [link github.io](https://franciskhaledkhodja.github.io)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties


### What I learned

The difficulties in this challenge has been for me the following elements:

- The positions of the elements that are very different between the desktop view and the mobile view: for instance, the position of the image.
- The color of the picture with a pink/purple color. I implemented a layer with an opacity of 0.5 but I am not satisfied by the result: first I add an html element to integrate this layer (in the index.html) and the rendering is more clearer than the model. You can read the code snippet concerning the picture below.

```html
    <div class="container__image">
      <div class="container__image--layer"></div>
    </div>
```
```css
.container__image {
    display: inline-block;
    height: 446px;
    width: 540px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-image: url("../images/image-header-desktop.jpg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    left: 570px;
}

.container__image--layer {
    height: 446px;
    width: 540px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #AB5CDB;
    opacity:0.5;
}
```

## Author

- Frontend Mentor - [@FrancisKhaledKhodja](https://www.frontendmentor.io/profile/FrancisKhaledKhodja)

