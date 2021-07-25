import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DateComponent from './Date'


test('renders content', () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = `${mm}/${dd}/${yyyy}`

    const component = render(<DateComponent />)
    component.getByText(today)
})