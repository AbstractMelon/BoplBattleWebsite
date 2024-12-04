function parseHexData() {
    const hexInput = document.getElementById('hexInput').value.trim();
    
    if (hexInput === '') {
      alert('Please enter hex data');
      return;
    }

    const json = convertHexToJson(hexInput);
    
    displayJsonData(json);
  }
  
  function convertHexToJson(hexData) {

    const bytes = hexToBytes(hexData);
  
    const jsonData = {
      "header": {
        "length": bytes[0]
      },
      "players": {
        "count": bytes[1],
        "colors": [
          {
            "index": bytes[0x2B]
          }
        ]
      },
      "abilities": {
        "count": bytes[0x7],
        "player_1": {
          "index": bytes[0x33],
          "abilities": [
            {
              "index": bytes[0x33 + 1],
              "name": getAbilityName(bytes[0x33 + 1])
            },
            {
              "index": bytes[0x33 + 2],
              "name": getAbilityName(bytes[0x33 + 2])
            },
            {
              "index": bytes[0x33 + 3],
              "name": getAbilityName(bytes[0x33 + 3])
            }
          ]
        },
        "player_2": {
          "index": bytes[0x36],
          "abilities": [
            {
              "index": bytes[0x36 + 1],
              "name": getAbilityName(bytes[0x36 + 1])
            },
            {
              "index": bytes[0x36 + 2],
              "name": getAbilityName(bytes[0x36 + 2])
            },
            {
              "index": bytes[0x36 + 3],
              "name": getAbilityName(bytes[0x36 + 3])
            }
          ]
        }
      }
    };
  
    return jsonData;
  }
  
  function hexToBytes(hexString) {
    const bytes = [];
    for (let i = 0; i < hexString.length; i += 2) {
      bytes.push(parseInt(hexString.substr(i, 2), 16));
    }
    return bytes;
  }
  
  function getAbilityName(abilityIndex) {
    const abilityMap = {
      0x00: "Null",
      0x01: "Roll",
      0x02: "Dash",
      0x03: "Grenade",
      0x04: "Bow",
      0x05: "Engine",
      0x06: "Blink",
      0x07: "Gust",
      0x08: "Growth ray",
      0x09: "Rock",
      0x0A: "Missile",
      0x0B: "Sword",
      0x0C: "Time stop",
      0x0D: "Smoke",
      0x0E: "Platform",
      0x0F: "Revive",
      0x10: "Roll",
      0x11: "Shrink ray",
      0x12: "Black hole",
      0x13: "Invisibility",
      0x14: "Meteor",
      0x15: "Macho",
      0x16: "Push",
      0x17: "Tesla coil",
      0x18: "Mine",
      0x19: "Teleport",
      0x1A: "Drill",
      0x1B: "Grapple",
      0x1C: "None",
    };
    
  
    return abilityMap[abilityIndex] || "Unknown";
  }
  
  function displayJsonData(jsonData) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<pre>${JSON.stringify(jsonData, null, 2)}</pre>`;
  }
  