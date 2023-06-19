import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App"

ReactDOM.render(
  <>
  <App></App>
  </>,document.getElementById("root")
);

/*
in js we use return functionname in onsubmit method call to prevent the default submit form behaviour even though there is mistake on form field but without return it will submit the form.
e.g-
<form onsubmit="return validateForm()">
  <!-- form fields -->
  <input type="submit" value="Submit">
</form>

<script>
function validateForm() {
  // perform form validation checks
  if ( validation fails ) {
    return false; // prevent form submission
  } else {
    return true; // allow form submission
  }
}
</script>

in react same functionality can  be achieve by
In React, you can achieve form validation and control form submission behavior using state and event handling. Here's an example of how you can accomplish this:
 event.preventDefault(); // Prevent default form submission
*/