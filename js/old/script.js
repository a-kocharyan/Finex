
//ez arra van, hogy ha nincs meg eltarolva widget pozicio. a tombben a width alapjan vannak sorszamozva, 0 es 1 ures
var widgets = [{}, {},
    {
        /*"myCurrent": {
            "id": "myCurrent",
            "x": 0,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#myCurrent",
            "bottom_show": "0",
            "right_show": "0",
            "position": "1",
            "current_content": "1",
            "active": 1
        },
        "deposit": {
            "id": "deposit",
            "x": 1,
            "y": 40,
            "width": 1,
            "height": 1,
            "wid": "#deposit",
            "bottom_show": "0",
            "right_show": "0",
            "position": "2",
            "current_content": 1,
            "active": 1
        },
        "saving": {
            "id": "saving",
            "x": 1,
            "y": 39,
            "width": 1,
            "height": 1,
            "wid": "#saving",
            "bottom_show": "0",
            "right_show": "0",
            "position": "3",
            "current_content": 1,
            "active": 1
        },
        "loan": {
            "id": "loan",
            "x": 1,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#loan",
            "bottom_show": "0",
            "right_show": "0",
            "position": "4",
            "current_content": 1,
            "active": 1
        },
        "nic": {
            "id": "nic",
            "x": 1,
            "y": 38,
            "width": 1,
            "height": 1,
            "wid": "#nic",
            "bottom_show": "0",
            "right_show": "0",
            "position": "5",
            "current_content": 1,
            "active": 1
        },
        "bir": {
            "id": "bir",
            "x": 1,
            "y": 35,
            "width": 1,
            "height": 1,
            "wid": "#bir",
            "bottom_show": "0",
            "right_show": "0",
            "position": "6",
            "current_content": 1,
            "active": 1
        },
        "loyPoint": {
            "id": "loyPoint",
            "x": 1,
            "y": 1,
            "width": 1,
            "height": 1,
            "wid": "#loyPoint",
            "bottom_show": "0",
            "right_show": "0",
            "position": "7",
            "current_content": 1,
            "active": 1
        },
        "quickp": {
            "id": "quickp",
            "x": 0,
            "y": 36,
            "width": 2,
            "height": 2,
            "wid": "#quickp",
            "bottom_show": "0",
            "right_show": "0",
            "position": "8",
            "current_content": 1,
            "active": 1
        },
        "cashf": {
            "id": "cashf",
            "x": 0,
            "y": 4,
            "width": 1,
            "height": 1,
            "wid": "#cashf",
            "bottom_show": "0",
            "right_show": "0",
            "position": "10",
            "current_content": 1,
            "active": 1
        },
        "vid": {
            "id": "vid",
            "x": 1,
            "y": 33,
            "width": 1,
            "height": 2,
            "wid": "#vid",
            "bottom_show": "0",
            "right_show": "0",
            "position": "11",
            "current_content": 1,
            "active": 1
        },
        "vid1": {
            "id": "vid1",
            "x": 1,
            "y": 33,
            "width": 1,
            "height": 2,
            "wid": "#vid1",
            "bottom_show": "0",
            "right_show": "0",
            "position": "22",
            "current_content": 1,
            "active": 1
        },
        "vid2": {
            "id": "vid2",
            "x": 1,
            "y": 33,
            "width": 1,
            "height": 2,
            "wid": "#vid2",
            "bottom_show": "0",
            "right_show": "0",
            "position": "23",
            "current_content": 1,
            "active": 1
        },
        "accountOpening": {
            "id": "accountOpening",
            "x": 1,
            "y": 33,
            "width": 1,
            "height": 2,
            "wid": "#accountOpening",
            "bottom_show": "0",
            "right_show": "0",
            "position": "23",
            "current_content": 1,
            "active": 1
        },  
        "loneRequest": {
            "id": "loneRequest",
            "x": 1,
            "y": 33,
            "width": 1,
            "height": 2,
            "wid": "#loneRequest",
            "bottom_show": "0",
            "right_show": "0",
            "position": "23",
            "current_content": 1,
            "active": 1
        },
        "cardApplication": {
            "id": "cardApplication",
            "x": 1,
            "y": 33,
            "width": 1,
            "height": 2,
            "wid": "#cardApplication",
            "bottom_show": "0",
            "right_show": "0",
            "position": "23",
            "current_content": 1,
            "active": 1
        }, 
        "termDepositOpening": {
            "id": "termDepositOpening",
            "x": 1,
            "y": 33,
            "width": 1,
            "height": 2,
            "wid": "#termDepositOpening",
            "bottom_show": "0",
            "right_show": "0",
            "position": "23",
            "current_content": 1,
            "active": 1
        },
        "sphab": {
            "id": "sphab",
            "x": 1,
            "y": 31,
            "width": 1,
            "height": 2,
            "wid": "#sphab",
            "bottom_show": "0",
            "right_show": "0",
            "position": "12",
            "current_content": 1,
            "active": 1
        },
        "debit": {
            "id": "debit",
            "x": 1,
            "y": 4,
            "width": 1,
            "height": 2,
            "wid": "#debit",
            "bottom_show": "0",
            "right_show": "0",
            "position": "13",
            "current_content": 1,
            "active": 1
        },
        "future": {
            "id": "future",
            "x": 0,
            "y": 5,
            "width": 1,
            "height": 1,
            "wid": "#future",
            "bottom_show": "0",
            "right_show": "0",
            "position": "14",
            "current_content": 1,
            "active": 1
        },
        "credit": {
            "id": "credit",
            "x": 0,
            "y": 6,
            "width": 1,
            "height": 2,
            "wid": "#credit",
            "bottom_show": "0",
            "right_show": "0",
            "position": "15",
            "current_content": 1,
            "active": 1
        },
        "lastTen": {
            "id": "lastTen",
            "x": 1,
            "y": 29,
            "width": 1,
            "height": 2,
            "wid": "#lastTen",
            "bottom_show": "0",
            "right_show": "0",
            "position": "16",
            "current_content": 1,
            "active": 1
        },
        "alertArt": {
            "id": "alertArt",
            "x": 1,
            "y": 27,
            "width": 1,
            "height": 2,
            "wid": "#alertArt",
            "bottom_show": "0",
            "right_show": "0",
            "position": "17",
            "current_content": 1,
            "active": 1
        },
        "upcome": {
            "id": "upcome",
            "x": 1,
            "y": 6,
            "width": 1,
            "height": 2,
            "wid": "#upcome",
            "bottom_show": "0",
            "right_show": "0",
            "position": "18",
            "current_content": 1,
            "active": 1
        },
        "contact": {
            "id": "contact",
            "x": 0,
            "y": 8,
            "width": 1,
            "height": 2,
            "wid": "#contact",
            "bottom_show": "0",
            "right_show": "0",
            "position": "19",
            "current_content": 1,
            "active": 1
        },
        "pfmw": {
            "id": "pfmw",
            "x": 1,
            "y": 25,
            "width": 1,
            "height": 2,
            "wid": "#pfmw",
            "bottom_show": "0",
            "right_show": "0",
            "position": "20",
            "current_content": 1,
            "active": 1
        },
        "advertisement": {
            "id": "advertisement",
            "x": 1,
            "y": 23,
            "width": 1,
            "height": 2,
            "wid": "#advertisement",
            "bottom_show": "0",
            "right_show": "0",
            "position": "21",
            "current_content": 1,
            "active": 1
        },
        "popular": {
            "id": "popular",
            "x": 1,
            "y": 8,
            "width": 1,
            "height": 2,
            "wid": "#popular",
            "bottom_show": "0",
            "right_show": "0",
            "position": "22",
            "current_content": 1,
            "active": 1
        },
        "prPackage": {
            "id": "prPackage",
            "x": 1,
            "y": 21,
            "width": 1,
            "height": 2,
            "wid": "#prPackage",
            "bottom_show": "0",
            "right_show": "0",
            "position": "24",
            "current_content": 1,
            "active": 1
        },
        "myNotes": {
            "id": "myNotes",
            "x": 1,
            "y": 19,
            "width": 1,
            "height": 2,
            "wid": "#myNotes",
            "bottom_show": "0",
            "right_show": "0",
            "position": "25",
            "current_content": 1,
            "active": 1
        },
        "saveGoal": {
            "id": "saveGoal",
            "x": 1,
            "y": 10,
            "width": 1,
            "height": 2,
            "wid": "#saveGoal",
            "bottom_show": "0",
            "right_show": "0",
            "position": "26",
            "current_content": 1,
            "active": 1
        },
        "savePlus": {
            "id": "savePlus",
            "x": 0,
            "y": 17,
            "width": 2,
            "height": 2,
            "wid": "#savePlus",
            "bottom_show": "0",
            "right_show": "0",
            "position": "27",
            "current_content": 1,
            "active": 1
        },
        "commonpayprobaerror": {
            "id": "commonpayprobaerror",
            "x": 0,
            "y": 12,
            "width": 2,
            "height": 2,
            "wid": "#commonpayprobaerror",
            "bottom_show": "0",
            "right_show": "0",
            "position": "28",
            "current_content": 1,
            "active": 1
        },
        "commonpay": {
            "id": "commonpay",
            "x": 0,
            "y": 14,
            "width": 2,
            "height": 2,
            "wid": "#commonpay",
            "bottom_show": "0",
            "right_show": "0",
            "position": "29",
            "current_content": 1,
            "active": 1
        },
        "addNewWidget": {
            "id": "addNewWidget",
            "x": 0,
            "y": 16,
            "width": 1,
            "height": 1,
            "wid": "#addNewWidget",
            "bottom_show": "0",
            "right_show": "0",
            "position": "1000",
            "current_content": 1,
            "active": 1
        }
    },
    {
        "myCurrent": {
            "id": "myCurrent",
            "x": 0,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#myCurrent",
            "bottom_show": "0",
            "right_show": "0",
            "position": "1",
            "current_content": "1",
            "active": 1
        },
        "deposit": {
            "id": "deposit",
            "x": 1,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#deposit",
            "bottom_show": "0",
            "right_show": "0",
            "position": "2",
            "current_content": 1,
            "active": 1
        },
        "saving": {
            "id": "saving",
            "x": 2,
            "y": 25,
            "width": 1,
            "height": 1,
            "wid": "#saving",
            "bottom_show": "0",
            "right_show": "0",
            "position": "3",
            "current_content": 1,
            "active": 1
        },
        "loan": {
            "id": "loan",
            "x": 2,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#loan",
            "bottom_show": "0",
            "right_show": "0",
            "position": "4",
            "current_content": 1,
            "active": 1
        },
        "nic": {
            "id": "nic",
            "x": 1,
            "y": 1,
            "width": 1,
            "height": 1,
            "wid": "#nic",
            "bottom_show": "0",
            "right_show": "0",
            "position": "5",
            "current_content": 1,
            "active": 1
        },
        "bir": {
            "id": "bir",
            "x": 2,
            "y": 24,
            "width": 1,
            "height": 1,
            "wid": "#bir",
            "bottom_show": "0",
            "right_show": "0",
            "position": "6",
            "current_content": 1,
            "active": 1
        },
        "loyPoint": {
            "id": "loyPoint",
            "x": 2,
            "y": 1,
            "width": 1,
            "height": 1,
            "wid": "#loyPoint",
            "bottom_show": "0",
            "right_show": "0",
            "position": "7",
            "current_content": 1,
            "active": 1
        },
        "quickp": {
            "id": "quickp",
            "x": 0,
            "y": 18,
            "width": 2,
            "height": 2,
            "wid": "#quickp",
            "bottom_show": "0",
            "right_show": "0",
            "position": "8",
            "current_content": 1,
            "active": 1
        },
        "cashf": {
            "id": "cashf",
            "x": 0,
            "y": 1,
            "width": 1,
            "height": 1,
            "wid": "#cashf",
            "bottom_show": "0",
            "right_show": "0",
            "position": "10",
            "current_content": 1,
            "active": 1
        },
        "vid": {
            "id": "vid",
            "x": 1,
            "y": 4,
            "width": 1,
            "height": 2,
            "wid": "#vid",
            "bottom_show": "0",
            "right_show": "0",
            "position": "11",
            "current_content": 1,
            "active": 1
        },
        "sphab": {
            "id": "sphab",
            "x": 2,
            "y": 22,
            "width": 1,
            "height": 2,
            "wid": "#sphab",
            "bottom_show": "0",
            "right_show": "0",
            "position": "12",
            "current_content": 1,
            "active": 1
        },
        "debit": {
            "id": "debit",
            "x": 2,
            "y": 4,
            "width": 1,
            "height": 2,
            "wid": "#debit",
            "bottom_show": "0",
            "right_show": "0",
            "position": "13",
            "current_content": 1,
            "active": 1
        },
        "future": {
            "id": "future",
            "x": 0,
            "y": 2,
            "width": 1,
            "height": 1,
            "wid": "#future",
            "bottom_show": "0",
            "right_show": "0",
            "position": "14",
            "current_content": 1,
            "active": 1
        },
        "credit": {
            "id": "credit",
            "x": 0,
            "y": 3,
            "width": 1,
            "height": 2,
            "wid": "#credit",
            "bottom_show": "0",
            "right_show": "0",
            "position": "15",
            "current_content": 1,
            "active": 1
        },
        "lastTen": {
            "id": "lastTen",
            "x": 1,
            "y": 6,
            "width": 1,
            "height": 2,
            "wid": "#lastTen",
            "bottom_show": "0",
            "right_show": "0",
            "position": "16",
            "current_content": 1,
            "active": 1
        },
        "alertArt": {
            "id": "alertArt",
            "x": 2,
            "y": 20,
            "width": 1,
            "height": 2,
            "wid": "#alertArt",
            "bottom_show": "0",
            "right_show": "0",
            "position": "17",
            "current_content": 1,
            "active": 1
        },
        "upcome": {
            "id": "upcome",
            "x": 2,
            "y": 6,
            "width": 1,
            "height": 2,
            "wid": "#upcome",
            "bottom_show": "0",
            "right_show": "0",
            "position": "18",
            "current_content": 1,
            "active": 1
        },
        "contact": {
            "id": "contact",
            "x": 0,
            "y": 5,
            "width": 1,
            "height": 2,
            "wid": "#contact",
            "bottom_show": "0",
            "right_show": "0",
            "position": "19",
            "current_content": 1,
            "active": 1
        },
        "pfmw": {
            "id": "pfmw",
            "x": 1,
            "y": 8,
            "width": 1,
            "height": 2,
            "wid": "#pfmw",
            "bottom_show": "0",
            "right_show": "0",
            "position": "20",
            "current_content": 1,
            "active": 1
        },
        "advertisement": {
            "id": "advertisement",
            "x": 2,
            "y": 18,
            "width": 1,
            "height": 2,
            "wid": "#advertisement",
            "bottom_show": "0",
            "right_show": "0",
            "position": "21",
            "current_content": 1,
            "active": 1
        },
        "popular": {
            "id": "popular",
            "x": 2,
            "y": 8,
            "width": 1,
            "height": 2,
            "wid": "#popular",
            "bottom_show": "0",
            "right_show": "0",
            "position": "22",
            "current_content": 1,
            "active": 1
        },
        "netWorth": {
            "id": "netWorth",
            "x": 0,
            "y": 7,
            "width": 1,
            "height": 2,
            "wid": "#netWorth",
            "bottom_show": "1",
            "right_show": 0,
            "position": "23",
            "current_content": 1,
            "active": 1
        },
        "prPackage": {
            "id": "prPackage",
            "x": 1,
            "y": 10,
            "width": 1,
            "height": 2,
            "wid": "#prPackage",
            "bottom_show": "0",
            "right_show": "0",
            "position": "24",
            "current_content": 1,
            "active": 1
        },
        "myNotes": {
            "id": "myNotes",
            "x": 2,
            "y": 16,
            "width": 1,
            "height": 2,
            "wid": "#myNotes",
            "bottom_show": "0",
            "right_show": "0",
            "position": "25",
            "current_content": 1,
            "active": 1
        },
        "saveGoal": {
            "id": "saveGoal",
            "x": 2,
            "y": 10,
            "width": 1,
            "height": 2,
            "wid": "#saveGoal",
            "bottom_show": "0",
            "right_show": "0",
            "position": "26",
            "current_content": 1,
            "active": 1
        },
        "savePlus": {
            "id": "savePlus",
            "x": 0,
            "y": 16,
            "width": 2,
            "height": 2,
            "wid": "#savePlus",
            "bottom_show": "0",
            "right_show": "0",
            "position": "27",
            "current_content": 1,
            "active": 1
        },
        "commonpayprobaerror": {
            "id": "commonpayprobaerror",
            "x": 1,
            "y": 12,
            "width": 2,
            "height": 2,
            "wid": "#commonpayprobaerror",
            "bottom_show": "0",
            "right_show": "0",
            "position": "28",
            "current_content": 1,
            "active": 1
        },
        "commonpay": {
            "id": "commonpay",
            "x": 1,
            "y": 14,
            "width": 2,
            "height": 2,
            "wid": "#commonpay",
            "bottom_show": "0",
            "right_show": "0",
            "position": "29",
            "current_content": 1,
            "active": 1
        },
        "addNewWidget": {
            "id": "addNewWidget",
            "x": 0,
            "y": 9,
            "width": 1,
            "height": 1,
            "wid": "#addNewWidget",
            "bottom_show": "0",
            "right_show": "0",
            "position": "1000",
            "current_content": 1,
            "active": 1
        }
    },
    {
        "myCurrent": {
            "id": "myCurrent",
            "x": 0,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#myCurrent",
            "bottom_show": "0",
            "right_show": "0",
            "position": "1",
            "current_content": "1",
            "active": 1
        },
        "deposit": {
            "id": "deposit",
            "x": 1,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#deposit",
            "bottom_show": "0",
            "right_show": "0",
            "position": "2",
            "current_content": 1,
            "active": 1
        },
        "saving": {
            "id": "saving",
            "x": 2,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#saving",
            "bottom_show": "0",
            "right_show": "0",
            "position": "3",
            "current_content": 1,
            "active": 1
        },
        "loan": {
            "id": "loan",
            "x": 3,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#loan",
            "bottom_show": "0",
            "right_show": "0",
            "position": "4",
            "current_content": 1,
            "active": 1
        },
        "nic": {
            "id": "nic",
            "x": 0,
            "y": 1,
            "width": 1,
            "height": 1,
            "wid": "#nic",
            "bottom_show": "0",
            "right_show": "0",
            "position": "5",
            "current_content": 1
        },
        "bir": {
            "id": "bir",
            "x": 2,
            "y": 1,
            "width": 1,
            "height": 1,
            "wid": "#bir",
            "bottom_show": "0",
            "right_show": "0",
            "position": "6",
            "current_content": "1",
            "active": 1
        },
        "loyPoint": {
            "id": "loyPoint",
            "x": 3,
            "y": 1,
            "width": 1,
            "height": 1,
            "wid": "#loyPoint",
            "bottom_show": "0",
            "right_show": "0",
            "position": "7",
            "current_content": "1",
            "active": 1
        },
        "quickp": {
            "id": "quickp",
            "x": 0,
            "y": 2,
            "width": 2,
            "height": 2,
            "wid": "#quickp",
            "bottom_show": "0",
            "right_show": "0",
            "position": "8",
            "current_content": "1",
            "active": 1
        },
        "cashf": {
            "id": "cashf",
            "x": 0,
            "y": 4,
            "width": 1,
            "height": 1,
            "wid": "#cashf",
            "bottom_show": "0",
            "right_show": "0",
            "position": "10",
            "current_content": "1",
            "active": 1
        },
        "vid": {
            "id": "vid",
            "x": 1,
            "y": 4,
            "width": 1,
            "height": 2,
            "wid": "#vid",
            "bottom_show": "0",
            "right_show": "0",
            "position": "11",
            "current_content": "1",
            "active": 1
        },
        "sphab": {
            "id": "sphab",
            "x": 2,
            "y": 4,
            "width": 1,
            "height": 2,
            "wid": "#sphab",
            "bottom_show": "0",
            "right_show": "0",
            "position": "12",
            "current_content": "1",
            "active": 1
        },
        "debit": {
            "id": "debit",
            "x": 3,
            "y": 4,
            "width": 1,
            "height": 2,
            "wid": "#debit",
            "bottom_show": "0",
            "right_show": "0",
            "position": "13",
            "current_content": "1",
            "active": 1
        },
        "future": {
            "id": "future",
            "x": 0,
            "y": 5,
            "width": 1,
            "height": 1,
            "wid": "#future",
            "bottom_show": "0",
            "right_show": "0",
            "position": "14",
            "current_content": "1",
            "active": 1
        },
        "credit": {
            "id": "credit",
            "x": 0,
            "y": 6,
            "width": 1,
            "height": 2,
            "wid": "#credit",
            "bottom_show": "0",
            "right_show": "0",
            "position": "15",
            "current_content": "1",
            "active": 1
        },
        "lastTen": {
            "id": "lastTen",
            "x": 1,
            "y": 6,
            "width": 1,
            "height": 2,
            "wid": "#lastTen",
            "bottom_show": "0",
            "right_show": "0",
            "position": "16",
            "current_content": "1",
            "active": 1
        },
        "alertArt": {
            "id": "alertArt",
            "x": 2,
            "y": 6,
            "width": 1,
            "height": 2,
            "wid": "#alertArt",
            "bottom_show": "0",
            "right_show": "0",
            "position": "17",
            "current_content": "1",
            "active": 1
        },
        "upcome": {
            "id": "upcome",
            "x": 3,
            "y": 6,
            "width": 1,
            "height": 2,
            "wid": "#upcome",
            "bottom_show": "0",
            "right_show": "0",
            "position": "18",
            "current_content": "1",
            "active": 1
        },
        "contact": {
            "id": "contact",
            "x": 0,
            "y": 8,
            "width": 1,
            "height": 2,
            "wid": "#contact",
            "bottom_show": "0",
            "right_show": "0",
            "position": "19",
            "current_content": "1",
            "active": 1
        },
        "pfmw": {
            "id": "pfmw",
            "x": 1,
            "y": 8,
            "width": 1,
            "height": 2,
            "wid": "#pfmw",
            "bottom_show": "0",
            "right_show": "0",
            "position": "20",
            "current_content": "1",
            "active": 1
        },
        "advertisement": {
            "id": "advertisement",
            "x": 2,
            "y": 8,
            "width": 1,
            "height": 2,
            "wid": "#advertisement",
            "bottom_show": "0",
            "right_show": "0",
            "position": "21",
            "current_content": "1",
            "active": 1
        },
        "popular": {
            "id": "popular",
            "x": 3,
            "y": 8,
            "width": 1,
            "height": 2,
            "wid": "#popular",
            "bottom_show": "0",
            "right_show": "0",
            "position": "22",
            "current_content": "1",
            "active": 1
        },
        "netWorth": {
            "id": "netWorth",
            "x": 0,
            "y": 10,
            "width": 1,
            "height": 2,
            "wid": "#netWorth",
            "bottom_show": "1",
            "right_show": "0",
            "position": "23",
            "current_content": "1",
            "active": 1
        },
        "prPackage": {
            "id": "prPackage",
            "x": 1,
            "y": 10,
            "width": 1,
            "height": 2,
            "wid": "#prPackage",
            "bottom_show": "0",
            "right_show": "0",
            "position": "24",
            "current_content": "1",
            "active": 1
        },
        "myNotes": {
            "id": "myNotes",
            "x": 2,
            "y": 10,
            "width": 1,
            "height": 2,
            "wid": "#myNotes",
            "bottom_show": "0",
            "right_show": "0",
            "position": "25",
            "current_content": "1",
            "active": 1
        },
        "saveGoal": {
            "id": "saveGoal",
            "x": 3,
            "y": 10,
            "width": 1,
            "height": 2,
            "wid": "#saveGoal",
            "bottom_show": "0",
            "right_show": "0",
            "position": "26",
            "current_content": "1",
            "active": 1
        },
        "savePlus": {
            "id": "savePlus",
            "x": 0,
            "y": 12,
            "width": 2,
            "height": 2,
            "wid": "#savePlus",
            "bottom_show": "0",
            "right_show": "0",
            "position": "27",
            "current_content": "1",
            "active": 1
        },
        "commonpayprobaerror": {
            "id": "commonpayprobaerror",
            "x": 2,
            "y": 12,
            "width": 2,
            "height": 2,
            "wid": "#commonpayprobaerror",
            "bottom_show": "0",
            "right_show": "0",
            "position": "28",
            "current_content": "1",
            "active": 1
        },
        "commonpay": {
            "id": "commonpay",
            "x": 2,
            "y": 14,
            "width": 2,
            "height": 2,
            "wid": "#commonpay",
            "bottom_show": "0",
            "right_show": "0",
            "position": "29",
            "current_content": "1",
            "active": 1
        },
        "addNewWidget": {
            "id": "addNewWidget",
            "x": 0,
            "y": 14,
            "width": 1,
            "height": 1,
            "wid": "#addNewWidget",
            "bottom_show": "0",
            "right_show": "0",
            "position": "1000",
            "current_content": "1",
            "active": 1
        },
        "placeholder": {
            "id": "placeholder",
            "x": 0,
            "y": 0,
            "width": 1,
            "height": 1,
            "wid": "#placeholdernincsilyen",
            "bottom_show": 0,
            "right_show": 0,
            "position": 1000,
            "current_content": 1,
            "active": 1
        }
    }*/
];
/*var widgets = [{},{},
             {"myCurrent":{"id":"myCurrent","x":0,"y":0,"width":1,"height":1,"wid":"#myCurrent","bottom_show":"0","right_show":"0","position":"1","current_content":"1","active":1}},
             {"myCurrent":{"id":"myCurrent","x":0,"y":0,"width":1,"height":1,"wid":"#myCurrent","bottom_show":"0","right_show":"0","position":"1","current_content":"1","active":1}},
             {"myCurrent":{"id":"myCurrent","x":0,"y":0,"width":1,"height":1,"wid":"#myCurrent","bottom_show":"0","right_show":"0","position":"1","current_content":"1","active":1}}
             ];*/
var mapMarker = "https://vps.finex.solutions/static/demo/img/map_marker.png";

var dials = {};

var current_width = 0;
var width = 4;
var grid ;

$.fn.max = function(selector) { 
    return Math.max.apply(null, this.map(function(index, el) { return selector.apply(el); }).get() ); 
}

function init_grid(first) {

    if( localStorage.getItem("widgets"+width) == null) {
        localStorage.setItem("widgets"+width, JSON.stringify(widgets[width]));
    }
    var options = {
            cellHeight : 180,
            verticalMargin : 10,
            animate : true,
            alwaysShowResizeHandle : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            draggable: {
                handle : '.grid-stack-item-content .drag-handle',
                scroll: true
            },
            minWidth : 200,
            width : width
    };

    //console.log(options);
    console.log("init grid... ("+options.width+")");
    $('.grid-stack').gridstack(options);

    //save_widget_positions_json();
    grid = $('.grid-stack').data('gridstack');

    load_widget_positions_json();

    if( first ) {
        $(".se-pre-con").fadeOut(700);
    } else {
    }
}

function clear_grid() {
    grid.remove_all();
};

function save_widget_positions_json() {
    console.log("this.save_widget_positions_json() called");
    localStorage.removeItem("widgets"+width);
    
    
    var widgetmap = this.get_current_widget_positions();
    
    localStorage.setItem("widgets"+width, JSON.stringify(widgetmap));
    console.log(JSON.stringify(widgetmap));
    //$(window).trigger('resize');
}

function get_current_widget_positions() {
    data = _.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
        el = $(el);
        var node = el.data('_gridstack_node');
        var id = "";
        if( node != undefined ) {
            return {
                id: el[0].id,
                x: node.x,
                y: node.y,
                width: node.width,
                height: node.height,
                wid: '#'+el[0].id,
                bottom_show: $('#'+el[0].id).attr('data-showmore-bottom') ? $('#'+el[0].id).attr('data-showmore-bottom') : 0,
                right_show: $('#'+el[0].id).attr('data-showmore-right') ? $('#'+el[0].id).attr('data-showmore-right') : 0,
                position: $('#'+el[0].id).attr('data-gs-position'),
                current_content: $('#'+el[0].id).attr('data-current_content') ? $('#'+el[0].id).attr('data-current_content') : 1,
                active: 1
            };
        } else {
            return {
                id: "placeholder",
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                wid: '#placeholdernincsilyen',
                bottom_show: 0,
                right_show: 0,
                position: 1000,
                current_content: 1,
                active: 1
            }
        };
    });
    
    //hashmapkent adjuk vissza
    return _.chain(data).indexBy("id").value();
}

function load_widget_positions_json() {
    console.log("this.load_widget_positions_json() called   (width: "+width+")");
	//alert(localStorage.getItem("widgets"+width).length+" "+width);
    var data = JSON.parse(localStorage.getItem("widgets"+width));

    //var grid = this;
    ////var grid = $('.grid-stack').data('gridstack');
    //grid.batch_update();
    $.each(data, function (key, node) {
        
        if( node.active == 0 ) {
            grid.remove_widget($(node.wid), true);
            
        } else {
            //console.log(node.wid+" x="+node.x+", y="+node.y);

            if (node.bottom_show == 1) {
                $(node.wid).find(".show_more_bottom").attr('data-current_display_status', 'show').html(
                        '<i class="fa fa-angle-up"></i>');
                $(node.wid).closest('.grid-stack-item').find('.more_content_bottom').slideDown();
                if ($(node.wid).attr('data-knob_id')) {
                    //knob_id = $($value).attr('data-knob_id');
                    //setKnobLayout(knob_id,'max');
                }
            } else {
                $(node.wid).find(".show_more_bottom").attr('data-current_display_status', 'hide').html(
                        '<i class="fa fa-angle-down"></i>');
                $(node.wid).closest('.grid-stack-item').find('.more_content_bottom').hide();
                if ($(node.wid).attr('data-knob_id')) {
                    //knob_id = $($value).attr('data-knob_id');
                    //setKnobLayout(knob_id,'min');
                }
            }

            if (node.right_show == 1) {
                $(node.wid).find(".show_more_right").attr('data-current_display_status', 'show').html(
                        '<i class="fa fa-angle-left"></i>');
                $(node.wid).closest('.grid-stack-item').find('.more_content_right').removeClass('hide').slideDown();
                $(node.wid).closest('.grid-stack-item').find('.main_content').removeClass('col-md-12').addClass(
                        'col-md-6');
                if ($(node.wid).attr('data-fix_right_height') == 'true') {

                }
            } else {
                $(node.wid).find(".show_more_right").attr('data-current_display_status', 'hide').html(
                        '<i class="fa fa-angle-right"></i>');
                $(node.wid).closest('.grid-stack-item').find('.more_content_right').hide();
                $(node.wid).closest('.grid-stack-item').find('.main_content').removeClass('col-md-6').addClass(
                        'col-md-12');

            }
            if (node.current_content == 1) {
                $(node.wid).removeClass("hide_content").attr('data-current_content', 1);
                $(node.wid).find('.content_hide_link').removeClass('fa-angle-down').addClass('fa-angle-up');
            } else if (node.right_show == 0) {
                // $(node.wid).addClass("hide_content").attr('data-current_content',0);
                // $(node.wid).find('.content_hide_link').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
            //grid.move( $(node.wid), node.x, node.y );
            grid.update( $(node.wid), node.x, node.y, node.width, node.height );
            
            //$(node.wid).attr('data-gs-x', node.x);
            //$(node.wid).attr('data-gs-y', node.y);
            //$(node.wid).attr('data-gs-width', node.width);
            //$(node.wid).attr('data-gs-height', node.height);
            //$(node.wid).attr('data-showmore-bottom', node.bottom_show);
            //$(node.wid).attr('data-showmore-right', node.right_show);
            //$(node.wid).attr('data-current_content', node.current_content);
            //$(node.wid).attr('data-gs-position', node.position);

            if ($(node.wid).find(".show_more_bottom").attr('data-current_display_status') == 'show') {
                $(node.wid).find('.more_content_bottom').show();
                if ($(node.wid).attr('data-knob_id') !== undefined) {
                    //knob_id = $(node.wid).attr('data-knob_id');
                    //console.log(knob_id + " max");
                    setKnobLayout($(node.wid), 'max');
                }
            } else {
                $(node.wid).find('.more_content_bottom').hide();
                if ($(node.wid).attr('data-knob_id') !== undefined) {
                    //knob_id = $(node.wid).attr('data-knob_id');
                    //console.log(knob_id + " min");
                    setKnobLayout($(node.wid), 'min');
                }
            }
            
        }
        
    });
    //grid.commit();
	$('.grid-stack .grid-stack-item').each(function(index, element) {
		setRightHeight(this);
	});

    if (typeof google !== "undefined") google.maps.event.trigger(map, 'resize');

}

function reset_layout() {
    console.log("reset_layout called()");
    localStorage.clear();
    window.location.reload();
}

function layoutInit() {
        if(typeof(Storage) !== "undefined") {
        } else {
            alert("Please upgrade your browser, current version doesn't support HTML5");
        }
        win_width = $(window).width();
        width = 4;
        if (win_width < 1441 && win_width > 1024) {
            width = 3;
        } else if (win_width < 1025 && win_width > 568) {
            width = 2;
        } else if (win_width < 569) {
            width = 1;
        }
        createDial($(".dial1"), 824, 10000, 90, "#f7573f", "#87b22e", 320);
        createDial($(".dial2"), 2754, 3500, 90, "rgba(0,0,0,.03)", "#7c94be", "0");
        createDial($(".dial3"), 4102, 5400, 90, "rgba(0,0,0,.03)", "#fbb03b", "0");
        createDial($(".dial4"), 2754, 3500, 90, "rgba(0,0,0,.03)", "#a5d16c", "0");
        createDial($(".dial_loyalty"), 13500, 20000, 90, "rgba(0,0,0,.03)", "#fbb03b", "0");
        createDial($(".dial_futcashflow"), 1350, 5000, 90, "rgba(0,0,0,.03)", "#a5d16c", 270);

        init_grid(true);
        current_width = width;

        $('.grid-stack').on('change', function(event, ui) {
            //console.log("changed");
        });

        $('.grid-stack').on('dragstop', function(event, ui) {
        //this.addEventListener('dragstop', function(event, ui) {
            ////console.log("dragstop: ")
            //var grid = this;
            ////console.log( JSON.stringify(get_current_widget_positions()));

            var el = $(event.target);
            var node = el.data('_gridstack_node');
            var wid = "#"+el[0].id;

            var widgetmap = get_current_widget_positions();
            widgetmap[el[0].id] = {
                    id: el[0].id,
                    x: node.x,
                    y: node.y,
                    width: node.width,
                    height: node.height,
                    wid: '#'+el[0].id,
                    bottom_show: $('#'+el[0].id).attr('data-showmore-bottom') ? $('#'+el[0].id).attr('data-showmore-bottom') : 0,
                    right_show: $('#'+el[0].id).attr('data-showmore-right') ? $('#'+el[0].id).attr('data-showmore-right') : 0,
                    position: $('#'+el[0].id).attr('data-gs-position'),
                    current_content: $('#'+el[0].id).attr('data-current_content') ? $('#'+el[0].id).attr('data-current_content') : 1
                    
            }
            localStorage.removeItem("widgets"+width);
            localStorage.setItem("widgets"+width, JSON.stringify(widgetmap));

        });
        
        //----------------
		$('.grid-stack .grid-stack-item').each(function(index, element) {
			createGridStackItemFunctions(this);
		});
        
        
        $("body").niceScroll({
            cursorborder : "",
            cursorcolor : "#000000",
            boxzoom : false,
            cursoropacitymax : 0.25,
            cursorwidth : "20px",
            mousescrollstep : 120,
            scrollspeed : 140,
            zindex: 100000
        });
		
        $(".left-wrap").niceScroll({
            cursorborder : "",
            cursorcolor : "#000000",
            boxzoom : false,
            cursoropacitymax : 0.5,
            cursorwidth : "10px",
            mousescrollstep : 120,
            scrollspeed : 100,
            zindex: 100000
        });

        $("#pfm").tabs();
        $(".trans_close").click(function() {
            $(this).parent().remove();
        });

        $(".open_leftSlide").click(function() {
            $(this).parent().addClass('show_left_widget');
        });

        $(".remove_slide").click(function() {
            $(this).parent().parent().parent().removeClass('show_left_widget');
        });
           /*
             * $('#payment_info').carouFredSel({ responsive : true, pagination : '#pi_pagination',
             * scroll : 1 });
             */

        showContainerGraph();
        showPfm();
        
		accountOverviewInit();
        
        
        var typeHandler = new WidgetTypeHandler();
        typeHandler.renderTypeButtons();

        var rs = new StyleSwitch();
        var widAct = new WidgetActivator();
        
		var paymentDueDate = document.getElementById("paymentDueDate");
        if (paymentDueDate!=null) paymentDueDate.valueAsDate = new Date();
    	addWindowResizeEvent();
}

function createGridStackItemFunctions(el) {
		var grid = $(el.parentNode).data("gridstack");
        $(el).find(".show_more_bottom").click(function(e) {
            var widget = $(this).closest('.grid-stack-item');
            var height = widget.attr('data-gs-height');
            var width = widget.attr('data-gs-width');
            if ($(this).attr('data-current_display_status') == 'hide') {
				changeElmenets(widget.find('.more_content_right .transectoin_list')[0], widget.find('.more_content_bottom .transectoin_list')[0]);
                hideThisRightContent(widget, grid);
                var is_knob = false;
                if (widget.attr('data-knob_id')) {
                    //knob_id = widget.attr('data-knob_id');
                    setKnobLayout(widget, 'max');

                    is_knob = true;
                }
                widget.find('.more_content_bottom').slideDown(700);
                $(this).attr('data-current_display_status', 'show').html('<i class="fa fa-angle-up"></i>');
                if (!is_knob) {
                    grid.resize(widget, width, parseInt(height) + 1);
                }
                widget.attr('data-showmore-bottom', 1);
            } else {
                widget.find('.more_content_bottom').slideUp();
                $(this).attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-down"></i>');
                grid.resize(widget, width, parseInt(height) - 1);
                widget.attr('data-showmore-bottom', 0);
                if (widget.attr('data-knob_id')) {
                    //knob_id = widget.attr('data-knob_id');
                    setKnobLayout(widget, 'min');
                }
            }
            setRightHeight(widget);
            save_widget_positions_json();            
        });

        $(el).find(".show_more_right").click(function(e) {
            var widget = $(this).closest('.grid-stack-item');
            var height = widget.attr('data-gs-height');
            var width = widget.attr('data-gs-width');
            var x_coord = widget.attr('data-gs-x');
            var y_coord = widget.attr('data-gs-y');
            if ($(this).attr('data-current_display_status') == 'hide') {
				changeElmenets(widget.find('.more_content_bottom .transectoin_list')[0], widget.find('.more_content_right .transectoin_list')[0]);
                hideThisBottomContent(widget, grid);
                widget.find('.more_content_right').slideDown(700);
                $(this).attr('data-current_display_status', 'show').html('<i class="fa fa-angle-left"></i>');
                widget.find('.main_content').removeClass('col-md-12').addClass('col-md-6');
                widget.find('.more_content_right').removeClass('hide').show();
                $('.widget', widget).addClass("extended-right");

                if( x_coord == grid.opts.width-1 ) {
                    grid.move(widget, (parseInt(x_coord)-1), y_coord);
                }
                grid.resize(widget, (parseInt(width) + 1), height);

                $(this).attr('data-showmore-right', 1);
                setRightHeight(widget);
            } else {
                widget.find('.more_content_right').slideUp();
                widget.find('.main_content').removeClass('col-md-6').addClass('col-md-12');
                widget.find('.more_content_right').hide();
                $('.widget', widget).removeClass("extended-right");
                $(this).attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-right"></i>');
                grid.resize(widget, parseInt(width) - 1, height);
                widget.attr('data-showmore-right', 0);
            }
            save_widget_positions_json();            
        });

        $(el).find(".content_hide_link").click(function(e) {
			var widget = $(this).closest('.grid-stack-item');
            if (widget.hasClass('hide_content')) {
                widget.slideDown(500, function() {
                    widget.removeClass("hide_content").attr('data-current_content', 1);
                    widget.find('.content_hide_link').removeClass('fa-angle-down').addClass('fa-angle-up');
                });

            } else {
                widget.slideUp(500, function() {
                    widget.addClass("hide_content").attr('data-current_content', 0);
                    widget.find('.content_hide_link').removeClass('fa-angle-up').addClass('fa-angle-down');
                });
            }
            save_widget_positions_json();            
        });
}

function setReightHeight() {
    $('.grid-stack .grid-stack-item').each(function(index, element) {
        $this = this;
        if ($($this).attr('data-fix_right_height') == 'true') {
            var lsi_height = $($this).find('.main_content').height();
            $($this).find(".left_stack_item").css('height', lsi_height - parseInt(20));
        }

    });
}
    
function set_auto_position(value) {
    $('.grid-stack .grid-stack-item').each(function(index, element) {
        //console.log("#"+element.id + " autopos="+value);
        $("#"+element.id).attr('data-gs-auto-position',value);
    });
}

function hideThisRightContent($this, grid) {
    console.log("hideThisRightContent("+$this+")");

    var $thisGrid = $this;
    if ($($thisGrid).attr('data-show_only_either') != 'true') {
        return true;
    }
    var $thisLinkRight = $($thisGrid).find('.show_more_right');
    ////var grid = $('.grid-stack').data('gridstack');
    var height = $($this).attr('data-gs-height');
    var width = $($this).attr('data-gs-width');

    if ($($thisLinkRight).attr('data-current_display_status') != 'hide') {
        $($thisGrid).find('.more_content_right').slideUp(200);
        $(".widget", $thisGrid).removeClass("extended-right");
        $($thisGrid).find('.main_content').removeClass('col-md-6').addClass('col-md-12');
        $($thisLinkRight).attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-right"></i>');
        grid.resize($thisGrid, parseInt(width) - 1, height);
        $($thisGrid).attr('data-showmore-right', 0);
    }
}

function hideThisBottomContent($this, grid) {
    console.log("hideThisBottomContent("+$this+")");

    var $thisGrid = $this;
    if ($($thisGrid).attr('data-show_only_either') != 'true') {
        return true;
    }
    var $thisLinkBottom = $($thisGrid).find('.show_more_bottom');
    ////var grid = $('.grid-stack').data('gridstack');
    var height = $($this).attr('data-gs-height');
    var width = $($this).attr('data-gs-width');
    if ($($thisLinkBottom).attr('data-current_display_status') != 'hide') {
        $($thisGrid).find('.more_content_bottom').slideUp(200);
        $($thisLinkBottom).attr('data-current_display_status', 'hide').html('<i class="fa fa-angle-down"></i>');
        grid.resize($thisGrid, width, parseInt(height) - 1);
        $($thisGrid).attr('data-showmore-bottom', 0);
    }
}

function setRightHeight(el) {
	if ($(el).attr('data-fix_right_height') == 'true') {
		var lsi_height = $(el).find('.main_content').height();
		$(el).find(".left_stack_item").css('height', lsi_height - parseInt(20));
	}
}

function setKnobLayout(el,minmax) {
    var grid = $('.grid-stack').data('gridstack');
    var width = el.attr('data-gs-width');
	var id = el.attr('data-knob_id');

    if(minmax == 'min') {
        grid.resize(el, width, 1);
        el.find('.graph_content').removeClass('graph-center').addClass('graph-left');
        el.find('.beni-balance').show();
        el.find(id).trigger('configure', {'width':90,'height':90,'displayInput':false});
    } else {
        grid.resize(el, width, 3);
        el.find('.graph_content').removeClass('graph-left').addClass('graph-center');
        el.find('.beni-balance').hide();
        el.find(id).trigger('configure', {'width':180,'height':180,'displayInput':true});
        el.find(id).css('visibility','visible');
    }
}

function showWidgetSettings1() {
    $("#WidgetSettingsModal1").modal('show');
}

function removeWidget($this) {
    // var con = confirm('Are you sure want to delete ?');
    var con = true;
    if (con) {
        var $thisGrid = $($this).closest('.grid-stack-item');
        var name = $($thisGrid).attr('data-name');
        var id = $($thisGrid).attr('id');
        widgets = JSON.parse(localStorage.getItem("widgets"+width));
        //widgets[]
        console.log(widgets);
        console.log(widgets[id]);
        widgets[id].active=0;
        localStorage.setItem("widgets"+width, JSON.stringify(widgets));
        $('.grid-stack').data('gridstack').remove_widget($thisGrid, true);
    }
}

function addWindowResizeEvent() {
	$(window).resize(function() {
		clearTimeout(window.resizedFinished);
		window.resizedFinished = setTimeout(function(){
			win_width = $(window).width();

			width = 4;
			if (win_width < 1441 && win_width > 1024) {
				width = 3;
			} else if (win_width < 1025 && win_width > 568) {
				width = 2;
			} else if (win_width < 569) {
				width = 1;
			}
			if (width != current_width) {
				$('.grid-stack').data('gridstack').setGridWidth(width);
				current_width = width;
			}
		}, 250);
		console.log("resize done");
	});
}
		
		
function createDial(id, value, max, size, bgColor, fgColor, angleOffs) {
    var inputColor = "#ffffff";
    id.knob({
                'width' : size,
                'height' : size,
                //'lineCap': 'round',
                'max' : max,
                'readOnly': true,
                'min': 0,
                'step' : 1,
                'angleOffset' : angleOffs,
                'displayInput': true, //valamiert csak igy jo
                'thickness': 0.05,
                'inputColor' : inputColor,
                'bgColor': bgColor,
                'fgColor': fgColor
    });
    id.val(value).trigger('change');
}

function addDocumentKeyEvents() {
	var page=1;
	document.onkeydown = function(evt) {
	    evt = evt || window.event;	   
		if( evt.keyCode == 39 ) {
			//scroll right
			if( page == 3 ) return;
			
			$(".sec"+page).fadeOut();
			$(".sec"+(page+1)).fadeIn();
			page++;
			
		} else if( evt.keyCode == 37 ) {
			if( page == 1 ) return;
			//scroll left
			$(".sec"+page).fadeOut();
			$(".sec"+(page-1)).fadeIn();
			page--;
		}
	};
	
	
}

function changeElmenets(el1, el2) {
	if (typeof el1 !== "undefined" && typeof el2 !== "undefined") {
		var hasItem = false;
		for (var i=0; i<el1.childNodes.length; i++) {
			var ch = el1.childNodes[i];
			if (ch.nodeType==1 && ch.getAttribute("component")=="TransactionItem") {
				hasItem = true;
				break;
			}
		}
		if (hasItem) {
			var par1 = el1.parentNode;
			var par2 = el2.parentNode;
			par1.appendChild(el2);
			par2.appendChild(el1);
		}
	}
}

//U can use it after U and your DOM is ready
function mainInit() {
	try {layoutInit(); } catch (e) {console.log("layoutInit ERROR: "+e.message);}

	try {createStandingOrder(); } catch (e) {console.log("createStandingOrder ERROR: "+e.message);}
	try {initMassPayMent(document.getElementById("masspaymentart")); } catch (e) {console.log("ERROR: "+e.message);}
	try {initMobileTopUp(); } catch (e) {console.log("ERROR: "+e.message);}
	try {createPayment(); } catch (e) {console.log("ERROR: "+e.message);}
	try {createQuickPayment(document.getElementById("quickp")); } catch (e) {console.log("ERROR: "+e.message);}
	try {createSavingGoal(); } catch (e) {console.log("ERROR: "+e.message);}
	try {createCharts(); } catch (e) {console.log("ERROR: "+e.message);}
	try {addDocumentKeyEvents(); } catch (e) {console.log("ERROR: "+e.message);}
}