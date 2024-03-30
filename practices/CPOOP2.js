class Customer {
    constructor(name, age, membershipType, membershipCost) {
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }
    getDetails() {
      return  `${this.name} is ${this.age} years old and has a ${this.membershipType} with $ ${this.membershipCost}`
    }
    upgradeMembership () {
        this.membershipType = 'Premium';
        return this.membershipCost = this.membershipCost + (this.membershipCost * 0.2) 
    }
}
class VIPCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost ) {
        super(name, age, membershipType, membershipCost);
    }
    applyDiscount () {
        return this.membershipCost = this.membershipCost * 0.90
    }
}
class BusinessCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost, duration) {
        super(name, age, membershipType, membershipCost);
        this.duration = duration ;
    }
    extendContract () {
        this.duration += 1;
        this.membershipCost = this.membershipCost * 0.85;
    }
}
const customer1 = new Customer ( 'John Doe', 35, 'Basic', 50);
const vipCustomer = new VIPCustomer('Jane Smith', 35, 'Gold', 100);
const businessCustomer = new BusinessCustomer('David Johnson', 40, 'Platinum', 200, 2);

customer1.upgradeMembership();
vipCustomer.applyDiscount();
businessCustomer.extendContract();
const customers = [customer1, vipCustomer, businessCustomer];
for (const cust of customers) {
    console.log(cust.getDetails())
}