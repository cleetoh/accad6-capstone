# accad6-capstone - sign in app
# Attendance App

## Overview
The Attendance App simplifies attendance management for students, instructors, and administrators. By leveraging AWS services, the app provides robust features for managing attendance records, generating reports, and syncing with Learning Management Systems (LMS). It is designed to be scalable, secure, and efficient.

## Features
### Students
- View eligible class sessions.
- Check-in via class sessions to mark attendance (Online/In-Person).
- Submit absence requests for approval.
- View attendance history.

### Instructors
- View assigned class sessions.
- Verify student attendance.
- Record notes for individual students.
- Create custom attendance categories.
- Send notifications for upcoming classes or attendance deadlines.

### Administrators
- Generate and access attendance reports.
- Manage user profiles and class sessions.
- Communicate with parents through notifications and reports.
- Export data in various formats.

## Architecture
The app utilizes the following AWS services:
- **API Gateway**: Exposes RESTful APIs for frontend-backend interaction.
- **AWS Lambda**: Executes backend logic for CRUD operations.
- **DynamoDB**: Serves as the primary database for storing user profiles, attendance records, and class sessions.
- **S3**: Hosts static assets and exports reports.
- **CloudWatch**: Monitors application performance and alerts on anomalies.
- **ECR & ECS**: Stores and deploys Dockerized applications.
- **CodePipeline**: Automates CI/CD for rapid deployment.

## Deployment
1. **Setup AWS Services**:
   - Create S3 buckets, DynamoDB tables, API Gateway endpoints, and Lambda functions.
2. **Development**:
   - Implement backend logic with AWS Lambda.
   - Test locally using SAM CLI.
3. **Dockerize**:
   - Create Docker images for the frontend and backend.
   - Push images to Amazon ECR.
4. **CI/CD Pipeline**:
   - Automate builds and deployments with AWS CodePipeline.
5. **Deploy**:
   - Use ECS with Fargate for managing containerized applications.
6. **Monitor**:
   - Set up CloudWatch for performance tracking and alerting.

## Challenges and Solutions
- **Data Synchronization**: Implemented periodic sync between DynamoDB and LMS using Lambda.
- **Scaling**: Configured DynamoDB auto-scaling and ECS container scaling.
- **Security**: Integrated Cognito with API Gateway for secure authentication.

## Lessons Learned
- Leveraging AWS services simplifies infrastructure management.
- Early integration testing reduces deployment issues.
- CI/CD pipelines enhance deployment efficiency and reliability.

## Prerequisites
- AWS Account with permissions for creating and managing services.
- Docker installed locally.
- SAM CLI for local testing.
- GitHub repository for source code.
