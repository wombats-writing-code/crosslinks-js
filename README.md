

![Crosslinks](crosslinks.png)

Crosslinks
===

Crosslinks ([crosslinks.mit.edu](http://crosslinks.mit.edu)) is a web application that contains a compendium of topics, resources tagged with topics, and links across topics.

This repository is the front-end: it contains the code for what you see on the site and lets you host your own version of Crosslinks.

Crosslinks is open-source: you are free to use, modify and reuse any part of it. We ask only that you attribute and cite MIT Crosslinks:

**Miller, H.R, Willcox, K.E., Huang, L. "Crosslinks: Improving course connectivity using online open educational resources," in The Bridge, National Academy of Engineering, to appear 2016.**

Crosslinks is a project by [Karen E. Willcox](http://kiwi.mit.edu), MIT Professor of Aeronautics & Astronautics, and Haynes Miller, MIT Professor of Mathematics. The development of Crosslinks was funded by MIT ODL Strategic Education Initiatives, who also provided the backend service.

## How to use Crosslinks
This repo is for anyone who wants to host their own Crosslinks. You'll need your own backend service so you can store your collection of topics and linkages.

## Getting Started

If you want to host your own version of Crosslinks, the first thing to do is to download this repo so you can make modifications to it:

To install all required dependencies:
```
npm install
```

Then, we'll tell gulp to watch our files so that everything automatically compiles and updates whenever we change a source file:
```
gulp watch
```

When you run `gulp watch`, your browser should fire up a window (http://localhost:9000) in which the Crosslinks code is being served locally. Whenever you make changes to any html or javascript files under `app/`, gulp will detect it and rebuild the code and serves it. Due to some quirks, you have to refresh the page again to see your latest changes.

Crosslinks is a Single Page App (SPA) that uses the AngularJs (v1) framework and is organized into modules using the CommonJs module specification. We use webpack to build and bundle our app.

If any of the above was confusing, here is some required reading:

* [A helpful overview of SPAs](http://www.seguetech.com/blog/2013/04/18/what-is-single-page-application)
* [Modularity in Javascript](http://eloquentjavascript.net/10_modules.html)
* [Optional but excellent: Building modular Javascript apps](http://addyosmani.com/writing-modular-js/)
* [Loading Javascript modules](https://libraryinstitute.wordpress.com/2010/12/01/loading-javascript-modules/)
* [webpack: module bundler and loader](https://github.com/webpack/webpack)
* Angular has a steep learning curve. [This guide helps](https://thinkster.io/a-better-way-to-learn-angularjs/)

## Code organization

The Crosslinks application is front-end only, which means you'll need to set up your own server-side solution for managing permissions.

For example, at MIT, Crosslinks is world-readable - anyone in the world can read and access content. But, only MIT-authenticated users can edit. We do this by setting up an http version and an https version. The front-end shows the editing pages only when there is an MIT username present on the client. We then really secure this by having our API accept only requests with valid MIT kerberoses.

All app stuff  is found in `app/`.

From here on, we assume you're in the `app/` directory. Most likely you're interested in the actual Javascript logic, found in `modules/`. The entry file to the module loader is `index.js` and contains all routes (aka "pages") and their loading logic.

Modules are pretty much as described; there exists one folder for each route, and there's a `modules/common/` folder that houses all the common stuff shared throughout the app. For example, that visualization that is currently on the main page? -- that code resides in `modules/common/components/visualization`.

Whenever you make a change, the gulp setup will automatically remake all the files and put them into `dist/`. Those are the files that get served.

## Data Modeling

The core unit of Crosslinks is a `Topic`. The factory function and prototype definition can be found in `app/modules/common/models/topic.js`. Topics have the following attached:
* an array of `Subject` (look at `app/modules/common/models/subject.js`)
* an array of `reference` (the Wikipedia and Wolfram links)
* an array of `learn`  (links to resources that help you learn the current Topic)
* an array of `prepare`  (Topics that come before the current one)
* an array of `relate`  (Topics that are related to the current one)
* an array of `apply`  (links to resources that apply the current Topic)
* an array of `advance`  (Topics that follow on after the current one)

## How to deploy your own Crosslinks

The section on Data Modeling above is required reading. This list is a bit lengthy, but fortunately, most of these modifications have to do with your server endpoints. Files you'll need to modify:

* app/modules/components/search-subject/searchSubject.service.js
* app/modules/components/search-topic/searchTopic.service.js

* app/modules/handcar/[everything] -- Provides functions to call against handcar, our server-side logic. You'll need to rewrite these functions to fit your API endpoints.
* app/modules/common/models/[everything] -- Provides factories and prototypes for models.
* app/modules/interceptors/[everything] -- This is some complicated logic to handle adapting requests and responses -- we need this because of the split authentication scheme we use at MIT Crosslinks. You might not.


## Optional Tutorial 1: Display hello world dynamically on the front page!
This tutorial is meant to get you familiarized with AngularJS and comfortable working with the build system.

Let's add a block of bright blue that proudly displays 'hello world'!

We assume you're already running `gulp watch`:

1. Find the folder where the main page resides (`modules/main`)
1. Edit the main.html file to add the block
1. Edit the main.scss file to change the block's color
1. Edit the main.controller.js to add the logic that injects in the 'hello world' value

Note: simply putting in the block with the 'hello world' text defeats the point of this exercise. We want to learn about the controller and idea of injecting in data.
Another note: remember to hit refresh again after the page rebuilds-reloads.

## Links
* [MIT Crosslinks website] (http://crosslinks.mit.edu)
* [Some context on Crosslinks] (http://kiwi.mit.edu/education/crosslinks)

## Papers
Miller, H.R, Willcox, K.E., Huang, L. "Crosslinks: Improving course connectivity using online open educational resources," in The Bridge, National Academy of Engineering, to appear 2016.

## Contact
Karen E. Willcox [kwillcox@mit.edu]

## License
This content is released under the [MIT License](http://opensource.org/licenses/MIT).
