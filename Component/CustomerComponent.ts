import {Customer} from '../Model/Customer'
import {Component} from "@angular/core"

@Component({
    selector: "customer-ui",
    templateUrl: "../UI/Customer.html"
})

export class CustomerComponent {
    CurrentCustomer:Customer = new Customer();
}