import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack, IconButton, ButtonGroup,ToggleButton,ToggleButtonGroup } from '@mui/material'
const MuiButton = () => {
    return (
        <div>
            <Stack spacing={4}>

                <Stack spacing={2} direction="row">
                    <Button variant='text' href='https://mui.com/'>Text</Button> {/*we can use href in text variant*/}
                    <Button variant='contained'>Contained</Button>
                    <Button variant='outlined'>Outlined</Button>
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary'>Primary</Button>
                    <Button variant='contained' color='secondary'>Secondary</Button>
                    <Button variant='text' color='error'>Error</Button>
                    <Button variant='contained' color='warning'>Warning</Button>
                    <Button variant='outlined' color='info'>Info</Button>
                    <Button variant='contained' color='success'>Success</Button>

                </Stack>

                <Stack display={'block'} spacing={2} direction={'row'}>
                    <Button variant='contained' size='small' color='secondary'>Small</Button>
                    <Button variant='contained' size='medium' color='secondary'>Medium</Button>
                    <Button variant='contained' size='large' color='secondary'>Large</Button>
                </Stack>

                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary' startIcon={<SendIcon />} disableRipple>Send</Button> {/*disbaleRipple :disbaling the water effect*/}
                    <Button variant='contained' color='primary' endIcon={<SendIcon />} onClick={() => alert('Clicked')}>Send</Button>
                    <IconButton aria-label='send' color='success'>
                        <SendIcon />
                    </IconButton>

                </Stack>

                <Stack direction={'row'}  >
                    <ButtonGroup variant='contained' aria-label='alignment-button-group'>
                        <Button onClick={()=>{alert('LEFT')}}>Left</Button>
                        <Button onClick={()=>{alert('CENTER')}}>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                  
                </Stack>
                <Stack direction={'row'}  >
                <ButtonGroup variant='outlined' orientation='vertical'>
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                  
                </Stack>

            </Stack>
        </div>
    )
}

export default MuiButton
