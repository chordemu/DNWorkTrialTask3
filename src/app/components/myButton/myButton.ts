import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "my-button",
  templateUrl: "./myButton.html",
  styleUrls: ["../../../global_styles.css", "./styles.css"],
})
export class MyButton {
  name = "Angular";
}

bootstrapApplication(MyButton);
