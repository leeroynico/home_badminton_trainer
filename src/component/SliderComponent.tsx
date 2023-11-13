'use client'

import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';

type Props = {

}
export default function SliderComponent () : React.JSX.Element {

    const [value, setValue] = useState<number>(150);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <Stack sx={{mt:5}}>
            <Typography variant="subtitle1" display="block" sx={{ml:4}}>
                temps de travail (secondes)
            </Typography>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={3}
                sx={{mx:2}}
            >
                <RemoveIcon onClick={()=>setValue(value-10)} fontSize="large" />
                <Slider
                    min={20}
                    max={300}
                    valueLabelDisplay="auto"
                    value={value}
                    onChange={handleChange}
                    sx={{height : 8}}
                    color='secondary'
                />
                <AddIcon onClick={()=>setValue(value+10)} fontSize="large"/>
            </Stack>
        </Stack>
    )
}
