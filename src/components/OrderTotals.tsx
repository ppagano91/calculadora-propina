import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
}

const OrderTotals = ({ order }: OrderTotalsProps) => {

    const subtotalAmount = useMemo(() => {
        return order.reduce((total, item) => total + (item.quantity * item.price), 0)
    }, [order])
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas</h2>
            <p>Subtotal a pagar:{''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>

            <p>Propina:{''}
                <span className="font-bold">$0</span>
            </p>

            <p>Total a pagar:{''}
                <span className="font-bold">$0</span>
            </p>
        </div>
        <button className=""></button>
    </>
  )
}

export default OrderTotals