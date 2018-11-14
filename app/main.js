import NasaController from "./components/nasa-controller.js"

class App {
  constructor() {
    this.controllers = {
      nasaCtrl: new NasaController()
    }
  }
}





window.app = new App()