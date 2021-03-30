pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
             echo "this is Build stage"
            }
        }
        stage('Test') { 
            steps {
               echo "this is testing stage"
            }
        }
        stage('Deploy') { 
            steps {
            echo "this is deploy stage"
            }
        }
    }
}
