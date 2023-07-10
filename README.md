# MVZ Movies

MVZ is a movie listing application with the help of TMDB API.

**Live App: https://mvz.wajid.me/**

## Features

- Dynamic movie fetching with The Movie Database API
- Clean UI design and elements created with Material UI
- Purely responsive on all devices
- Movie filtering and sorting with the help of JavaScript `filter()` and `sort()` functions
  - Release year based filter
  - Rating based filter
  - Year & Rating sort

## Technologies

- [React](https://react.dev/)
- [The Movie Database API](https://developer.themoviedb.org/docs/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [Fontsource](https://fontsource.org/)
- [Vite](https://vitejs.dev/)

## Setup Locally

1. Run the following commands

   ```sh
    $ git clone https://github.com/wajid-nv/mvz.git

    $ cd mvz

    $ npm i
   ```

1. Go to [TMDB Website](https://themoviedb.org/) and get your API key

1. Rename `.env.local.template` to `.env.local`

1. Paste your API key to the corresponding field (`VITE_TMDB_API_KEY`)

1. Start the development server

   ```sh
   $ npm run dev
   ```

1. Visit https://localhost:3000/ in your browser

## License

Distributed under the [MIT License](https://opensource.org/license/mit/). See [`LICENSE`](https://github.com/wajid-nv/mvz/blob/main/LICENSE) for more information.
