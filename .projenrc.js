const { AwsCdkConstructLibrary, DependenciesUpgradeMechanism } = require('projen');
const project = new AwsCdkConstructLibrary({
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'githubworkflow-test',
  defaultReleaseBranch: 'main',
  repository: 'https://github.com/neilkuan/try-projen-new.git',
  author: 'Neil Kuan',
  // define install helm step in build and release workflows.
  release: false,
  workflowBootstrapSteps: [
    {
      name: 'Install Helm',
      id: 'install_helm',
      run: `curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
helm repo add eks https://aws.github.io/eks-charts
helm repo update`,
    },
  ],
  //   releaseWorkflowSetupSteps: [{
  //     name: 'Install Helm',
  //     id: 'install_helm',
  //     run: `curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
  // chmod 700 get_helm.sh
  // ./get_helm.sh
  // helm repo add eks https://aws.github.io/eks-charts
  // helm repo update`,
  //   }],
  python: {
    distName: 'cdk8s-aws-load-balancer-controller',
    module: 'cdk8s_aws_load_balancer_controller',
  },
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ['auto-approve'],
      secret: 'AUTOMATION_GITHUB_TOKEN',
    },
  }),
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
});
project.synth();