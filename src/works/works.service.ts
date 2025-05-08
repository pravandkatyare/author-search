import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

const WORK_URL = "/authors/"
@Injectable()
export class WorksService {
    constructor(private readonly httpService: HttpService ){}

    async get(key: string) {
        return await this.httpService.axiosRef.get(WORK_URL + key +`/works.json`)
    }
}
