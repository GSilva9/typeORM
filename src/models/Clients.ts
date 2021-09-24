import { uuid } from 'uuidv4';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


export default class Clients {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: number;

  @Column()
  name: string;

  @Column('float')
  budget: number;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  constructor({
    budget,
    code,
    name,
    phone,
    cpf,
    email,
  }: Omit<Clients, 'id'>) {
    this.id = uuid();
    this.budget = budget;
    this.code = code;
    this.cpf = cpf;
    this.email = email;
    this.phone = phone;
    this.name = name;
  }
}
