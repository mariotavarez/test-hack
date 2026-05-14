export interface PedidoDatum {
  id: string
  title: string
  description: string
  status: string
}

export interface PedidoListProps {
  items: PedidoDatum[]
  onSelect?: (item: PedidoDatum) => void
}
