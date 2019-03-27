var playlist = {
  Usher: 'Yeah!',
  ['Bruno Mars']: 'Treasure',
  ['Michael Jackson']: 'Billy Jean'
}

function updatePlaylist (playlist, artist, title){
  return Object.assign({}, playlist, {[artist]: title})
}