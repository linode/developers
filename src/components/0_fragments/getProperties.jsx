import { graphql } from "gatsby";
export const GetProperties = graphql`
fragment GetProperties on PathsGetResponses_200ContentApplication_jsonSchemaProperties {
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
      last_four {
        type
        description
        example
      }
      expiry {
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
    x_linode_filterable
  }
  action {
    type
    enum
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
        enum
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
    enum
    x_linode_cli_display
    x_linode_cli_color {
      failed
      finished
      started
      default_
      suspended
      active
      disabled
      edit_mode
      running
      offline
      successful
      userAborted
      ready
      not_ready
      ok
      UP
      unknown
      DOWN
      contact_support
    }
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
  subtotal {
    type
    readOnly
    description
    example
    x_linode_cli_display
  }
  tax {
    type
    readOnly
    description
    example
    x_linode_cli_display
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
    items {
      type
    }
    description
    example
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
        enum
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
    items {
      type
      description
      properties {
        id {
          type
          description
          example
        }
        permissions {
          type
          nullable
          enum
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
    description
  }
  domain {
    type
    items {
      type
      description
      properties {
        id {
          type
          description
          example
        }
        permissions {
          type
          nullable
          enum
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
    description
    pattern
    example
    x_linode_filterable
    x_linode_cli_display
  }
  nodebalancer {
    type
    items {
      type
      description
      properties {
        id {
          type
          description
          example
        }
        permissions {
          type
          nullable
          enum
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
    description
  }
  image {
    type
    items {
      type
      description
      properties {
        id {
          type
          description
          example
        }
        permissions {
          type
          nullable
          enum
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
    description
    x_linode_filterable
    readOnly
    nullable
    allOf {
      type
      description
      example
    }
    x_linode_cli_display
  }
  longview {
    type
    items {
      type
      description
      properties {
        id {
          type
          description
          example
        }
        permissions {
          type
          nullable
          enum
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
    description
  }
  stackscript {
    type
    items {
      type
      description
      properties {
        id {
          type
          description
          example
        }
        permissions {
          type
          nullable
          enum
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
    description
  }
  volume {
    type
    items {
      type
      description
      properties {
        id {
          type
          description
          example
        }
        permissions {
          type
          nullable
          enum
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
    description
  }
  type {
    type
    enum
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
    x_linode_cli_color {
      None
      default_
    }
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
    x_linode_cli_display
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
    enum
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
    x_linode_cli_color {
      None
      default_
    }
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
    enum
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
    items {
      type
    }
    readOnly
    description
    x_linode_cli_display
    properties {
      public {
        type
        items {
          type
          description
          properties {
            address {
              type
              format
              description
              example
              readOnly
              x_linode_cli_display
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
            type {
              type
              enum
              description
              example
              readOnly
              x_linode_cli_display
            }
            public {
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
            linode_id {
              type
              description
              example
              readOnly
              x_linode_cli_display
            }
            region {
              type
              description
              example
              readOnly
              x_linode_filterable
              x_linode_cli_display
            }
          }
        }
        description
        readOnly
      }
      private {
        type
        items {
          type
          description
          properties {
            address {
              type
              format
              description
              example
              readOnly
              x_linode_cli_display
            }
            gateway {
              type
              format
              description
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
            type {
              type
              description
              example
              readOnly
              x_linode_cli_display
            }
            public {
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
            }
            linode_id {
              type
              description
              example
              readOnly
              x_linode_cli_display
            }
            region {
              type
              description
              example
              readOnly
              x_linode_filterable
              x_linode_cli_display
            }
          }
        }
        description
        readOnly
      }
      shared {
        type
        readOnly
        items {
          type
          description
          properties {
            address {
              type
              format
              description
              example
              readOnly
              x_linode_cli_display
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
            type {
              type
              enum
              description
              example
              readOnly
              x_linode_cli_display
            }
            public {
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
            linode_id {
              type
              description
              example
              readOnly
              x_linode_cli_display
            }
            region {
              type
              description
              example
              readOnly
              x_linode_filterable
              x_linode_cli_display
            }
          }
        }
        description
      }
      reserved {
        type
        readOnly
        items {
          type
          description
          properties {
            address {
              type
              format
              description
              example
              readOnly
              x_linode_cli_display
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
            type {
              type
              enum
              description
              example
              readOnly
              x_linode_cli_display
            }
            public {
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
            linode_id {
              type
              description
              example
              readOnly
              x_linode_cli_display
            }
            region {
              type
              description
              example
              readOnly
              x_linode_filterable
              x_linode_cli_display
            }
          }
        }
        description
      }
    }
    format
  }
  ipv6 {
    type
    description
    example
    readOnly
    properties {
      link_local {
        type
        description
        properties {
          address {
            type
            format
            description
            example
            readOnly
            x_linode_cli_display
          }
          gateway {
            type
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
          type {
            type
            description
            example
            readOnly
            x_linode_cli_display
          }
          public {
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
          }
          linode_id {
            type
            description
            example
            readOnly
            x_linode_cli_display
          }
          region {
            type
            description
            example
            readOnly
            x_linode_filterable
            x_linode_cli_display
          }
        }
      }
      slaac {
        type
        description
        properties {
          address {
            type
            format
            description
            example
            readOnly
            x_linode_cli_display
          }
          gateway {
            type
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
          type {
            type
            description
            example
            readOnly
            x_linode_cli_display
          }
          public {
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
          }
          linode_id {
            type
            description
            example
            readOnly
            x_linode_cli_display
          }
          region {
            type
            description
            example
            readOnly
            x_linode_filterable
            x_linode_cli_display
          }
        }
      }
      global {
        type
        description
        properties {
          range {
            type
            description
            example
            readOnly
            x_linode_cli_display
          }
          prefix {
            type
            description
            example
            x_linode_cli_display
          }
          region {
            type
            description
            example
            readOnly
            x_linode_cli_display
          }
        }
      }
    }
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
            enum
          }
          window {
            type
            nullable
            description
            example
            enum
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
        type
        description
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
            enum
            readOnly
            description
            example
            x_linode_cli_display
          }
          status {
            type
            enum
            readOnly
            description
            example
            x_linode_cli_display
            x_linode_cli_color {
              successful
              failed
              userAborted
              default_
            }
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
            items {
              type
              example
            }
            readOnly
            description
          }
          disks {
            type
            items {
              type
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
            readOnly
            description
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
            enum
            readOnly
            description
            example
            x_linode_cli_display
          }
          status {
            type
            enum
            readOnly
            description
            example
            x_linode_cli_display
            x_linode_cli_color {
              successful
              failed
              userAborted
              default_
            }
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
            items {
              type
              example
            }
            readOnly
            description
          }
          disks {
            type
            items {
              type
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
            readOnly
            description
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
    items {
      type
      example
    }
    readOnly
    description
  }
  disks {
    type
    items {
      type
      properties {
        size {
          type
          example
        }
        filesystem {
          type
          description
          example
          enum
          x_linode_cli_display
        }
        label {
          type
          example
        }
      }
    }
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
  filesystem {
    type
    description
    example
    enum
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
    enum
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
    items {
      type
      items {
        type
        example
      }
    }
  }
  io {
    type
    description
    properties {
      io {
        type
        description
        items {
          type
          items {
            type
            example
          }
        }
      }
      swap {
        type
        description
        items {
          type
          items {
            type
            example
          }
        }
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
        items {
          type
          items {
            type
            example
          }
        }
      }
      out {
        type
        description
        items {
          type
          items {
            type
            example
          }
        }
      }
      private_in {
        type
        description
        items {
          type
          items {
            type
            example
          }
        }
      }
      private_out {
        type
        description
        items {
          type
          items {
            type
            example
          }
        }
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
        items {
          type
          items {
            type
            example
          }
        }
      }
      out {
        type
        description
        items {
          type
          items {
            type
            example
          }
        }
      }
      private_in {
        type
        description
        items {
          type
          items {
            type
            example
          }
        }
      }
      private_out {
        type
        description
        items {
          type
          items {
            type
            example
          }
        }
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
    enum
    example
    x_linode_cli_display
  }
  price {
    type
    readOnly
    description
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
    x_linode_cli_display
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
    properties {
      total {
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
      in {
        type
        nullable
        description
        example
        readOnly
      }
    }
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
    items {
      type
      example
    }
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
      ip {
        type
        format
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
    }
  }
  service_type {
    type
    enum
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
    items {
      type
      example
    }
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
    enum
    description
    example
  }
  authorized_keys {
    type
    nullable
    items {
      type
      format
    }
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
    items {
      type
      example
    }
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
  
`;
