
class Identity {

    constructor(public nation?: string, public name?: string, age?: number) {

    }

};

var jh: Identity = new Identity();

try {
    console.log(jh.nation);
    console.log(jh.name?.concat(' is a good man!'));
} catch (err) {
    console.log('error: ', err);
}



