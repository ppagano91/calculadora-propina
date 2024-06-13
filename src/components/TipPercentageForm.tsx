import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-0',
        value: 0.00,
        label: '0%'
    },
    {
        id: 'tip-5',
        value: .05,
        label: '5%'
    },
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-30',
        value: .30,
        label: '30%'
    },
    {
        id: 'tip-40',
        value: .40,
        label: '40%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
  ]

type TipPercentageFormProps ={
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

const TipPercentageForm = ({setTip, tip}:TipPercentageFormProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {tipOptions.map(tipOption =>(
                <div key={tipOption.id} className="flex gap-2">
                    <input
                        type="radio"
                        id={tipOption.id}
                        name="tip"
                        value={tipOption.value}
                        onChange={e => setTip(Number(e.target.value))}
                        checked={tipOption.value === tip}
                        />
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                </div>
            ))}
        </form>
    </div>
  )
}

export default TipPercentageForm