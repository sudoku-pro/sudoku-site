# Solución de problemas

Esta página recopila los problemas habituales y cómo resolverlos.

## La aplicación no arranca o se cierra al iniciarse

Síntomas: Sudoku no se abre, se cierra inmediatamente o muestra un error inesperado.

Pasos que puedes probar:

1. Comprueba que tu dispositivo cumple los requisitos mínimos (iOS/iPadOS 16 o posterior, macOS 15 o posterior).
2. Fuerza el cierre de la app y vuelve a abrirla.
3. Reinicia tu dispositivo.
4. Vuelve a instalar la app desde la App Store.
5. Si el problema persiste, abre un issue en el repositorio del proyecto con los detalles.

## Problemas de rendimiento

Si el juego va lento o con tirones:

1. Cierra otras aplicaciones pesadas.
2. En Mac, revisa el Monitor de Actividad para detectar un uso elevado de CPU.
3. En dispositivos más antiguos, prueba con una dificultad más sencilla (Fácil o Medio).

## La sincronización con iCloud no funciona

Si tu progreso no se sincroniza entre dispositivos:

1. Comprueba que has iniciado sesión con el mismo Apple ID en todos los dispositivos.
2. Verifica que iCloud Drive está activado en Ajustes del Sistema (Mac) o en Ajustes (iOS/iPadOS).
3. Confirma que tienes una conexión a internet activa.
4. Desactiva y vuelve a activar iCloud para Sudoku en Ajustes → [Tu nombre] → iCloud → Apps que usan iCloud.
5. Reinicia todos los dispositivos e inténtalo de nuevo.

## Game Center no conecta

Si los logros o las clasificaciones de Game Center no se actualizan:

1. Comprueba que has iniciado sesión en Game Center (Ajustes → Game Center en iOS; Ajustes del Sistema en Mac).
2. Revisa tu conexión a internet.
3. Cierra la sesión de Game Center y vuelve a iniciarla.

## Ver los registros

Para diagnosticar cierres inesperados, los registros de la aplicación son útiles. En las compilaciones en sandbox (App Store) para Mac, revisa:

```
~/Library/Containers/com.w3cub.sudoku/Data/Library/Logs/sudoku/sudoku.log
```

En iOS/iPadOS, conecta tu dispositivo a un Mac y usa Console.app para ver los registros, filtrando por «Sudoku».

## Restablecer la app

Para restablecer los ajustes y borrar los datos locales (Mac):

1. Cierra Sudoku
2. Elimina el contenedor (cuidado: esto borra todos los ajustes, estadísticas y partidas guardadas):

```bash
rm -rf ~/Library/Containers/com.w3cub.sudoku
```

3. Vuelve a abrir Sudoku y configúralo de nuevo.

En iPhone/iPad, elimina y vuelve a instalar la app para restablecer todos los datos.

**Nota**: si usas la sincronización con iCloud, restablecer en un dispositivo puede volver a descargar los datos de iCloud tras reiniciar la app. Para restablecerlo todo en todos los dispositivos, puede que tengas que hacerlo en cada uno de ellos.

## Informar de un problema

Cuando abras un issue, incluye:

- Tipo de dispositivo (iPhone, iPad o Mac)
- Versión del sistema operativo (Ajustes → General → Información)
- Versión de Sudoku (Ajustes → Acerca de)
- Pasos para reproducir el problema
- Registros o capturas de pantalla, si los tienes

Esto ayuda a los mantenedores a identificar y corregir el problema más rápido.
