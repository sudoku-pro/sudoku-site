# Opciones de privacidad

Sudoku es una app que funciona sin conexión en primer lugar y con prácticas mínimas en materia de datos. Esta página explica tus opciones de privacidad y cómo controlar tus datos.

## Tus datos permanecen en tu dispositivo (de forma predeterminada)

- Todos los datos de juego (ajustes, estado de la partida, notas a lápiz y estadísticas) se almacenan localmente en tu dispositivo de forma predeterminada.
- La jugabilidad principal no requiere ningún acceso a la red.
- No hay anuncios, ni analíticas, ni rastreo.

## Funciones en la nube opcionales

### Sincronización con iCloud

Si decides activar la sincronización con iCloud:

- Los datos se sincronizan únicamente con **tu cuenta personal de iCloud**, no con ningún servidor que nosotros controlemos.
- CloudKit de Apple se encarga del cifrado en tránsito y en reposo.
- Puedes desactivarla en cualquier momento: Ajustes → [Tu nombre] → iCloud → Apps que usan iCloud → desactiva Sudoku.

### Game Center

Si decides usar Game Center:

- Las puntuaciones de las clasificaciones pueden aparecer públicamente con tu nombre visible de Game Center.
- El progreso de los logros lo registra Game Center.
- Puedes desactivarlo cerrando la sesión de Game Center en Ajustes.

## La única función de red que no es de nube: «Más apps»

El único otro acceso a la red es la sección opcional de **«Más apps»** en Ajustes, que obtiene una lista de apps hermanas. Esta función:

- No envía ningún dato personal: solo recupera una lista de nombres y enlaces de apps.
- Puedes ignorarla por completo sin que afecte a la jugabilidad.
- No te rastrea ni almacena ningún identificador.

## Borrar tus datos

Para eliminar todos los datos de la app de tu dispositivo:

- **iPhone/iPad**: elimina y vuelve a instalar la app
- **Mac**: cierra Sudoku y luego elimina el contenedor:

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

Para borrar también los datos sincronizados con iCloud:
1. Ve a **Ajustes → [Tu nombre] → iCloud → Gestionar almacenamiento de la cuenta**
2. Busca Sudoku en la lista de apps
3. Toca **Eliminar datos**

Esto borrará de forma permanente todos los ajustes, estadísticas, partidas guardadas y el progreso del desafío diario de iCloud.

## Sin rastreo, sin anuncios

Sudoku no contiene publicidad, ni analíticas, ni píxeles de rastreo, ni integraciones de intercambio de datos con terceros. La app no necesita acceso a la red para jugar.

## Resumen de solicitudes de privacidad

| Solicitud | ¿Obligatoria? | Qué hace |
|---------|-----------|-------------|
| Almacenamiento local | Sí (automático) | Guarda los datos de juego en el dispositivo |
| Sincronización con iCloud | Opcional | Sincroniza los datos entre tus dispositivos mediante CloudKit |
| Game Center | Opcional | Clasificaciones y logros |
| Red («Más apps») | Opcional | Obtiene la lista de apps hermanas |

Como no se recopila ni se transmite ningún dato personal a servidores que nosotros controlemos, no existe una base de datos central a la que acceder, eliminar o exportar. Todos los datos son locales o están gestionados por los servicios de Apple (iCloud y Game Center).

## Contacto

Si tienes preguntas sobre este proceso, abre un issue en `https://github.com/sudoku-pro/sudoku-site/issues` o envía un correo a sudoku@w3cub.com.
