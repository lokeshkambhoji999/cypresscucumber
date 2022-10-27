var data = require('../../fixtures/example.json')

let quotationNumber

// Login and Logout locators
const email = '#email'
const password = '#password'
const Login = 'input[name="submit"]'
const LoginErrrorMessage = '//b[text()="Enter your Email address and password correct"]'
const BrokerInsuranceHeader= '//h2[text()="Broker Insurance WebPage"]'
const Logout = 'input[value="Log out"]'
const LoginText = '//h3[text()="Login"]'

// Qutoation Locators
const RequestQuotationLink ='#newquote>a'
const RequestaQuotationHeader= '//h2[text()="Request a quotation"]'
const BreakdownCoverDropdown = '#quotation_breakdowncover'
const ScreenRepairRadioButton = '#quotation_windscreenrepair_t'
const IncidentsTextbox = '#quotation_incidents'
const RegistrationNoTextbox = '#quotation_vehicle_attributes_registration'
const AnnualMilegeTextbox = '#quotation_vehicle_attributes_mileage'
const EstimatedValueTextbox = '#quotation_vehicle_attributes_value'
const ParkingLocationDropdown = '#quotation_vehicle_attributes_parkinglocation'
const Year = 'select[name="year"]'
const Month = 'select[name="month"]'
const Date = 'select[name="date"]'
const CalculatePremium = 'input[value = "Calculate Premium"]'
const Premium = '#calculatedpremium'
const SaveQuotation = 'input[value = "Save Quotation"]'
const QuotationNo = 'body'
const SaveQuotationConfirmation = '//b[text()="You have saved this quotation!"]'
const GetIdentificatioNo = '//body//b[text()="Your identification number is :  "]'
const RetrieveQuotationLink = '#retrieve>a'
const identificationNoTextbox = 'input[placeholder="identification number"]'
const RetrieveButton = '#getquote'
const RetrieveQuotationHeader = '//font[text()="Retrieve Quotation"]'
const getRegistrationNumber = '//b[text()="Registration"]/../following-sibling::td[1]'
const getAnuualMilege = '//b[text()="Annual mileage"]/../following-sibling::td[1]'
const getEstimatedValue = '//b[text()="Estimated value"]/../following-sibling::td[1]'
const getParkingLocation = '//b[text()="Parking Location"]/../following-sibling::td[1]'
const getStartPolicyDate= '//b[text()="Start of policy"]/../following-sibling::td[1]'

// Profile Page Locators
const profilebutton_locator = '#profile'
const verifytitle_locator = '//h5[@id="showtitle"]/preceding-sibling::p[1]/strong[text()="Title:"]'
const verifyfirstname_locator = '//h5[@id="showfirstname"]/preceding-sibling::p[1]/strong[text()="Firstname:"]'
const verifysurname_locator = '//h5[@id="showsurname"]/preceding-sibling::p[1]/strong[text()="Surname:"]'
const verifyphone_locator = '//h5[@id="showphone"]/preceding-sibling::p[1]/strong[text()="Phone:"]'
const verifydateofbirth_locator = '//h5[@id="showdateofbirth"]/preceding-sibling::p[1]/strong[text()="Dataofbirth:"]'
const licensetype_locator = '//h5[@id="showlicencetype"]/preceding-sibling::p[1]/strong[text()="License type:"]'
const licenseperiod_locator = '//h5[@id="showlicenceperiod"]/preceding-sibling::p[1]/strong[text()="License period:"]'
const Occupation_locator = '//p[@id="showoccupation"]/preceding-sibling::p[1]/strong[text()="Occupation:"]'
const Driverhistory_locator = '//h5[@id="showincidents"]/preceding-sibling::p[1]/strong[text()="Driver History:"]'
const Address_locator = '//p[text()="ADDRESS:"]'
const editprofilebutton_locator = '#ui-id-5'

// Edit Profile Page locators
const Editprofilepagetitle_locator = '//h1[text()="Editing user profile"]'
const titledropdowm_locator = '#user_title'
const Editpagesurname_locator = '#user_surname'
const Editpagefirstname_locator = '#user_firstname'
const Editpagephonenumber_locator = '#user_phone'
const Editpageyear_locator = '#user_dateofbirth_1i'
const Editpagemonth_locator = "#user_dateofbirth_2i"
const Editpagedate_locator = '#user_dateofbirth_3i'
const Editpageradiobutton_locator = '#user_licencetype_t'
const Editpagelicenseperiod_locator = '#user_licenceperiod'
const Editpageoccupation_locator = '#user_occupation_id'
const Editpagestreetadress_locator = '#user_address_attributes_street'
const Editpagecity_locator = "#user_address_attributes_city"
const Editpagecountry_locator = "#user_address_attributes_county"
const Editpagepostcode_locator = "#user_address_attributes_postcode"
const updateuser_locator = '[value="Update User"]'

import Utils from '../Utilities/Utils'
const utils = new Utils()

Given(/^I am on the home page$/,()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})

When(/^I login with Invalid credentials$/,()=>{
    cy.get(email).type(data.invalidmail)
    cy.get(password).type(data.invalidpassword)
    cy.get(Login).click()
})

Then(/^I Should not be allowed to login$/,()=>{
    cy.setLocatorType(LoginErrrorMessage).should('have.text',"Enter your Email address and password correct")
})

When(/^I login with valid credentials$/,()=>{
    cy.get(email).type(data.validmail)
    cy.get(password).type(data.validpassword)
    cy.get(Login).click()
})

Then(/^I should be allowed to login$/,()=>{
    cy.setLocatorType(BrokerInsuranceHeader).should('have.text','Broker Insurance WebPage')
})

When(/^navigate to profile page$/,()=>{
    cy.get(profilebutton_locator).click()
})

Then(/^I should see First name, last name, Age fields etc$/,()=>{
    cy.setLocatorType(verifytitle_locator).should('be.visible')
    cy.setLocatorType(verifyfirstname_locator).should('be.visible')
    cy.setLocatorType(verifysurname_locator).should('be.visible')
    cy.setLocatorType(verifyphone_locator).should('be.visible')
    cy.setLocatorType(verifydateofbirth_locator).should('be.visible') 
    cy.setLocatorType(licensetype_locator).should('be.visible')
    cy.setLocatorType(licenseperiod_locator).should('be.visible')
    cy.setLocatorType(Occupation_locator).should('be.visible')
    cy.setLocatorType(Driverhistory_locator).should('be.visible')
    cy.setLocatorType(Address_locator).should('be.visible')
})

When(/^I navigate to Edit profile page$/,()=>{
    cy.get(editprofilebutton_locator).click() 
})

When(/^User enters '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)' and '(.*)'$/,(title,surname,fname,phonenum,year,month,date,period,occupation,adress,city,county,postcode)=>{    
        cy.get(titledropdowm_locator).select(title)
        cy.get(Editpagesurname_locator).type(surname)
        cy.get(Editpagefirstname_locator).type(fname)
        cy.get(Editpagephonenumber_locator).type(phonenum)
        cy.get(Editpageyear_locator).select(year)
        cy.get(Editpagemonth_locator).select(month)
        cy.get(Editpagedate_locator).select(date)
        cy.get(Editpagelicenseperiod_locator).select(period)
        cy.get(Editpageoccupation_locator).select(occupation)
        cy.get(Editpagestreetadress_locator).type(adress)
        cy.get(Editpagecity_locator).type(city)
        cy.get(Editpagecountry_locator).type(county)
        cy.get(Editpagepostcode_locator).type(postcode)
        cy.get(updateuser_locator).click()
})   

When(/^I logout from the application$/,()=>{
    cy.get(Logout).click(); 
})

// Updation is not working. hence test will fail.
Then(/^I should be able to see updated values under Edit profile page$/,()=>{
    cy.get(Editpagesurname_locator).should('have.value',data.surname)
    cy.get(Editpagefirstname_locator).should('have.value',data.firstname)
    cy.get(Editpagephonenumber_locator).should('have.value',data.phonenum)
    cy.get(Editpagestreetadress_locator).should('have.value',data.adress)
    cy.get(Editpagecity_locator).should('have.value',data.city)
    cy.get(Editpagecountry_locator).should('have.value',data.county)
    cy.get(Editpagepostcode_locator).should('have.value',data.postcode)
})

When(/^I navigated to Request Quotation page$/,()=>{
    cy.get(RequestQuotationLink).click()
})

When(/^I Requested Quotation by entering fields like '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)' and '(.*)'$/,(breakdowncover,incidents,registrationNo,annualMileage,estimatedvalue,location,year,month,date)=>{    
    cy.get(BreakdownCoverDropdown).select(breakdowncover)
    cy.get(ScreenRepairRadioButton).check()
    cy.get(IncidentsTextbox).type(incidents)
    cy.get(RegistrationNoTextbox).type(registrationNo)
    cy.get(AnnualMilegeTextbox).type(annualMileage)
    cy.get(EstimatedValueTextbox).type(estimatedvalue)
    cy.get(ParkingLocationDropdown).select(location)
    cy.get(Year).select(year)
    cy.get(Month).select(month)
    cy.get(Date).select(date)
    cy.get(CalculatePremium).click()
    cy.get(SaveQuotation).click()
}) 

When(/^I navigated to Retrieve Quotation page$/,()=>{
    cy.get(RetrieveQuotationLink).click()
})

Given(/^Entered the Identification number and retrieved the details$/,()=>{
    cy.get(identificationNoTextbox).type(quotationNumber)
    cy.get(RetrieveButton).click()
})

Then(/^verified the policy details like registrationNo,annualMileage.estimatedvalue and Parking location$/,()=>{
    cy.setLocatorType(getRegistrationNumber).should('have.text', data.registration)
    cy.setLocatorType(getAnuualMilege).should('have.text', data.AnnualMileage)
    cy.setLocatorType(getEstimatedValue).should('have.text', data.estimatedvalue)
    cy.setLocatorType(getParkingLocation).should('have.text', data.parkinglocation)
    cy.setLocatorType(getStartPolicyDate).should('have.text', data.policydate) 
    cy.go('back')
})

Then(/^Verified the logout is succesful$/,()=>{
    cy.setLocatorType(LoginText).should('have.text','Login')
})

Then(/^Retrives the Identification number$/,()=>{
    cy.get(QuotationNo).then((identificationnumber) => {
        const number = identificationnumber.text()
        quotationNumber = number.split('Your identification number is :')[1].split('Please')[0]
        cy.log('Quotation No is' +  quotationNumber)
        cy.go('back')
    })
})

Then(/^User enters the Identification number$/,()=>{
    cy.get(identificationNoTextbox).type(quotationNumber)
})

Then(/^User verifies start date of policy as '(.*)'$/,(date)=>{
    cy.setLocatorType(getStartPolicyDate).then(function(result){
        const actText=  result.text() 
        assert.equal(actText,date).
        cy.go('back')
    })
})

