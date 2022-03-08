export class UserResponseModel {
    id: string | undefined;
    name: string | undefined;
    email: string | undefined;
    dob: string | undefined;
    address: string | undefined;
    contacts: Array<Contacts> = [];
    contactDtos: Array<Contacts> = [];
}

export class Contacts {
 mobileNumber: string | undefined;
 email: string | undefined;
 id: number | undefined;
 userId: number|undefined;
 user: User = new User()


}

export class User{
    id: number|undefined;
}