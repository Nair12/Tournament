import { FaceitProfile, FaceitStats } from "@prisma/client";
import { FaceitUserRequstDto } from "src/DTO/Faceit/FaceitUserRequest.dto";
import { IFaceitRepository } from "./IFaceit.repository";
import { FaceitRepository } from "./Faceit.repository";
import { Inject } from "@nestjs/common";
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { FaceitStatsDto } from "src/DTO/Faceit/FaceitStatsReponse.dto";



export class FaceitRedisRepository extends IFaceitRepository {




    constructor(
        @Inject(FaceitRepository)
        private readonly dbrepo: FaceitRepository,
        @Inject(CACHE_MANAGER)
        private cache: Cache
    ) {
        super()
    }

    async updateStats(payload: FaceitStatsDto): Promise<FaceitStats> {
        await this.cache.set(`stats:${payload}`, payload, 20)

        const res = await this.dbrepo.updateStats(payload)

        return res;
    }


    async getOrCreate(payload: FaceitUserRequstDto): Promise<FaceitProfile> {
        const result = await this.dbrepo.getOrCreate(payload)
        return result
    }
    async findByFaceitId(faceitId: string): Promise<FaceitProfile | null> {
        const result = await this.dbrepo.findByFaceitId(faceitId)
        return result
    }
    async getStats(faceitId: string): Promise<FaceitStats | null> {
        const cacheKey = `stats:${faceitId}`
        const statsFromCache = await this.cache.get<FaceitStats>(cacheKey)

        if (!statsFromCache) {
            const statsFromDb = this.dbrepo.getStats(faceitId)
            this.cache.set(cacheKey, statsFromDb, 20)
            return statsFromDb
        }
        return statsFromCache

    }

}