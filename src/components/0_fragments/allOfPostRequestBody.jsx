import { graphql } from "gatsby";
export const postRequestBody = graphql`
  fragment allOfPostRequestBody on PathsPostRequestBodyContentApplication_jsonSchemaAllOfProperties {
    card_number {
      type
      format
      description
      minLength
      maxLength
      example
    }
    expiry_month {
      type
      description
      example
    }
    expiry_year {
      type
      description
      example
    }
    cvv {
      type
      description
      example
    }
    public {
      type
      description
      example
      readOnly
      x_linode_filterable
      x_linode_cli_display
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
    }
    status {
      type
      enum
      description
      example
      readOnly
      x_linode_cli_display
      x_linode_cli_color {
        suspended
        default_
        ok
        disabled
        UP
        unknown
        DOWN
      }
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
    domain {
      type
      description
      example
    }
    remote_nameserver {
      type
      description
      example
    }
    type {
      type
      enum
      description
      example
      x_linode_cli_display
      readOnly
    }
    name {
      type
      description
      minLength
      maxLength
      example
      x_linode_cli_display
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
    }
    ttl_sec {
      type
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
    description {
      type
      description
      example
      x_linode_cli_display
      x_linode_cli_color {
        None
        default_
      }
      x_linode_filterable
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
    }
    vendor {
      x_linode_filterable
      type
      nullable
      description
      readOnly
      x_linode_cli_display
      x_linode_cli_color {
        None
        default_
      }
    }
    disk_id {
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
      writeOnly
      example
      description
      minLength
      maxLength
      pattern
    }
    authorized_keys {
      type
      items {
        type
      }
      writeOnly
      example
      description
    }
    authorized_users {
      type
      items {
        type
      }
      writeOnly
      example
      description
    }
    stackscript_id {
      type
      example
      description
    }
    stackscript_data {
      type
      example {
        gh_username
      }
      description
    }
    booted {
      type
      writeOnly
      description
    }
    username {
      type
      description
      example
      readOnly
      x_linode_cli_display
      minLength
      maxLength
    }
    user_gravatar_id {
      type
      description
      example
      readOnly
    }
    images {
      type
      description
      items {
        type
      }
      example
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
    updated {
      type
      format
      description
      readOnly
      example
      x_linode_cli_display
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
      readOnly
      example {
        label
        name
        example
      }
    }
    password {
      type
      minLength
      maxLength
      description
      example
    }
    service_type {
      type
      enum
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
    region {
      type
      description
    }
    credentials {
      type
      items {
        type
        example
      }
      description
    }
    mode {
      type
      enum
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
`;
