import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import config from './config';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }), ArticlesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
