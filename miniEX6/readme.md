#Roots

![ScreenShot](Screenshot.png)

This program is supposed to resemble some kind of plant growing, hence the name "Roots". The final program code is based on code I found in a processing program I found online. It does have quite a few modifications though. 

##Rules used for generativity

This program uses a couple of different rules that are used for the generativity and the aesthetics of whats generated. First of, i have a rule that calculates the location of where to draw the next circle. This rule is used to reduce the chances of circles overlapping each other and therefore to make the program "branch" out better.
In addition, the program has a function to measure which circle is closest to itself. With this, the program can further, by another rule, make a new circle that is exactly the perfect size not to overlap. It by that continues its chain of circles without overlapping.
Finally, the program has a rule that actually does the exact opposite of generating. This rule stops the animation from running completely. This was not my intention to include at first, but p5.js is not good at handling a lot of particles at once without slowing down a lot. For the purpose of the program and the experience, i was forced to put a cap on the maximum number of circles drawn. 


##Notions of generativity

The final piece of artwork resembles plant roots. This is mainly due to the colors I have chosen it to cycle through though. Depending on each their subjective depiction of the program, it could indeed resemble a lot of different things. It could be the night sky, a neural network, a city seen from space etc. 

Due to the controls of this particular piece, its in a limbo between being user created and computer generated. The program has to be initiated by the user, and therefore an interaction is necessary. It will not run by itself. However, when initiated by the user, it will generate by itself until its complete forced halt. The user simply needs to choose where to start the program, in one or multiple locations. I see this as if the user plants "seeds" and the computer makes them grow. As a result, what artwork is created with this, is a collaboration between man and machine. Its a symbiosis where nothing is created if neither are doing their part of the job.

##

Initiate the generation by clicking with your mouse
Link: https://pfisk.github.io/Mini-Exercises/miniEX6/roots
