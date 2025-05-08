import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports:[
    KnexModule.forRoot({
      config: {
        client: process.env.DATABASE_CLIENT,
        connection: {
          host: process.env.DATABASE_HOST,
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASS,
          port: Number(process.env.DATABASE_PORT) || 5432,
        },
      }
    }),
  ],
  providers: [DbService]
})
export class DbModule {}
