import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DbService } from 'src/db/db.service';
import { AuthorService } from './author.service';
import { WorksModule } from 'src/works/works.module';
import { WorksService } from 'src/works/works.service';
import { WorksController } from 'src/works/works.controller';

const OPEN_LIBRARY_BASE_URL = "https://openlibrary.org"

@Module({
    imports: [
      WorksModule,
      HttpModule.register({
        baseURL: OPEN_LIBRARY_BASE_URL
      })
    ],
    providers: [AuthorService, DbService, WorksService],
    exports: [AuthorService],
    controllers: [WorksController]
})
export class AuthorModule {}
