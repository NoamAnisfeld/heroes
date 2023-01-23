## Background
Welcome to our heroes company.
We able to train and manage our heroes as well.
Every hero in our company gain a professional training plan.

## Technical requirements
1. You should use Angular 9 and above.
2. Use mock for application data instead of server side http requests.
3. We are modern company, so we should use JSON-formatted data for input and output.
4. All code should be created keeping on best practices and SOLID principles.
5. Make responsive site.
6. Use SCSS or LESS as styling format.
7. Set accessibility to AA standard for screen reader.

## Recommendations
• Make all desired validations.
• Clean code.
• Write the logs to console with one focal point (middleware).

## Tasks
### heroes management
Our trainers should be able:
* As a workday begins, login with mock user to system (as trainer).
* See all heroes cards. Please mention that heroes’ data is private (every trainer can train only his
heroes and see everyone heroes).

Note:
* Password
    * At least 8 charts with
        * One capital letter
        * One digit
        * One non-alphanumeric char
    * Should be stores securely

heroes card should include:
* name
* ability: attacker, defender
* guid id
* Date when hero started to train
* Suit colors
* Starting power (decimal)
* Current power (decimal)

### Heroes screen
Every trainer can see his heroes in the screen. A box for each hero with his details.
The heroes boxes sorts by current power.
The trainer can train every heroes he wants.
