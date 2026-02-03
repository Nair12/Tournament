import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    CacheModule.register({
      isGlobal:true,   
      useFactory: async () => ({
        store: await redisStore({
          url: `redis://${process.env.REDIS_HOST}:6379`,
          ttl: 60000, 
        }),
      }),
    }),
  ],
})
export class AppModule {}