#!/bin/bash

# Test script to validate IAM permissions in CloudFormation templates
echo "Testing CloudFormation IAM permissions..."

# Check if CodeBuildServiceRole has ecs:DescribeTaskDefinition permission
if grep -q "ecs:DescribeTaskDefinition" ./cloudformation/cicd-pipeline.yaml; then
  echo "✅ CodeBuildServiceRole has ecs:DescribeTaskDefinition permission"
else
  echo "❌ CodeBuildServiceRole is missing ecs:DescribeTaskDefinition permission"
  exit 1
fi

# Check if CodeBuildServiceRole has cloudformation:DescribeStacks permission
if grep -q "cloudformation:DescribeStacks" ./cloudformation/cicd-pipeline.yaml; then
  echo "✅ CodeBuildServiceRole has cloudformation:DescribeStacks permission"
else
  echo "❌ CodeBuildServiceRole is missing cloudformation:DescribeStacks permission"
  exit 1
fi

# Check if buildspec.yml is using the correct task definition reference
if grep -q "aws ecs describe-task-definition --task-definition \$(aws cloudformation describe-stacks" ./buildspec.yml; then
  echo "✅ buildspec.yml is using the correct task definition reference"
else
  echo "❌ buildspec.yml is not using the correct task definition reference"
  exit 1
fi

echo "All tests passed! CloudFormation templates have the required permissions."
exit 0