import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
  .setTitle('Team Forge API')
  .setDescription('Team forge API desc')
  .setVersion("1.0")
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('swagger',app,document)

  app.enableCors({
    origin:'http://localhost:3000',
    credentials:true,
  }
  )

  app.use(cookieParser())
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  
  

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
