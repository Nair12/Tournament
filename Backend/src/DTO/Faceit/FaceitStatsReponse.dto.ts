import { Exclude, Expose, Type } from "class-transformer";
import { FaceitSegmentStats } from "./FaceitSegmentsStats.dto";


@Exclude()
export class FaceitStatsDto
{
    @Expose()
    kdRatio:string

    @Expose()
    mathes:number

    @Expose()
    country:string

    @Expose()
    avg:string
    
    @Expose()
    adr:string

    @Expose()
    skillLever:number

    @Expose()
    winRate:string


    @Expose()
    @Type(()=>FaceitSegmentStats)
    segmentStats:FaceitSegmentStats[]

}