# A3-Interactive-Blacksmith
A3: Interactive Blacksmith - 26F_MTM6302_020 Web Development with JavaScript - Ashlee Earle
____________________________________________________________________________________________
A3: Interactive Blacksmith

Hide Assignment Information
Instructions
Your task
Extend your completed Blacksmith assignment so players can heat the forge, make swords, and reset the game using controls on the webpage. Reuse your existing game functions and add event listeners to connect them to the controls.

User action → read and check input → call a game function → update the page.

Players must be able to play without entering commands in the browser console.

Getting started
Create a new public GitHub repository named A3-Interactive-Blacksmith. Use hyphens in the repository name.
Clone the new repository and open it in VS Code.
Copy the files from your completed Assignment 1 into this new project, including index.html, your CSS and JavaScript, and the forge graphics. Copy the project files, not the original repository's .git folder. Keep your original Assignment 1 repository intact.
Confirm that the original game works before adding the controls. Keep index.html at the repository root and preserve the relative paths to your styles, script, and images.
Add and test the requirements below. Commit and push your progress to the new repository.
Enable GitHub Pages: open Settings → Pages, choose Deploy from a branch, select main and /(root), then select Save. Push at least one commit to main before configuring the publishing source.
Open the published website and test it again. See GitHub's publishing instructions if needed.
Create a new repository from your completed files rather than trying to fork your own repository.

Game rules
Keep the rules from Assignment 1:

Item	Rule
Starting heat	20
Starting sword count	0
Heat range	0–100
Making one sword	Requires at least 30 heat; uses 30 heat and adds one sword.
Too cold	Heat below 30.
Ready to forge	Heat from 30 to below 70.
Roaring fire	Heat from 70 to 100; crafting is still allowed.
Requirements
1. Add heat
Add a number input with a visible, associated label such as Heat to add.
Add an Add heat button.
Read the entered value and convert it to a number before using it in arithmetic.
Accept positive whole numbers. Reject empty input, zero, negative values, decimal values, and values that cannot be read as a finite number.
For invalid input, show a clear message on the page and leave the heat and sword count unchanged.
For valid input, pass the amount to your existing heatForge(amount) function. Keep the maximum heat at 100, even when the requested addition would exceed it.
Update the heat, forge status, graphics, and action message.
Use appropriate input attributes such as min="1" and step="1", and check the value in your JavaScript handler. If you use a form's submit event, account for native browser validation so the required on-page feedback can still be displayed.

2. Make a sword
Add a Make sword button that calls your existing makeSword() function.
Each click makes exactly one sword when there is at least 30 heat.
Subtract 30 heat and increase the sword count by one after successful crafting.
When heat is below 30, display an error message on the page explaining that more heat is needed. Leave both numbers unchanged.
Keep the button usable when the forge is cold so players can receive this feedback.
An error here means a visible feedback message. You do not need to use throw new Error() or try...catch.

3. Reset the forge
Add a Reset forge button that calls your existing resetForge() function.
Restore heat to 20 and swords made to zero.
Clear the heat input and previous feedback messages. For this assignment, reset should leave the feedback area empty rather than display the Assignment 1 starting message.
Restore the Too cold status, matching CSS class, image, and alternative text.
Initialize the page in this same starting state when it loads or refreshes.
4. Connect and update the interface
Use addEventListener() for the controls. Do not use inline HTML event attributes such as onclick.
Reuse heatForge(), makeSword(), resetForge(), getForgeStatus(), and updateForge() instead of duplicating the game rules in event handlers.
Make the small changes needed to your existing reset function and input handling.
Use real buttons and a labelled input. Ensure any buttons inside a form have the appropriate type so clicks do not unexpectedly reload the page.
Show feedback on the webpage, not only in the console or an alert box. Clear or replace outdated feedback after the next action.
Keep heat, sword count, status text, status class, and forge image accurate after every action. Keep only one forge status class active at a time.
Retain the three supplied forge graphics. Keep controls and feedback readable on narrow and wide screens; a visual redesign is not required.
Plan your approach
Add short pseudocode comments to your JavaScript before writing the handlers.

Build one control at a time. Refer to the Week 9 demo for selecting elements, adding listeners, reading form values, and updating the page.

Test your game
Start each row from a reset forge unless the row describes a sequence. Check the displayed numbers, message, status, and graphic.

Action	Expected result
Open or refresh the page	Heat 20; swords 0; Too cold; input and feedback empty.
Click Make sword immediately	Heat 20; swords 0; visible insufficient-heat message.
Enter 10 and click Add heat	Heat 30; swords 0; Ready to forge.
Add 10, then click Make sword	Heat 0; swords 1; Too cold; crafting success message.
Add 49	Heat 69; Ready to forge.
Add 50	Heat 70; Roaring fire.
Add 100	Heat capped at 100; Roaring fire.
Add 100, then click Make sword four times	Three swords made; fourth attempt fails; heat 10; swords 3.
Try empty input, 0, -5, and 2.5 separately	Clear on-page input feedback; no change to heat or swords.
Play, then click Reset forge	Heat 20; swords 0; Too cold graphic; input and feedback cleared.
Scope
This assessment focuses on Week 9 events and input handling.

Submission
Complete the requirements and test all three controls.
Commit and push your final files to A3-Interactive-Blacksmith.
Wait for GitHub Pages to publish your changes, then open the live site and check that the script, styles, and forge graphics load correctly.
Submit the link to your working GitHub Pages website in Brightspace.
A typical website address is https://YOUR-GITHUB-USERNAME.github.io/A3-Interactive-Blacksmith/. Use the actual published URL shown in your repository's Pages settings. Submit the website link, not the repository link. No separate report or video is required.

Assessment focus
Working event listeners and reusable game functions.
Correct reading, conversion, and validation of the heat input.
Accurate crafting rules and useful on-page feedback.
Complete reset behaviour and synchronized forge graphics and values.
Clear code, short planning comments, and a working published site.