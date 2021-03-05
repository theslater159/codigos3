import {client} from '../config/mariadb.ts';
import {UsuarioDTO} from '../dto/usuario.ts';


export class UsuariosModel {
  async listar() : Promise<UsuarioDTO[]> {
    const showAll = await client.execute('select * from user');

    return showAll.rows as UsuarioDTO[];
  }

  async crear(usuario: UsuarioDTO) {
    return await client.execute(`insert into 
            user(nombre,apellido,celular,correo,contrasenia) 
            values(?,?,?,?,?)`, [
      usuario.nombre,
      usuario.apellido,
      usuario.celular,
      usuario.correo,
      usuario.contrasenia,
    ]);
  }
  async update(usuario: UsuarioDTO, id: number): Promise <void> {
    await client.execute(`update user set nombre = ?,apellido = ?,celular = ?,correo = ?,contrasenia = ? WHERE id = ?`, [
      usuario.nombre,
      usuario.apellido,
      usuario.celular,
      usuario.correo,
      usuario.contrasenia,
      id,
    ]);
  }
  async delete(id: number): Promise <void>{
    await client.execute(`delete from user where id = ?`, [id]);
  }
  
}
