import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { HttpModule } from '@nestjs/axios';

const OPEN_LIBRARY_BASE_URL = "https://openlibrary.org"

@Module({
  imports: [
    HttpModule.register({
      baseURL: OPEN_LIBRARY_BASE_URL
    })
  ],
  providers: [WorksService],
  exports:[WorksService]
})
export class WorksModule {}
