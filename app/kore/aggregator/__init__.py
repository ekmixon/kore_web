
def get_datasources():
    results = { "total": 5,
                "online": 3,
                "offline": 2,
                "datasources": { "active_directory" : { "online": True,
                                                        "last_beacon": format(1528759463, ",d")  
                                },
                                "bro": { "online": False,
                                         "last_beacon": format(1526081662, ",d")  
                                },
                                "sccm": { "online": True,
                                          "last_beacon": format(1528759463, ",d")  
                                },
                                "scom": { "online": True,
                                          "last_beacon": format(1528759463, ",d")  
                                },
                                "snort": { "online": False,
                                           "last_beacon": format(1525217662, ",d")  
                                },
                }
    }

    return results


def get_alerts_aggregated():
    results = { "total" : format(15234403, ",d"),
                "last_hour": 2,
                "last_day": 24,
                "last_week": 105,
                "last_month": format(10339, ",d"),
                "last_year": format(1023845, ",d")
    }

    return results

def get_users_aggregated():
    results = { "total": 5,
                "online": 3,
                "offline": 2
                #"users": { "brandon", user_object()}
    }

    return results

def get_running_costs():
    results = { "power": { "total": format(25003, ",d"),
                           "last_day": 25,
                           "last_week": 410,
                           "last_month": format(1304, ",d"),
                           "last_year": format(15033, ",d")
                },
                "storage": { "total": format(2353332, ",d"),
                             "last_day": 252,
                             "last_week": format(41033, ",d"),
                             "last_month": format(1304532, ",d"),
                             "last_year": format(150332352, ",d")
                }
    }

    return results