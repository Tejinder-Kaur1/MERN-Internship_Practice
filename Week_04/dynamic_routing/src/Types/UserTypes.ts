export interface IUserTypes{
id:string,
name:string,
username:string,
email:string,
address:IaddressType,
phone:string,
website:string,
company:IcompanyType,

}
 interface IaddressType {
  street:string,
  suite:string,
  city:string,
  zipcode:string,
  geo:IgeoType,
 }

 interface IgeoType{
  lat:string,
  lng:string,
 }
 interface IcompanyType{
  name:string,
  catchPhrase:string,
  bs:string,
 }