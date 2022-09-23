import {Select} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function InlineLabelExample() {
    const [selected, setSelected] = useState('newestUpdate');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const options = [
        {label: 'Heureka CZ', value: 'newestUpdate'},
        {label: 'Heureka SK', value: 'oldestUpdate'},
        {label: 'Google CZ', value: 'mostSpent'},
    ];

    return (
        <Select
            label="Typ feedu"
            labelInline
            options={options}
            onChange={handleSelectChange}
            value={selected}
        />
    );
}
