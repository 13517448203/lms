module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'library',
  entities: ['dist/**/*.entity{.ts,.js}', 'src/**/*.entity{.ts,.js}'],
  synchronize: true,
};
