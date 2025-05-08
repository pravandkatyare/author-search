import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NameCheckPipe implements PipeTransform {
  transform(name: string) {
    if (!name) {
      throw new BadRequestException("Name is mandatory");
    }
    return name;
  }
}
