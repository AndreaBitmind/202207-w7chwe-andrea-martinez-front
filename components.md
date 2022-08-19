#COMPONENTES

APP

- Recibe: token del usuario
- Muestra:

  - título de la app
  - Register componente
  - Login componente o botón logout
  - Un componente listado de usuarios (si está logeado)

- Estado: logueado o no logueado
- Acción: guarda en local storage el token.

LOGIN

- Recibe: nada
- Muestra: un formulario con campos userName y Password, con un botón y su texto.
- Estado: actualizará los datos que va introduciendo el usuario. Si todo ok: lo lleva al perfil del usuario.
- Acción: al clickar el usuario, enviar el formulario y los datos del usuario pasan al store.

REGISTER

- Recibe: nada
- Muestra: un formulario con campos userName y Password y un botón con su texto.
- Estado propio: ir actualizando los datos del usuario.
- Acción: al clickar se envía la info formulario de registro

LISTA DE USUARIOS

- Recibe por context: los datos de usuarios
- Muestra:
  - h2 con el nombre recibido de la sección: total de usuarios, amigos o enemigos
  - Una lista de cards
  - Paginación con el número de usuarios por página
- Estado: variable según el número de usuarios que haya (usuarios, amigos o enemigos)
- Acción del usuario: al clickar en todos, amigos o enemigos, renderiza en función del estado

USUARIO CARD

- Recibe por props: la info de usuario
- Muestra:
  - h2 con el nombre del usuario
  - imagen con su texto alternativo
  - Una p con una descripción
  - Botón y su texto
- Estado: nada
- Acción del usuario: nada

EDITAR PERFIL

- Recibe: info del usuario si está logueado
- Muestra: formulario
  - añadir foto
  - editar nombre
  - editar descripción
- Estado:
- Acción: submit

BOTÓN

- Recibe: un texto y la acción a realizar (props)
- Muestra: un botón con el texto recibido
- Estado: nada
- Acción del usuario: invoca acción a realizar al ser clickado

#DATA LAYER

Datos

- Array de objetos users

Modificaciones:

- Volcar/cargar todos los usuarios.
- Añadir como amigo o como enemigo
- Cambio de usuario amigo o enemigo
