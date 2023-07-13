import { Typography } from '@mui/material'
    
    import React from 'react'
    
    const Mytypography = () => {
      return (
        <div>
          <Typography variant='h1'>h1 Heading</Typography>
          <Typography variant='h2'>h2 Heading</Typography>
          <Typography variant='h3'>h3 Heading</Typography>
          <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>{/*shows element as h1 in browser but property is from h4,GUTTERBOTTAM is used for the space under the element*/}
          <Typography variant='h5'>h5 Heading</Typography>
          <Typography variant='h6'>h6 Heading</Typography>
          <Typography variant='subtitle1'>Subtitle 1</Typography>
          <Typography variant='subtitle2'>Subtitle 2</Typography>
          <Typography variant='body1'>BODY 1 -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <Typography variant='body2'>BODY 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          
        </div>
      )
    }
    
    export default Mytypography
    