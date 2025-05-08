import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nest-knexjs'; 
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { AuthorModule } from './author/author.module';
import { AuthorController } from './author/author.controller';
import { WorksModule } from './works/works.module';


@Module({
  imports: [AuthorModule, KnexModule, DbModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController, AuthorController],
  providers: [AppService],
})
export class AppModule {}
