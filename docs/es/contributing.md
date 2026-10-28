# Contribuir

¡Damos la bienvenida a las contribuciones para mejorar la documentación de Sudoku! Ya sea corrigiendo una errata, añadiendo una nueva guía o mejorando el contenido existente, tu ayuda es bienvenida.

## Formas de contribuir

### Mejoras en la documentación
- Corrige erratas o errores gramaticales
- Aclara instrucciones confusas
- Añade información que falte
- Actualiza contenido desactualizado
- Mejora el formato y la legibilidad

### Contenido nuevo
- Crea guías para problemas habituales
- Añade tutoriales o ejemplos
- Traduce la documentación a otros idiomas
- Escribe entradas de preguntas frecuentes

### Contribuciones técnicas
- Mejora el proceso de compilación
- Añade nuevas funciones al sitio de documentación
- Corrige errores en el flujo de trabajo de despliegue

## Primeros pasos

### Requisitos previos
- Node.js 18 o posterior
- Gestor de paquetes pnpm
- Git

### Configuración del entorno de desarrollo

1. **Haz un fork del repositorio** en GitHub
2. **Clona tu fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/sudoku-site.git
   cd sudoku-site
   ```
3. **Instala las dependencias**:
   ```bash
   pnpm install
   ```
4. **Inicia el servidor de desarrollo**:
   ```bash
   pnpm docs:dev
   ```
5. Abre `http://localhost:5173` en tu navegador

### Hacer cambios

1. Crea una rama nueva para tus cambios:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Aplica tus cambios en los archivos de documentación de `docs/`
3. Prueba tus cambios compilando el sitio:
   ```bash
   pnpm docs:build
   ```
4. Confirma tus cambios:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Enviar cambios

1. **Sube tu rama** a tu fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Crea una solicitud de incorporación de cambios (Pull Request)** en GitHub
3. **Espera la revisión** y atiende los comentarios que recibas

## Directrices

### Estilo de escritura
- Usa un lenguaje claro y conciso
- Escribe en voz activa siempre que sea posible
- Sé inclusivo y acogedor
- Mantén un formato coherente
- Incluye ejemplos de código cuando ayuden

### Estructura de archivos
- Las páginas de documentación van en `docs/`
- Las guías van en `docs/guide/`
- Usa nombres de archivo en minúsculas con guiones: `my-new-guide.md`
- El frontmatter no es obligatorio, pero puedes usarlo para metadatos

### Enlaces
- Usa enlaces relativos para la documentación interna
- Enlaza a recursos externos cuando sea útil
- Comprueba que todos los enlaces funcionan

### Imágenes y recursos
- Coloca las imágenes en `docs/public/` o en sus subdirectorios
- Usa nombres de archivo descriptivos
- Optimiza las imágenes para la web (preferiblemente menos de 500 KB)

## Código de conducta

Este proyecto sigue un código de conducta. Al participar, aceptas:

- Ser respetuoso e inclusivo
- Centrarte en los comentarios constructivos
- Asumir la responsabilidad de tus errores

Consulta [CODE_OF_CONDUCT.md](https://github.com/sudoku-pro/sudoku-site/blob/main/CODE_OF_CONDUCT.md) para más detalles.

## ¿Tienes preguntas?

Si tienes dudas sobre cómo contribuir:
- Revisa los [issues](https://github.com/sudoku-pro/sudoku-site/issues) y las [discusiones](https://github.com/sudoku-pro/sudoku-site/discussions) existentes
- Crea un issue nuevo si hace falta
- Ponte en contacto con los mantenedores

¡Gracias por ayudar a mejorar la documentación de Sudoku! 🎉
