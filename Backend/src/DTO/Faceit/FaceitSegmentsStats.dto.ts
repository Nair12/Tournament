import { Exclude, Expose } from "class-transformer";


@Exclude()
export class FaceitSegmentStats{
     
    @Expose()
    map:string
    
    @Expose()
    mathes:string

    @Expose()
    kdRatio:string

    @Expose()
    adr:string

    @Expose()
    headshotPercentage:string
    


}