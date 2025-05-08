import { Controller, Get, Query, Res, Response } from '@nestjs/common';
import { AuthorService } from './author.service';
import { NameCheckPipe } from 'src/pipes/name-check/name-check.pipe';

@Controller('/api/search')
export class AuthorController {
    constructor(private authorService: AuthorService) {}
    
        // Find Author by Name
        @Get('/author')
        findAuthor(@Query('name', new NameCheckPipe) name: string){
            
            return this.authorService.search(name)
        }
}
