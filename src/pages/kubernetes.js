import React from "react";
import Layout from "../components/4_layouts/layout";
import SEO from "../components/0_utilities/seo";
import CodeBox from "../components/2_molecules/code-box";

const KubernetesPage = () => {
  return (
    <Layout
      title="Kubernetes Tools"
      subtitle="Create a Kubernetes Cluster with One Command"
    >
      <SEO
        title="Kubernetes Tools"
        description="Create a Kubernetes Cluster with One Command"
      />
      <div className="flex flex-wrap mb-8 -mx-4 kubernetes-body">
        <div className="w-full px-4">
          <div className="my-4 md:mt-12 md:mt-8 max-w-3xl">
            <h2 className="font-normal text-BaseGreenDark text-center">
              Create a Kubernetes Cluster with One Command
            </h2>
            <div className="flex justify-center mt-4">
              <CodeBox
                line1="pip install linode-cli"
                line2="linode-cli k8s-alpha create mycluster"
              />
            </div>
            <div className="flex justify-center mb-10 mt-8 md:mt-0">
              <a
                className="btn"
                href="https://github.com/linode/linode-cli"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linode CLI on GitHub
              </a>
            </div>
            <div className="flex mb-8 mt-6 md:mt-0">
              <div className="container md:ml-10">
                <p className="mt-0 mb-4 text-xl">
                  Kubernetes container infrastructure on Linode:
                </p>
                <ul>
                  <li>
                    Start by installing{" "}
                    <a
                      href="https://www.terraform.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terraform
                    </a>
                    , the{" "}
                    <a
                      href="https://github.com/linode/linode-cli"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linode CLI
                    </a>
                    , and add an SSH key to your ssh-agent. If any dependencies
                    are not present, you'll recieve installation instructions
                    during command execution.
                  </li>
                  <li>
                    When you deploy a LoadBalancer-type service through
                    Kubernetes a Linode NodeBalancer will be automatically
                    created and managed for the Pods backing that service. (
                    <a
                      href="https://github.com/linode/linode-cloud-controller-manager"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linode Cloud Controller Manager
                    </a>
                    )
                  </li>
                  <li>
                    When PersistentVolumes are created through Kubernetes, those
                    volumes will be Linode Block Storage volumes. These are also
                    automatically managed with the lifecycle of the
                    PersistentVolume resource. (
                    <a
                      href="https://github.com/linode/linode-blockstorage-csi-driver"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linode Container Storage Interface
                    </a>
                    )
                  </li>
                  <li>
                    Nodes in Kubernetes are labeled with the Linode Region and
                    Linode Type, which can also be used by controllers for the
                    purposes of scheduling
                  </li>
                  <li>
                    The Kubernetes metrics-server is installed, allowing you to
                    use{" "}
                    <pre className="bg-ThemeBeige inline p-1 ">kubectl top</pre>
                  </li>
                </ul>
                <p>The following is the help message for the command:</p>
                <code>
                  $ linode-cli k8s-alpha create --help
                  <br />
                  <br />
                  usage: k8s-alpha create [-h] [--node-type TYPE] [--nodes
                  COUNT]
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--master-type
                  TYPE] [--region REGION]
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[--ssh-public-key
                  KEYPATH]
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NAME
                  <br />
                  <br />
                  positional arguments:
                  <br />
                  &nbsp;&nbsp;NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A
                  name for the cluster.
                  <br />
                  <br />
                  optional arguments:
                  <br />
                  &nbsp;&nbsp;-h,
                  --help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show
                  this help message and exit
                  <br />
                  &nbsp;&nbsp;--node-type
                  TYPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Linode Type ID for
                  cluster Nodes as retrieved with
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`linode-cli
                  linodes types`. (default "g6-standard-2")
                  <br />
                  &nbsp;&nbsp;--nodes
                  COUNT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
                  number of Linodes to deploy as Nodes in the
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cluster.
                  (default 3)
                  <br />
                  &nbsp;&nbsp;--master-type TYPE&nbsp;&nbsp;&nbsp;&nbsp;The
                  Linode Type ID for cluster Master Nodes as
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retrieved
                  with `linode-cli linodes types`. (default
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"g6-standard-2")
                  <br />
                  &nbsp;&nbsp;--region
                  REGION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Linode
                  Region ID in which to deploy the cluster as
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retrieved
                  with `linode-cli regions list`.) (default
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is
                  whatever you set during CLI configuration)
                  <br />
                  &nbsp;&nbsp;--ssh-public-key KEYPATH
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
                  path to your public key file which will be used to
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;access
                  Nodes during initial provisioning only! The
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;keypair
                  _must_ be added to an ssh-agent (default
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$HOME/.ssh/id_rsa.pub)
                  <br />
                </code>
                <p>
                  Here's an example usage of the command, creating a cluster
                  with six 2GB Linodes as the Nodes:
                </p>

                <code>
                  linode-cli k8s-alpha create mycluster77 --node-type
                  g6-standard-1 --nodes 6 --master-type g6-standard-4 --region
                  us-east --ssh-public-key $HOME/.ssh/id_rsa.pub
                </code>
                <p>
                  Once you have created a cluster, that cluster's kubeconfig is
                  automatically merged into your default kubeconfig. The kubectl
                  context is also switched so that you can immediately begin
                  interacting with the cluster. For example:
                </p>

                <code>
                  kubectl get pods --all-namespaces
                  <br />
                  kubectl create -f the-next-big-social-app-manifest.yaml
                </code>

                <p>To delete a cluster simply run:</p>

                <code>linode-cli k8s-alpha delete mycluster77</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KubernetesPage;
