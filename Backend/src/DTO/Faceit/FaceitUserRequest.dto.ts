import { Exclude, Expose, Transform } from "class-transformer";



@Exclude()
export class FaceitUserRequstDto {
 @Expose()
  @Transform(({ obj }) => obj.player_id || obj.guid)
  guid: string;         

  @Expose()
  nickname: string;     

  @Expose()
  email: string;        

  @Expose()
  @Transform(({ obj }) => obj.avatar || obj.picture)
  picture?: string;

 
  @Expose()
  @Transform(({ obj }) => obj.games?.cs2?.faceit_elo || obj.elo)
  elo: number;

  
  @Expose()
  @Transform(({ obj }) => obj.games?.cs2?.skill_level || obj.skillLevel)
  skillLevel: number;
}