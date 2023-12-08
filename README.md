<!-- TABLE OF CONTENTS -->
## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

This is a full stack MERN project that was made to blog the cafes and breweries that I discovered around Southern California. The project includes a Home page, About Us page, Cafe page, Breweries page, Post page, and backend that maintains user login and posting features. 


### Built With

* MongoDB
* Express.js
* React.js
* Node.js
* Tailwind.css


<!-- GETTING STARTED -->
## Getting Started

These are the necessary npm packages that need to be downloaded.

* npm
  ```sh
  npm install @fontsource-variable/montserrat
  npm install bcryptjs
  npm install cookie-parser
  npm install cors
  npm install date-fns
  npm install express
  npm install jsonwebtoken
  npm install mongodb
  npm install mongoose
  npm install multer
  npm install styled-components
  npm install typewriter-effect
  npm install react-quill

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/CafeBlog.git
   ```
2. Start NPM project
   ```sh
   npm start
   ```
3. Replace MongoDB link in api/index.js line:24
4. Open api folder in terminal
   ```sh
   node index.js
   ```
   

<!-- USAGE EXAMPLES -->
## Usage

The home page uses the npm typewriter to update the text every few seconds. 
![HomePage](https://github.com/ryandaepark/CafeBlog/assets/57121651/f226cd50-749c-4419-a056-a234524608a4)

The login/register page is connected to the MongoDB backend with Express.js and Node.js middleware. It also encrypts the password and uses the data to personalize posts. 
![LoginPage](https://github.com/ryandaepark/CafeBlog/assets/57121651/13b4a359-a30f-4f6a-9a53-c4a5210b77cf)

The cafes and breweries page contains each clickable post and a create new post button. Both these pages uses Navigation to determine type of post (brewery or cafe) and sends the post to the correct page using filter on the data from the backend. The posts are each clickable and display the full content with react-quill which was  saved in the backend as well. The cafe page and the brewery page are both using test data sets but will be changed in time. 
![CafesPage](https://github.com/ryandaepark/CafeBlog/assets/57121651/308aaa4e-a315-4d9c-9551-f08518aff1cb)
![BreweriesPage](https://github.com/ryandaepark/CafeBlog/assets/57121651/b40fa2e2-de4b-4c76-b02d-76d660ec1e51)
![CreatePagePrompt](https://github.com/ryandaepark/CafeBlog/assets/57121651/84961840-e80a-4a0f-8b48-c5f39ec52597)
![PostPage](https://github.com/ryandaepark/CafeBlog/assets/57121651/99d94a51-c1fe-49c7-bbfa-a0278ea7d010)

The about us page is dedicated to explain the content and purpose of creating the website. The logo was custom created. 
![AboutUsPage](https://github.com/ryandaepark/CafeBlog/assets/57121651/3d61f993-0cf6-4270-a128-36eb516d717a)

<!-- ROADMAP -->
## Roadmap

- [X] Clickable Post page
- [ ] Fix Stars on front-end
- [ ] Change the font
- [ ] Create Edit post function
- [ ] Create Delete post function


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
