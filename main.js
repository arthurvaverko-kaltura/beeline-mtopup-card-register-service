



var CardRegisterService_asmx = require("./routes/CardRegisterService_asmx.js")

/* Route definition styles: 
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/AuthorizeCustomer", "AuthorizeCustomer", CardRegisterService_asmx.AuthorizeCustomer);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/CardRegister", "CardRegister", CardRegisterService_asmx.CardRegister);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/CardRegister2", "CardRegister2", CardRegisterService_asmx.CardRegister2);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/CardRegisterFromBO", "CardRegisterFromBO", CardRegisterService_asmx.CardRegisterFromBO);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/ChangeCardExpirationDate", "ChangeCardExpirationDate", CardRegisterService_asmx.ChangeCardExpirationDate);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/ConfirmRegistration", "ConfirmRegistration", CardRegisterService_asmx.ConfirmRegistration);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/ConfirmRegistration3ds", "ConfirmRegistration3ds", CardRegisterService_asmx.ConfirmRegistration3ds);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/GetCardRegistrationState", "GetCardRegistrationState", CardRegisterService_asmx.GetCardRegistrationState);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/GetRegistrationState", "GetRegistrationState", CardRegisterService_asmx.GetRegistrationState);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/RegisterCard", "RegisterCard", CardRegisterService_asmx.RegisterCard);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/RegisterCard2", "RegisterCard2", CardRegisterService_asmx.RegisterCard2);
Sandbox.soap("/CardRegisterService.asmx", "http://tempuri.org/RegisterCardFromPayment", "RegisterCardFromPayment", CardRegisterService_asmx.RegisterCardFromPayment);