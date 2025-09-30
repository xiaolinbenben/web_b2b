FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

ARG PIP_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple
ENV PIP_INDEX_URL=${PIP_INDEX_URL}

ARG PIP_DEFAULT_TIMEOUT=120
ENV PIP_DEFAULT_TIMEOUT=${PIP_DEFAULT_TIMEOUT}

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . ./

RUN chmod +x /app/entrypoint.sh \
    && mkdir -p /app/upload

EXPOSE 80

CMD ["/app/entrypoint.sh"]
