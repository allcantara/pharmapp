import { IUserAttributesDTO } from "../dtos/UserAttributesDTO";
import {
  Table,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  Model,
} from "sequelize-typescript";

@Table({ modelName: "users", tableName: "tb_users" })
class UserEntity extends Model<IUserAttributesDTO, Omit<IUserAttributesDTO, "id">>
  implements IUserAttributesDTO {
    
  @PrimaryKey
  @Column
  public readonly id?: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  public name!: string;

  @Column
  public surname!: string;

  @Column
  public address!: string;


  @Column
  public telephone!: string;

}

export { UserEntity };
