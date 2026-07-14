export interface User{
  id:number,
  firstName : string,
  lastName: string,
  maidenName: string,
  age:number,
  gender:string,
  email:string,
  phone:string,
   userName:string,
   password:string,
   birthDate:string,
   image:string,
   bloodGroup:string,
   height:number,
   weight:number,
   eyeColor:string,
   hair: HairType,
   ip:string,
   address:addressType,
macAddress:string,
university:string,
bank:bankType,
company:companyType,
ein:string,
ssin:string,
userAgent:string,
crypto:cryptoType;
role:string,
}
interface cryptoType{
  coin:string,
  wallet:string,
  network:string,
}
interface HairType {
  color: string,
  type:string
}

interface addressType{
  address:string,
  city:string,
  state:string,
  stateCode:string,
  postalCode:string,
  coordinates:coordinatesType,
  country:string,
}

interface coordinatesType{
  lat:number,
  lng:number,
}

interface bankType{
  cardExpire:string,
  cardNumber:string,
  cardType:string,
  currency:string,
  iban:string,
}

interface companyType{
  department:string,
  name:string,
  title:string,
  adress:addressType,
}


