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