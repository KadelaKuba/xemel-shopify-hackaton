import {Page, Layout, DataTable} from "@shopify/polaris";
import {DataTableExample} from "../components/dataTableExample";
import {TitleBar} from "@shopify/app-bridge-react";

export default function History() {
    return (
        <Page>
            <TitleBar title="Xemel +" primaryAction={null}/>
            <Layout>
                <Layout.Section>
                    <DataTableExample/>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
