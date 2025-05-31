import { signOut } from 'firebase/auth'

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTE3Y2U3ZmI4ZjYzYWVhOTIzY2U0OWM0YTVmNzNmNCIsIm5iZiI6MTcxNDE5NzY1MC40ODg5OTk4LCJzdWIiOiI2NjJjOTQ5MjI0ZjJjZTAxMjYyYTJiMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OGogoXZr608if3k1LRxproY4kuzJmVRkuhXHtk2nfYE',
  },
}

export const languages = {
  eng: { signout: 'signout', search: 'search here for movies' },
  hindi: { signout: 'साइन आउट', search: 'फ़िल्में खोजें' },
  japanese: {
    signout: 'サインアウト',
    search: 'ここでK映画を検索してください',
  },
}
