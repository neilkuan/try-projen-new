# try-projen-new

```js
const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  cdkVersion: '1.95.2', // cdk version.
  defaultReleaseBranch: 'main',
  name: 'try-projen-new',
  defaultReleaseBranch: 'main', // setting default release branch.
  repository: 'https://github.com/neilkuan/try-projen-new.git',
  author: 'Neil Kuan', // author name.
  // define install helm step in build and release workflows.
  release: false, // want create release github workflow ?
  // add more step before Install dependencies in build.yml and release.yml.
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
  // publish to pypi.org.
  python: {
    distName: 'cdk8s-aws-load-balancer-controller',
    module: 'cdk8s_aws_load_balancer_controller',
  },
  // setting Dependencies Upgrade workflow and add auto-approve via repo owner. need to add PAT to secret. 
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve'],
      secret: 'AUTOMATION_GITHUB_TOKEN',
    },
  },
  // auto approval via github token
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
});
project.synth();
```
