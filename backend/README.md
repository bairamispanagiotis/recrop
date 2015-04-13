# Installation of Backend

## 1 Django setup

Django MongoDB Engine depends on

* Django-nonrel, a fork of Django that adds support for non-relational databases.
* djangotoolbox, a bunch of utilities for non-relational Django applications and backends.

It’s highly recommended (although not required) to use a virtualenv for your project to not mess up other Django setups.

### 1.1. virtualenv

**virtualenv** is a tool to create isolated Python environments.

If not already installed, grab a copy from the Cheeseshop:

```
pip install virtualenv
```

To set up a virtual environment for your project, use

```
virtualenv env
```

To join the environment, use (in Bash):

```
source env/bin/activate
```

### 1.2. Django-nonrel

Django fork with support for NoSQL databases

```
pip install git+https://github.com/django-nonrel/django@nonrel-1.6
```

### 1.3. djangotoolbox



Djangotoolbox provides a common API for running Django on non-relational/NoSQL databases.

```
pip install git+https://github.com/django-nonrel/djangotoolbox
```

The djangotoolbox.admin module provides admin overrides for making django.contrib.auth work correctly in the admin UI. Simply add 'djangotoolbox' to INSTALLED_APPS after django.contrib.admin.

This will disable features that require JOINs. If you still need permission handling you should use the nonrel permission backend.

#### 1.3.1. django-permission-backend-nonrel

A Django authentication backend that supports Django’s user and group permissions on Django-Nonrel.

```
pip install git+https://github.com/django-nonrel/django-permission-backend-nonrel.git
```

### 1.4. Django MongoDB Engine

You should use the latest Git revision.

```
pip install git+https://github.com/django-nonrel/mongodb-engine
```

### 1.5. Install others requirements
```
pip install -r requirements.txt
```

## 2. MongoDB Setup

## 3. RabbitMQ Setup

## 4. Celery Setup

### 4.1. Configuration

#### `recrop/settings.py`

```
BROKER_URL = 'amqp://celery:celery@localhost:5672//'

CELERY_RESULT_BACKEND = 'mongodb://localhost:27017'
CELERY_MONGODB_BACKEND_SETTINGS = {
    'database': 'celery',
    'taskmeta_collection': 'tasks',
}

CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TIMEZONE = 'Europe/Athens'
CELERY_ENABLE_UTC = True
```

### 4.2. Starting the worker
```
celery --app=recrop.celery worker --loglevel=INFO
```