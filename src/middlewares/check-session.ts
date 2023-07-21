import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId // verificar SE é verdadeiro SE tem o cookie.

  if (!sessionId) {
    return reply.status(401).send({
      error: 'UNauthorized.',
    })
  }
}
