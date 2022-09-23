import { Page, Layout } from "@shopify/polaris";
import {XemelConnection} from "../components/accountConnectionExample.jsx";
import {TitleBar} from "@shopify/app-bridge-react";

export default function Settings() {
  return (
      <Page>
          <TitleBar title="Xemel +" primaryAction={null}/>
          <Layout>
              <Layout.Section>
                  <XemelConnection/>
              </Layout.Section>
          </Layout>
      </Page>
  );
}
