import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "card-input",
  templateUrl: "./cardInput.html",
  styleUrls: ["../../../global_styles.css", "./styles.css"],
})
export class CardInput {
  name = "Angular";
}

bootstrapApplication(CardInput);
