import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/', async (_req, res) => {
  try {
    const items = await prisma.pedido.findMany()
    res.json(items)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pedidos' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const item = await prisma.pedido.findUnique({
      where: { id: req.params.id },
    })
    if (!item) {
      return res.status(404).json({ error: 'Pedido not found' })
    }
    res.json(item)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pedido' })
  }
})

router.post('/', async (req, res) => {
  try {
    const item = await prisma.pedido.create({ data: req.body })
    res.status(201).json(item)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create pedido' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const item = await prisma.pedido.update({
      where: { id: req.params.id },
      data: req.body,
    })
    res.json(item)
  } catch (error) {
    res.status(400).json({ error: 'Failed to update pedido' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await prisma.pedido.delete({ where: { id: req.params.id } })
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete pedido' })
  }
})

export { router as pedidoRouter }
