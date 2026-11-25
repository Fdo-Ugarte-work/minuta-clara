# Contexto del repositorio

## Propósito

Minuta Clara ayuda a convertir notas de reuniones en un resumen, acuerdos y tareas revisables. La IA prepara un borrador; una persona valida y edita el resultado.

## Mapa

- apps/web: interfaz Vike + React + TypeScript.
- apps/api: servicio Bun + Hono; las claves de proveedores de IA se mantienen del lado del servidor.
- packages/contracts: esquemas Zod compartidos para solicitudes y resultados.
- docs/product-context.md: problema, usuarios y resultado buscado.
- docs/scope.md: alcance propuesto y exclusiones del MVP.
- docs/architecture.md: componentes, flujo y decisiones pendientes.
- docs/plans/: planes de funcionalidades cuando el equipo los apruebe.

## Comandos

- bun install: instala las dependencias de todos los workspaces y genera bun.lock.
- bun run dev:web: inicia la interfaz.
- bun run dev:api: inicia la API.
- bun run typecheck: revisa los tipos de los workspaces.

## Convenciones

- Mantener TypeScript en modo estricto.
- Validar los datos que cruzan la frontera entre web y API con los esquemas compartidos.
- No inventar responsables, fechas ni decisiones que no aparezcan en las notas; representar datos ausentes como null.
- Conservar el texto de origen que respalde cada tarea cuando se implemente la extracción.
- No incluir secretos, transcripciones reales ni datos personales en el repositorio, prompts o ejemplos públicos.
- Mantener el alcance y los documentos de producto en español, salvo nombres técnicos y código.

## Revisión humana

Requieren acuerdo del equipo o del mentor: cambios al alcance, proveedor o modelo de IA, almacenamiento de notas, autenticación, integración con Teams u Outlook y uso de datos reales. Antes de implementar una funcionalidad, crear un plan breve en docs/plans/ y obtener aprobación del equipo. No agregar carpetas o documentos opcionales solo porque aparezcan en un ejemplo.

## Estado del esqueleto

La estructura y los contratos iniciales están preparados. La generación con IA, persistencia e integraciones aún no están implementadas. Las decisiones pendientes están registradas en docs/architecture.md.
