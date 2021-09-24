import { uuid } from 'uuidv4';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export default class Product {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: number;

  @Column()
  description: string;

  @Column('float')
  buyPrice: number;

  @Column('float')
  sellPrice: number;

  tags: Array<Product>;

  @Column()
  lovers: number;

  constructor({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Omit<Product, 'id'>) {
    this.buyPrice = buyPrice;
    this.code = code;
    this.sellPrice = sellPrice;
    this.buyPrice = buyPrice;
    this.tags = tags;
    this.lovers = lovers;
    this.description = description;
    this.id = uuid();
  }
}
