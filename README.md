# Git Graph

## Description
Git Grapher is a simple and interactive web application that allows users to visualize their GitHub contribution activity through dynamically generated contribution graphs. By entering their GitHub username, users can explore a personalized graph showcasing their commit history. The application uses the popular GitHub contribution chart API to create visually appealing and informative graphs. It's a fun and engaging way for developers to reflect on their coding activity and share their progress with others.

### Key Features
+ Personalized GitHub contribution graphs.
+ Easy-to-use interface with a user-friendly form.
+ Dynamic rendering of contribution charts based on the provided GitHub username.
+ Visually appealing design with copyright information.

### Usage
1. Enter your GitHub username.
2. Click the "Submit" button to generate your personalized contribution graph.
3. Explore and share your coding journey with the Git Grapher community.

### Workflow
+ User Input:
  + Users access the application through the root path ("/").
  + They are prompted to enter their GitHub username in a designated form.

+ Submission:
  + Users submit the form with their GitHub username.
  + The application captures the username from the query parameter in the URL.

+ Rendering:
  + The server renders the "index" view, passing the username as a dynamic parameter.
  + The EJS template dynamically displays the GitHub contribution chart for the entered username.

+ GitHub Chart Display:
  + The application fetches the GitHub contribution chart image based on the username.
  + The fetched image is displayed on the page, allowing users to visualize their GitHub contributions.