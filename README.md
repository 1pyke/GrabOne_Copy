# GrabOne-Copy project

GrabOne is a website where the user can buy and review products

GrabOne-Copy It's an Copy of GrabOne website but using diffrent api requsets
and reviewing movies insted of products.

You Should Download All The Dependencies Before You Get Started!!

## Technologies/langues That been used:

- [HTML](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [CSS](https://github.com/matiassingers/awesome-readme)
- [JavaScript](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [Tailwind Css](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [React JS](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [React Hooks](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [React Icons](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [Axios](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [React Router](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [Node v14.17.5](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## API Reference

The Movie Database Api-TMDb.

TMDb offers a powerful API service that is free to use as long as you properly attribute us as the source of the data and/or images you use.

#### Get all items

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### How To Use TMDb

Here is an example:

```http
TopRated:
  GET https://api.themoviedb.org/3/movie/top_rated?api_key=<<key>>&language=en-US&page=1
Trending:
  GET https://api.themoviedb.org/3/movie/popular?api_key=<<key>>&language=en-US&page=2
Popular:
      https://api.themoviedb.org/3/movie/popular?api_key=<<key>>&language=en-US&page=1
UpComing:
      https://api.themoviedb.org/3/movie/upcoming?api_key=<<key>>&language=en-US&page=1

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
