const knex = require('../../knex/config/database');

//const select = knex('users as u').select('*').where('id','=', 1);
//const select = knex('users as u').select('*').where({ 'id': 1, first_name: 'Alexandre' });
//const select = knex('users as u').select('*').where('id','=', 1).orWhere('id','=',3);
const select = knex('users as u').select('*').where('id','=', 1).andWhere('first_name','=','Alexandre');

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
})

