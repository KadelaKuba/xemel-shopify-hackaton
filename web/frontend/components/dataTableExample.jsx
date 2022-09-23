import {Page, Card, DataTable} from '@shopify/polaris';
import React from 'react';

export function DataTableExample() {
    const rows = [
        ['Heureka CZ', 'Vygenerování feedu', '22.9.2022 15:12'],
        ['Google CZ', 'Vygenerování feedu', '22.9.2022 14:01'],
        ['Heureka SK', 'Vygenerování feedu', '22.9.2022 13:28'],
    ];

    return (
        <Page title="Historie">
            <Card>
                <DataTable
                    columnContentTypes={[
                        'text',
                        'text',
                        'text',
                    ]}
                    headings={[
                        'Feed',
                        'Akce',
                        'Datum',
                    ]}
                    rows={rows}
                />
            </Card>
        </Page>
    );
}
