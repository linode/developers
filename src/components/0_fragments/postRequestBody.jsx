import { graphql } from "gatsby";
export const postRequestBody = graphql`
  fragment postRequestBody on PathsPostRequestBodyContentApplication_jsonSchemaProperties {
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
      enum
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
      enum
      description
      example
      x_linode_cli_display
      x_linode_cli_color {
        active
        disabled
        edit_mode
        default_
      }
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
      items {
        type
        format
      }
      description
    }
    axfr_ips {
      type
      items {
        type
        format
      }
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
      items {
        type
      }
      example
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
      writeOnly
      example
      description
      minLength
      maxLength
      pattern
    }
    authorized_keys {
      type
      description
      items {
        type
      }
      writeOnly
      example
    }
    stackscript_id {
      type
      description
      example
    }
    stackscript_data {
      type
      description
      example {
        gh_username
      }
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
      items {
        type
      }
      writeOnly
      example
    }
    linode_id {
      type
      description
      example
      allOf {
        type
        nullable
        description
        example
        x_linode_cli_display
      }
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
      items {
        type
        example
      }
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
            }
            nodes {
              type
              description
              items {
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
                    enum
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
      enum
      example
    }
    virt_mode {
      type
      description
      enum
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
      description
      properties {
        sda {
          type
          description
          properties {
            disk_id {
              type
              description
              example
            }
            volume_id {
              type
              description
            }
          }
        }
        sdb {
          type
          description
          properties {
            disk_id {
              type
              description
              example
            }
            volume_id {
              type
              description
            }
          }
        }
        sdc {
          type
          description
          properties {
            disk_id {
              type
              description
              example
            }
            volume_id {
              type
              description
            }
          }
        }
        sdd {
          type
          description
          properties {
            disk_id {
              type
              description
              example
            }
            volume_id {
              type
              description
            }
          }
        }
        sde {
          type
          description
          properties {
            disk_id {
              type
              description
              example
            }
            volume_id {
              type
              description
            }
          }
        }
        sdf {
          type
          description
          properties {
            disk_id {
              type
              description
              example
            }
            volume_id {
              type
              description
            }
          }
        }
        sdg {
          type
          description
          properties {
            disk_id {
              type
              description
              example
            }
            volume_id {
              type
              description
            }
          }
        }
        sdh {
          type
          description
          properties {
            disk_id {
              type
              description
              example
            }
            volume_id {
              type
              description
            }
          }
        }
      }
    }
    root_device {
      type
      pattern
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
      enum
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
    allow_auto_disk_resize {
      type
      description
      example
      default
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
        type
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
      items {
        type
        format
        example
      }
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
      enum
      description
      example
      x_linode_cli_display
    }
    algorithm {
      type
      enum
      description
      example
      x_linode_cli_display
    }
    stickiness {
      type
      enum
      description
      example
      x_linode_cli_display
    }
    check {
      type
      enum
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
      enum
      description
      example
      x_linode_cli_display
      x_linode_cli_color {
        legacy
        default_
      }
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
      items {
        type
      }
      description
      example
    }
    domains {
      type
      items {
        type
      }
      description
      example
    }
    volumes {
      type
      items {
        type
      }
      description
      example
    }
    nodebalancers {
      type
      items {
        type
      }
      description
      example
    }
    persist_across_boots {
      type
      description
    }
  }
`;
