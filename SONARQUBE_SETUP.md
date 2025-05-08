# SonarQube Integration Setup

This document provides instructions on how to set up SonarQube integration with your CI/CD pipeline.

## Prerequisites

1. A running SonarQube server (self-hosted or SonarCloud)
2. AWS account with permissions to create and manage SSM parameters

## Setup Steps

### 1. Create SonarQube Project

1. Log in to your SonarQube server or SonarCloud account
2. Create a new project with the key `angular-app`
3. Generate a token for the project

### 2. Store SonarQube Parameters in AWS Parameter Store

Use the AWS Management Console or AWS CLI to create the following parameters:

```bash
# Using AWS CLI
aws ssm put-parameter \
    --name "/sonar/host-url" \
    --value "https://your-sonarqube-server-url" \
    --type "SecureString" \
    --description "SonarQube server URL"

aws ssm put-parameter \
    --name "/sonar/token" \
    --value "your-sonarqube-token" \
    --type "SecureString" \
    --description "SonarQube authentication token"
```

Replace `https://your-sonarqube-server-url` with your actual SonarQube server URL and `your-sonarqube-token` with the token generated in the previous step.

### 3. Deploy the CI/CD Pipeline

Deploy or update your CloudFormation stack to apply the changes:

```bash
aws cloudformation deploy \
    --template-file cloudformation/cicd-pipeline.yaml \
    --stack-name your-stack-name \
    --parameter-overrides \
        EnvironmentName=dev \
        GitHubOwner=your-github-username \
        GitHubRepo=your-repo-name \
        GitHubBranch=main \
        GitHubToken=your-github-token \
        ECRRepositoryName=your-ecr-repo-name \
    --capabilities CAPABILITY_IAM
```

## How It Works

1. The CI/CD pipeline retrieves the SonarQube parameters from AWS Parameter Store
2. During the build phase, the pipeline runs tests and generates code coverage reports
3. SonarQube analysis is performed using the generated reports
4. The analysis results are sent to your SonarQube server
5. You can view the results in the SonarQube dashboard

## Troubleshooting

If you encounter issues with the SonarQube integration:

1. Check that the parameters are correctly set in AWS Parameter Store
2. Verify that the CodeBuild role has permissions to access the parameters
3. Check the CodeBuild logs for any error messages related to SonarQube
4. Ensure your SonarQube server is accessible from the CodeBuild environment