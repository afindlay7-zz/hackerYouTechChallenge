export class StoresModel {
    public address_line_1:string;
    public address_line_2:string;
    public city:string;
    public id:string;
    public latitude:number;
    public longitude:number;
    public name:string;
    public telephone:string;

    constructor(address_line_1:string, address_line_2:string, city:string, id:string, latitude:number, longitude:number, name:string, telephone:string){
        this.address_line_1 = address_line_1;
        this.address_line_2 = address_line_2;
        this.city = city;
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.telephone = telephone;
    }
}