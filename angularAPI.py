#!/usr/bin/python3
import cgi
import json
import os
import psycopg2
import psycopg2.extras
from datetime import date
import random
#print("Content-Type: application/json; charset=UTF-8\n\n");
print("Content-Type: text/html; charset=UTF-8\n\n");
#os.environ['REQUEST_METHOD']
conn = psycopg2.connect(
	host="13.48.189.101",
	port="5432",
	database="angulardb",
	user="angular",
	password="qwe",
	cursor_factory=psycopg2.extras.NamedTupleCursor
)
base_url = "13.48.189.101"
DEFAULT_ACTION = "getItems"

arguments = cgi.FieldStorage()
action = arguments.getvalue("action")
if action is None:
	action = DEFAULT_ACTION

def error(message):
	error = {
		"error": 1,
		"errorMessage": message
	}
	return json.dumps(error)

def getItems():
	cur = conn.cursor()
	cur.execute("SELECT * FROM liczby")
	items = cur.fetchall()
	cur.close()
	#"data_wpisu": x.data_wpisu
	return list(map(lambda x: {
		"id": x.id,
		"liczba_uz": x.liczba_uz,
		"liczba_gen": x.liczba_gen,
		"data_wpisu": str(items[0].data_wpisu)
	}, items))

def addItem():
	liczba_uz = arguments.getvalue("liczba_uz")
	liczba_gen = random.randrange(0, 10000)
	data = date.today().strftime("'%Y-%m-%d'")
	cur = conn.cursor()
	cur.execute("INSERT INTO liczby(liczba_uz,liczba_gen, data_wpisu) VALUES({}, {}, {}) RETURNING id".format(liczba_uz, liczba_gen, data))
	conn.commit()
	id = cur.fetchone()[0]
	cur.close()
	x = {
		"id": id,
		"liczba_uz": liczba_uz,
		"liczba_gen": liczba_gen,
		"data_wpisu": data,
	}
	return x


if action == "getItems":
	#print(getItems())
	print(json.dumps(getItems()))
elif action == "addItem": #and os.environ['REQUEST_METHOD'] == "POST":
	print(json.dumps(addItem()))

else:
	print(error("NIEZNANA AKCJA!"))

conn.close()

