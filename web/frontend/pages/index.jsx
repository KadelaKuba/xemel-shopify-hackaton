import {
    Card,
    Page,
    Layout,
    TextContainer,
    Image,
    Stack,
    Link,
    Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import {XemelConnection} from "../components/xemelConnect";
import {InlineLabelExample} from "../components/selectXmlOutput";

export default function HomePage() {
  return (
    <Page>
      <TitleBar title="Xemel +" primaryAction={null} />
      <Layout>
        <Layout.Section>

        </Layout.Section>
      </Layout>
    </Page>
  );
}
