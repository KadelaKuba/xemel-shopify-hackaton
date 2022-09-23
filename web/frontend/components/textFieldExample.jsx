import {Button, TextField, Layout} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function TextFieldExample() {
    const [value, setValue] = useState('');

    const handleChange = useCallback((newValue) => setValue(newValue), []);

    return (
        <div>
            <TextField
                id={'output-feed-input'}
                label="Url výstupního feedu"
                value={value}
                onChange={handleChange}
                autoComplete="off"
            />
            <br/>
            <Button onClick={() => setValue('http://core.xemel.test/demo_feeds/demo1.xml')}>Vygenerovat feed</Button>
        </div>
    );
}
