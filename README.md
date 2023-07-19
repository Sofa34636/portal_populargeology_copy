prod: http://83.149.241.29/

##
Start :

### Backend:
```
pip install -r requirements.txt
python manage.py makemigrations
python manage.py makemigrations portal_api
python manage.py migrate
python manage.py createsuperuser

if DEBUG == False:
    python manage.py collectstatic

python manage.py runserver
```

### Frontend:

```
cd frontend
npm i
npm run serve (for development)
npm run build (for production)
```

<br />
