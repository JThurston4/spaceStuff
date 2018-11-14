

export default class Apod {
  constructor(data) {
    this.date = data.date
    this.title = data.title
    this.explanation = data.explanation
    this.mediaType = data.media_type
    this.img = data.url
  }
}