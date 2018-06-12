import aggregator

class Breadcrumb:

    def __init__(self):
        self.name = None
        self.url = None
        self.title = None

    def update(self, name, url=None, title=None):
        self.name = name

        if url is None:
            self.url = "/{}".format(name.lower()) 
        else: 
            self.url = url    

        if title is None:
            self.title = self.name
        else:
            self.title = title