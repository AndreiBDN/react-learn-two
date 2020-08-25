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

    getAllCharacters = async () => {
       const all = await this.getData(`/characters?page=10&pageSize=15`);
       return all.map((item) => this._trasformData(item));

    }
    getCharacter = async (id) => {
        const char = await this.getData(`/characters/${id}`);

        return (
            this._trasformData(char)
        )
    }


     getAllBooks = async () => {
         const all = await this.getData(`/books`);
        return all.map((item) => this._transformBook(item));
 
    }
     getBook = async (id) => {
         const book = await this.getData(`/books/${id}`);

         return this._transformBook(book)
 
    }

    getAllHouses = async () => {

        const all = await this.getData(`/houses`);

        return all.map((item) => this._transformHouse(item))
 
    }
     getHouse = async (id) => {

        const house = await this.getData(`/houses/${id}`);
         return this._transformHouse(house)
 
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }
    _trasformData(char){
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died), 
            culture: this.isSet(char.culture)
        };
    }

    _transformHouse(house){
        return {
            id: this._extractId(house),
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
            id: this._extractId(book),
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }


      
}