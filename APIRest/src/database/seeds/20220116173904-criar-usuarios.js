const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    const data = new Date();
    await queryInterface.bulkInsert('users', [{
      nome: 'Alexandre',
      email: '123@123.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: data,
      updated_at: data,
    }, {
      nome: 'Alexandre1',
      email: '223@123.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: data,
      updated_at: data,
    }, {
      nome: 'Alexandre2',
      email: '323@123.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: data,
      updated_at: data,
    }], {});
  },

  async down() { return ''; },
};
