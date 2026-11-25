# Minuta Clara

Aplicación AI-first para convertir notas de reuniones en un resumen, acuerdos y tareas que el equipo pueda revisar y editar.

## Alcance inicial

- Pegar notas o una transcripción de ejemplo.
- Preparar un resumen y extraer acuerdos y tareas explícitas.
- Mostrar responsable y fecha solo cuando estén indicados en las notas.
- Revisar y editar la propuesta antes de compartirla.

Este repositorio contiene el monorepo inicial. La integración de IA, el proveedor, la persistencia y las conexiones con otras herramientas se decidirán con el equipo antes de implementarlas.

## Estructura

- apps/web: interfaz con Vike, React y TypeScript.
- apps/api: API con Bun y Hono.
- packages/contracts: esquemas Zod compartidos entre web y API.
- docs: contexto de producto, alcance y arquitectura inicial.
- AGENTS.md: contexto, mapa y convenciones para el agente.

## Inicio rápido

Requiere Bun instalado. Desde la raíz:

    bun install
    bun run dev:web

En otra terminal:

    bun run dev:api

Validación de tipos:

    bun run typecheck

Al ejecutar bun install se genera bun.lock.
