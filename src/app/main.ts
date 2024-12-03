import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <p>heehoo</p>
  <div id="validation-container">
    <form>
      <fieldset>
        <span class="input-span">
          <label for="name" class="input-label">Name:</label>
          <input
            id="name"
            name="name"
            class="text-input"
            type="text"
            placeholder="Enter Your Name"
            autocomplete="name"
            required
          />
        </span>
        <span class="input-span">
          <label for="email" class="input-label">Email:</label>
          <input
            id="email"
            name="email"
            class="text-input"
            type="email"
            placeholder="Enter Your Email"
            autocomplete="email"
            required
          />
        </span>
        <span class="input-span">
          <label for="card-number" class="input-label">Card:</label>
          <input
            id="card-number"
            name="card-number"
            class="text-input"
            type="tel"
            placeholder="Enter a Proxy Credit Card Number."
            autocomplete="cc-number"
            maxlength="16"
            required
          />
        </span>
        <button id="submit-button" name="submit" type="submit">Submit</button>
      </fieldset>
    </form>
  </div>`,
  styleUrls: ['@/src/styles.css'],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
