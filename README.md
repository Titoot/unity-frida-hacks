**Horrible setup/installation notes:**

install nodejs 20 for windows - https://nodejs.org/en/download/

checkout repo

```
npm i
```

**To print out the methods and fields of the a class in a game:**
```
node injector.js <process-name> enumerator-test.js
```
Example output
```
{
    "address": "0xe8733e0",
    "methods": {
        ...
        "Damage": {
            "address": "0xe887610",
            "jit_address": "0x1082bd20"
        },
        ...
    },
    "fields": {
        ...
        "isPlayerCharacter": {
            "address": "0xe8873d0",
            "offset": "0x1c",
            "type": "boolean"
        }
    }
}
```

**To apply my hacks to "198X":**
```
node injector.js 198X.exe example-hacks.js
```

Sample output:
```
Injected "example-hacks.js" into 198X.exe

[*] STARTED PLAYING: The Runaway
[+] Collision! Removing speed loss and disabling wipeout
[+] Collision! Removing speed loss and disabling wipeout
[+] Collision! Removing speed loss and disabling wipeout
[+] Collision! Removing speed loss and disabling wipeout

[*] STARTED PLAYING: Kill Screen
[+] Player took RPG damage: 31, health (before damage) was: 99
[+] Resetting RPG health to: 99
[+] Player took RPG damage: 33, health (before damage) was: 99
[+] Resetting RPG health to: 99

[*] STARTED PLAYING: Credits
```
