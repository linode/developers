import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utlilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";

const apiPage = ({ data }) => {
  const n = data.allPaths.edges[0].node;
  const modes = {
    get: "get",
    post: "post",
    put: "put",
    delete: "delete"
  };
  const responses = {
    _200: "_200",
    _204: "_204",
    default: "default"
  };
  return (
    <Layout title="API Documentation" subtitle="Linode API Documentation">
      <SEO title="API Documentation" description="" />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 pl-8">
          <h1 className="mb-4 ">
            {(n.get && n.get.tags) ||
              (n.post && n.post.tags) ||
              (n.put && n.put.tags) ||
              (n.delete && n.delete.tags)}
          </h1>

          {Object.keys(n).map(e => {
            const mode = modes[e];
            const m = n[mode];
            return (
              m && (
                <div key={e} className="mb-8 px-4 py-2 bg-grey-lighter">
                  <h2 id={mode} className="mt-0">
                    {m.summary}
                  </h2>
                  <p>
                    <b className="uppercase">{mode}</b>&nbsp;&nbsp;
                    https://api.linode.com/v4{m.name}
                  </p>
                  <p className="mt-0">{m.description}</p>
                  {m.security && (
                    <>
                      <div className="mt-4">
                        <b>Authorizations</b>
                      </div>
                      <div>personalAccessToken</div>
                      <div>
                        <span>oAuth:</span>
                        <span>({m.security[1].oauth})</span>
                      </div>
                    </>
                  )}
                  <h3>Responses</h3>
                  {Object.keys(m.responses).map((e, i) => {
                    const response = responses[e];
                    const r = m.responses[response];
                    // console.log(response);
                    return (
                      r && (
                        <div key={i}>
                          <p
                            className={`text-lg ${
                              response === "_200"
                                ? "text-BaseGreen"
                                : response === "default"
                                ? "text-BaseRed"
                                : null
                            }
                          `}
                          >
                            <b>{response.replace(/[_]/g, " ")}</b>:&nbsp;
                            {r.description}
                          </p>
                          <hr className="border border-BaseNavGrey" />
                          <div>
                            {r.content &&
                              r.content.application_json &&
                              r.content.application_json.schema.properties &&
                              Object.keys(
                                r.content.application_json.schema.properties
                              ).map((p, i) => {
                                const l =
                                  r.content.application_json.schema.properties[
                                    p
                                  ];
                                return (
                                  l && (
                                    <div key={i} className="flex">
                                      <div className="w-1/4">
                                        <b>{p}</b>
                                      </div>
                                      <div className="w-3/4">
                                        <div>
                                          {l.type} &nbsp;{" "}
                                          {l.type === "string" && "<="}{" "}
                                          {l.maxLength}
                                          {l.type === "string" && " characters"}
                                        </div>
                                        <div> {l.description}</div>
                                      </div>
                                    </div>
                                  )
                                );
                              })}
                          </div>
                        </div>
                      )
                    );
                  })}
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
                          x_linode_cli_display
                          nullable
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
                        }
                        linode {
                          type
                          description
                        }
                        domain {
                          type
                          description
                          pattern
                          example
                          x_linode_filterable
                          x_linode_cli_display
                        }
                        nodebalancer {
                          type
                          description
                        }
                        image {
                          type
                          description
                          x_linode_filterable
                          readOnly
                          nullable
                          x_linode_cli_display
                        }
                        longview {
                          type
                          description
                        }
                        stackscript {
                          type
                          description
                        }
                        volume {
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
                        }
                        alerts {
                          type
                        }
                        backups {
                          type
                          description
                        }
                        watchdog_enabled {
                          type
                          description
                          example
                        }
                        automatic {
                          type
                        }
                        snapshot {
                          type
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
                        }
                        devices {
                          type
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
                        }
                        netv4 {
                          type
                          description
                        }
                        netv6 {
                          type
                          description
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
                        }
                        addons {
                          type
                          readOnly
                          description
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
            responses {
              _200 {
                description
              }
              default {
                description
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
                        }
                        linode {
                          type
                          description
                        }
                        domain {
                          type
                          description
                          pattern
                          example
                          x_linode_filterable
                          x_linode_cli_display
                        }
                        nodebalancer {
                          type
                          description
                        }
                        image {
                          type
                          description
                          x_linode_filterable
                          readOnly
                          nullable
                          x_linode_cli_display
                        }
                        longview {
                          type
                          description
                        }
                        stackscript {
                          type
                          description
                        }
                        volume {
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
                        }
                        alerts {
                          type
                        }
                        backups {
                          type
                          description
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
                        }
                        devices {
                          type
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
                        }
                        ssh {
                          type
                          description
                          x_linode_cli_display
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
