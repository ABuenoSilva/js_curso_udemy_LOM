const knex = require('../../knex/config/database');

/*
const data = {
    first_name: 'Felipe',
    last_name: 'Garcia',
    email: 'felipe@felipe.com',
    password_hash: '1_hash',
    salary: 5000
};

const insert = knex('users').insert(data);

//console.log(insert.toString());
//console.log(insert.toSQL().toNative());

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
})
*/

const data = [
    {
        first_name: 'Zanza',
        last_name: 'Garcia',
        email: 'zanza@zanza.com',
        password_hash: '2_hash',
        salary: 458.12
    },
    {
        first_name: 'Bueno',
        last_name: 'Silva',
        email: 'bueno@bueno.com',
        password_hash: '3_hash',
        salary: 10000
    },
];

const insert = knex('users').insert(data);

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
})