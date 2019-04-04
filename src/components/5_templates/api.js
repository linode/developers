import React from "react";
import { graphql } from "gatsby";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";
import ParamDisplay from "../../components/2_molecules/paramDisplay";
import Security from "../../components/2_molecules/Security";
import ResponseList from "../../components/2_molecules/ResponseList";
import ResponseSamples from "../2_molecules/ResponseSamples";

// const _ = require("lodash");

const apiPage = ({ data }) => {
  const n = data.allPaths.edges[0].node;
  const modes = {
    get: "get",
    post: "post",
    put: "put",
    delete: "delete"
  };
  const responseOptions = {
    _200: "_200",
    _204: "_204",
    default: "default"
  };
  return (
    <Layout
      title="API Documentation"
      subtitle="Linode API Documentation"
      fullWidth
    >
      <SEO title="API Documentation" description="" />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/6">
          <Sidebar />
        </div>
        <div className="w-full md:w-5/6 pl-8">
          <h1 className="mb-4 ">
            {(n.get && n.get.tags) ||
              (n.post && n.post.tags) ||
              (n.put && n.put.tags) ||
              (n.delete && n.delete.tags)}
          </h1>

          {Object.keys(n).map((e, i) => {
            const mode = modes[e];
            const m = n[mode];
            return (
              m && (
                <div key={i} className="flex">
                  <div className="w-full md:w-2/3 bg-ThemeCell mb-8 px-4 py-2">
                    <h2 id={mode} className="mt-0">
                      {m.summary}
                    </h2>
                    <p className="mb-2">
                      <b className="uppercase">{mode}</b>&nbsp;&nbsp;
                      https://api.linode.com/v4{n.name}
                    </p>
                    <p className="mt-0">{m.description}</p>

                    {m.parameters && (
                      <p className="mb-2">
                        <b>Query Parameters</b>
                      </p>
                    )}
                    {m.parameters &&
                      m.parameters.map((param, i) => (
                        <ParamDisplay
                          key={`param-item-${i}`}
                          param={param}
                          m={m}
                        />
                      ))}
                    {m.security && <Security oauth={m.security[1].oauth} />}
                    <div>
                      {m.requestBody && (
                        <>
                          <div className="my-4">
                            <h4>Request Body Schema</h4>
                          </div>
                          {m.requestBody.content.application_json &&
                            m.requestBody.content.application_json.schema &&
                            m.requestBody.content.application_json.schema
                              .properties &&
                            Object.keys(
                              m.requestBody.content.application_json.schema
                                .properties
                            ).map((p, i) => {
                              const b =
                                m.requestBody.content.application_json.schema
                                  .properties[p];
                              return (
                                b && (
                                  <div key={i}>
                                    <div className="flex mb-4">
                                      <div className="w-1/4">
                                        <div>
                                          <b>{p}</b>
                                        </div>
                                        <div>
                                          {m.requestBody.content
                                            .application_json.schema.required &&
                                            m.requestBody.content.application_json.schema.required.map(
                                              req => {
                                                if (p === req) {
                                                  return (
                                                    <span className="text-BaseRed">
                                                      Required
                                                    </span>
                                                  );
                                                }
                                                return false;
                                              }
                                            )}
                                        </div>
                                      </div>
                                      <div className="w-3/4">
                                        <div>{b.description}</div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              );
                            })}
                        </>
                      )}
                    </div>
                    <ResponseList
                      options={responseOptions}
                      responses={m.responses}
                      m={m}
                    />
                  </div>
                  <div className="w-full md:w-1/3 mb-8 px-4 py-2">
                    <h3>Request Samples</h3>
                    {m.x_code_samples &&
                      m.x_code_samples.map((x, i) => {
                        return (
                          <div key={i} className="mb-4">
                            <div>{x.lang}</div>
                            <SyntaxHighlighter
                              language="bash"
                              style={atomDark}
                              className="api-samples"
                              codeTagProps={{
                                style: { whiteSpace: "pre-wrap" }
                              }}
                            >
                              {x.source}
                            </SyntaxHighlighter>
                          </div>
                        );
                      })}
                    <ResponseSamples
                      options={responseOptions}
                      responses={m.responses}
                      m={m}
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default apiPage;

export const query = graphql`
  query ApiQuery($name: String) {
    allPaths(filter: { name: { in: [$name] } }) {
      edges {
        node {
          internal {
            contentDigest
          }
          name
          get {
            x_linode_grant
            summary
            description
            operationId
            x_linode_cli_action
            x_linode_cli_skip
            x_linode_redoc_load_ids
            x_linode_cli_command
            tags
            security {
              oauth
            }
            parameters {
              name
              in
              description
              required
              schema {
                type
                minimum
                default
                maximum
              }
            }
            x_code_samples {
              lang
              source
            }
            responses {
              _200 {
                description
                content {
                  application_json {
                    schema {
                      properties {
                        address_1 {
                          type
                          description
                          maxLength
                          example
                        }
                        address_2 {
                          type
                          description
                          maxLength
                          example
                        }
                        balance {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        city {
                          type
                          description
                          maxLength
                          example
                        }
                        credit_card {
                          type
                          readOnly
                          description
                          properties {
                            expiry {
                              type
                              description
                              example
                            }
                            last_four {
                              type
                              description
                              example
                            }
                          }
                        }
                        company {
                          type
                          description
                          maxLength
                          example
                        }
                        country {
                          type
                          description
                          minLength
                          maxLength
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        email {
                          type
                          description
                          maxLength
                          example
                          x_linode_cli_display
                          format
                          readOnly
                        }
                        first_name {
                          type
                          description
                          maxLength
                          example
                          x_linode_cli_display
                        }
                        last_name {
                          type
                          description
                          maxLength
                          example
                          x_linode_cli_display
                        }
                        phone {
                          type
                          description
                          maxLength
                          example
                          x_linode_cli_display
                          properties {
                            primary {
                              type
                              nullable
                              format
                              description
                              example
                            }
                            secondary {
                              type
                              nullable
                              format
                              description
                            }
                          }
                        }
                        state {
                          type
                          description
                          maxLength
                          example
                        }
                        tax_id {
                          type
                          description
                          maxLength
                          example
                        }
                        zip {
                          type
                          description
                          maxLength
                          example
                        }
                        data {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                readOnly
                                description
                                x_linode_cli_display
                              }
                              action {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              created {
                                type
                                readOnly
                                format
                                description
                                example
                                x_linode_cli_display
                                x_linode_filterable
                              }
                              entity {
                                type
                                readOnly
                                description
                                properties {
                                  id {
                                    type
                                    description
                                    example
                                    x_linode_filterable
                                    readOnly
                                  }
                                  label {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                  type {
                                    type
                                    description
                                    example
                                    x_linode_filterable
                                    readOnly
                                  }
                                  url {
                                    type
                                    description
                                    example
                                    format
                                    readOnly
                                  }
                                }
                              }
                              percent_complete {
                                type
                                readOnly
                                description
                              }
                              rate {
                                type
                                readOnly
                                description
                              }
                              read {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              seen {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              status {
                                type
                                readOnly
                                description
                                x_linode_cli_display
                                example
                              }
                              time_remaining {
                                type
                                readOnly
                                nullable
                                description
                              }
                              username {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                                pattern
                                minLength
                                maxLength
                                x_linode_filterable
                              }
                              date {
                                type
                                readOnly
                                format
                                description
                                example
                                x_linode_cli_display
                              }
                              label {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                                x_linode_filterable
                                minLength
                                maxLength
                                pattern
                              }
                              total {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              amount {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              from {
                                type
                                readOnly
                                format
                                description
                                example
                                x_linode_cli_display
                              }
                              quantity {
                                type
                                readOnly
                                description
                                example
                              }
                              to {
                                type
                                readOnly
                                format
                                description
                                example
                                x_linode_cli_display
                              }
                              type {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              unitprice {
                                type
                                readOnly
                                description
                                example
                              }
                              message {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              body {
                                type
                                readOnly
                                description
                                nullable
                                example
                                minLength
                                maxLength
                              }
                              severity {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              when {
                                type
                                readOnly
                                format
                                description
                                x_linode_cli_display
                              }
                              until {
                                type
                                format
                                description
                                readOnly
                                x_linode_cli_display
                              }
                              redirect_uri {
                                type
                                format
                                description
                                example
                                x_linode_cli_display
                              }
                              secret {
                                type
                                description
                                example
                                readOnly
                              }
                              thumbnail_url {
                                type
                                nullable
                                format
                                description
                                example
                                readOnly
                              }
                              public {
                                x_linode_filterable
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              usd {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              email {
                                type
                                format
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              restricted {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              ssh_keys {
                                type
                                description
                              }
                              domain {
                                type
                                pattern
                                description
                                example
                                x_linode_filterable
                                x_linode_cli_display
                              }
                              group {
                                deprecated
                                type
                                description
                                example
                                minLength
                                maxLength
                                x_linode_filterable
                                x_linode_cli_display
                                readOnly
                              }
                              description {
                                type
                                minLength
                                maxLength
                                description
                                example
                                x_linode_cli_display
                                x_linode_filterable
                                readOnly
                              }
                              soa_email {
                                type
                                format
                                description
                                example
                                x_linode_cli_display
                              }
                              retry_sec {
                                type
                                description
                                example
                              }
                              master_ips {
                                type
                                description
                              }
                              axfr_ips {
                                type
                                description
                              }
                              expire_sec {
                                type
                                description
                                example
                              }
                              refresh_sec {
                                type
                                description
                                example
                              }
                              ttl_sec {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              tags {
                                x_linode_filterable
                                description
                                type
                              }
                              name {
                                type
                                description
                                minLength
                                maxLength
                                example
                                x_linode_cli_display
                                pattern
                              }
                              target {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              priority {
                                type
                                minimum
                                maximum
                                description
                                example
                                x_linode_cli_display
                              }
                              weight {
                                type
                                description
                                example
                                x_linode_cli_display
                                minimum
                                maximum
                              }
                              port {
                                type
                                description
                                example
                                minimum
                                maximum
                                x_linode_cli_display
                              }
                              service {
                                type
                                nullable
                                description
                              }
                              protocol {
                                type
                                nullable
                                description
                                example
                                x_linode_cli_display
                              }
                              tag {
                                type
                                nullable
                                description
                              }
                              created_by {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              deprecated {
                                x_linode_filterable
                                type
                                description
                                example
                                readOnly
                              }
                              is_public {
                                x_linode_filterable
                                description
                                type
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              size {
                                x_linode_filterable
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                                maximum
                              }
                              expiry {
                                type
                                format
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              vendor {
                                x_linode_filterable
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              region {
                                x_linode_filterable
                                readOnly
                                description
                                x_linode_cli_display
                                type
                                example
                              }
                              image {
                                x_linode_filterable
                                readOnly
                                nullable
                                x_linode_cli_display
                              }
                              hypervisor {
                                type
                                description
                                example
                                readOnly
                              }
                              updated {
                                type
                                format
                                description
                                example
                                readOnly
                                x_linode_cli_display
                                x_linode_filterable
                              }
                              ipv4 {
                                type
                                readOnly
                                description
                                x_linode_cli_display
                                format
                              }
                              ipv6 {
                                type
                                description
                                example
                                readOnly
                                nullable
                                format
                                x_linode_cli_display
                              }
                              specs {
                                type
                                description
                                readOnly
                                properties {
                                  disk {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                  memory {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                  vcpus {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                  transfer {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                }
                              }
                              alerts {
                                type
                                properties {
                                  cpu {
                                    type
                                    description
                                    example
                                  }
                                  network_in {
                                    type
                                    description
                                    example
                                  }
                                  network_out {
                                    type
                                    description
                                    example
                                  }
                                  transfer_quota {
                                    type
                                    description
                                    example
                                  }
                                  io {
                                    type
                                    description
                                    example
                                  }
                                }
                              }
                              backups {
                                type
                                description
                                properties {
                                  enabled {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                  schedule {
                                    type
                                    properties {
                                      day {
                                        type
                                        nullable
                                        description
                                        example
                                      }
                                      window {
                                        type
                                        nullable
                                        description
                                        example
                                      }
                                    }
                                  }
                                }
                              }
                              watchdog_enabled {
                                type
                                description
                                example
                              }
                              kernel {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              comments {
                                type
                                nullable
                                description
                                example
                              }
                              memory_limit {
                                type
                                description
                                example
                              }
                              run_level {
                                type
                                description
                                example
                              }
                              virt_mode {
                                type
                                description
                                example
                              }
                              helpers {
                                type
                                description
                                properties {
                                  updatedb_disabled {
                                    type
                                    description
                                    example
                                  }
                                  distro {
                                    type
                                    description
                                    example
                                  }
                                  modules_dep {
                                    type
                                    description
                                    example
                                  }
                                  network {
                                    type
                                    description
                                    example
                                  }
                                  devtmpfs_automount {
                                    type
                                    description
                                    example
                                  }
                                }
                              }
                              devices {
                                type
                                properties {
                                  sda {
                                    type
                                    description
                                  }
                                  sdb {
                                    type
                                    description
                                  }
                                  sdc {
                                    type
                                    description
                                  }
                                  sdd {
                                    type
                                    description
                                  }
                                  sde {
                                    type
                                    description
                                  }
                                  sdf {
                                    type
                                    description
                                  }
                                  sdg {
                                    type
                                    description
                                  }
                                  sdh {
                                    type
                                    description
                                  }
                                }
                              }
                              root_device {
                                type
                                description
                                example
                              }
                              filesystem {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              version {
                                x_linode_filterable
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              kvm {
                                x_linode_filterable
                                type
                                description
                                example
                                readOnly
                              }
                              xen {
                                x_linode_filterable
                                type
                                description
                                example
                                readOnly
                              }
                              architecture {
                                x_linode_filterable
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              pvops {
                                x_linode_filterable
                                type
                                description
                                example
                                readOnly
                              }
                              filesystem_path {
                                type
                                description
                                example
                                readOnly
                              }
                              linode_id {
                                type
                                nullable
                                description
                                example
                                x_linode_cli_display
                                readOnly
                              }
                              user_gravatar_id {
                                type
                                description
                                example
                                readOnly
                              }
                              images {
                                type
                                x_linode_filterable
                                description
                                x_linode_cli_display
                              }
                              deployments_total {
                                type
                                description
                                example
                                readOnly
                              }
                              deployments_active {
                                type
                                description
                                example
                                readOnly
                              }
                              rev_note {
                                x_linode_filterable
                                type
                                description
                                example
                              }
                              script {
                                type
                                description
                                example
                              }
                              user_defined_fields {
                                type
                                description
                                readOnly
                                items {
                                  type
                                  required
                                  description
                                  properties {
                                    label {
                                      type
                                      description
                                      example
                                      readOnly
                                    }
                                    name {
                                      type
                                      description
                                      example
                                      readOnly
                                    }
                                    example {
                                      type
                                      description
                                      example
                                      readOnly
                                    }
                                    oneOf {
                                      type
                                      description
                                      example
                                      readOnly
                                    }
                                    manyOf {
                                      type
                                      description
                                      example
                                      readOnly
                                    }
                                    default {
                                      type
                                      description
                                      readOnly
                                    }
                                  }
                                }
                              }
                              disk {
                                x_linode_filterable
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              class {
                                x_linode_filterable
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              price {
                                type
                                readOnly
                                description
                                x_linode_cli_display
                                properties {
                                  hourly {
                                    type
                                    description
                                    example
                                    x_linode_cli_display
                                    readOnly
                                  }
                                  monthly {
                                    type
                                    description
                                    example
                                    x_linode_cli_display
                                    readOnly
                                  }
                                }
                              }
                              addons {
                                type
                                readOnly
                                description
                                properties {
                                  backups {
                                    type
                                    readOnly
                                    description
                                    properties {
                                      price {
                                        type
                                        description
                                        properties {
                                          hourly {
                                            type
                                            description
                                            example
                                          }
                                          monthly {
                                            type
                                            description
                                            example
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              network_out {
                                x_linode_filterable
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              memory {
                                x_linode_filterable
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              successor {
                                type
                                readOnly
                                nullable
                                description
                              }
                              transfer {
                                x_linode_filterable
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              vcpus {
                                x_linode_filterable
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              api_key {
                                type
                                description
                                example
                                readOnly
                              }
                              install_code {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              apps {
                                type
                                description
                                readOnly
                                properties {
                                  apache {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                  nginx {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                  mysql {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                }
                              }
                              clients_included {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              phone {
                                type
                                description
                                x_linode_cli_display
                                properties {
                                  primary {
                                    type
                                    nullable
                                    format
                                    description
                                    example
                                  }
                                  secondary {
                                    type
                                    nullable
                                    format
                                    description
                                  }
                                }
                              }
                              services {
                                type
                                description
                                readOnly
                                x_linode_cli_display
                              }
                              ssh {
                                type
                                description
                                x_linode_cli_display
                                properties {
                                  access {
                                    type
                                    description
                                    example
                                  }
                                  user {
                                    type
                                    minLength
                                    maxLength
                                    description
                                    example
                                  }
                                  port {
                                    type
                                    minimum
                                    maximum
                                    description
                                    example
                                  }
                                  ip {
                                    type
                                    format
                                    description
                                    example
                                  }
                                }
                              }
                              service_type {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              address {
                                type
                                format
                                minLength
                                description
                                example
                                x_linode_cli_display
                                readOnly
                              }
                              timeout {
                                type
                                minimum
                                maximum
                                description
                                example
                              }
                              consultation_group {
                                deprecated
                                type
                                minLength
                                maxLength
                                description
                                example
                                x_linode_cli_display
                              }
                              notes {
                                type
                                nullable
                                description
                                example
                              }
                              credentials {
                                type
                                description
                              }
                              gateway {
                                type
                                nullable
                                format
                                description
                                example
                                readOnly
                              }
                              subnet_mask {
                                type
                                format
                                description
                                example
                                readOnly
                              }
                              prefix {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              rdns {
                                type
                                description
                                x_linode_cli_display
                                example
                              }
                              range {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              hostname {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              client_conn_throttle {
                                type
                                minimum
                                maximum
                                description
                                example
                                x_linode_cli_display
                              }
                              algorithm {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              stickiness {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              check {
                                type
                                description
                                example
                              }
                              check_interval {
                                type
                                description
                                example
                              }
                              check_timeout {
                                type
                                minimum
                                maximum
                                description
                                example
                              }
                              check_attempts {
                                type
                                minimum
                                maximum
                                description
                                example
                              }
                              check_path {
                                type
                                description
                                example
                              }
                              check_body {
                                type
                                description
                                example
                              }
                              check_passive {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              cipher_suite {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              nodebalancer_id {
                                type
                                description
                                example
                                readOnly
                              }
                              ssl_commonname {
                                type
                                description
                                readOnly
                                x_linode_cli_display
                              }
                              ssl_fingerprint {
                                type
                                description
                                readOnly
                                x_linode_cli_display
                              }
                              ssl_cert {
                                type
                                format
                                nullable
                                description
                              }
                              ssl_key {
                                type
                                format
                                nullable
                                description
                              }
                              nodes_status {
                                type
                                description
                                readOnly
                                x_linode_cli_display
                                properties {
                                  up {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                  down {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                }
                              }
                              mode {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              config_id {
                                type
                                description
                                example
                                readOnly
                              }
                              scopes {
                                type
                                format
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              website {
                                type
                                format
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              token {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              user_agent {
                                type
                                description
                                example
                                readOnly
                              }
                              last_authenticated {
                                type
                                format
                                description
                                example
                                readOnly
                              }
                              last_remote_addr {
                                type
                                description
                                example
                                readOnly
                              }
                              ssh_key {
                                type
                                format
                                description
                                readOnly
                              }
                              country {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              attachments {
                                type
                                description
                                readOnly
                              }
                              closed {
                                x_linode_filterable
                                type
                                nullable
                                format
                                readOnly
                                description
                                example
                              }
                              closable {
                                type
                                description
                                example
                              }
                              gravatar_id {
                                type
                                readOnly
                                description
                                example
                              }
                              opened {
                                x_linode_filterable
                                type
                                format
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              opened_by {
                                type
                                readOnly
                                description
                                example
                                x_linode_cli_display
                              }
                              summary {
                                type
                                readOnly
                                minLength
                                maxLength
                                description
                                example
                                x_linode_cli_display
                              }
                              updated_by {
                                type
                                nullable
                                readOnly
                                description
                                example
                              }
                              from_linode {
                                type
                                readOnly
                                description
                                example
                              }
                            }
                          }
                        }
                        page {
                          type
                          readOnly
                          example
                        }
                        pages {
                          type
                          readOnly
                          example
                        }
                        results {
                          type
                          readOnly
                          example
                        }
                        id {
                          type
                          readOnly
                          description
                          x_linode_cli_display
                        }
                        action {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        created {
                          type
                          readOnly
                          format
                          description
                          example
                          x_linode_cli_display
                          x_linode_filterable
                        }
                        entity {
                          type
                          readOnly
                          description
                          properties {
                            id {
                              type
                              description
                              example
                              x_linode_filterable
                              readOnly
                            }
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                            type {
                              type
                              description
                              example
                              x_linode_filterable
                              readOnly
                            }
                            url {
                              type
                              description
                              example
                              format
                              readOnly
                            }
                          }
                        }
                        percent_complete {
                          type
                          readOnly
                          description
                        }
                        rate {
                          type
                          readOnly
                          description
                        }
                        read {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        seen {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        status {
                          type
                          readOnly
                          description
                          x_linode_cli_display
                          example
                        }
                        time_remaining {
                          type
                          readOnly
                          nullable
                          description
                        }
                        username {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                          pattern
                          minLength
                          maxLength
                          x_linode_filterable
                        }
                        date {
                          type
                          readOnly
                          format
                          description
                          example
                          x_linode_cli_display
                        }
                        label {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                          x_linode_filterable
                          minLength
                          maxLength
                          nullable
                          pattern
                        }
                        total {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        redirect_uri {
                          type
                          format
                          description
                          example
                          x_linode_cli_display
                        }
                        secret {
                          type
                          description
                          example
                          readOnly
                        }
                        thumbnail_url {
                          type
                          nullable
                          format
                          description
                          example
                          readOnly
                        }
                        public {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        usd {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        managed {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        longview_subscription {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        network_helper {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        backups_enabled {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        billable {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        quota {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        used {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        restricted {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        ssh_keys {
                          type
                          description
                        }
                        global {
                          type
                          description
                          properties {
                            add_linodes {
                              type
                              description
                              example
                            }
                            add_longview {
                              type
                              description
                              example
                            }
                            longview_subscription {
                              type
                              description
                              example
                            }
                            account_access {
                              type
                              nullable
                              description
                              example
                            }
                            cancel_account {
                              type
                              description
                              example
                            }
                            add_domains {
                              type
                              description
                              example
                            }
                            add_stackscripts {
                              type
                              description
                              example
                            }
                            add_nodebalancers {
                              type
                              description
                              example
                            }
                            add_images {
                              type
                              description
                              example
                            }
                            add_volumes {
                              type
                              description
                              example
                            }
                          }
                        }
                        linode {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        domain {
                          type
                          description
                          pattern
                          example
                          x_linode_filterable
                          x_linode_cli_display
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        nodebalancer {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        image {
                          type
                          description
                          x_linode_filterable
                          readOnly
                          nullable
                          x_linode_cli_display
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        longview {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        stackscript {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        volume {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        type {
                          type
                          description
                          example
                          x_linode_cli_display
                          readOnly
                        }
                        group {
                          deprecated
                          type
                          description
                          example
                          minLength
                          maxLength
                          x_linode_filterable
                          x_linode_cli_display
                          readOnly
                        }
                        description {
                          type
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                          x_linode_filterable
                          readOnly
                        }
                        soa_email {
                          type
                          format
                          description
                          example
                          x_linode_cli_display
                        }
                        retry_sec {
                          type
                          description
                          example
                        }
                        master_ips {
                          type
                          description
                        }
                        axfr_ips {
                          type
                          description
                        }
                        expire_sec {
                          type
                          description
                          example
                        }
                        refresh_sec {
                          type
                          description
                          example
                        }
                        ttl_sec {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        tags {
                          x_linode_filterable
                          description
                          type
                        }
                        name {
                          type
                          description
                          minLength
                          maxLength
                          example
                          x_linode_cli_display
                          pattern
                        }
                        target {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        priority {
                          type
                          minimum
                          maximum
                          description
                          example
                          x_linode_cli_display
                        }
                        weight {
                          type
                          description
                          example
                          x_linode_cli_display
                          minimum
                          maximum
                        }
                        port {
                          type
                          description
                          example
                          minimum
                          maximum
                          x_linode_cli_display
                        }
                        service {
                          type
                          nullable
                          description
                        }
                        protocol {
                          type
                          nullable
                          description
                          example
                          x_linode_cli_display
                        }
                        tag {
                          type
                          nullable
                          description
                        }
                        created_by {
                          type
                          description
                          example
                          readOnly
                        }
                        deprecated {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                        }
                        is_public {
                          x_linode_filterable
                          description
                          type
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        size {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          maximum
                        }
                        expiry {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        vendor {
                          x_linode_filterable
                          type
                          nullable
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        region {
                          x_linode_filterable
                          readOnly
                          description
                          x_linode_cli_display
                          type
                          example
                        }
                        hypervisor {
                          type
                          description
                          example
                          readOnly
                        }
                        updated {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          x_linode_filterable
                        }
                        ipv4 {
                          type
                          readOnly
                          description
                          x_linode_cli_display
                          format
                          properties {
                            public {
                              type
                              description
                              readOnly
                            }
                            private {
                              type
                              description
                              readOnly
                            }
                            shared {
                              type
                              readOnly
                            }
                          }
                        }
                        ipv6 {
                          type
                          description
                          example
                          readOnly
                          nullable
                          format
                          x_linode_cli_display
                          properties {
                            link_local {
                              type
                              description
                            }
                            slaac {
                              type
                              description
                            }
                            global {
                              type
                              description
                            }
                          }
                        }
                        specs {
                          type
                          description
                          readOnly
                          properties {
                            disk {
                              type
                              description
                              example
                              readOnly
                            }
                            memory {
                              type
                              description
                              example
                              readOnly
                            }
                            vcpus {
                              type
                              description
                              example
                              readOnly
                            }
                            transfer {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        alerts {
                          type
                          properties {
                            cpu {
                              type
                              description
                              example
                            }
                            network_in {
                              type
                              description
                              example
                            }
                            network_out {
                              type
                              description
                              example
                            }
                            transfer_quota {
                              type
                              description
                              example
                            }
                            io {
                              type
                              description
                              example
                            }
                          }
                        }
                        backups {
                          type
                          description
                          properties {
                            enabled {
                              type
                              description
                              example
                              readOnly
                            }
                            schedule {
                              type
                              properties {
                                day {
                                  type
                                  nullable
                                  description
                                  example
                                }
                                window {
                                  type
                                  nullable
                                  description
                                  example
                                }
                              }
                            }
                          }
                        }
                        watchdog_enabled {
                          type
                          description
                          example
                        }
                        automatic {
                          type
                          items {
                            allOf {
                              properties {
                                id {
                                  type
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                type {
                                  type
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                status {
                                  type
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                created {
                                  type
                                  format
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                updated {
                                  type
                                  format
                                  readOnly
                                  description
                                  example
                                }
                                finished {
                                  type
                                  format
                                  readOnly
                                  description
                                  example
                                }
                                label {
                                  type
                                  description
                                  example
                                  x_linode_cli_display
                                  nullable
                                }
                                configs {
                                  type
                                  readOnly
                                  description
                                }
                                disks {
                                  type
                                  readOnly
                                  description
                                  items {
                                    properties {
                                      size {
                                        type
                                        example
                                      }
                                      filesystem {
                                        type
                                        description
                                        example
                                        x_linode_cli_display
                                      }
                                      label {
                                        type
                                        example
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        snapshot {
                          type
                          properties {
                            in_progress {
                              type
                              description
                              properties {
                                id {
                                  type
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                type {
                                  type
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                status {
                                  type
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                created {
                                  type
                                  format
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                updated {
                                  type
                                  format
                                  readOnly
                                  description
                                  example
                                }
                                finished {
                                  type
                                  format
                                  readOnly
                                  description
                                  example
                                }
                                label {
                                  type
                                  description
                                  example
                                  x_linode_cli_display
                                  nullable
                                }
                                configs {
                                  type
                                  readOnly
                                  description
                                }
                                disks {
                                  type
                                  readOnly
                                  description
                                  items {
                                    properties {
                                      size {
                                        type
                                        example
                                      }
                                      filesystem {
                                        type
                                        description
                                        example
                                        x_linode_cli_display
                                      }
                                      label {
                                        type
                                        example
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            current {
                              type
                              description
                              properties {
                                id {
                                  type
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                type {
                                  type
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                status {
                                  type
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                created {
                                  type
                                  format
                                  readOnly
                                  description
                                  example
                                  x_linode_cli_display
                                }
                                updated {
                                  type
                                  format
                                  readOnly
                                  description
                                  example
                                }
                                finished {
                                  type
                                  format
                                  readOnly
                                  description
                                  example
                                }
                                label {
                                  type
                                  description
                                  example
                                  x_linode_cli_display
                                  nullable
                                }
                                configs {
                                  type
                                  readOnly
                                  description
                                }
                                disks {
                                  type
                                  readOnly
                                  description
                                  items {
                                    properties {
                                      size {
                                        type
                                        example
                                      }
                                      filesystem {
                                        type
                                        description
                                        example
                                        x_linode_cli_display
                                      }
                                      label {
                                        type
                                        example
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        finished {
                          type
                          format
                          readOnly
                          description
                          example
                        }
                        configs {
                          type
                          readOnly
                          description
                        }
                        disks {
                          type
                          readOnly
                          description
                          items {
                            properties {
                              size {
                                type
                                example
                              }
                              filesystem {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              label {
                                type
                                example
                              }
                            }
                          }
                        }
                        kernel {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        comments {
                          type
                          nullable
                          description
                          example
                        }
                        memory_limit {
                          type
                          description
                          example
                        }
                        run_level {
                          type
                          description
                          example
                        }
                        virt_mode {
                          type
                          description
                          example
                        }
                        helpers {
                          type
                          description
                          properties {
                            updatedb_disabled {
                              type
                              description
                              example
                            }
                            distro {
                              type
                              description
                              example
                            }
                            modules_dep {
                              type
                              description
                              example
                            }
                            network {
                              type
                              description
                              example
                            }
                            devtmpfs_automount {
                              type
                              description
                              example
                            }
                          }
                        }
                        devices {
                          type
                          properties {
                            sda {
                              type
                              description
                            }
                            sdb {
                              type
                              description
                            }
                            sdc {
                              type
                              description
                            }
                            sdd {
                              type
                              description
                            }
                            sde {
                              type
                              description
                            }
                            sdf {
                              type
                              description
                            }
                            sdg {
                              type
                              description
                            }
                            sdh {
                              type
                              description
                            }
                          }
                        }
                        root_device {
                          type
                          description
                          example
                        }
                        filesystem {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        address {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          minLength
                        }
                        gateway {
                          type
                          nullable
                          format
                          description
                          example
                          readOnly
                        }
                        subnet_mask {
                          type
                          format
                          description
                          example
                          readOnly
                        }
                        prefix {
                          type
                          description
                          example
                          readOnly
                        }
                        rdns {
                          type
                          description
                          x_linode_cli_display
                          example
                        }
                        linode_id {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          nullable
                        }
                        version {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        kvm {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                        }
                        xen {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                        }
                        architecture {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        pvops {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                        }
                        cpu {
                          type
                          description
                        }
                        io {
                          type
                          description
                          properties {
                            io {
                              type
                              description
                            }
                            swap {
                              type
                              description
                            }
                          }
                        }
                        netv4 {
                          type
                          description
                          properties {
                            in {
                              type
                              description
                            }
                            out {
                              type
                              description
                            }
                            private_in {
                              type
                              description
                            }
                            private_out {
                              type
                              description
                            }
                          }
                        }
                        netv6 {
                          type
                          description
                          properties {
                            in {
                              type
                              description
                            }
                            out {
                              type
                              description
                            }
                            private_in {
                              type
                              description
                            }
                            private_out {
                              type
                              description
                            }
                          }
                        }
                        title {
                          type
                          description
                          example
                        }
                        user_gravatar_id {
                          type
                          description
                          example
                          readOnly
                        }
                        images {
                          type
                          x_linode_filterable
                          description
                          x_linode_cli_display
                        }
                        deployments_total {
                          type
                          description
                          example
                          readOnly
                        }
                        deployments_active {
                          type
                          description
                          example
                          readOnly
                        }
                        rev_note {
                          x_linode_filterable
                          type
                          description
                          example
                        }
                        script {
                          type
                          description
                          example
                        }
                        user_defined_fields {
                          type
                          description
                          readOnly
                          items {
                            type
                            required
                            description
                            properties {
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                              name {
                                type
                                description
                                example
                                readOnly
                              }
                              example {
                                type
                                description
                                example
                                readOnly
                              }
                              oneOf {
                                type
                                description
                                example
                                readOnly
                              }
                              manyOf {
                                type
                                description
                                example
                                readOnly
                              }
                              default {
                                type
                                description
                                readOnly
                              }
                            }
                          }
                        }
                        disk {
                          x_linode_filterable
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        class {
                          x_linode_filterable
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        price {
                          type
                          readOnly
                          description
                          x_linode_cli_display
                          properties {
                            hourly {
                              type
                              description
                              example
                              x_linode_cli_display
                              readOnly
                            }
                            monthly {
                              type
                              description
                              example
                              x_linode_cli_display
                              readOnly
                            }
                          }
                        }
                        addons {
                          type
                          readOnly
                          description
                          properties {
                            backups {
                              type
                              readOnly
                              description
                              properties {
                                price {
                                  type
                                  description
                                  properties {
                                    hourly {
                                      type
                                      description
                                      example
                                    }
                                    monthly {
                                      type
                                      description
                                      example
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        network_out {
                          x_linode_filterable
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        memory {
                          x_linode_filterable
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        successor {
                          type
                          readOnly
                          nullable
                          description
                        }
                        transfer {
                          x_linode_filterable
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        vcpus {
                          x_linode_filterable
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        api_key {
                          type
                          description
                          example
                          readOnly
                        }
                        install_code {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        apps {
                          type
                          description
                          readOnly
                          properties {
                            apache {
                              type
                              description
                              example
                              readOnly
                            }
                            nginx {
                              type
                              description
                              example
                              readOnly
                            }
                            mysql {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        clients_included {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        services {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        ssh {
                          type
                          description
                          x_linode_cli_display
                          properties {
                            access {
                              type
                              description
                              example
                            }
                            user {
                              type
                              minLength
                              maxLength
                              description
                              example
                            }
                            port {
                              type
                              minimum
                              maximum
                              description
                              example
                            }
                            ip {
                              type
                              format
                              description
                              example
                            }
                          }
                        }
                        service_type {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        timeout {
                          type
                          minimum
                          maximum
                          description
                          example
                        }
                        body {
                          type
                          nullable
                          minLength
                          maxLength
                          description
                          example
                        }
                        consultation_group {
                          deprecated
                          type
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                        }
                        notes {
                          type
                          nullable
                          description
                          example
                        }
                        credentials {
                          type
                          description
                        }
                        hostname {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        client_conn_throttle {
                          type
                          minimum
                          maximum
                          description
                          example
                          x_linode_cli_display
                        }
                        algorithm {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        stickiness {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        check {
                          type
                          description
                          example
                        }
                        check_interval {
                          type
                          description
                          example
                        }
                        check_timeout {
                          type
                          minimum
                          maximum
                          description
                          example
                        }
                        check_attempts {
                          type
                          minimum
                          maximum
                          description
                          example
                        }
                        check_path {
                          type
                          description
                          example
                        }
                        check_body {
                          type
                          description
                          example
                        }
                        check_passive {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        cipher_suite {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        nodebalancer_id {
                          type
                          description
                          example
                          readOnly
                        }
                        ssl_commonname {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        ssl_fingerprint {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        ssl_cert {
                          type
                          format
                          nullable
                          description
                        }
                        ssl_key {
                          type
                          format
                          nullable
                          description
                        }
                        nodes_status {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                          properties {
                            up {
                              type
                              description
                              example
                              readOnly
                            }
                            down {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        mode {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        config_id {
                          type
                          description
                          example
                          readOnly
                        }
                        uid {
                          type
                          description
                          example
                          readOnly
                        }
                        timezone {
                          type
                          description
                          example
                        }
                        email_notifications {
                          type
                          description
                          example
                        }
                        referrals {
                          type
                          description
                          readOnly
                          properties {
                            code {
                              type
                              description
                              example
                              readOnly
                            }
                            url {
                              type
                              format
                              description
                              example
                              readOnly
                            }
                            total {
                              type
                              description
                              example
                              readOnly
                            }
                            completed {
                              type
                              description
                              example
                              readOnly
                            }
                            pending {
                              type
                              description
                              example
                              readOnly
                            }
                            credit {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        ip_whitelist_enabled {
                          deprecated
                          type
                          description
                          example
                        }
                        lish_auth_method {
                          type
                          description
                          example
                        }
                        authorized_keys {
                          type
                          nullable
                          description
                        }
                        two_factor_auth {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        scopes {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        website {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        token {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        user_agent {
                          type
                          description
                          example
                          readOnly
                        }
                        last_authenticated {
                          type
                          format
                          description
                          example
                          readOnly
                        }
                        last_remote_addr {
                          type
                          description
                          example
                          readOnly
                        }
                        ssh_key {
                          type
                          format
                          description
                          readOnly
                        }
                        attachments {
                          type
                          description
                          readOnly
                        }
                        closed {
                          x_linode_filterable
                          type
                          nullable
                          format
                          readOnly
                          description
                          example
                        }
                        closable {
                          type
                          description
                          example
                        }
                        gravatar_id {
                          type
                          readOnly
                          description
                          example
                        }
                        opened {
                          x_linode_filterable
                          type
                          format
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        opened_by {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        summary {
                          type
                          readOnly
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                        }
                        updated_by {
                          type
                          nullable
                          readOnly
                          description
                          example
                        }
                        filesystem_path {
                          type
                          description
                          example
                          readOnly
                        }
                      }
                    }
                  }
                }
              }
              _204 {
                description
              }
              default {
                description
                content {
                  application_json {
                    schema {
                      type
                      properties {
                        errors {
                          items {
                            properties {
                              reason {
                                type
                                description
                                example
                              }
                              field {
                                type
                                description
                                example
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          post {
            x_linode_grant
            summary
            description
            operationId
            x_linode_cli_action
            x_linode_cli_command
            x_linode_charge
            x_linode_cli_skip
            security {
              oauth
            }
            x_code_samples {
              lang
              source
            }
            requestBody {
              description
              content {
                application_json {
                  schema {
                    type
                    description
                    required
                    properties {
                      cvv {
                        type
                        description
                        example
                      }
                      usd {
                        type
                        description
                        example
                      }
                      cancel_url {
                        type
                        description
                        example
                      }
                      redirect_url {
                        type
                        description
                        example
                      }
                      payer_id {
                        type
                        description
                        example
                      }
                      payment_id {
                        type
                        description
                        example
                      }
                      username {
                        type
                        pattern
                        minLength
                        maxLength
                        description
                        example
                      }
                      email {
                        type
                        format
                        description
                        example
                        x_linode_cli_display
                      }
                      restricted {
                        type
                        description
                        example
                      }
                      id {
                        type
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      type {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      domain {
                        type
                        pattern
                        description
                        example
                        x_linode_filterable
                        x_linode_cli_display
                      }
                      group {
                        deprecated
                        type
                        description
                        example
                        minLength
                        maxLength
                        x_linode_filterable
                        x_linode_cli_display
                      }
                      status {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      description {
                        type
                        minLength
                        maxLength
                        description
                        example
                      }
                      soa_email {
                        type
                        format
                        description
                        example
                        x_linode_cli_display
                      }
                      retry_sec {
                        type
                        description
                        example
                      }
                      master_ips {
                        type
                        description
                      }
                      axfr_ips {
                        type
                        description
                      }
                      expire_sec {
                        type
                        description
                        example
                      }
                      refresh_sec {
                        type
                        description
                        example
                      }
                      ttl_sec {
                        type
                        description
                        example
                      }
                      tags {
                        x_linode_filterable
                        description
                        type
                      }
                      backup_id {
                        type
                        example
                        description
                      }
                      backups_enabled {
                        type
                        description
                        example
                      }
                      swap_size {
                        type
                        example
                        description
                        default
                      }
                      region {
                        type
                        description
                        example
                      }
                      image {
                        type
                        description
                        example
                      }
                      root_pass {
                        type
                        format
                        description
                        example
                        writeOnly
                        minLength
                        maxLength
                        pattern
                      }
                      authorized_keys {
                        type
                        description
                        writeOnly
                      }
                      stackscript_id {
                        type
                        description
                        example
                      }
                      stackscript_data {
                        type
                        description
                      }
                      booted {
                        type
                        description
                      }
                      label {
                        x_linode_filterable
                        x_linode_cli_display
                        description
                        type
                        minLength
                        maxLength
                        example
                        pattern
                      }
                      private_ip {
                        type
                        description
                        example
                      }
                      authorized_users {
                        type
                        description
                        writeOnly
                      }
                      linode_id {
                        type
                        description
                        example
                        readOnly
                      }
                      overwrite {
                        type
                        description
                        example
                      }
                      config_id {
                        type
                        description
                        example
                      }
                      disks {
                        type
                        description
                      }
                      configs {
                        type
                        description
                        items {
                          type
                          example
                          allOf {
                            type
                            description
                            properties {
                              id {
                                type
                                description
                                example
                                readOnly
                                x_linode_cli_display
                              }
                              port {
                                type
                                minimum
                                maximum
                                description
                                example
                                x_linode_cli_display
                              }
                              protocol {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              algorithm {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              stickiness {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              check {
                                type
                                description
                                example
                              }
                              check_interval {
                                type
                                description
                                example
                              }
                              check_timeout {
                                type
                                minimum
                                maximum
                                description
                                example
                              }
                              check_attempts {
                                type
                                minimum
                                maximum
                                description
                                example
                              }
                              check_path {
                                type
                                description
                                example
                              }
                              check_body {
                                type
                                description
                                example
                              }
                              check_passive {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              cipher_suite {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              nodebalancer_id {
                                type
                                description
                                example
                                readOnly
                              }
                              ssl_commonname {
                                type
                                description
                                readOnly
                                x_linode_cli_display
                              }
                              ssl_fingerprint {
                                type
                                description
                                readOnly
                                x_linode_cli_display
                              }
                              ssl_cert {
                                type
                                format
                                nullable
                                description
                              }
                              ssl_key {
                                type
                                format
                                nullable
                                description
                              }
                              nodes_status {
                                type
                                description
                                readOnly
                                x_linode_cli_display
                                properties {
                                  up {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                  down {
                                    type
                                    description
                                    example
                                    readOnly
                                  }
                                }
                              }
                              nodes {
                                type
                                description
                                items {
                                  type
                                  description
                                  properties {
                                    id {
                                      type
                                      description
                                      example
                                      readOnly
                                      x_linode_cli_display
                                    }
                                    address {
                                      type
                                      format
                                      description
                                      example
                                      x_linode_cli_display
                                    }
                                    label {
                                      type
                                      minLength
                                      maxLength
                                      description
                                      example
                                      x_linode_cli_display
                                    }
                                    status {
                                      type
                                      description
                                      example
                                      readOnly
                                      x_linode_cli_display
                                    }
                                    weight {
                                      type
                                      minimum
                                      maximum
                                      description
                                      example
                                      x_linode_cli_display
                                    }
                                    mode {
                                      type
                                      description
                                      example
                                      x_linode_cli_display
                                    }
                                    config_id {
                                      type
                                      description
                                      example
                                      readOnly
                                    }
                                    nodebalancer_id {
                                      type
                                      description
                                      example
                                      readOnly
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      kernel {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      comments {
                        type
                        nullable
                        description
                        example
                      }
                      memory_limit {
                        type
                        description
                        example
                      }
                      run_level {
                        type
                        description
                        example
                      }
                      virt_mode {
                        type
                        description
                        example
                      }
                      helpers {
                        type
                        description
                        properties {
                          updatedb_disabled {
                            type
                            description
                            example
                          }
                          distro {
                            type
                            description
                            example
                          }
                          modules_dep {
                            type
                            description
                            example
                          }
                          network {
                            type
                            description
                            example
                          }
                          devtmpfs_automount {
                            type
                            description
                            example
                          }
                        }
                      }
                      devices {
                        type
                        properties {
                          sda {
                            type
                            description
                          }
                          sdb {
                            type
                            description
                          }
                          sdc {
                            type
                            description
                          }
                          sdd {
                            type
                            description
                          }
                          sde {
                            type
                            description
                          }
                          sdf {
                            type
                            description
                          }
                          sdg {
                            type
                            description
                          }
                          sdh {
                            type
                            description
                          }
                        }
                      }
                      root_device {
                        type
                        description
                        example
                      }
                      size {
                        x_linode_filterable
                        type
                        example
                        description
                        minimum
                        default
                        maximum
                        x_linode_cli_display
                      }
                      filesystem {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      read_only {
                        type
                        description
                        example
                      }
                      password {
                        type
                        description
                        minLength
                        maxLength
                        example
                      }
                      public {
                        type
                        description
                        example
                      }
                      api_key {
                        type
                        description
                        example
                        readOnly
                      }
                      install_code {
                        type
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      apps {
                        type
                        description
                        readOnly
                        properties {
                          apache {
                            type
                            description
                            example
                            readOnly
                          }
                          nginx {
                            type
                            description
                            example
                            readOnly
                          }
                          mysql {
                            type
                            description
                            example
                            readOnly
                          }
                        }
                      }
                      created {
                        type
                        format
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      updated {
                        type
                        format
                        description
                        example
                        readOnly
                      }
                      name {
                        type
                        minLength
                        maxLength
                        pattern
                        description
                        example
                        x_linode_cli_display
                      }
                      phone {
                        type
                        description
                        x_linode_cli_display
                        properties {
                          primary {
                            type
                            nullable
                            format
                            description
                            example
                          }
                          secondary {
                            type
                            nullable
                            format
                            description
                          }
                        }
                      }
                      assignments {
                        type
                        description
                        items {
                          properties {
                            address {
                              type
                              format
                              description
                              example
                            }
                            linode_id {
                              type
                              description
                              example
                            }
                          }
                        }
                      }
                      ips {
                        type
                        description
                      }
                      client_conn_throttle {
                        type
                        minimum
                        maximum
                        description
                        example
                        x_linode_cli_display
                      }
                      port {
                        type
                        minimum
                        maximum
                        description
                        example
                        x_linode_cli_display
                      }
                      protocol {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      algorithm {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      stickiness {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      check {
                        type
                        description
                        example
                      }
                      check_interval {
                        type
                        description
                        example
                      }
                      check_timeout {
                        type
                        minimum
                        maximum
                        description
                        example
                      }
                      check_attempts {
                        type
                        minimum
                        maximum
                        description
                        example
                      }
                      check_path {
                        type
                        description
                        example
                      }
                      check_body {
                        type
                        description
                        example
                      }
                      check_passive {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      cipher_suite {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      nodebalancer_id {
                        type
                        description
                        example
                        readOnly
                      }
                      ssl_commonname {
                        type
                        description
                        readOnly
                        x_linode_cli_display
                      }
                      ssl_fingerprint {
                        type
                        description
                        readOnly
                        x_linode_cli_display
                      }
                      ssl_cert {
                        type
                        format
                        nullable
                        description
                      }
                      ssl_key {
                        type
                        format
                        nullable
                        description
                      }
                      nodes_status {
                        type
                        description
                        readOnly
                        x_linode_cli_display
                        properties {
                          up {
                            type
                            description
                            example
                            readOnly
                          }
                          down {
                            type
                            description
                            example
                            readOnly
                          }
                        }
                      }
                      tfa_code {
                        type
                        description
                        example
                      }
                      scopes {
                        type
                        format
                        description
                        example
                      }
                      expiry {
                        type
                        format
                        description
                      }
                      ssh_key {
                        type
                        format
                        description
                      }
                      domain_id {
                        type
                        description
                      }
                      longviewclient_id {
                        type
                        description
                      }
                      summary {
                        type
                        minLength
                        maxLength
                        description
                        example
                      }
                      volume_id {
                        type
                        description
                      }
                      linodes {
                        type
                        description
                      }
                      domains {
                        type
                        description
                      }
                      volumes {
                        type
                        description
                      }
                      nodebalancers {
                        type
                        description
                      }
                    }
                  }
                }
              }
            }
            responses {
              _200 {
                description
                content {
                  application_json {
                    schema {
                      description
                      properties {
                        id {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        redirect_uri {
                          type
                          format
                          description
                          example
                          x_linode_cli_display
                        }
                        label {
                          x_linode_filterable
                          type
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                          nullable
                          pattern
                        }
                        status {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        secret {
                          type
                          description
                          example
                          readOnly
                        }
                        thumbnail_url {
                          type
                          nullable
                          format
                          description
                          example
                          readOnly
                        }
                        public {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        date {
                          type
                          readOnly
                          format
                          description
                          example
                          x_linode_cli_display
                        }
                        usd {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        payment_id {
                          type
                          description
                          example
                        }
                        username {
                          type
                          pattern
                          minLength
                          maxLength
                          description
                          x_linode_filterable
                          example
                          x_linode_cli_display
                          readOnly
                        }
                        email {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        restricted {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        ssh_keys {
                          type
                          description
                        }
                        type {
                          type
                          description
                          example
                          x_linode_cli_display
                          readOnly
                        }
                        domain {
                          type
                          pattern
                          description
                          example
                          x_linode_filterable
                          x_linode_cli_display
                        }
                        group {
                          deprecated
                          type
                          description
                          example
                          minLength
                          maxLength
                          x_linode_filterable
                          x_linode_cli_display
                        }
                        description {
                          type
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                          x_linode_filterable
                          readOnly
                        }
                        soa_email {
                          type
                          format
                          description
                          example
                          x_linode_cli_display
                        }
                        retry_sec {
                          type
                          description
                          example
                        }
                        master_ips {
                          type
                          description
                        }
                        axfr_ips {
                          type
                          description
                        }
                        expire_sec {
                          type
                          description
                          example
                        }
                        refresh_sec {
                          type
                          description
                          example
                        }
                        ttl_sec {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        tags {
                          x_linode_filterable
                          description
                          type
                        }
                        name {
                          type
                          description
                          minLength
                          maxLength
                          example
                          x_linode_cli_display
                          pattern
                        }
                        target {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        priority {
                          type
                          minimum
                          maximum
                          description
                          example
                          x_linode_cli_display
                        }
                        weight {
                          type
                          description
                          example
                          x_linode_cli_display
                          minimum
                          maximum
                        }
                        port {
                          type
                          description
                          example
                          minimum
                          maximum
                          x_linode_cli_display
                        }
                        service {
                          type
                          nullable
                          description
                        }
                        protocol {
                          type
                          nullable
                          description
                          example
                          x_linode_cli_display
                        }
                        tag {
                          type
                          nullable
                          description
                        }
                        created {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          x_linode_filterable
                        }
                        created_by {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        deprecated {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                        }
                        is_public {
                          x_linode_filterable
                          description
                          type
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        size {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          maximum
                        }
                        expiry {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        vendor {
                          x_linode_filterable
                          type
                          nullable
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        region {
                          x_linode_filterable
                          readOnly
                          description
                          x_linode_cli_display
                          type
                          example
                        }
                        image {
                          x_linode_filterable
                          readOnly
                          nullable
                          x_linode_cli_display
                        }
                        hypervisor {
                          type
                          description
                          example
                          readOnly
                        }
                        updated {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          x_linode_filterable
                        }
                        ipv4 {
                          type
                          readOnly
                          description
                          x_linode_cli_display
                          format
                        }
                        ipv6 {
                          type
                          description
                          example
                          readOnly
                          nullable
                          format
                          x_linode_cli_display
                        }
                        specs {
                          type
                          description
                          readOnly
                          properties {
                            disk {
                              type
                              description
                              example
                              readOnly
                            }
                            memory {
                              type
                              description
                              example
                              readOnly
                            }
                            vcpus {
                              type
                              description
                              example
                              readOnly
                            }
                            transfer {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        alerts {
                          type
                          properties {
                            cpu {
                              type
                              description
                              example
                            }
                            network_in {
                              type
                              description
                              example
                            }
                            network_out {
                              type
                              description
                              example
                            }
                            transfer_quota {
                              type
                              description
                              example
                            }
                            io {
                              type
                              description
                              example
                            }
                          }
                        }
                        backups {
                          type
                          description
                          properties {
                            enabled {
                              type
                              description
                              example
                              readOnly
                            }
                            schedule {
                              type
                              properties {
                                day {
                                  type
                                  nullable
                                  description
                                  example
                                }
                                window {
                                  type
                                  nullable
                                  description
                                  example
                                }
                              }
                            }
                          }
                        }
                        watchdog_enabled {
                          type
                          description
                          example
                        }
                        finished {
                          type
                          format
                          readOnly
                          description
                          example
                        }
                        configs {
                          type
                          readOnly
                          description
                        }
                        disks {
                          type
                          readOnly
                          description
                          items {
                            properties {
                              size {
                                type
                                example
                              }
                              filesystem {
                                type
                                description
                                example
                                x_linode_cli_display
                              }
                              label {
                                type
                                example
                              }
                            }
                          }
                        }
                        kernel {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        comments {
                          type
                          nullable
                          description
                          example
                        }
                        memory_limit {
                          type
                          description
                          example
                        }
                        run_level {
                          type
                          description
                          example
                        }
                        virt_mode {
                          type
                          description
                          example
                        }
                        helpers {
                          type
                          description
                          properties {
                            updatedb_disabled {
                              type
                              description
                              example
                            }
                            distro {
                              type
                              description
                              example
                            }
                            modules_dep {
                              type
                              description
                              example
                            }
                            network {
                              type
                              description
                              example
                            }
                            devtmpfs_automount {
                              type
                              description
                              example
                            }
                          }
                        }
                        devices {
                          type
                          properties {
                            sda {
                              type
                              description
                            }
                            sdb {
                              type
                              description
                            }
                            sdc {
                              type
                              description
                            }
                            sdd {
                              type
                              description
                            }
                            sde {
                              type
                              description
                            }
                            sdf {
                              type
                              description
                            }
                            sdg {
                              type
                              description
                            }
                            sdh {
                              type
                              description
                            }
                          }
                        }
                        root_device {
                          type
                          description
                          example
                        }
                        filesystem {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        address {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          minLength
                        }
                        gateway {
                          type
                          nullable
                          format
                          description
                          example
                          readOnly
                        }
                        subnet_mask {
                          type
                          format
                          description
                          example
                          readOnly
                        }
                        prefix {
                          type
                          description
                          example
                          readOnly
                        }
                        rdns {
                          type
                          description
                          x_linode_cli_display
                          example
                        }
                        linode_id {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          nullable
                        }
                        user_gravatar_id {
                          type
                          description
                          example
                          readOnly
                        }
                        images {
                          type
                          x_linode_filterable
                          description
                          x_linode_cli_display
                        }
                        deployments_total {
                          type
                          description
                          example
                          readOnly
                        }
                        deployments_active {
                          type
                          description
                          example
                          readOnly
                        }
                        rev_note {
                          x_linode_filterable
                          type
                          description
                          example
                        }
                        script {
                          type
                          description
                          example
                        }
                        user_defined_fields {
                          type
                          description
                          readOnly
                          items {
                            type
                            required
                            description
                            properties {
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                              name {
                                type
                                description
                                example
                                readOnly
                              }
                              example {
                                type
                                description
                                example
                                readOnly
                              }
                              oneOf {
                                type
                                description
                                example
                                readOnly
                              }
                              manyOf {
                                type
                                description
                                example
                                readOnly
                              }
                              default {
                                type
                                description
                                readOnly
                              }
                            }
                          }
                        }
                        api_key {
                          type
                          description
                          example
                          readOnly
                        }
                        install_code {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        apps {
                          type
                          description
                          readOnly
                          properties {
                            apache {
                              type
                              description
                              example
                              readOnly
                            }
                            nginx {
                              type
                              description
                              example
                              readOnly
                            }
                            mysql {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        phone {
                          type
                          description
                          x_linode_cli_display
                          properties {
                            primary {
                              type
                              nullable
                              format
                              description
                              example
                            }
                            secondary {
                              type
                              nullable
                              format
                              description
                            }
                          }
                        }
                        service_type {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        timeout {
                          type
                          minimum
                          maximum
                          description
                          example
                        }
                        body {
                          type
                          nullable
                          minLength
                          maxLength
                          description
                          example
                        }
                        consultation_group {
                          deprecated
                          type
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                        }
                        notes {
                          type
                          nullable
                          description
                          example
                        }
                        credentials {
                          type
                          description
                        }
                        hostname {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        client_conn_throttle {
                          type
                          minimum
                          maximum
                          description
                          example
                          x_linode_cli_display
                        }
                        transfer {
                          type
                          description
                          properties {
                            total {
                              type
                              nullable
                              description
                              example
                              readOnly
                            }
                            in {
                              type
                              nullable
                              description
                              example
                              readOnly
                            }
                            out {
                              type
                              nullable
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        algorithm {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        stickiness {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        check {
                          type
                          description
                          example
                        }
                        check_interval {
                          type
                          description
                          example
                        }
                        check_timeout {
                          type
                          minimum
                          maximum
                          description
                          example
                        }
                        check_attempts {
                          type
                          minimum
                          maximum
                          description
                          example
                        }
                        check_path {
                          type
                          description
                          example
                        }
                        check_body {
                          type
                          description
                          example
                        }
                        check_passive {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        cipher_suite {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        nodebalancer_id {
                          type
                          description
                          example
                          readOnly
                        }
                        ssl_commonname {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        ssl_fingerprint {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        ssl_cert {
                          type
                          format
                          nullable
                          description
                        }
                        ssl_key {
                          type
                          format
                          nullable
                          description
                        }
                        nodes_status {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                          properties {
                            up {
                              type
                              description
                              example
                              readOnly
                            }
                            down {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        mode {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        config_id {
                          type
                          description
                          example
                          readOnly
                        }
                        scratch {
                          type
                          description
                          example
                        }
                        scopes {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        token {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        ssh_key {
                          type
                          format
                          description
                          readOnly
                        }
                        attachments {
                          type
                          description
                          readOnly
                        }
                        closed {
                          x_linode_filterable
                          type
                          nullable
                          format
                          readOnly
                          description
                          example
                        }
                        closable {
                          type
                          description
                          example
                        }
                        entity {
                          type
                          readOnly
                          description
                          properties {
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                            type {
                              type
                              description
                              example
                              readOnly
                            }
                            url {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        gravatar_id {
                          type
                          readOnly
                          description
                          example
                        }
                        opened {
                          x_linode_filterable
                          type
                          format
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        opened_by {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        summary {
                          type
                          readOnly
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                        }
                        updated_by {
                          type
                          nullable
                          readOnly
                          description
                          example
                        }
                        from_linode {
                          type
                          readOnly
                          description
                          example
                        }
                        filesystem_path {
                          type
                          description
                          example
                          readOnly
                        }
                      }
                    }
                  }
                }
              }
              default {
                description
                content {
                  application_json {
                    schema {
                      type
                      properties {
                        errors {
                          type
                          items {
                            description
                            properties {
                              reason {
                                type
                                description
                                example
                              }
                              field {
                                type
                                description
                                example
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          put {
            x_linode_grant
            summary
            description
            operationId
            x_linode_cli_action
            x_linode_cli_skip
            security {
              oauth
            }
            x_code_samples {
              lang
              source
            }
            requestBody {
              description
              content {
                application_json {
                  schema {
                    type
                    required
                    description
                    properties {
                      active_since {
                        type
                        format
                        description
                        example
                        readOnly
                      }
                      address_1 {
                        type
                        description
                        maxLength
                        example
                      }
                      address_2 {
                        type
                        description
                        maxLength
                        example
                      }
                      balance {
                        type
                        readOnly
                        description
                        example
                        x_linode_cli_display
                      }
                      balance_uninvoiced {
                        type
                        readOnly
                        description
                        example
                        x_linode_cli_display
                      }
                      city {
                        type
                        description
                        maxLength
                        example
                      }
                      credit_card {
                        type
                        readOnly
                        description
                        properties {
                          expiry {
                            type
                            description
                            example
                          }
                          last_four {
                            type
                            description
                            example
                          }
                        }
                      }
                      company {
                        type
                        description
                        maxLength
                        example
                      }
                      country {
                        type
                        description
                        minLength
                        maxLength
                        example
                      }
                      email {
                        type
                        description
                        maxLength
                        example
                        x_linode_cli_display
                        format
                        readOnly
                      }
                      first_name {
                        type
                        description
                        maxLength
                        example
                        x_linode_cli_display
                      }
                      last_name {
                        type
                        description
                        maxLength
                        example
                        x_linode_cli_display
                      }
                      phone {
                        type
                        description
                        maxLength
                        example
                        x_linode_cli_display
                        properties {
                          primary {
                            type
                            nullable
                            format
                            description
                            example
                          }
                          secondary {
                            type
                            nullable
                            format
                            description
                          }
                        }
                      }
                      state {
                        type
                        description
                        maxLength
                        example
                      }
                      tax_id {
                        type
                        description
                        maxLength
                        example
                      }
                      zip {
                        type
                        description
                        maxLength
                        example
                      }
                      id {
                        type
                        description
                        readOnly
                        x_linode_cli_display
                      }
                      redirect_uri {
                        type
                        format
                        description
                        example
                        x_linode_cli_display
                      }
                      label {
                        x_linode_filterable
                        type
                        minLength
                        maxLength
                        description
                        example
                        x_linode_cli_display
                        pattern
                        readOnly
                      }
                      status {
                        type
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      secret {
                        type
                        description
                        example
                        readOnly
                      }
                      thumbnail_url {
                        type
                        nullable
                        format
                        description
                        example
                        readOnly
                      }
                      public {
                        x_linode_filterable
                        type
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      managed {
                        type
                        readOnly
                        description
                        example
                        x_linode_cli_display
                      }
                      longview_subscription {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      network_helper {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      backups_enabled {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      username {
                        type
                        pattern
                        minLength
                        maxLength
                        description
                        x_linode_filterable
                        example
                        x_linode_cli_display
                        readOnly
                      }
                      restricted {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      ssh_keys {
                        type
                        description
                      }
                      global {
                        type
                        description
                        properties {
                          add_linodes {
                            type
                            description
                            example
                          }
                          add_longview {
                            type
                            description
                            example
                          }
                          longview_subscription {
                            type
                            description
                            example
                          }
                          account_access {
                            type
                            nullable
                            description
                            example
                          }
                          cancel_account {
                            type
                            description
                            example
                          }
                          add_domains {
                            type
                            description
                            example
                          }
                          add_stackscripts {
                            type
                            description
                            example
                          }
                          add_nodebalancers {
                            type
                            description
                            example
                          }
                          add_images {
                            type
                            description
                            example
                          }
                          add_volumes {
                            type
                            description
                            example
                          }
                        }
                      }
                      linode {
                        type
                        description
                        items {
                          properties {
                            id {
                              type
                              description
                              example
                            }
                            permissions {
                              type
                              nullable
                              description
                              example
                            }
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                      }
                      domain {
                        type
                        description
                        pattern
                        example
                        x_linode_filterable
                        x_linode_cli_display
                        items {
                          properties {
                            id {
                              type
                              description
                              example
                            }
                            permissions {
                              type
                              nullable
                              description
                              example
                            }
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                      }
                      nodebalancer {
                        type
                        description
                        items {
                          properties {
                            id {
                              type
                              description
                              example
                            }
                            permissions {
                              type
                              nullable
                              description
                              example
                            }
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                      }
                      image {
                        type
                        description
                        x_linode_filterable
                        readOnly
                        nullable
                        x_linode_cli_display
                        items {
                          properties {
                            id {
                              type
                              description
                              example
                            }
                            permissions {
                              type
                              nullable
                              description
                              example
                            }
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                      }
                      longview {
                        type
                        description
                        items {
                          properties {
                            id {
                              type
                              description
                              example
                            }
                            permissions {
                              type
                              nullable
                              description
                              example
                            }
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                      }
                      stackscript {
                        type
                        description
                        items {
                          properties {
                            id {
                              type
                              description
                              example
                            }
                            permissions {
                              type
                              nullable
                              description
                              example
                            }
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                      }
                      volume {
                        type
                        description
                        items {
                          properties {
                            id {
                              type
                              description
                              example
                            }
                            permissions {
                              type
                              nullable
                              description
                              example
                            }
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                      }
                      type {
                        type
                        description
                        example
                        x_linode_cli_display
                        readOnly
                      }
                      group {
                        deprecated
                        type
                        description
                        example
                        minLength
                        maxLength
                        x_linode_filterable
                        x_linode_cli_display
                        readOnly
                      }
                      description {
                        type
                        minLength
                        maxLength
                        description
                        example
                        x_linode_cli_display
                        x_linode_filterable
                      }
                      soa_email {
                        type
                        format
                        description
                        example
                        x_linode_cli_display
                      }
                      retry_sec {
                        type
                        description
                        example
                      }
                      master_ips {
                        type
                        description
                      }
                      axfr_ips {
                        type
                        description
                      }
                      expire_sec {
                        type
                        description
                        example
                      }
                      refresh_sec {
                        type
                        description
                        example
                      }
                      ttl_sec {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      tags {
                        x_linode_filterable
                        description
                        type
                      }
                      name {
                        type
                        description
                        minLength
                        maxLength
                        example
                        x_linode_cli_display
                        pattern
                      }
                      target {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      priority {
                        type
                        minimum
                        maximum
                        description
                        example
                        x_linode_cli_display
                      }
                      weight {
                        type
                        description
                        example
                        x_linode_cli_display
                        minimum
                        maximum
                      }
                      port {
                        type
                        description
                        example
                        minimum
                        maximum
                        x_linode_cli_display
                      }
                      service {
                        type
                        nullable
                        description
                      }
                      protocol {
                        type
                        nullable
                        description
                        example
                        x_linode_cli_display
                      }
                      tag {
                        type
                        nullable
                        description
                      }
                      created {
                        type
                        format
                        description
                        example
                        readOnly
                        x_linode_cli_display
                        x_linode_filterable
                      }
                      created_by {
                        type
                        description
                        example
                        readOnly
                      }
                      deprecated {
                        x_linode_filterable
                        type
                        description
                        example
                        readOnly
                      }
                      is_public {
                        x_linode_filterable
                        description
                        type
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      size {
                        x_linode_filterable
                        type
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      expiry {
                        type
                        format
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      vendor {
                        x_linode_filterable
                        type
                        nullable
                        description
                        readOnly
                        x_linode_cli_display
                      }
                      region {
                        x_linode_filterable
                        readOnly
                        description
                        x_linode_cli_display
                        type
                        example
                      }
                      hypervisor {
                        type
                        description
                        example
                        readOnly
                      }
                      updated {
                        type
                        format
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      ipv4 {
                        type
                        readOnly
                        description
                        x_linode_cli_display
                        format
                      }
                      ipv6 {
                        type
                        description
                        example
                        readOnly
                        nullable
                        format
                        x_linode_cli_display
                      }
                      specs {
                        type
                        description
                        readOnly
                        properties {
                          disk {
                            type
                            description
                            example
                            readOnly
                          }
                          memory {
                            type
                            description
                            example
                            readOnly
                          }
                          vcpus {
                            type
                            description
                            example
                            readOnly
                          }
                          transfer {
                            type
                            description
                            example
                            readOnly
                          }
                        }
                      }
                      alerts {
                        type
                        properties {
                          cpu {
                            type
                            description
                            example
                          }
                          network_in {
                            type
                            description
                            example
                          }
                          network_out {
                            type
                            description
                            example
                          }
                          transfer_quota {
                            type
                            description
                            example
                          }
                          io {
                            type
                            description
                            example
                          }
                        }
                      }
                      backups {
                        type
                        description
                        properties {
                          enabled {
                            type
                            description
                            example
                            readOnly
                          }
                          schedule {
                            type
                            properties {
                              day {
                                type
                                nullable
                                description
                                example
                              }
                              window {
                                type
                                nullable
                                description
                                example
                              }
                            }
                          }
                        }
                      }
                      watchdog_enabled {
                        type
                        description
                        example
                      }
                      kernel {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      comments {
                        type
                        nullable
                        description
                        example
                      }
                      memory_limit {
                        type
                        description
                        example
                      }
                      run_level {
                        type
                        description
                        example
                      }
                      virt_mode {
                        type
                        description
                        example
                      }
                      helpers {
                        type
                        description
                        properties {
                          updatedb_disabled {
                            type
                            description
                            example
                          }
                          distro {
                            type
                            description
                            example
                          }
                          modules_dep {
                            type
                            description
                            example
                          }
                          network {
                            type
                            description
                            example
                          }
                          devtmpfs_automount {
                            type
                            description
                            example
                          }
                        }
                      }
                      devices {
                        type
                        properties {
                          sda {
                            type
                            description
                          }
                          sdb {
                            type
                            description
                          }
                          sdc {
                            type
                            description
                          }
                          sdd {
                            type
                            description
                          }
                          sde {
                            type
                            description
                          }
                          sdf {
                            type
                            description
                          }
                          sdg {
                            type
                            description
                          }
                          sdh {
                            type
                            description
                          }
                        }
                      }
                      root_device {
                        type
                        description
                        example
                      }
                      filesystem {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      rdns {
                        type
                        example
                        description
                        x_linode_cli_display
                      }
                      user_gravatar_id {
                        type
                        description
                        example
                        readOnly
                      }
                      images {
                        type
                        x_linode_filterable
                        description
                        x_linode_cli_display
                      }
                      deployments_total {
                        type
                        description
                        example
                        readOnly
                      }
                      deployments_active {
                        type
                        description
                        example
                        readOnly
                      }
                      rev_note {
                        x_linode_filterable
                        type
                        description
                        example
                      }
                      script {
                        type
                        description
                        example
                      }
                      user_defined_fields {
                        type
                        description
                        readOnly
                        items {
                          type
                          required
                          description
                          properties {
                            label {
                              type
                              description
                              example
                              readOnly
                            }
                            name {
                              type
                              description
                              example
                              readOnly
                            }
                            example {
                              type
                              description
                              example
                              readOnly
                            }
                            oneOf {
                              type
                              description
                              example
                              readOnly
                            }
                            manyOf {
                              type
                              description
                              example
                              readOnly
                            }
                            default {
                              type
                              description
                              readOnly
                            }
                          }
                        }
                      }
                      api_key {
                        type
                        description
                        example
                        readOnly
                      }
                      install_code {
                        type
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      apps {
                        type
                        description
                        readOnly
                        properties {
                          apache {
                            type
                            description
                            example
                            readOnly
                          }
                          nginx {
                            type
                            description
                            example
                            readOnly
                          }
                          mysql {
                            type
                            description
                            example
                            readOnly
                          }
                        }
                      }
                      ssh {
                        type
                        description
                        x_linode_cli_display
                        properties {
                          access {
                            type
                            description
                            example
                          }
                          user {
                            type
                            minLength
                            maxLength
                            description
                            example
                          }
                          port {
                            type
                            minimum
                            maximum
                            description
                            example
                          }
                          ip {
                            type
                            format
                            description
                            example
                          }
                        }
                      }
                      service_type {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      address {
                        type
                        format
                        minLength
                        description
                        example
                        x_linode_cli_display
                        readOnly
                      }
                      timeout {
                        type
                        minimum
                        maximum
                        description
                        example
                      }
                      body {
                        type
                        nullable
                        minLength
                        maxLength
                        description
                        example
                      }
                      consultation_group {
                        deprecated
                        type
                        minLength
                        maxLength
                        description
                        example
                        x_linode_cli_display
                      }
                      notes {
                        type
                        nullable
                        description
                        example
                      }
                      credentials {
                        type
                        description
                      }
                      gateway {
                        type
                        nullable
                        format
                        description
                        example
                        readOnly
                      }
                      subnet_mask {
                        type
                        format
                        description
                        example
                        readOnly
                      }
                      prefix {
                        type
                        description
                        example
                        readOnly
                      }
                      linode_id {
                        type
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      hostname {
                        type
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      client_conn_throttle {
                        type
                        minimum
                        maximum
                        description
                        example
                        x_linode_cli_display
                      }
                      transfer {
                        type
                        description
                        properties {
                          total {
                            type
                            nullable
                            description
                            example
                            readOnly
                          }
                          in {
                            type
                            nullable
                            description
                            example
                            readOnly
                          }
                          out {
                            type
                            nullable
                            description
                            example
                            readOnly
                          }
                        }
                      }
                      algorithm {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      stickiness {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      check {
                        type
                        description
                        example
                      }
                      check_interval {
                        type
                        description
                        example
                      }
                      check_timeout {
                        type
                        minimum
                        maximum
                        description
                        example
                      }
                      check_attempts {
                        type
                        minimum
                        maximum
                        description
                        example
                      }
                      check_path {
                        type
                        description
                        example
                      }
                      check_body {
                        type
                        description
                        example
                      }
                      check_passive {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      cipher_suite {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      nodebalancer_id {
                        type
                        description
                        example
                        readOnly
                      }
                      ssl_commonname {
                        type
                        description
                        readOnly
                        x_linode_cli_display
                      }
                      ssl_fingerprint {
                        type
                        description
                        readOnly
                        x_linode_cli_display
                      }
                      ssl_cert {
                        type
                        format
                        nullable
                        description
                      }
                      ssl_key {
                        type
                        format
                        nullable
                        description
                      }
                      nodes_status {
                        type
                        description
                        readOnly
                        x_linode_cli_display
                        properties {
                          up {
                            type
                            description
                            example
                            readOnly
                          }
                          down {
                            type
                            description
                            example
                            readOnly
                          }
                        }
                      }
                      mode {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      config_id {
                        type
                        description
                        example
                        readOnly
                      }
                      uid {
                        type
                        description
                        example
                        readOnly
                      }
                      timezone {
                        type
                        description
                        example
                      }
                      email_notifications {
                        type
                        description
                        example
                      }
                      referrals {
                        type
                        description
                        readOnly
                        properties {
                          code {
                            type
                            description
                            example
                            readOnly
                          }
                          url {
                            type
                            format
                            description
                            example
                            readOnly
                          }
                          total {
                            type
                            description
                            example
                            readOnly
                          }
                          completed {
                            type
                            description
                            example
                            readOnly
                          }
                          pending {
                            type
                            description
                            example
                            readOnly
                          }
                          credit {
                            type
                            description
                            example
                            readOnly
                          }
                        }
                      }
                      ip_whitelist_enabled {
                        deprecated
                        type
                        description
                        example
                      }
                      lish_auth_method {
                        type
                        description
                        example
                      }
                      authorized_keys {
                        type
                        nullable
                        description
                      }
                      two_factor_auth {
                        type
                        description
                        example
                        x_linode_cli_display
                      }
                      scopes {
                        type
                        format
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      token {
                        type
                        description
                        example
                        readOnly
                        x_linode_cli_display
                      }
                      ssh_key {
                        type
                        format
                        description
                        readOnly
                      }
                    }
                  }
                }
              }
            }
            responses {
              _200 {
                description
                content {
                  application_json {
                    schema {
                      description
                      properties {
                        address_1 {
                          type
                          description
                          maxLength
                          example
                        }
                        address_2 {
                          type
                          description
                          maxLength
                          example
                        }
                        balance {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        city {
                          type
                          description
                          maxLength
                          example
                        }
                        credit_card {
                          type
                          readOnly
                          description
                          properties {
                            expiry {
                              type
                              description
                              example
                            }
                            last_four {
                              type
                              description
                              example
                            }
                          }
                        }
                        company {
                          type
                          description
                          maxLength
                          example
                        }
                        country {
                          type
                          description
                          minLength
                          maxLength
                          example
                        }
                        email {
                          type
                          description
                          maxLength
                          example
                          x_linode_cli_display
                          format
                          readOnly
                        }
                        first_name {
                          type
                          description
                          maxLength
                          example
                          x_linode_cli_display
                        }
                        last_name {
                          type
                          description
                          maxLength
                          example
                          x_linode_cli_display
                        }
                        phone {
                          type
                          description
                          maxLength
                          example
                          x_linode_cli_display
                          properties {
                            primary {
                              type
                              nullable
                              format
                              description
                              example
                            }
                            secondary {
                              type
                              nullable
                              format
                              description
                            }
                          }
                        }
                        state {
                          type
                          description
                          maxLength
                          example
                        }
                        tax_id {
                          type
                          description
                          maxLength
                          example
                        }
                        zip {
                          type
                          description
                          maxLength
                          example
                        }
                        redirect_uri {
                          type
                          format
                          description
                          example
                          x_linode_cli_display
                        }
                        label {
                          x_linode_filterable
                          type
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                          pattern
                          readOnly
                        }
                        status {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        secret {
                          type
                          description
                          example
                          readOnly
                        }
                        thumbnail_url {
                          type
                          nullable
                          format
                          description
                          example
                          readOnly
                        }
                        public {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        managed {
                          type
                          readOnly
                          description
                          example
                          x_linode_cli_display
                        }
                        longview_subscription {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        network_helper {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        backups_enabled {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        username {
                          type
                          pattern
                          minLength
                          maxLength
                          description
                          x_linode_filterable
                          example
                          x_linode_cli_display
                          readOnly
                        }
                        restricted {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        ssh_keys {
                          type
                          description
                        }
                        global {
                          type
                          description
                          properties {
                            add_linodes {
                              type
                              description
                              example
                            }
                            add_longview {
                              type
                              description
                              example
                            }
                            longview_subscription {
                              type
                              description
                              example
                            }
                            account_access {
                              type
                              nullable
                              description
                              example
                            }
                            cancel_account {
                              type
                              description
                              example
                            }
                            add_domains {
                              type
                              description
                              example
                            }
                            add_stackscripts {
                              type
                              description
                              example
                            }
                            add_nodebalancers {
                              type
                              description
                              example
                            }
                            add_images {
                              type
                              description
                              example
                            }
                            add_volumes {
                              type
                              description
                              example
                            }
                          }
                        }
                        linode {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        domain {
                          type
                          description
                          pattern
                          example
                          x_linode_filterable
                          x_linode_cli_display
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        nodebalancer {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        image {
                          type
                          description
                          x_linode_filterable
                          readOnly
                          nullable
                          x_linode_cli_display
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        longview {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        stackscript {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        volume {
                          type
                          description
                          items {
                            properties {
                              id {
                                type
                                description
                                example
                              }
                              permissions {
                                type
                                nullable
                                description
                                example
                              }
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                            }
                          }
                        }
                        type {
                          type
                          description
                          example
                          x_linode_cli_display
                          readOnly
                        }
                        group {
                          deprecated
                          type
                          description
                          example
                          minLength
                          maxLength
                          x_linode_filterable
                          x_linode_cli_display
                          readOnly
                        }
                        description {
                          type
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                          x_linode_filterable
                        }
                        soa_email {
                          type
                          format
                          description
                          example
                          x_linode_cli_display
                        }
                        retry_sec {
                          type
                          description
                          example
                        }
                        master_ips {
                          type
                          description
                        }
                        axfr_ips {
                          type
                          description
                        }
                        expire_sec {
                          type
                          description
                          example
                        }
                        refresh_sec {
                          type
                          description
                          example
                        }
                        ttl_sec {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        tags {
                          x_linode_filterable
                          description
                          type
                        }
                        name {
                          type
                          description
                          minLength
                          maxLength
                          example
                          x_linode_cli_display
                          pattern
                        }
                        target {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        priority {
                          type
                          minimum
                          maximum
                          description
                          example
                          x_linode_cli_display
                        }
                        weight {
                          type
                          description
                          example
                          x_linode_cli_display
                          minimum
                          maximum
                        }
                        port {
                          type
                          description
                          example
                          minimum
                          maximum
                          x_linode_cli_display
                        }
                        service {
                          type
                          nullable
                          description
                        }
                        protocol {
                          type
                          nullable
                          description
                          example
                          x_linode_cli_display
                        }
                        tag {
                          type
                          nullable
                          description
                        }
                        created {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          x_linode_filterable
                        }
                        created_by {
                          type
                          description
                          example
                          readOnly
                        }
                        deprecated {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                        }
                        is_public {
                          x_linode_filterable
                          description
                          type
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        size {
                          x_linode_filterable
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          maximum
                        }
                        expiry {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        vendor {
                          x_linode_filterable
                          type
                          nullable
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        region {
                          x_linode_filterable
                          readOnly
                          description
                          x_linode_cli_display
                          type
                          example
                        }
                        hypervisor {
                          type
                          description
                          example
                          readOnly
                        }
                        updated {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        ipv4 {
                          type
                          readOnly
                          description
                          x_linode_cli_display
                          format
                        }
                        ipv6 {
                          type
                          description
                          example
                          readOnly
                          nullable
                          format
                          x_linode_cli_display
                        }
                        specs {
                          type
                          description
                          readOnly
                          properties {
                            disk {
                              type
                              description
                              example
                              readOnly
                            }
                            memory {
                              type
                              description
                              example
                              readOnly
                            }
                            vcpus {
                              type
                              description
                              example
                              readOnly
                            }
                            transfer {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        alerts {
                          type
                          properties {
                            cpu {
                              type
                              description
                              example
                            }
                            network_in {
                              type
                              description
                              example
                            }
                            network_out {
                              type
                              description
                              example
                            }
                            transfer_quota {
                              type
                              description
                              example
                            }
                            io {
                              type
                              description
                              example
                            }
                          }
                        }
                        backups {
                          type
                          description
                          properties {
                            enabled {
                              type
                              description
                              example
                              readOnly
                            }
                            schedule {
                              type
                              properties {
                                day {
                                  type
                                  nullable
                                  description
                                  example
                                }
                                window {
                                  type
                                  nullable
                                  description
                                  example
                                }
                              }
                            }
                          }
                        }
                        watchdog_enabled {
                          type
                          description
                          example
                        }
                        kernel {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        comments {
                          type
                          nullable
                          description
                          example
                        }
                        memory_limit {
                          type
                          description
                          example
                        }
                        run_level {
                          type
                          description
                          example
                        }
                        virt_mode {
                          type
                          description
                          example
                        }
                        helpers {
                          type
                          description
                          properties {
                            updatedb_disabled {
                              type
                              description
                              example
                            }
                            distro {
                              type
                              description
                              example
                            }
                            modules_dep {
                              type
                              description
                              example
                            }
                            network {
                              type
                              description
                              example
                            }
                            devtmpfs_automount {
                              type
                              description
                              example
                            }
                          }
                        }
                        devices {
                          type
                          properties {
                            sda {
                              type
                              description
                            }
                            sdb {
                              type
                              description
                            }
                            sdc {
                              type
                              description
                            }
                            sdd {
                              type
                              description
                            }
                            sde {
                              type
                              description
                            }
                            sdf {
                              type
                              description
                            }
                            sdg {
                              type
                              description
                            }
                            sdh {
                              type
                              description
                            }
                          }
                        }
                        root_device {
                          type
                          description
                          example
                        }
                        filesystem {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        address {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          minLength
                        }
                        gateway {
                          type
                          nullable
                          format
                          description
                          example
                          readOnly
                        }
                        subnet_mask {
                          type
                          format
                          description
                          example
                          readOnly
                        }
                        prefix {
                          type
                          description
                          example
                          readOnly
                        }
                        rdns {
                          type
                          description
                          x_linode_cli_display
                          example
                        }
                        linode_id {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                          nullable
                        }
                        user_gravatar_id {
                          type
                          description
                          example
                          readOnly
                        }
                        images {
                          type
                          x_linode_filterable
                          description
                          x_linode_cli_display
                        }
                        deployments_total {
                          type
                          description
                          example
                          readOnly
                        }
                        deployments_active {
                          type
                          description
                          example
                          readOnly
                        }
                        rev_note {
                          x_linode_filterable
                          type
                          description
                          example
                        }
                        script {
                          type
                          description
                          example
                        }
                        user_defined_fields {
                          type
                          description
                          readOnly
                          items {
                            type
                            required
                            description
                            properties {
                              label {
                                type
                                description
                                example
                                readOnly
                              }
                              name {
                                type
                                description
                                example
                                readOnly
                              }
                              example {
                                type
                                description
                                example
                                readOnly
                              }
                              oneOf {
                                type
                                description
                                example
                                readOnly
                              }
                              manyOf {
                                type
                                description
                                example
                                readOnly
                              }
                              default {
                                type
                                description
                                readOnly
                              }
                            }
                          }
                        }
                        api_key {
                          type
                          description
                          example
                          readOnly
                        }
                        install_code {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        apps {
                          type
                          description
                          readOnly
                          properties {
                            apache {
                              type
                              description
                              example
                              readOnly
                            }
                            nginx {
                              type
                              description
                              example
                              readOnly
                            }
                            mysql {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        ssh {
                          type
                          description
                          x_linode_cli_display
                          properties {
                            access {
                              type
                              description
                              example
                            }
                            user {
                              type
                              minLength
                              maxLength
                              description
                              example
                            }
                            port {
                              type
                              minimum
                              maximum
                              description
                              example
                            }
                            ip {
                              type
                              format
                              description
                              example
                            }
                          }
                        }
                        service_type {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        timeout {
                          type
                          minimum
                          maximum
                          description
                          example
                        }
                        body {
                          type
                          nullable
                          minLength
                          maxLength
                          description
                          example
                        }
                        consultation_group {
                          deprecated
                          type
                          minLength
                          maxLength
                          description
                          example
                          x_linode_cli_display
                        }
                        notes {
                          type
                          nullable
                          description
                          example
                        }
                        credentials {
                          type
                          description
                        }
                        hostname {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        client_conn_throttle {
                          type
                          minimum
                          maximum
                          description
                          example
                          x_linode_cli_display
                        }
                        transfer {
                          type
                          description
                          properties {
                            total {
                              type
                              nullable
                              description
                              example
                              readOnly
                            }
                            in {
                              type
                              nullable
                              description
                              example
                              readOnly
                            }
                            out {
                              type
                              nullable
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        algorithm {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        stickiness {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        check {
                          type
                          description
                          example
                        }
                        check_interval {
                          type
                          description
                          example
                        }
                        check_timeout {
                          type
                          minimum
                          maximum
                          description
                          example
                        }
                        check_attempts {
                          type
                          minimum
                          maximum
                          description
                          example
                        }
                        check_path {
                          type
                          description
                          example
                        }
                        check_body {
                          type
                          description
                          example
                        }
                        check_passive {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        cipher_suite {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        nodebalancer_id {
                          type
                          description
                          example
                          readOnly
                        }
                        ssl_commonname {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        ssl_fingerprint {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                        }
                        ssl_cert {
                          type
                          format
                          nullable
                          description
                        }
                        ssl_key {
                          type
                          format
                          nullable
                          description
                        }
                        nodes_status {
                          type
                          description
                          readOnly
                          x_linode_cli_display
                          properties {
                            up {
                              type
                              description
                              example
                              readOnly
                            }
                            down {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        mode {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        config_id {
                          type
                          description
                          example
                          readOnly
                        }
                        uid {
                          type
                          description
                          example
                          readOnly
                        }
                        timezone {
                          type
                          description
                          example
                        }
                        email_notifications {
                          type
                          description
                          example
                        }
                        referrals {
                          type
                          description
                          readOnly
                          properties {
                            code {
                              type
                              description
                              example
                              readOnly
                            }
                            url {
                              type
                              format
                              description
                              example
                              readOnly
                            }
                            total {
                              type
                              description
                              example
                              readOnly
                            }
                            completed {
                              type
                              description
                              example
                              readOnly
                            }
                            pending {
                              type
                              description
                              example
                              readOnly
                            }
                            credit {
                              type
                              description
                              example
                              readOnly
                            }
                          }
                        }
                        ip_whitelist_enabled {
                          deprecated
                          type
                          description
                          example
                        }
                        lish_auth_method {
                          type
                          description
                          example
                        }
                        authorized_keys {
                          type
                          nullable
                          description
                        }
                        two_factor_auth {
                          type
                          description
                          example
                          x_linode_cli_display
                        }
                        scopes {
                          type
                          format
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        token {
                          type
                          description
                          example
                          readOnly
                          x_linode_cli_display
                        }
                        ssh_key {
                          type
                          format
                          description
                          readOnly
                        }
                        filesystem_path {
                          type
                          description
                          example
                          readOnly
                        }
                      }
                    }
                  }
                }
              }
              default {
                description
                content {
                  application_json {
                    schema {
                      type
                      properties {
                        errors {
                          items {
                            properties {
                              reason {
                                type
                                description
                                example
                              }
                              field {
                                type
                                description
                                example
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          delete {
            summary
            description
            operationId
            x_linode_cli_action
            x_linode_grant
            security {
              oauth
            }
            x_code_samples {
              lang
              source
            }
            responses {
              _200 {
                description
                content {
                  application_json {
                    schema {
                      type
                    }
                  }
                }
              }
              default {
                description
                content {
                  application_json {
                    schema {
                      type
                      properties {
                        errors {
                          type
                          items {
                            type
                            description
                            properties {
                              reason {
                                type
                                description
                                example
                              }
                              field {
                                type
                                description
                                example
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
