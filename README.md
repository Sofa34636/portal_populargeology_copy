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
