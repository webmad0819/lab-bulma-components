import React from "react";
import FormField from "./Formfield/Formfield";
import Navbar from "./navbar/navbar";
import CoolButton from "./CoolButton/CoolButton";

// as per http://learn.ironhack.com/#/learning_unit/7682 --- A real React App from scratch!
export default class App extends React.Component {
  render() {
    return (
      <section>
        <Navbar></Navbar>
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <CoolButton isSmall isDanger className="is-rounded my-class">
            Button 1
          </CoolButton>
          <CoolButton isSmall isSuccess>
            Button 2
          </CoolButton>
        </form>
      </section>
    );
  }
}
