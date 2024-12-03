import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "name-input",
  templateUrl: "./nameInput.html",
  styleUrls: ["../../../global_styles.css", "./styles.css"],
})
export class NameInput {
  name = "Angular";
}

bootstrapApplication(NameInput);
