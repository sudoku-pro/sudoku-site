# Política de privacidad

Sudoku es una aplicación que funciona sin conexión en primer lugar, con funciones en la nube opcionales. Esta página explica qué datos recopila la app (si es que recopila alguno) y cómo se utilizan.

## Núcleo sin conexión: no se recopilan datos para jugar

- El juego de puzles principal funciona por completo sin conexión. No se necesita acceso a la red para jugar.
- Todos los datos de juego (ajustes, estado de la partida, notas a lápiz y estadísticas) se almacenan localmente en tu dispositivo.
- No hay anuncios, ni analíticas, ni SDK de rastreo de terceros.

## Funciones en la nube opcionales

### Sincronización con iCloud (CloudKit)

Cuando inicias sesión en iCloud y activas la sincronización:

- Las partidas guardadas, las estadísticas, los ajustes y el progreso del desafío diario se sincronizan con tu **cuenta personal de iCloud** mediante el servicio CloudKit de Apple.
- Apple cifra los datos en tránsito y en reposo con su infraestructura.
- Solo tú puedes acceder a los datos sincronizados con tu Apple ID.
- Esta función es totalmente opcional: la app funciona perfectamente sin ella.

### Game Center

Cuando inicias sesión en Game Center:

- Las puntuaciones de las clasificaciones (mejores tiempos de finalización por dificultad) pueden compartirse en clasificaciones públicas.
- El progreso de los logros lo registra el servicio Game Center de Apple.
- Tu nombre visible de Game Center es visible para otros jugadores en las clasificaciones.
- Esta función es totalmente opcional.

## El único otro acceso a la red: «Más apps»

La única función de red no basada en la nube es una sección opcional de **«Más apps»** en Ajustes, que obtiene una lista de apps hermanas de nuestros servidores. Esta función:

- Solo se activa cuando vas a Ajustes → Más apps.
- Obtiene una lista ligera con nombres y enlaces de apps; no se envía ni se almacena ningún dato personal.
- Puedes ignorarla por completo y no afecta en absoluto a la jugabilidad.

## Qué no recopilamos

- No recopilamos información personal, archivos, imágenes ni historial de navegación.
- No enviamos ningún dato de juego a servidores externos (salvo lo descrito más arriba para iCloud y Game Center).
- No incluimos SDK de analíticas ni de publicidad de terceros.
- No utilizamos servicios de informes de fallos ni de telemetría.

## Permisos

Sudoku requiere permisos mínimos:

- **iCloud** (opcional): para sincronizar los datos de juego entre dispositivos mediante CloudKit.
- **Game Center** (opcional): para clasificaciones y logros.
- **Red** (opcional): para la sincronización con iCloud, Game Center y «Más apps».

No se solicitan permisos de ubicación, contactos, cámara, micrófono ni otros permisos sensibles para la privacidad.

## Conservación de datos

- Los datos locales permanecen en tu dispositivo hasta que desinstalas o restableces la app.
- Los datos sincronizados con iCloud siguen las políticas de conservación de datos de iCloud de Apple.
- Los datos de Game Center siguen las políticas de Game Center de Apple.

## Solicitudes de privacidad

Como Sudoku guarda todos los datos localmente (y, opcionalmente, en tu iCloud personal), no hay datos en servidores que nosotros controlemos o a los que accedamos. Para borrar todos los datos de la app:

- **Desinstala la app** de tu dispositivo o dispositivos.
- **Restablece los datos de iCloud**: en Ajustes → [Tu nombre] → iCloud → Gestionar almacenamiento de la cuenta → Sudoku → Eliminar datos.
- **Restablecimiento local en Mac**: consulta la guía de solución de problemas para las instrucciones de eliminación del contenedor.

## Privacidad de los menores

Sudoku no recopila activamente información personal de nadie, incluidos los menores. La app no requiere cuentas, funciones de chat ni redes sociales.

## Contacto

Si tienes preguntas sobre privacidad, abre un issue en el repositorio del proyecto (https://github.com/sudoku-pro/sudoku-site) o escríbenos a sudoku@w3cub.com.
