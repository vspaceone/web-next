pipeline {
    agent any
    environment {
        dockerImage = ''
        DOCKER_CREDENTIALS = 'docker-hub-vspaceone'
        DOCKER_IMAGE = 'vspaceone/web-next'

        MASTER_STAGE_WEBHOOK = credentials('vspaceone-webhook-web-react')
        BETA_STAGE_WEBHOOK = credentials('vspaceone-webhook-web-beta')
    }
    stages {
        stage('Build image') {
            steps {
                script {
                    dockerImage = docker.build("$DOCKER_IMAGE")
                }
            }
        }
        stage('Push latest image') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                script {
                    docker.withRegistry( '', DOCKER_CREDENTIALS ) {
                        dockerImage.push("latest")
                    }                    
                }
            }
        }
        stage('Push beta image') {
            when {
                expression { env.BRANCH_NAME == 'beta' }
            }
            steps {
                script {
                    docker.withRegistry( '', DOCKER_CREDENTIALS ) {
                        dockerImage.push("beta")
                    }
                }
            }
        }
        /*stage('Send master webhooks') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                sh "curl $MASTER_STAGE_WEBHOOK"
            }
        }
        stage('Send beta webhooks') {
            when {
                expression { env.BRANCH_NAME == 'beta' }
            }
            steps {
                sh "curl $BETA_STAGE_WEBHOOK"
            }
        }*/
    }
}