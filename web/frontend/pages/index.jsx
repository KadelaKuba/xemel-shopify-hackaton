import {
    Page,
    Layout,
} from "@shopify/polaris";
import {TitleBar} from "@shopify/app-bridge-react";
import {TextContainerExample} from "../components/textContainerExample.jsx";

export default function HomePage() {
    return (
        <Page>
            <TitleBar title="Xemel +" primaryAction={null}/>
            <Layout>
                <Layout.Section>
                    <TextContainerExample/>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
