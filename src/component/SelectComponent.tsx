'use client'

import React, {useState} from 'react'
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export default function SliderComponent () : React.JSX.Element {

    const [value, setValue] = useState<string>('');
    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (
        <Stack sx={{mt:5}}>
            <Typography variant="subtitle1" display="block" sx={{ml:4}}>
               difficulté
            </Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={handleChange}
                    variant='standard'
                    sx={{border : '2px solid red'}}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
        </Stack>
    )
}
