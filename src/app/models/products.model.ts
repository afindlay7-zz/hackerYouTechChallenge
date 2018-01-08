export class ProductsModel {
    public name:string;
    public id:string;
    public image_url:string;
    public description:string;
    public primary_category:string;
    public secondary_category:string;
    public serving_suggestion:string;

    constructor(name:string, id:string, image_url:string, description:string, primary_category:string, secondary_category:string, serving_suggestion:string){
        this.name = name;
        this.id = id;
        this.image_url = image_url;
        this.description = description;
        this.primary_category = primary_category;
        this.secondary_category = secondary_category;
        this.serving_suggestion = serving_suggestion;
    }
}