FROM lscr.io/linuxserver/kasm:latest

ENV KASM_PORT=443
ENV DOCKER_HUB_USERNAME=USER
ENV DOCKER_HUB_PASSWORD=PASS
ENV DOCKER_MTU=1500

VOLUME /imagine-node:/opt

EXPOSE 3000 443

CMD ["sh", "-c", "echo 'Starting Kasm...' && /bin/bash"]
