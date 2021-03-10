export const projectObj = {
  usagi: {
    title: `Usagi.Bakery eComm`,
    body: `A web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track. Create and save new playlists of
        recommended tracks based on your existing playlists and more.`,
    list: [
      `Gatsby/React`,
      `Stripe API`,
      `Sanity Headless CMS`,
      `Styled Components`,
    ],
  },
  plantFather: {
    title: `Plantfather Gatsby Starter`,
    body: `A web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track. Create and save new playlists of
        recommended tracks based on your existing playlists and more.`,
    list: [],
  },
}

export function getProject(project) {
  switch (project) {
    case "usagi":
      return projectObj.usagi
    case "plantFather":
      return projectObj.plantFather
    default:
      return project
  }
}
