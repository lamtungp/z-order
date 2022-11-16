if [$NODE_ENV="devlopment"]; then
  echo "DEBUG=1"
  echo "start create table ..."
  chmod +x /app/wait-for-it.sh
  /app/wait-for-it.sh db:5432 --strict --timeout=300

  echo "start dev ...."
  yarn dev
else
  echo "DEBUG=0"
  echo "start create table ..."
  chmod +x /app/wait-for-it.sh
  /app/wait-for-it.sh db:5432 --strict --timeout=300

  echo "start build and start ..."
  yarn build
  yarn start
fi
