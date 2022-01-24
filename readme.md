Live Preview: https://sad-einstein-b586b8.netlify.app/

1. How I worked on this project:

First, I built a mockup version of Netflix using a Firestore DB to populate with movies. I started building it page by page, from Home and all the way to Browse (as browse was the biggest, I left it last). Finally, I added Authentication and MovieDB API to populate the Browse page dinamically.

Obviously, the CSS was partly yoinked from the original Netflix page, but it was mostly just a trial and error with every padding, margin and other design elements.

2. How to navigate the project:

For the App:

As most routes are protected, whereever you try to go, it will take you to the home page, which contains an Accordion with FAQs and a Sign in/Sign up button.

After you create your account (which we store in a Firebase db, so it's all safe), you can log in and navigate to the Browse page.

For the code:

The folder structure and the way everything is separated is, for me, quite complex. The folders are as following:

- components - this contains every React component I've built for the page. I've used Compound Components as to not have to Import every single component, since there are PLENTY. Inside each component folder, there is a styles folder that contains the Styled Components styling for every component in particular. While I could've written everything with more reusability in mind, as this is my first project, I just wasn't sure everything was as reusable I thought it'd be.

- containers - self-explanatory, contains the containers for components. e.g., the Jumbotron container contains the built 'jumbotron', basically a component made out of more components. Mostly to increase readability.

- context - just the firebase context, nothing special

- fixtures - the initial db of movies. I could've deleted this, but left it in so the story of the app makes more sense.

- helpers - this contains the axios instance and the code for protected routes. 

- hooks - my custom hooks, useContent which is used to create the list of movies that need to appear on site, and useAuthListener which is used to initialize the firebase auth

- pages - contains the build of each page.

- utils - contains the requests to populate and a filter so I can get movies in their respective categories.

3. Why I built the project this way:

Honestly, I just wanted to learn React. This is my first 'real' React project, and it helped me understand most React base hooks, how custom hooks work, how react router works and how to work with FireBase. I am, personally, proud of my progress, as I only started learning React in November.

On the more technical aspect:

- styled components - I dont know. I found it more interesting than SASS/SCSS, and even though I could've used something like tailwind, I thought I'd polish my CSS a bit.
- firebase - as I am aiming to become a Front-end developer first, I had no reason to create the backend myself. I will, probably, try to move the backend of this project from firebase to a self-built one, since I will, sometime, aim to become a full stack dev.

On the code itself:

- the code isn't inovative in any way. As I explained above, I used compound components as to not clutter the imports in the main files.
- one part I am proud of is the infinite slider algorithm (found in ./components/card/index.js for now, will move it to it's own separate file later) - I worked a lot on it, and although I could've just used a library, I chose not to as to polish my algorithmical thinking.

4. If I had more time I would:

- implement a self-built backend
- add trailers for every item on the page
- add Profile creator (just like Netflix)
- polish the CSS some more

5. Available scripts:

- npm start - starts the local host, although it requires some modifications in the ./utils/requests.js files (change process.env.REACT_APP_API_KEY to your own movieDB API key)
