import { BasePage } from "./basePage";

export class FormPage extends BasePage {
  static get fName() {
    return cy.get("#firstName");
  }

  static get lName() {
    return cy.get("#lastName");
  }

  static get email() {
    return cy.get("#userEmail");
  }

  static get genderRadio() {
    return cy.get("label[for='gender-radio-1']");
  }

  static get phone() {
    return cy.get("#userNumber");
  }

  static get dateIn() {
    return cy.get("#dateOfBirthInput");
  }

  static setDate() {
    this.dateIn.click();
    cy.get(".react-datepicker__month-select").select("February");
    cy.get(".react-datepicker__year-select").select("1930");
    cy.get(".react-datepicker__day--028:not(.react-datepicker__day--outside-month)").click();

  }

  static get subjectIn() {
    return cy.get("#subjectsInput");
  }

  static get MusicHobby() {
    return cy.get("label[for='hobbies-checkbox-3']");
  }

  static get uploadIn() {
    return cy.get("#uploadPicture");
  }

  static get address() {
    return cy.get("#currentAddress");
  }
 
  static get dropdownState() {
    return cy.get("#react-select-3-input");
  }

  static get dropdownCity() {
    return cy.get("#react-select-4-input");
  }

  static get submitBtn() {
    return cy.get("#submit");
  }

  static get modal() {
    return cy.get(".modal-content");
  }
}