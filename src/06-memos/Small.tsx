import { memo } from 'react'

export const Small = memo(({ value }: { value: number }) => {
    console.log('me volvi a dibujar')

    return <h1>Small: {value}</h1>
})
