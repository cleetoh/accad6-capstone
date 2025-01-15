# accad6-capstone - sign in app
# Attendance App

## Overview
The Authetication App simplifies attendance management for students, instructors, and administrators. 

## Features
### Students, Instructors, Administrators
- **Can log in.** :joy:

## Architecture
The app utilizes the following AWS services:
- **S3**: Hosts static assets and exports reports.
- **CloudWatch**: Monitors application performance and alerts on anomalies.
- **ECR & ECS**: Stores and deploys Dockerized applications.
- **CodePipeline**: Automates CI/CD for rapid deployment.