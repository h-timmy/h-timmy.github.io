import json

#Load file
with open("reservations.json", "r") as file:
    json_object = json.load(file)


def add_reservation(name, start, end, reason):
    new_res ={
        "name" : name,
        "start" : start,
        "end" : end,
        "reason" : reason
    }
    json_object['reservations'].append(new_res)
    #r = json_object['reservations']
    #r.append(new_res)
    with open("reservations.json", "w") as outfile:
        json.dump(json_object, outfile, indent=4)
    #json.dump(json_object, "reservations.json", indent=4)

def get_all():
    return json



#print(json_object)
add_reservation("Timmy", 1, 2, "edit")
