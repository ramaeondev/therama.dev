import { S3Client, PutObjectCommand, Upload } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';

const core = require('@actions/core');

async function run() {
  try {
    const source = core.getInput('source');
    const destination = core.getInput('destination');
    const bucket = core.getInput('bucket');
    const region = core.getInput('region');

    const client = new S3Client({ region });

    const fileContent = fs.readFileSync(source);
    const key = destination.endsWith('/') ? destination + path.basename(source) : destination;

    await client.send(new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: fileContent,
    }));

    core.info(`✅ Uploaded ${source} to s3://${bucket}/${key}`);
  } catch (err) {
    core.setFailed(`❌ Upload failed: ${err.message}`);
  }
}

run();
