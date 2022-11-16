#! /bin/bash
if [ $DEBUG == "1" ]; then
  echo "DEBUG=1"
  echo "wait db create complete ..."
  chmod +x /app/wait-for-it.sh
  chmod +x /app/.docker/services/db/volume/init.sh
  /app/wait-for-it.sh db:5432 --strict --timeout=300

  echo "start dev ..."
  yarn dev
else
  echo "DEBUG=0"
  echo "wait db create complete ..."
  chmod +x /app/wait-for-it.sh
  chmod +x /app/.docker/services/db/volume/init.sh
  /app/wait-for-it.sh db:5432 --strict --timeout=300

  echo "start build and start ..."
  yarn build
  yarn start
fi
