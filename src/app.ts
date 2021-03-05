import {Application, Router} from 'https://deno.land/x/oak/mod.ts';
import {UsuarioController} from './controllers/usuario.ts';

const app = new Application();

const router = new Router();

const usuarioController = new UsuarioController();

router.get('/', (context) => {
  context.response.body = 'Hola mundo desde Oak';
});

router.get('/usuarios', usuarioController.listar);
//Post para crear usuarios
//Put Actualizar
//Delete para eliminar

app.use(router.routes());

console.log('Servidor escuchando en el puerto 8000');

await app.listen({
  port: 8000,
});
