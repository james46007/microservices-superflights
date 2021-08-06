import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true
    }),
    MongooseModule.forRoot(
      process.env.URI_MONGODB,
      {
        useCreateIndex: true,
        useFindAndModify: false
    }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
