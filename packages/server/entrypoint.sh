#!/bin/bash
if [ $DEBUG == "1" ];
then
    echo "DEBUG=1"
    chmod +x /app/wait-for-it.sh
    /app/wait-for-it.sh db:5432

    echo "start dev ...."
    yarn start:dev
else
    echo "DEBUG=0"
    chmod +x /app/wait-for-it.sh
    /app/wait-for-it.sh db:5432
    
    echo "start build and start ..."
    yarn build
    yarn start
fi
