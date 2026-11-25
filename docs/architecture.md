# Arquitectura inicial

## Componentes

- apps/web: interfaz React con Vike y TypeScript estricto.
- apps/api: API HTTP con Hono sobre Bun. La generación de IA se ejecutará del lado del servidor.
- packages/contracts: esquemas Zod para validar las notas de entrada y la respuesta estructurada.

## Flujo previsto

1. La persona pega sus notas en la interfaz.
2. La interfaz envía la solicitud a la API.
3. La API valida la entrada con el contrato compartido.
4. Cuando el equipo elija un proveedor, la API usará Vercel AI SDK para preparar un borrador estructurado.
5. La API valida la salida y la interfaz permite revisarla y editarla.

## Decisiones pendientes

- Proveedor y modelo de IA aprobados para el programa.
- Si la demo debe guardar minutas; por ahora no hay persistencia ni base de datos.
- Hosting y uso del gateway SSO compartido si la app se publica en la nube.
- Política para notas reales; los ejemplos iniciales deben ser sintéticos.

## Seguridad

- Las claves del proveedor, cuando se elija, vivirán solo en el entorno del servidor y nunca en el navegador ni en Git.
- La salida no debe inventar decisiones, responsables o fechas.
- No conectar servicios externos sin aprobación del equipo y del mentor.
