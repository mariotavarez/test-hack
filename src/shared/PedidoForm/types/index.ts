export interface PedidoFormValues {
  title: string
  description: string
}

export interface PedidoFormProps {
  onSubmit: (values: PedidoFormValues) => void
  initial?: Partial<PedidoFormValues>
}
