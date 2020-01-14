import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact - Student Dev Coach" />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>Contact Me</Headings.h1>
        </div>
      </Section>
    </Layout>
  )
}

export default Contact;