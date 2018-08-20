import { IEmployee } from "./iemployee";

export class Employee implements IEmployee{
    constructor(
        public Name:string ,
        public Gender :string,
        public Salary:number,
        public Address:string, 
        public Email:string,
        public Dob:string,
        public Occupation:string,
        public IdType :string,
        public WalletNumber :string,
        public MobileNumber :string
    ){}
}
