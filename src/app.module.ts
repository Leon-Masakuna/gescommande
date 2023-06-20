/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ClientModule } from './client/client.module';
import { CommandeModule } from './commande/commande.module';
import { Client } from './client/entities/client.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DBTYPE as any,
      host: process.env.HOST,
      port: parseInt(process.env.SERVERPORT),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [User, Client],
      synchronize: true,
    }),
    UserModule,
    ClientModule,
    CommandeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
