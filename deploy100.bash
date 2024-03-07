#!/bin/bash

# Define the base domain
BASE_DOMAIN="vercel.app"

# Loop through to deploy from imagine3 to imagine100
for i in {5..100}; do
    # Define the subdomain
    SUBDOMAIN="imagine${i}"

    # Deploy to Vercel

    # Add subdomain alias to the project
    vercel alias set "https://imagine-node-15rvydiyz-darwinskenderasi.vercel.app" "${SUBDOMAIN}"
done
done
