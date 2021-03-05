import {client} from './config/mariadb.ts';
import {dataUser} from './DataUtils.ts';
import {UsuariosModel} from './models/user.ts';
import {UsuarioController} from './controllers/usuario.ts';

const usuariosModel = new UsuariosModel();
const usuarioController = new UsuarioController();

function menu(): string {

  console.log('MENU');
  console.log('1. crear usuario');
  console.log('2. actualizar usuario');
  console.log('3. listar usuarios');
  console.log('4. borrar usuario');
  console.log('5. salir');

  return prompt('opcion: ') as string;
}

let salir = false;
//Bucle principal
while (!salir) {
  const opcion = menu();

  switch (opcion) {
    case '1': {
      await usuarioController.create()
      break;
    }
    case '2': {
      const usuarios = await usuariosModel.listar();
      console.log(usuarios);
      const id = parseInt(prompt("Seleccione el ID que desea actualizar") as string);
      await usuarioController.update(id);
      break;
    }
    case '3': {
      const usuarios = await usuariosModel.listar();
      console.log(usuarios);
      break;
    }
    case '4': {
      const usuarios = await usuariosModel.listar();
      console.log(usuarios);
      const id = parseInt(prompt("Seleccione el ID que desea eliminar") as string);
      await usuarioController.delete(id);
      break;
    }
    case '5': {
      salir = true;
      console.log('buena crack');
      break;
    }
    default: {
      console.log('La opcion no existe, vuelva a elegir');
      break;
    }
  }
}

