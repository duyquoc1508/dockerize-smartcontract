#!/bin/sh

LOG_FILE=./logs/$(date "+%Y-%m-%d")-deploy-rinkeby-log.txt

echo "[ TIME: $(date "+%H:%M-%S")" ]>>$LOG_FILE
truffle migrate --reset --network bsc_testnet | tee -a $LOG_FILE
echo "----------------------------------------------------------------------------------------------------------" >> $LOG_FILE