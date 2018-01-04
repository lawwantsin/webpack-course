import { Component } from "@angular/core"

@Component({
  selector: "root-app",
  styles: [require("./app.component.css").toString()],
  template: require("./app.component.html")
})
export class AppRoot {
  message = "Fuck Yeah"
}
