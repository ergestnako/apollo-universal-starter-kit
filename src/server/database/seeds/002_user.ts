import * as bcrypt from 'bcryptjs';
import * as Knex from 'knex';

import truncateTables from '../../../common/db';

export const seed = async (knex: Knex, Promise: any) => {
  await truncateTables(knex, Promise, ['user', 'user_profile', 'auth_certificate', 'auth_facebook']);

  await knex('user')
    .returning('id')
    .insert({
      username: 'admin',
      email: 'admin@example.com',
      password: await bcrypt.hash('admin', 12),
      is_active: true,
      is_admin: true
    });

  await knex('user')
    .returning('id')
    .insert({
      username: 'user',
      email: 'user@example.com',
      password: await bcrypt.hash('user', 12),
      is_active: true,
      is_admin: false
    });
};
