import React, {useState} from 'react'


export const Header: React.FC = () => {
    const [value, SetValue] = useState('')
    return (
        <input value={value} onChange={(e) => SetValue(e.currentTarget.value)}/>
    )
}