#! /bin/bash
set -e

export INGRESS_INTERNAL_ANNOTATIONS=$HOF_CONFIG/ingress-internal-annotations.yaml
export INGRESS_EXTERNAL_ANNOTATIONS=$HOF_CONFIG/ingress-external-annotations.yaml
export CONFIGMAP_VALUES=$HOF_CONFIG/configmap-values.yaml
export NGINX_SETTINGS=$HOF_CONFIG/nginx-settings.yaml
export DATA_SERVICE_INTERNAL_ANNOTATIONS=$HOF_CONFIG/data-service-internal-annotations.yaml
export FILEVAULT_NGINX_SETTINGS=$HOF_CONFIG/filevault-nginx-settings.yaml
export FILEVAULT_INGRESS_EXTERNAL_ANNOTATIONS=$HOF_CONFIG/filevault-ingress-external-annotations.yaml

kd='kd --insecure-skip-tls-verify --timeout 10m --check-interval 10s'

if [[ $1 == 'tear_down' ]]; then
  export KUBE_NAMESPACE=$BRANCH_ENV
  export DRONE_SOURCE_BRANCH=$(cat /root/.dockersock/branch_name.txt)

  $kd --delete -f kube/configmaps/configmap.yml -f kube/hof-rds-api
  $kd --delete -f kube/redis -f kube/html-pdf -f kube/app -f kube/file-vault
  echo "Torn Down Branch - $APP_NAME-$DRONE_SOURCE_BRANCH.internal.branch.sas-notprod.homeoffice.gov.uk"
  exit 0
fi

export KUBE_NAMESPACE=$1
export DRONE_SOURCE_BRANCH=$(echo $DRONE_SOURCE_BRANCH | tr '[:upper:]' '[:lower:]' | tr '/' '-')

if [[ ${KUBE_NAMESPACE} == ${BRANCH_ENV} ]]; then
  $kd -f kube/configmaps -f kube/certs
  $kd -f kube/redis -f kube/hof-rds-api -f kube/html-pdf -f kube/file-vault
  $kd -f kube/app
elif [[ ${KUBE_NAMESPACE} == ${UAT_ENV} ]]; then
  $kd -f kube/configmaps/configmap.yml
  $kd -f kube/redis -f kube/hof-rds-api -f kube/html-pdf
  $kd -f kube/file-vault/file-vault-service.yml -f kube/file-vault/file-vault-ingress.yml
  $kd -f kube/file-vault/file-vault-deployment.yml -f kube/file-vault/file-vault-network-policy.yml
  $kd -f kube/app
elif [[ ${KUBE_NAMESPACE} == ${STG_ENV} ]]; then
  $kd -f kube/configmaps/configmap.yml
  $kd -f kube/redis -f kube/hof-rds-api -f kube/html-pdf
  $kd -f kube/file-vault/file-vault-service.yml -f kube/file-vault/file-vault-ingress.yml
  $kd -f kube/file-vault/file-vault-deployment.yml -f kube/file-vault/file-vault-network-policy.yml
  $kd -f kube/app
elif [[ ${KUBE_NAMESPACE} == ${PROD_ENV} ]]; then
  $kd -f kube/configmaps/configmap.yml
  $kd -f kube/redis -f kube/hof-rds-api -f kube/html-pdf
  $kd -f kube/file-vault/file-vault-service.yml -f kube/file-vault/file-vault-ingress.yml
  $kd -f kube/file-vault/file-vault-deployment.yml -f kube/file-vault/file-vault-network-policy.yml
  $kd -f kube/app/service.yml -f kube/app/ingress-external.yml
  $kd -f kube/app/networkpolicy-external.yml -f kube/app/deployment.yml
fi

sleep $READY_FOR_TEST_DELAY

if [[ ${KUBE_NAMESPACE} == ${BRANCH_ENV} ]]; then
  echo "Branch - $APP_NAME-$DRONE_SOURCE_BRANCH.internal.branch.sas-notprod.homeoffice.gov.uk"
fi

