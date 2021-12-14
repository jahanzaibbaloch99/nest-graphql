import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemsService } from "./app.service"
import { ItemsModule } from './items/items.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestgraphql')
  ],
})

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    })]
  })
  
@Module({
      imports: [ItemsModule],
      controllers: [AppController],
      providers: [ItemsService],
    })
export class AppModule { }
