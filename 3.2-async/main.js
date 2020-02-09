// тут пусто, так как нету UI

class AlarmClock {
    constructor () {
        const collection = [];
        let id;
    }
    addClock = (date, id) => {
        if (id === undefined) {
            throw new IdExpection(id);
        } else if (this.id = collection.id) {
            throw new IdDoubleExpection(id)
        }
        let part = {};
        part.id = id;
        part.time = time;
        part.callback = callback;
        collection.push(part);
        return part;
    }
 
    remoteClock = (doubled) => {
      
        function doubled (id) {
            return this.id === id
        }
        
    }
}