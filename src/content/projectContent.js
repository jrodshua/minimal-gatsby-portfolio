export const projectObj = {
  usagi: {
    type: `eCommerce Client`,
    title: `Usagi.Bakery`,
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
    projectClass: `project-usagi`,
  },
  plantFather: {
    type: `Gatsby Starter`,
    title: `Plantfather`,
    body: `A web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track. Create and save new playlists of
        recommended tracks based on your existing playlists and more.`,
    list: [`NextJs/React`, `Stripe API`, `Bulma.io`, `SSR`],
    projectClass: `project-plant`,
  },
  jira: {
    type: `Task Tracking Web App`,
    title: `Jira4Peeps`,
    body: `A web app for visualizing personalized Spotify data. View your top
    artists, top tracks, recently played tracks, and detailed audio
    information about each track. Create and save new playlists of
    recommended tracks based on your existing playlists and more.`,
    list: [`NextJS/React`, `Evergreen-Ui`, `SSR`, `MongoDB`],
    projectClass: `project-jira`,
  },
}

export function getProject(project) {
  switch (project) {
    case "usagi":
      return projectObj.usagi
    case "plantFather":
      return projectObj.plantFather
    case "jira":
      return projectObj.jira
    default:
      return project
  }
}
