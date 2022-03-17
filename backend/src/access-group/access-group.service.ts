import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class AccessGroupService {
    constructor(private prisma: PrismaService) {
    }

    async accessGroupsList() {
        try {
            const accessGroups = await this.prisma.accessGroup.findMany({
                select: {
                    id: true,
                    title: true
                }
            })
            return accessGroups
        } catch (error) {
            return error
        }
    }

    async createAccessGroup(dto) {
        try {
            await this.prisma.accessGroup.create({
                data: {
                    title: dto.title
                }
            })
            return true
        } catch (error) {
            return error
        }
    }

    async updateAccessGroup(dto) {
        try {
            await this.prisma.accessGroup.update({
                where: {
                    id: dto.id
                },
                data: {
                    title: dto.title
                }
            })
            return true
        } catch (error) {
            return error
        }
    }

    async deleteAccessGroup(id) {
        try {
            await this.prisma.accessGroup.delete({
                where: {
                    id: id
                }
            })
            return true
        } catch (error) {
            return error
        }
    }
}
