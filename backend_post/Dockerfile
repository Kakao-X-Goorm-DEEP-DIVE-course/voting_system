FROM python:3.10-slim

# MySQL 관련 패키지 설치
RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    libmariadb-dev \
    libmariadb3 \
    build-essential \
    pkg-config \
    netcat-openbsd  # Netcat OpenBSD 버전 설치

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN python manage.py migrate

# CMD ["sh", "-c", "while ! nc -z mygumi.xyz 3306; do sleep 1; done; python manage.py runserver 0.0.0.0:8000 --noreload"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
