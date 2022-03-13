import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client'


@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
        super({
            datasources:{
                db: {
                    url: 'postgresql://potgres:root@localhost:5434/acms?schema=public'
                }
            }
        });

    }

}
