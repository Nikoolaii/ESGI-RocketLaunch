# Rocket: Launch the Rocket!
## Statement
The rocket is ready to take off and embark on the conquest of the JavaScript universe! However, there is still work for the engineers: the countdown is not working yet, and the ignition and liftoff processes of the rocket are not yet operational.
### Expected Behavior
Upon clicking the ignition button, the countdown immediately appears on the display panel and starts at 10. Then, every second, the countdown decreases by 1. When "0" is displayed, the rocket should take off!
### Remarks

- Once the ignition button is triggered, it becomes non-operational; clicking on it is no longer possible. The ***disabled*** class defined in the CSS file can be used to manage the button's appearance.
- At the beginning of the countdown, the rocket image should change (rocket2.gif).
- At the end of the countdown, the rocket image should change (rocket3.gif).

### Tips and Tricks

- To manage ***time*** in JavaScript, you will need to use ***timers***!
- If it is possible to *add* an event handler, it is likely possible to *remove* it too...
- Organize your code to keep track: declare global constants and variables first, then define functions, and finally, the main code at the bottom.
- Take a look at the rocket.css file, observe the classes that can be useful: disabled, tookOff, tiny, normal, big.

## Bonus
1. The scenery is not complete! You must add 150 randomly sized stars (classes tiny, normal, big in the CSS file) at random locations on the page.
2. Add a button to cancel the ignition
   This button is visible from the beginning but will only be active once ignition is triggered and until liftoff. Once the countdown is complete, it is no longer possible to stop it, and the button is disabled (CSS class disabled).
3. Add a button to reset the liftoff