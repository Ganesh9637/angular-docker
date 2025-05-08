import { readFileSync } from 'fs';
import { join } from 'path';

describe('CloudFormation Templates', () => {
  let cicdPipelineTemplate: string;
  let buildspecFile: string;

  beforeEach(() => {
    // Read the CloudFormation template file
    cicdPipelineTemplate = readFileSync(join(__dirname, '../../cloudformation/cicd-pipeline.yaml'), 'utf8');
    buildspecFile = readFileSync(join(__dirname, '../../buildspec.yml'), 'utf8');
  });

  it('should have ecs:DescribeTaskDefinition permission in CodeBuildServiceRole', () => {
    expect(cicdPipelineTemplate).toContain('ecs:DescribeTaskDefinition');
  });

  it('should have cloudformation:DescribeStacks permission in CodeBuildServiceRole', () => {
    expect(cicdPipelineTemplate).toContain('cloudformation:DescribeStacks');
  });

  it('should use CloudFormation stack output for task definition in buildspec.yml', () => {
    expect(buildspecFile).toContain('aws ecs describe-task-definition --task-definition $(aws cloudformation describe-stacks');
  });
});