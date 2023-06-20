import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Commande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;
}
