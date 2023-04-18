pipeline {
   agent any
   
   stages {
      stage('Checkout') {
         steps {
            // Checkout code from version control system
         }
      }
      
      stage('Build frontend') {
         steps {
            sh 'docker build -t frontend:latest frontend/'
         }
      }
      
      stage('Build backend') {
         steps {
            sh 'docker build -t backend:latest backend/'
         }
      }
      
      stage('Deploy') {
         steps {
            sh 'docker run -d -p 80:80 --name frontend frontend:latest'
            sh 'docker run -d -p 3000:3000 --name backend backend:latest'
         }
      }
   }
}
