import { Controller, Get, Param } from '@nestjs/common';
import { NameCheckPipe } from 'src/pipes/name-check/name-check.pipe';
import { WorksService } from './works.service';

@Controller('/api/works')
export class WorksController {
   constructor(private worksService: WorksService) {}
       
    // Find Author by Name
    @Get('/author/:key')
    async findAuthor(@Param('key', new NameCheckPipe) key: string){
        await return this.worksService.get(key)
    }
}
