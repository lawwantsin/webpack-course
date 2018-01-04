import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoot } from "./app.component"

@NgModule({
  bootstrap: [AppRoot],
  declarations: [AppRoot],
  imports: [BrowserModule, FormsModule]
})
export class AppModule {}
