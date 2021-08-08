const items = {
    'root': [
        { 'id': '1', 'name': '2021', 'type': 'directory' },
        { 'id': '2', 'name': '2022', 'type': 'directory' },
    ],
    '1': [
        { 'id': '3', 'name': '01', 'type': 'directory' },
        { 'id': '4', 'name': '02', 'type': 'directory' },
        { 'id': '1', 'name': 'cat01', 'type': 'picture', 'path': '/images/cat01.jpg', 'parent': '1' },
        { 'id': '2', 'name': 'cat02', 'type': 'picture', 'path': '/images/cat02.jpg', 'parent': '1' },
        { 'id': '3', 'name': 'cat03', 'type': 'picture', 'path': '/images/cat03.jpg', 'parent': '1' },
    ],
    '2': [
        { 'id': '4', 'name': 'cat04', 'type': 'picture', 'path': '/images/cat04.jpg', 'parent': '2' },
        { 'id': '5', 'name': 'cat05', 'type': 'picture', 'path': '/images/cat05.jpg', 'parent': '2' },
    ],
    '3': [
        { 'id': '6', 'name': 'cat06', 'type': 'picture', 'path': '/images/cat06.jpg', 'parent': '3' },
        { 'id': '7', 'name': 'cat07', 'type': 'picture', 'path': '/images/cat07.jpg', 'parent': '3' },
    ],
    '4': [
        { 'id': '8', 'name': 'cat08', 'type': 'picture', 'path': '/images/cat08.jpg', 'parent': '3' },
    ],
};

export {items}