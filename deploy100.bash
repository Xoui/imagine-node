#!/bin/bash

#vercel stuff.
BASE_DOMAIN="vercel.app"


# Change the for i in {numbertostart..numbertoend} to.
for i in {0..120}; do
    # Define the subdomain
    SUBDOMAIN="prowqximathpage${i}"

    # Deploy to Vercel

    # Add subdomain alias to the project
    vercel alias set "https://imagine-node-darwinskenderasi.vercel.app" "${SUBDOMAIN}"
done
done
