import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { Author } from 'src/model/author';

const keysToExtract = [
    "name",
    "key",
    "_version_", 
    "work_count", 
    "ratings_average",
    "ratings_sortable",
    "ratings_count",
    "ratings_count_1",
    "ratings_count_2",
    "ratings_count_3",
    "ratings_count_4",
    "ratings_count_5",
    "want_to_read_count",
    "already_read_count",
    "currently_reading_count",
    "readinglog_count"];
const SEARCH_URL = "/search/authors.json"

@Injectable()
export class AuthorService {
    private readonly logger: Logger;

    constructor(
        private readonly httpService: HttpService, 
        private readonly dbService: DbService) {
            this.logger = new Logger('AuthorService');
        }

    async search(name: string) {
        // fetch data from API

        this.logger.debug("call API to get author details with name: ", name);

        const response = await this.httpService.axiosRef.get(SEARCH_URL+`?q=${name}`)
        this.logger.debug("fetch data success for author: ", name);
        
        // parse response
        const authorData = this.parseAuthor(response.data)

        // save data to DB
        this.logger.debug("saving to database for author: ", name);
        const data = await this.dbService.addRow(authorData)
        this.logger.debug("datasaved successfully: ", name);
        
        
        return {message:"Searching author with name: "+name}
    }


    parseAuthor(data: any ){
        return data.docs.map((data)=>{
            return new Author(Object.fromEntries(
                Object.entries(data).filter(([key]) => keysToExtract.includes(key))
              ));
        })
    }
}
