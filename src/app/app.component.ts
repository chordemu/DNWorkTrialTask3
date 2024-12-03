import { Component } from "@angular/core";
import { NameInput, EmailInput, CardInput, MyButton } from "./components";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [NameInput, EmailInput, CardInput, MyButton], // Import other standalone components here
})
export class App {
  name = "Angular";
}
