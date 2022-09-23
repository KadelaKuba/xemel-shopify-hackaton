import {AccountConnection, Button, Frame, Page, Toast} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function XemelConnection() {
    const [connected, setConnected] = useState(false);
    const accountName = connected ? 'Jakub Kadela' : '';

    const handleAction = useCallback(() => {
        setConnected((connected) => !connected);
    }, []);

    const buttonText = connected ? 'Zrušit propojení' : 'Registrovat';
    const details = connected ? 'Účet vytvořen' : 'Žádný účet nevytvořen';
    const terms = connected ? null : (
        <p>
            Kliknutím na tlačítko <strong>Registrovat</strong>, souhlasíte s podmínkami aplikace Xemel+
        </p>
    );

    return (
        <AccountConnection
            accountName={accountName}
            connected={connected}
            title="Xemel"
            action={{
                content: buttonText,
                onAction: handleAction,
            }}
            details={details}
            termsOfService={terms}
        />
    );
}

