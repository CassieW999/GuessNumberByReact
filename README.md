# Guess A Number Using React by Luhan Wen

There are 3 screens in this app (You should have 3 different components for these) that you need to switch between them programmatically. That means that you should not be using any library for navigation. You need to have state variables to keep track of the game state (e.g. is the game over? has the user entered a number? has the user guessed correctly?) and based on those render different screens.

## Screens:
**Starting screen**: It shows a card (a view with rounded corner and shadow) with a TextInput and two buttons (Reset and Confirm). The user is only allowed to enter a number (choose a proper keyboard) up to 4 digits. The entered value should be between 1020 and 1029 (inclusive). If the input value is invalid (a number out of the accepted range or a pasted alphabetical value), an alertLinks to an external site. should be shown to the user with a button to reset the input. 

**Game screen**: This screen is shown in a modal, which shows a message to the user notifying them if the number they entered matches what you have chosen (which means they have won the game) or if it's bigger or smaller. If they have won they will see another message congratulating them. If they haven't won, users can choose to continue the game (taken back to the starting game to guess again) or choose to end the game. 

**Final screen**: When the user chooses to finish the game or if they have guessed the chosen number correctly, they will be shown the final screen.
