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
  eng: {
    signout: 'signout',
    search: 'search here for movies',
    back: 'back',
    button: 'search',
  },
  hindi: {
    signout: 'साइन आउट',
    search: 'फ़िल्में खोजें',
    back: 'पीछे',
    button: 'बटन',
  },
  japanese: {
    signout: 'サインアウト',
    search: 'ここでK映画を検索してください',
    back: 'を検索',
    button: 'ボタン',
  },
}

export const token =
  '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'
export const endpoint = 'https://models.github.ai/inference'
