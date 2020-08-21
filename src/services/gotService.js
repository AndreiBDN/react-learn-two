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

    async getAllCharacters(){
       const all = await this.getData(`/characters?page5`);
       return all.map(this._trasformData)

    }
    async getCharacter(id){
        const char = await this.getData(`/characters/${id}`);
        return this._trasformData(char);

    }

     getAllBooks(){
        return this.getData(`/books`)
 
    }
     getBook(id){
         return this.getData(`/books/${id}`)
 
    }

    getAllHouses(){
        return this.getData(`/houses`)
 
    }
     getHouse(id){
         return this.getData(`/houses/${id}`)
 
    }

    _trasformData(char){
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house){
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book){
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }


      
}