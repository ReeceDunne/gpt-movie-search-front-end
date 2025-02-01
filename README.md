# Movie Details Search

This is the front-end application built using Next.js to connect to the movie-ratings/discover endpoint that uses OpenAI and OMDB API to search for movies based on user input.

Standalone Application:
https://github.com/ReeceDunne/gpt-movie-search

Express.js Application:
https://github.com/ReeceDunne/movie-ratings

## Features:

- Prompt-based movie search using OpenAI's GPT model.
- Fetch movie details from OMDB API (including title, release date, director, genre, etc.).
- Calculate the average rating of movies based on IMDb and Rotten Tomatoes scores (only if both ratings are valid).

## Requirements:

- Node.js (v14 or higher)
- NPM (or Yarn)

## Setup:

_First following the setup steps of the Express.js application_

### 1. Clone the repository:

```bash
git clone https://github.com/ReeceDunne/gpt-movie-search.git
cd gpt-movie-search-front-end
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables:

Create a .env file in the root directory and add your API keys:

```bash
OPEN_AI_API_KEY=your_openai_api_key
OMDB_API_KEY=your_omdb_api_key
```

### 4. Run the application:

```bash
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```

### 5. Interact with the Search Bar:

Once the page has loaded enter a prompt into the Searchbar and a list of movies will be returned
