#!/bin/bash

sudo rm -rf /opt/back-end

sudo git clone -b develop https://kareem.moh.khalil:Km9121990@gitlab.com/kareem.moh.khalil/bws-api.git /opt/back-end

# stop the previous pm2
sudo pm2 kill
sudo npm remove pm2 -g

#pm2 needs to be installed globally as we would be deleting the repo folder.
# this needs to be done only once as a setup script.
sudo npm install pm2 -g
# starting pm2 daemon
sudo pm2 status

cd /opt/back-end

#install npm packages
echo "Running npm install"
sudo npm install --unsafe-perm --only=prod --ignore-scripts
#Restart the node server
sudo pm2 start server.js
sudo pm2 status
