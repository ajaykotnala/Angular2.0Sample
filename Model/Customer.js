"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import components from angular/form
var forms_1 = require("@angular/forms");
var Customer = /** @class */ (function () {
    function Customer() {
        this.CustomerName = "";
        this.CustomerCode = "";
        this.CustomerAmount = 0;
        // create object of form group
        this.formGroup = null;
        // use the builder to create the
        // the form object
        var _builder = new forms_1.FormBuilder();
        this.formGroup = _builder.group({});
        // Adding a simple validation
        this.formGroup.addControl('CustomerNameControl', new forms_1.FormControl('', forms_1.Validators.required));
        // Adding a composite validation
        var validationcollection = [];
        validationcollection.push(forms_1.Validators.required);
        validationcollection.push(forms_1.Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        this.formGroup.addControl('CustomerCodeControl', new forms_1.FormControl('', forms_1.Validators.compose(validationcollection)));
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map