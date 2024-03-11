#!/bin/bash

#vercel stuff.
BASE_DOMAIN="vercel.app"


# Change the for i in {numbertostart..numbertoend} to.
for i in {600..700}; do
    # Define the subdomain
    SUBDOMAIN="imagine${i}"

    # Deploy to Vercel

    # Add subdomain alias to the project
    vercel alias set "https://imagine-node-15rvydiyz-darwinskenderasi.vercel.app" "${SUBDOMAIN}"
done
done
