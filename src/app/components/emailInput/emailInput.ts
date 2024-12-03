import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "email-input",
  templateUrl: "./emailInput.html",
  styleUrls: ["../../../global_styles.css", "./styles.css"],
})
export class EmailInput {
  name = "Angular";
}

bootstrapApplication(EmailInput);
