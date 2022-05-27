const key = '122612ded1e8abdee8415c61f265e317'


const requests = {
    requestTopRated: {
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
        title: 'Top Rated',
        cards: 8

    },
    requestTrending: {
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
        title: 'Trending',
        cards: 4

    },
    requestPopular: {
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
        title: 'Popular',
        cards: 8
    },
    requestUpcoming: {
        url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
        title: 'Up coming',
        cards: 8
    },

}

export default requests;