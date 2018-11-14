import Apod from "../models/APOD.js";


let _apod = {}
//@ts-ignore
let nasaAPI = axios.create({
  baseURL: "https://api.nasa.gov/planetary"
})


let apiKey = "apod?api_key=MeRVV89rjwMnxwEQZjHgG06g61l4uCWHXnq2uMGC"

export default class NasaService {
  constructor() {

  }

  get Apod() {
    return _apod
  }

  getApod(draw, date) {
    let requestString = apiKey
    if (date) {
      requestString += '&date=' + date
    }
    nasaAPI.get(requestString)
      .then(res => {
        console.log(res)
        _apod = new Apod(res.data)
        console.log(_apod)
        draw()
      })
  }

}