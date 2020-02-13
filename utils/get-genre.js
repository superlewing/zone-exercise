import { GENRES } from "./api-config"

export const getGenreName = id => GENRES.find(genre => genre.id === id).name

export const collateGenres = films =>
  films
    .reduce((all, current) => {
      current.genre_ids.forEach(id => {
        const i = all.findIndex(item => item.id === id)
        if (i > -1) all[i].count++
        else all.push({ id, count: 1 })
      })
      return all
    }, [])
    .sort((a, b) => a.count > b.count)
    .map(item => item.id)

// export const collateGenres = films =>
//   films.reduce(
//     (all, current) =>
//       current.genre_ids.forEach(id => all.includes(id) || all.push(id)
//       ),
//     []
//   )
