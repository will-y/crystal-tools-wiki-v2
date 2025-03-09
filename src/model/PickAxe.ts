import SkillTreeV2 from "./SkillTreeV2.ts";

export const pickAxe : SkillTreeV2 = {
  "tiers": [
    [
      {
        "id": 0,
        "name": "Mining Speed I",
        "description": "Increases Pickaxe's Mining Speed",
        "limit": 1,
        "requirements": [],
        "key": "speed_bonus",
        "value": 0.25
      },
      {
        "id": 1,
        "name": "Durability I",
        "description": "Increases Pickaxe's Durability",
        "limit": 1,
        "requirements": [],
        "key": "durability_bonus",
        "value": 200
      }
    ],
    [
      {
        "id": 2,
        "name": "Mining Speed II",
        "description": "Increases Pickaxe's Mining Speed",
        "limit": 1,
        "requirements": [
          {"node":  [0]}
        ],
        "key": "speed_bonus",
        "value": 0.25
      },
      {
        "id": 3,
        "name": "Durability II",
        "description": "Increases Pickaxe's Durability",
        "limit": 1,
        "requirements": [
          {"node": [1]}
        ],
        "key": "durability_bonus",
        "value": 200
      },
      {
        "id": 22,
        "name": "Unbreaking I",
        "description": "Adds 10% to the chance not use durability",
        "limit": 1,
        "requirements": [
          {"or_node": [0, 1]}
        ],
        "key": "unbreaking",
        "value": 0.1
      }
    ],
    [
      {
        "id": 4,
        "name": "Mining Speed III",
        "description": "Increases Pickaxe's Mining Speed",
        "limit": 1,
        "requirements": [
          {"node": [2]}
        ],
        "key": "speed_bonus",
        "value": 0.25
      },
      {
        "id": 5,
        "name": "Durability III",
        "description": "Increases Pickaxe's Durability",
        "limit": 1,
        "requirements": [
          {"node": [3]}
        ],
        "key": "durability_bonus",
        "value": 200
      },
      {
        "id": 26,
        "name": "Reach I",
        "description": "Increases Pickaxe's Reach Distance",
        "limit": 1,
        "requirements": [
          {"or_node": [2, 3]}
        ],
        "key": "reach",
        "value": 1
      }
    ],
    [
      {
        "id": 6,
        "name": "Silk Touch",
        "description": "Gives Silk Touch To The Pickaxe",
        "limit": 1,
        "requirements": [
          {
            "not_node": [7],
            "unless": [21]
          },
          {"or_node": [4, 5, 26]}
        ],
        "key": "silk_touch_bonus",
        "value": 1
      },
      {
        "id": 7,
        "name": "Fortune III",
        "description": "Gives Fortune III To The Pickaxe",
        "limit": 1,
        "requirements": [
          {
            "not_node": [6],
            "unless": [21]
          },
          {"or_node":  [4, 5, 26]}
        ],
        "key": "fortune_bonus",
        "value": 3
      },
      {
        "id": 23,
        "name": "Unbreaking II",
        "description": "Adds 10% to the chance not use durability",
        "limit": 1,
        "requirements": [
          {"or_node": [4, 5, 26]},
          {"node": [22]}
        ],
        "key": "unbreaking",
        "value": 0.1
      }
    ],
    [
      {
        "id": 10,
        "name": "Mining Speed IV",
        "description": "Increases Pickaxe's Mining Speed",
        "limit": 1,
        "requirements": [
          {"or_node":  [6, 7, 23]},
          {"node": [4]}
        ],
        "key": "speed_bonus",
        "value": 0.25
      },
      {
        "id": 11,
        "name": "Durability IV",
        "description": "Increases Pickaxe's Durability",
        "limit": 1,
        "requirements": [
          {"or_node": [6, 7, 23]},
          {"node": [5]}
        ],
        "key": "durability_bonus",
        "value": 200
      }
    ],
    [
      {
        "id": 12,
        "name": "Mining Speed V",
        "description": "Increases Pickaxe's Mining Speed",
        "limit": 1,
        "requirements": [
          {"node": [10]}
        ],
        "key": "speed_bonus",
        "value": 0.25
      },
      {
        "id": 13,
        "name": "Durability V",
        "description": "Increases Pickaxe's Durability",
        "limit": 1,
        "requirements": [
          {"node": [11]}
        ],
        "key": "durability_bonus",
        "value": 200
      },
      {
        "id": 27,
        "name": "Reach II",
        "description": "Increases Pickaxe's Reach Distance",
        "limit": 1,
        "requirements": [
          {"or_node": [10, 11]},
          {"node": [26]}
        ],
        "key": "reach",
        "value": 1
      },
      {
        "id": 30,
        "name": "Auto Pickup",
        "description": "When you break blocks, the drops will automatically go into your inventory if there is space.",
        "limit": 1,
        "requirements": [
          {"or_node": [10, 11]}
        ],
        "key": "auto_pickup",
        "value": 1
      }
    ],
    [
      {
        "id": 14,
        "name": "Auto Repair",
        "description": "Automatically Repairs Your Tool Over Time!",
        "limit": 0,
        "requirements": [
          {"or_node": [12, 13, 27, 30]}
        ],
        "key": "auto_repair",
        "value": 1
      },
      {
        "id": 17,
        "name": "3x3 Mining",
        "description": "Mines in a 3x3 area.",
        "limit": 1,
        "requirements":[
          {"or_node": [12, 13, 27, 30]}
        ],
        "key": "3x3",
        "value": 1
      },
      {
        "id": 18,
        "name": "Vein Mining",
        "description": "Mines all ores in a vein when pressing the vein mining key. Adding more points increases the range. (+1 block range per level)",
        "limit": 0,
        "requirements":[
          {"or_node": [12, 13, 27, 30]}
        ],
        "key": "vein_miner",
        "value": 1
      },
      {
        "id": 19,
        "name": "Auto Smelting",
        "description": "Automatically smelts the blocks that you mine.",
        "limit": 1,
        "requirements":[
          {"or_node": [12, 13, 27, 30]}
        ],
        "key": "auto_smelt",
        "value": 1
      }
    ],
    [
      {
        "id": 20,
        "name": "Torch",
        "description": "Right-Click to place a torch. Uses 10 durability.",
        "limit": 1,
        "requirements": [
          {
            "or_node": [14, 17, 18, 19]
          }
        ],
        "key": "torch",
        "value": 1
      },
      {
        "id": 21,
        "name": "Mine Mode",
        "description": "Press mode_switch key to change the mining mode between unlocked modes (Silk Touch or Fortune). Press shift + mode_switch to change the breaking mode (3x3 or 1x1)",
        "limit": 1,
        "requirements": [
          {
            "or_node": [14, 17, 18, 19]
          }
        ],
        "key": "mine_mode",
        "value": 1
      },
      {
        "id": 24,
        "name": "Unbreaking III",
        "description": "Adds 10% to the chance not use durability",
        "limit": 1,
        "requirements": [
          {"or_node": [14, 17, 18, 19]},
          {"node": [23]}
        ],
        "key": "unbreaking",
        "value": 0.1
      },
      {
        "id": 28,
        "name": "Reach III",
        "description": "Increases Pickaxe's Reach Distance",
        "limit": 1,
        "requirements": [
          {"or_node": [14, 17, 18, 19]},
          {"node": [27]}
        ],
        "key": "reach",
        "value": 1
      }
    ],
    [
      {
        "id":  15,
        "name": "Infinite Speed",
        "description": "Add As Many Points To Speed Here As You Want",
        "limit": 0,
        "requirements": [
          {"or_node": [20, 21, 24, 28]},
          {"node": [12]}
        ],
        "key": "speed_bonus",
        "value": 0.1
      },
      {
        "id": 16,
        "name": "Infinite Durability",
        "description": "Add As Many Points To Durability Here As You Want",
        "limit": 0,
        "requirements": [
          {"or_node": [20, 21, 24, 28]},
          {"node": [13]}
        ],
        "key": "durability_bonus",
        "value": 50
      },
      {
        "id": 25,
        "name": "Infinite Unbreaking",
        "description": "Add as many points to Unbreaking here as you want (1% per level)",
        "limit": 70,
        "requirements": [
          {"node": [24]}
        ],
        "key": "unbreaking",
        "value": 0.01
      },
      {
        "id": 29,
        "name": "Infinite Reach",
        "description": "Add as many points to Reach here as you want",
        "limit": 0,
        "requirements": [
          {"node": [28]}
        ],
        "key": "reach",
        "value": 0.1
      }
    ],
    [
      {
        "id": 31,
        "name": "Fortune V",
        "description": "Gives Fortune V To The Pickaxe",
        "limit": 1,
        "requirements": [
          {"node":  [7, 15, 16, 25, 29]}
        ],
        "key": "fortune_bonus",
        "value": 5
      }
    ]
  ]
}
