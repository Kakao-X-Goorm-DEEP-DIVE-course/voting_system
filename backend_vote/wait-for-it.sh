#!/usr/bin/env bash

# 인자로 db와 3306을 받을거임
HOST=$1
PORT=$2
shift 2

cmd="$@"

until nc -z "$HOST" "$PORT"; do
  >&2 echo "Waiting for $HOST:$PORT to be available..."
  sleep 1
done

>&2 echo "$HOST:$PORT is available - executing command"
exec $cmd
