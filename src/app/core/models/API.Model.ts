export interface APIResponse {
    message: string;
    result: boolean;
    data: any;
}

export class User {
    userId: number;
    userName: string;
    createdDate: Date;
    constructor(){
        this.createdDate = new Date();
        this.userId = 0;
        this.userName ='';
    }
}
    export class LoginModel {
        password: string;
        emailId: string;
        constructor(){
            this.password = '';
            this.emailId ='';
    }
    }
    export class UserModel {
        userId: number
        userName: string
        contactNo: string
        emailId: string
        password: string
        gender: string
        role: any
        constructor(){
            this.password = '';
            this.emailId ='';
            this.gender = '';
            this.contactNo = '';
            this.userId = 0;
            this.userName = '';
    }
}