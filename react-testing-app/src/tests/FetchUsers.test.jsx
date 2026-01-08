import {render, screen} from '@testing-library/react'
import FetchUsers from '../components/FetchUsers'
import jestConfig, { testEnvironment } from '../../jest.config.cjs'

test('renders users from API', async()=>{
    const fakeUsers=[
        {
            id:1,
            name:'Naveen Kumar',
            username:'Naveen',
            email: "kmrnaveen@gmail.com"

        } 
    ]

    global.fetch=jest.fn().mockResolvedValueOnce({
        ok:true,
        json:async()=>fakeUsers
    })

    render(<FetchUsers/>)

    expect(await screen.findByText('Naveen Kumar Naveen')).toBeInTheDocument();
   // expect(await screen.findByText('Nilesh Kumar Nilesh')).toBeInTheDocument();
    
})