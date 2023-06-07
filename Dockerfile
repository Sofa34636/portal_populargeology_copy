FROM python:3.10-buster
WORKDIR /portal

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /portal/requirements.txt
COPY ./manage.py /portal/manage.py
COPY ./geo_portal /portal/geo_portal
COPY ./media /portal/media
COPY ./portal_api /portal/portal_api
#COPY ./db.sqlite3 /portal/db.sqlite3

RUN pip install --no-cache-dir --upgrade -r /portal/requirements.txt

CMD ["python3", "manage.py" , "runserver", "0.0.0.0:8000"]
