import React from "react";
import * as JsonSchemaRefParser from "json-schema-ref-parser";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";

const specs = require("../../data/spec.json");
const parser = new JsonSchemaRefParser();

class apiPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      apispecs: ""
    };
  }

  componentDidMount() {
    this.load();
  }

  async load() {
    try {
      this._resolvedSpec = await parser.dereference(specs);
    } catch (e) {
      this.setState({
        error: e
      });
    } finally {
      this.setState({
        loading: false,
        apispecs: this._resolvedSpec
      });
    }
  }

  render() {
    const { loading, apispecs } = this.state;
    const { pageContext } = this.props;
    const modes = {
      get: "get",
      put: "put",
      post: "post"
    };

    return (
      <Layout title="API Documentation" subtitle="Linode API Documentation">
        <SEO title="Linode API Documentation" description="Container Tools" />
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mt-8">
            <Sidebar />
          </div>
          {!loading && (
            <div className="w-full md:w-3/4 md:pl-8">
              <h1>
                {(apispecs.paths[pageContext.name]["get"] &&
                  apispecs.paths[pageContext.name]["get"].tags) ||
                  (apispecs.paths[pageContext.name]["put"] &&
                    apispecs.paths[pageContext.name]["put"].tags) ||
                  (apispecs.paths[pageContext.name]["post"] &&
                    apispecs.paths[pageContext.name]["post"].tags)}
              </h1>
              {Object.keys(apispecs.paths[pageContext.name]).map(e => {
                const mode = modes[e];
                const n = apispecs.paths[pageContext.name][mode];
                // console.log(n);
                return (
                  mode !== undefined && (
                    <div key={e}>
                      <h2>{n.summary}</h2>
                      <p>
                        <b>{mode}</b>&nbsp; https://api.linode.com/v4
                        {pageContext.name}
                      </p>
                      <p>{n.description}</p>
                      <div>
                        <h3>Responses</h3>
                        {/* {Object.keys(n.responses).map(response => {
                          const r = n.responses[response];
                          return (
                            <div key={response} className="mb-8">
                              <b>{response}</b>
                              {Object.keys(
                                r.content["application/json"].schema.properties
                              ).map(property => {
                                return <div>{property}</div>;
                              })}
                            </div>
                          );
                        })} */}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default apiPage;
