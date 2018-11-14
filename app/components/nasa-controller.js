import NasaService from "./nasa-service.js";


let _nasaService = new NasaService

function drawApod() {
  let apod = _nasaService.Apod
  if (apod.mediaType == 'video') {
    document.getElementById("bg").style.backgroundImage = `url("https://placecage.com/1200/800")`
  } else {
    document.getElementById("bg").style.backgroundImage = `url(${apod.img})`
  }


  document.getElementById("title").innerText = apod.title
  document.getElementById("date").innerHTML = `<p>${apod.date}</p>`
  //document.getElementById("bg").style.backgroundImage = `<img src="${apod.img}"/>`
  document.getElementById("para").innerHTML = `<div class="col-12">${apod.explanation}</div>`
}

export default class NasaController {
  constructor() {
    console.log("hellllo, controller here")
    _nasaService.getApod(drawApod)
  }
  getDate() {
    //make sure date is properly formatted yyyy-mm-dd
    //send date to service 
    let newDate = document.getElementById('new-date').value
    _nasaService.getApod(drawApod, newDate)
  }
}