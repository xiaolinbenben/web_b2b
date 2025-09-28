#!/bin/sh
set -e

if [ -n "$DB_HOST" ]; then
  echo "Waiting for database $DB_HOST:$DB_PORT..."
  until python - <<'PY'
import os
import socket
host = os.environ.get('DB_HOST', 'localhost')
port = int(os.environ.get('DB_PORT', '3306'))
with socket.create_connection((host, port), timeout=5):
    pass
PY
  do
    echo "Database not ready, retrying in 2 seconds..."
    sleep 2
  done
fi

python manage.py collectstatic --noinput || true
python manage.py migrate --noinput

exec gunicorn server.wsgi:application --bind 0.0.0.0:80 --workers ${GUNICORN_WORKERS:-3} --threads ${GUNICORN_THREADS:-2}