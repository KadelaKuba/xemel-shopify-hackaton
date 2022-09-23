import {Page, Layout} from "@shopify/polaris";
import {InlineLabelExample} from "../components/inlineLabelExample.jsx";
import {TextFieldExample} from "../components/textFieldExample";
import {TitleBar} from "@shopify/app-bridge-react";

export default function Feeds() {
    return (
        <Page>
            <TitleBar title="Xemel +" primaryAction={null}/>
            <Layout>
                <Layout.Section>
                    <InlineLabelExample/>
                </Layout.Section>
                <Layout.Section>
                    <TextFieldExample/>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
