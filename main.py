import random

class Magic8Ball:
    def __init__(self):
        self.responses = [
            "Yes, definitely.",
            "Without a doubt.",
            "Most likely.",
            "Yes, but ask again later.",
            "Ask again later.",
            "Cannot predict now.",
            "Don't count on it.",
            "Very doubtful.",
            "No way!",
            "Outlook not so good.",
        ]

    def shake_ball(self):
        return random.choice(self.responses)

def main():
    magic_8_ball = Magic8Ball()

    print("Welcome to the Magic 8 Ball!\n")
    
    while True:
        user_input = input("Ask the Magic 8 Ball a yes or no question (type 'quit' to exit): ")
        
        if user_input.lower() == 'quit':
            print("Goodbye!")
            break

        # Shake the Magic 8 Ball and display the response
        response = magic_8_ball.shake_ball()
        print(f"\nMagic 8 Ball says: {response}\n")

if __name__ == "__main__":
    main()
