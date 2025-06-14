import { TextField, TextFieldProps } from '@mui/material';
import { useEffect, useState } from 'react';

export interface ColourFieldProps
    extends Omit<TextFieldProps, 'value' | 'defaultValue' | 'type' | 'onChange' | 'onBlur' | 'defaultValue'> {
    value?: string;
    onChange(value: string): void;
}

export default function ColourField({ value: initialValue, onChange, ...props }: ColourFieldProps) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setValue(e.target.value);
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
        onChange(e.target.value);
    }

    return <TextField type="color" {...props} value={value} onChange={handleChange} onBlur={handleBlur} />;
}
