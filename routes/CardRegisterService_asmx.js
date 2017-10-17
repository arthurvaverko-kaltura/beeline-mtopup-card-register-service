

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.AuthorizeCustomer = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_AuthorizeCustomer');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.CardRegister = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_CardRegister');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.CardRegister2 = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_CardRegister2');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.CardRegisterFromBO = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_CardRegisterFromBO');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.ChangeCardExpirationDate = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_ChangeCardExpirationDate');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.ConfirmRegistration = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_ConfirmRegistration');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.ConfirmRegistration3ds = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_ConfirmRegistration3ds');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.GetCardRegistrationState = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_GetCardRegistrationState');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.GetRegistrationState = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_GetRegistrationState');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.RegisterCard = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_RegisterCard');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.RegisterCard2 = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_RegisterCard2');
};

/*
 * POST /CardRegisterService.asmx
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.RegisterCardFromPayment = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('CardRegisterService_asmx_RegisterCardFromPayment');
};