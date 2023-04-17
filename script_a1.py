import time
import datetime
from pymongo import MongoClient
from paho.mqtt.client import Client as MQTTClient

# MongoDB connection details
client = MongoClient('mongodb+srv://maxthanit:20082544Max@cluster0.88mrfo3.mongodb.net/final_devtool')
db = client['sensordata']
collection = db['seating']

# Netpie.io connection details
APP_ID = 'c2856998-0eed-4f2b-a0f6-e0e5b8dfb591'
KEY = 'st3DNqp6j8oSYhXJueKMZsBaY8zqpTpj'
SECRET = '*-qy(iP9I3au6Ocj6lZxVf*9RVxS5bO6'
TOPIC = '@msg/table_a1_noti'

# MQTT client setup
mqttc = MQTTClient(client_id="any-string", clean_session=True, userdata=None)
mqttc.username_pw_set(KEY, SECRET)
mqttc.connect("broker.netpie.io", port=443)
mqttc.loop_start()
    

# Callback function for MQTT messages
def on_message(client, userdata, message):
    global occupied  # Use the global variable to track the sensor state
    payload = message.payload.decode()
    if payload == 'pass':  # Check if the sensor is being passed
        if status == 'available':  # Check if the sensor was previously unoccupied
            # Add record to MongoDB with timestamp and date
            data = {
                'timestamp': int(time.time()),
                'date': datetime.datetime.now().strftime('%m/%d/%Y'),
                'time': datetime.datetime.now().strftime('%H:%M:%S PM'),
                'status' = 'unavailable',
                'table' : [A1],
                'name': 'Table A1 Sensor',
                'code': '0001'
            }
            collection.insert_one(data)
            occupied = True  # Update the sensor state to occupied
    elif payload == 'unpass':  # Check if the sensor is being unpassed
        if status == 'unavailable:  # Check if the sensor was previously occupied
            # Add record to MongoDB with timestamp and date
            data = {
                'timestamp': int(time.time()),
                'date': datetime.datetime.now().strftime('%m/%d/%Y'),
                'time': datetime.datetime.now().strftime('%H:%M:%S PM'),
                'status' = 'available',
                'table' : [A1],
                'name': 'Table A1 Sensor',
                'code': '0002'
            }
            collection.insert_one(data)
            occupied = False  # Update the sensor state to unoccupied

# Subscribe to Netpie.io topic and wait for messages
mqttc.subscribe(TOPIC)
mqttc.on_message = on_message

# Loop to keep the script running
while True:
    time.sleep(1)
