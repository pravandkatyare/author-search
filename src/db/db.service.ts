import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { Author } from 'src/model/author';

interface IDBService {
    addRow(version: Author);
}

const AUTHOR_TABLE = "authors"

@Injectable()
export class DbService implements IDBService  {   
    private readonly logger: Logger;
    private _dbConnection;


    constructor(@InjectConnection() private readonly knex: Knex) {
        this.logger = new Logger('DbService');
    }

    async addRow(author: Author) {
        
        return await this.knex.table(AUTHOR_TABLE).insert(author)
            .catch(error => {
                this.logger.error("error saving data to database: ", error)
                throw new InternalServerErrorException("error saving data to database");
            });
    }
}