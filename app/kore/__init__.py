import search

class Debug:

    def __init__(self, enable=True):
        self.enable = enable
        self.setup()
        if self.enable:
            print("=" * 120)
            print("Debug mode is enabled:")
            print("\tServer bound on: {}:{}".format(self.server, self.port))
            print("=" * 120)
            
    def setup(self):
        if self.enable:
            self.port = 80
            self.server = "0.0.0.0"
        else:
            self.port = 43770
            self.server = "127.0.0.1"
