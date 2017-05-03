import AppAPI from '@/api/app'
import youtubeAPI from '@/api/youtube'

const playlists = new AppAPI('playlists')

export default {
  getAllPlaylists: (context) => {
    return playlists.all()
      .then(response => {
        context.commit('SET_PLAYLISTS', response.data)
      })
      .catch(() => {
        console.error('Playlists request failed')
      })
  },
  getPlaylist: (context, id, password) => {
    return playlists.get({id, password})
      .then(response => {
        const {data} = response
        context.commit('SET_PLAYLIST', {id, password, data})
        return data
      })
      .catch(() => {
        console.error('Playlist request failed')
      })
  },
  createPlaylist: (context, name, password) => {
    return playlists.create({name, password})
  },
  savePlaylist: (store) => {
    return playlists.update(store.state.playlist)
      .catch(() => {
        console.error('Playlist saving request failed')
      })
  },

  getYoutubeList: (context, keywords) => {
    return youtubeAPI.get(keywords)
  },

  setTrack: (context, track) => {
    context.commit('SET_TRACK', track)
  },
  setPlay: (context) => {
    context.commit('SET_PLAY')
  },
  setPause: (context) => {
    context.commit('SET_PAUSE')
  },
  setVolume: (context, volume) => {
    context.commit('SET_VOLUME', volume)
  },
  nextTrack: (context) => {
    context.commit('SET_NEXT_TRACK')
  },
  toggleShuffle: (context) => {
    context.commit('TOGGLE_SHUFFLE')
  },
  toggleVideoMode: (context) => {
    context.commit('TOGGLE_VIDEO_MODE')
  },
  resetVideoMode: (context) => {
    context.commit('RESET_VIDEO_MODE')
  },
  prevTrack: (context) => {
    context.commit('SET_PREVIOUS_TRACK')
  },
  setYoutubeReady: (context) => {
    context.commit('SET_YOUTUBE_READY', 'youtube')
  },
  setProgression: (context, progression) => {
    context.commit('SET_PROGRESSION', progression)
  },
  setSeekPosition: (context, position) => {
    context.commit('SET_SEEK_POSITION', position)
  },
  setTrackError: (context) => {
    context.commit('SET_TRACK_ERROR')
    context.commit('SET_NEXT_TRACK')
  },
  addTrack: (context, track, index) => {
    context.commit('ADD_TRACK', track, index)
  },
  moveTrack: (context, track, index) => {
    context.commit('MOVE_TRACK', track, index)
  },
  removeTrack: (context, index) => {
    context.commit('REMOVE_TRACK', index)
  },
  initPlaylist: (context, id) => {
    context.commit('INIT_PLAYLIST', id)
  }
}
