import { FormPage } from "../PObjects/FormPage";

describe("Practice Form in DemoQA", () => {
  it("Submitting the form with data and validating it", () => {
    FormPage.visit();

    FormPage.fName.type("Linards");
    FormPage.lName.type("Zarins");
    FormPage.email.type("linards.zarins@va.lv");
    FormPage.genderRadio.click();
    FormPage.phone.type("20202020");

    FormPage.setDate();

    FormPage.subjectIn.type("Economics{enter}");
    FormPage.MusicHobby.click();

    FormPage.uploadIn.selectFile("cypress/files/img.png");

    FormPage.address.type("Alejas iela 13a-13");

    FormPage.dropdownState.type("NCR{enter}", { force: true });
    FormPage.dropdownCity.type("Delhi{enter}", { force: true });

    FormPage.submitBtn.click();

    FormPage.modal.should("contain", "Linards Zarins");
    FormPage.modal.should("contain", "linards.zarins@va.lv");
    FormPage.modal.should("contain", "Male");
    FormPage.modal.should("contain", "20202020");
    FormPage.modal.should("contain", "28 February,1930");
    FormPage.modal.should("contain", "Economics");
    FormPage.modal.should("contain", "Music");
    FormPage.modal.should("contain", "img.png");
    FormPage.modal.should("contain", "Alejas iela 13a-13");
    FormPage.modal.should("contain", "NCR Delhi");
  });
});
