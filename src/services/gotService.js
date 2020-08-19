export default class GotService {
    constructor() {
        this._baseUrl= 'https://www.anapioficeandfire.com/api';
    }

    async getData(url){
        const res = await fetch(`${this._baseUrl}${url}`)

        if(!res.ok){
            throw new Error(`Can't get data from ${this._baseUrl}${url}. Response:${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters(){
       return this.getData(`${this._baseUrl}/characters?page5`)

    }
    getCharacter(id){
        return this.getData(`${this._baseUrl}/characters/${id}`)

    }

     getAllBooks(){
        return this.getData(`${this._baseUrl}/books`)
 
    }
     getBook(id){
         return this.getData(`${this._baseUrl}/books/${id}`)
 
    }

    getAllHouses(){
        return this.getData(`${this._baseUrl}/houses`)
 
    }
     getHouse(id){
         return this.getData(`${this._baseUrl}/houses/${id}`)
 
    }


      
}