const knex = require('../../knex/config/database');

const select = knex('users as u').select('email as uemail', 'first_name as firstname');

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
}).finally(() => {
    knex.destroy();
})

