import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./PrismaClient";



@Global()
@Module({
    providers:[PrismaService],
    exports:[PrismaService]
})
export class PrismaModule {}