
+ profile_ids = "c2691a79-4068-4ccc-b1d7-37de844507b5" (my)

+ Api required
  - Authorization
    - "Ubi_v1 " + sessions_response.ticket
  - Ubi-AppId
    - 39baebad-39e5-4552-8c25-2c9b919064e2


### player_sessions

+ `https://connect.ubi.com/ubiservices/v2/profiles/sessions`

+ Ubi-AppId
    - 39baebad-39e5-4552-8c25-2c9b919064e2
+ Authorization
    - `Basic ` + BASE64("mailaddress":"password")

### player_profiles
+ `https://public-ubiservices.ubi.com/v1/spaces/5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/r6playerprofile/playerprofile/progressions?profile_ids=` + "profile_ids"
+ ```{
    [
        {
            "xp": 11655,
            "profile_id": "c2691a79-4068-4ccc-b1d7-37de844507b5",
            "lootbox_probability": 5000,
            "level": 167
        }
    ]
}
```

### player_statistics
+ `https://public-ubiservices.ubi.com/v1/spaces/5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/playerstats2/statistics?populations=` + "profile_ids" + `&statistics=` + "statistics_option"

+ options
  - ```
  --- generalpvp ---
  generalpvp_timeplayed
  generalpvp_matchplayed
  generalpvp_matchwon
  generalpvp_matchlost
  generalpvp_kills
  generalpvp_death
  generalpvp_bullethit
  generalpvp_bulletfired
  generalpvp_killassists
  generalpvp_revive
  generalpvp_headshot
  generalpvp_penetrationkills
  generalpvp_meleekills
  casualpvp_matchwon
  casualpvp_matchlost
  casualpvp_timeplayed
  casualpvp_matchplayed
  casualpvp_kills
  casualpvp_death
  --- rankedpvp ---
  rankedpvp_matchwon
  rankedpvp_matchlost
  rankedpvp_timeplayed
  rankedpvp_matchplayed
  rankedpvp_kills
  rankedpvp_death
  --- 人質回収 ---
  rescuehostagepvp_bestscore
  rescuehostagepvp_matchwon
  rescuehostagepvp_matchlost
  rescuehostagepvp_matchplayed
  --- 爆弾解除 ---
  plantbombpvp_bestscore
  plantbombpvp_matchwon
  plantbombpvp_matchlost
  plantbombpvp_matchplayed
  --- エリア確保 ---
  secureareapvp_bestscore
  secureareapvp_matchwon
  secureareapvp_matchlost
  secureareapvp_matchplayed
  --- operatorpvp ---
  operatorpvp_kills
  operatorpvp_death
  operatorpvp_roundwon
  operatorpvp_roundlost
  operatorpvp_timeplayed
  --- operatorpvp_personal ---
  operatorpvp_mute_gadgetjammed
  operatorpvp_sledge_hammerhole
  operatorpvp_thatcher_gadgetdestroywithemp
  operatorpvp_castle_kevlarbarricadedeployed
  operatorpvp_ash_bonfirewallbreached
  operatorpvp_pulse_heartbeatspot
  operatorpvp_thermite_reinforcementbreached
  operatorpvp_doc_teammaterevive
  operatorpvp_rook_armortakenteammate
  operatorpvp_twitch_gadgetdestroybyshockdrone
  operatorpvp_montagne_shieldblockdamage
  operatorpvp_smoke_poisongaskill
  operatorpvp_glaz_sniperkill
  operatorpvp_fuze_clusterchargekill
  operatorpvp_kapkan_boobytrapkill
  operatorpvp_tachanka_turretkill
  operatorpvp_blitz_flashedenemy
  operatorpvp_iq_gadgetspotbyef
  operatorpvp_jager_gadgetdestroybycatcher
  operatorpvp_bandit_batterykill
  operatorpvp_buck_kill
  operatorpvp_frost_dbno
  operatorpvp_blackbeard_gunshieldblockdamage
  operatorpvp_valkyrie_camdeployed
  operatorpvp_capitao_lethaldartkills
  operatorpvp_caveira_interrogations
  operatorpvp_hibana_detonate_projectile  
  operatorpvp_echo_enemy_sonicburst_affected
  operatorpvp_cazador_assist_kill
  operatorpvp_black_mirror_gadget_deployed
  --- weapontypepvp ---
  weapontypepvp_kills
  weapontypepvp_headshot
  weapontypepvp_bulletfired
  weapontypepvp_bullethit
  ```

+ ```{
    "results": {
        "c2691a79-4068-4ccc-b1d7-37de844507b5": {
            "operatorpvp_death:3:A:infinite": 48,
            "weapontypepvp_headshot:B:infinite": 10,
            "operatorpvp_death:4:1:infinite": 148,
            "generalpvp_bullethit:infinite": 60093,
            "operatorpvp_roundlost:4:1:infinite": 74,
            "operatorpvp_caveira_interrogations:3:8:infinite": 131,
            "operatorpvp_roundlost:1:1:infinite": 3,
            "secureareapvp_bestscore:infinite": 5095,
            "operatorpvp_roundlost:4:4:infinite": 121,
            "secureareapvp_matchwon:infinite": 570,
            "operatorpvp_timeplayed:1:3:infinite": 329,
            "weapontypepvp_bulletfired:6:infinite": 7431,
            "operatorpvp_roundlost:5:2:infinite": 102,
            "operatorpvp_death:3:3:infinite": 138,
            "operatorpvp_roundlost:2:A:infinite": 169,
            "operatorpvp_death:3:4:infinite": 195,
            "operatorpvp_roundwon:2:6:infinite": 183,
            "operatorpvp_death:3:5:infinite": 18,
            "operatorpvp_kills:1:4:infinite": 9,
            "operatorpvp_death:4:4:infinite": 199,
            "weapontypepvp_kills:B:infinite": 138,
            "operatorpvp_timeplayed:3:2:infinite": 48869,
            "operatorpvp_valkyrie_camdeployed:3:7:infinite": 1281,
            "operatorpvp_roundlost:1:4:infinite": 4,
            "generalpvp_timeplayed:infinite": 1664406,
            "operatorpvp_ash_bonfirewallbreached:3:2:infinite": 117,
            "operatorpvp_timeplayed:1:1:infinite": 1411,
            "weapontypepvp_headshot:7:infinite": 56,
            "operatorpvp_death:2:6:infinite": 221,
            "operatorpvp_black_mirror_gadget_deployed:3:A:infinite": 103,
            "operatorpvp_timeplayed:3:1:infinite": 27426,
            "operatorpvp_roundlost:4:2:infinite": 62,
            "operatorpvp_roundlost:1:2:infinite": 9,
            "operatorpvp_blitz_flashedenemy:2:5:infinite": 188,
            "operatorpvp_kills:5:2:infinite": 149,
            "operatorpvp_kills:1:5:infinite": 26,
            "operatorpvp_roundwon:4:1:infinite": 131,
            "generalpvp_matchplayed:infinite": 2017,
            "plantbombpvp_matchlost:infinite": 223,
            "operatorpvp_roundwon:5:3:infinite": 232,
            "generalpvp_bulletfired:infinite": 257403,
            "operatorpvp_timeplayed:3:6:infinite": 76342,
            "operatorpvp_timeplayed:4:2:infinite": 28906,
            "casualpvp_timeplayed:infinite": 1664398,
            "operatorpvp_roundlost:5:1:infinite": 44,
            "weapontypepvp_headshot:5:infinite": 206,
            "operatorpvp_roundlost:2:1:infinite": 114,
            "casualpvp_matchlost:infinite": 739,
            "operatorpvp_death:3:6:infinite": 253,
            "operatorpvp_roundwon:4:2:infinite": 75,
            "operatorpvp_thatcher_gadgetdestroywithemp:5:1:infinite": 42,
            "casualpvp_matchwon:infinite": 1278,
            "operatorpvp_timeplayed:5:3:infinite": 89047,
            "operatorpvp_kills:2:5:infinite": 186,
            "weapontypepvp_bullethit:4:infinite": 2016,
            "operatorpvp_timeplayed:3:5:infinite": 5141,
            "operatorpvp_timeplayed:4:5:infinite": 60889,
            "operatorpvp_roundlost:3:A:infinite": 24,
            "operatorpvp_timeplayed:2:7:infinite": 48439,
            "operatorpvp_death:1:5:infinite": 48,
            "weapontypepvp_bullethit:7:infinite": 800,
            "operatorpvp_timeplayed:2:A:infinite": 101174,
            "operatorpvp_kills:3:9:infinite": 157,
            "weapontypepvp_headshot:3:infinite": 8,
            "operatorpvp_roundwon:2:1:infinite": 195,
            "operatorpvp_timeplayed:2:4:infinite": 65337,
            "operatorpvp_death:5:1:infinite": 66,
            "operatorpvp_sledge_hammerhole:4:1:infinite": 324,
            "secureareapvp_matchlost:infinite": 305,
            "operatorpvp_roundwon:3:7:infinite": 200,
            "operatorpvp_timeplayed:4:3:infinite": 23914,
            "generalpvp_headshot:infinite": 2980,
            "operatorpvp_timeplayed:5:2:infinite": 43080,
            "operatorpvp_kills:4:1:infinite": 195,
            "operatorpvp_glaz_sniperkill:2:4:infinite": 193,
            "operatorpvp_death:2:4:infinite": 197,
            "operatorpvp_kills:3:7:infinite": 296,
            "operatorpvp_roundwon:4:3:infinite": 75,
            "operatorpvp_timeplayed:3:9:infinite": 35556,
            "operatorpvp_kills:2:9:infinite": 696,
            "operatorpvp_kills:4:5:infinite": 318,
            "operatorpvp_timeplayed:4:4:infinite": 59758,
            "operatorpvp_death:3:7:infinite": 257,
            "operatorpvp_kills:5:3:infinite": 213,
            "weapontypepvp_bullethit:3:infinite": 194,
            "operatorpvp_roundwon:1:4:infinite": 7,
            "operatorpvp_kills:3:6:infinite": 355,
            "operatorpvp_roundlost:2:2:infinite": 27,
            "operatorpvp_roundlost:2:8:infinite": 25,
            "operatorpvp_roundlost:2:9:infinite": 288,
            "plantbombpvp_bestscore:infinite": 4960,
            "operatorpvp_kills:2:A:infinite": 590,
            "operatorpvp_roundlost:3:3:infinite": 85,
            "operatorpvp_timeplayed:3:4:infinite": 56064,
            "operatorpvp_timeplayed:1:5:infinite": 10244,
            "operatorpvp_roundwon:3:9:infinite": 92,
            "operatorpvp_timeplayed:2:5:infinite": 51482,
            "operatorpvp_timeplayed:3:A:infinite": 14203,
            "operatorpvp_timeplayed:5:4:infinite": 6766,
            "weapontypepvp_headshot:2:infinite": 1371,
            "operatorpvp_rook_armortakenteammate:3:3:infinite": 697,
            "operatorpvp_death:4:3:infinite": 71,
            "operatorpvp_hibana_detonate_projectile:2:9:infinite": 2275,
            "operatorpvp_jager_gadgetdestroybycatcher:4:5:infinite": 97,
            "operatorpvp_roundlost:4:3:infinite": 42,
            "operatorpvp_roundwon:3:6:infinite": 217,
            "operatorpvp_death:4:5:infinite": 205,
            "operatorpvp_fuze_clusterchargekill:3:4:infinite": 18,
            "operatorpvp_roundlost:3:9:infinite": 72,
            "operatorpvp_death:2:2:infinite": 53,
            "operatorpvp_kills:5:5:infinite": 756,
            "weapontypepvp_bulletfired:1:infinite": 92061,
            "operatorpvp_kills:4:3:infinite": 92,
            "generalpvp_revive:infinite": 203,
            "operatorpvp_death:2:9:infinite": 445,
            "operatorpvp_death:2:8:infinite": 50,
            "generalpvp_penetrationkills:infinite": 669,
            "operatorpvp_death:1:3:infinite": 2,
            "operatorpvp_roundwon:3:1:infinite": 67,
            "operatorpvp_roundlost:3:7:infinite": 175,
            "operatorpvp_kills:3:2:infinite": 232,
            "generalpvp_kills:infinite": 7158,
            "operatorpvp_timeplayed:2:3:infinite": 5926,
            "weapontypepvp_bulletfired:4:infinite": 7875,
            "operatorpvp_roundwon:2:8:infinite": 46,
            "weapontypepvp_kills:4:infinite": 406,
            "operatorpvp_roundwon:1:2:infinite": 6,
            "weapontypepvp_bullethit:2:infinite": 29775,
            "weapontypepvp_kills:7:infinite": 92,
            "operatorpvp_roundlost:4:5:infinite": 107,
            "operatorpvp_roundwon:3:5:infinite": 15,
            "operatorpvp_roundlost:5:5:infinite": 255,
            "operatorpvp_doc_teammaterevive:2:3:infinite": 1,
            "operatorpvp_twitch_gadgetdestroybyshockdrone:4:3:infinite": 78,
            "operatorpvp_death:2:7:infinite": 150,
            "operatorpvp_death:3:8:infinite": 588,
            "operatorpvp_roundlost:5:3:infinite": 207,
            "operatorpvp_kills:1:2:infinite": 9,
            "operatorpvp_roundlost:2:7:infinite": 95,
            "operatorpvp_kills:3:4:infinite": 215,
            "operatorpvp_roundlost:3:8:infinite": 354,
            "operatorpvp_kills:3:8:infinite": 715,
            "operatorpvp_cazador_assist_kill:2:A:infinite": 8,
            "generalpvp_death:infinite": 5516,
            "casualpvp_matchplayed:infinite": 2017,
            "operatorpvp_death:3:2:infinite": 174,
            "casualpvp_kills:infinite": 7158,
            "weapontypepvp_kills:2:infinite": 2710,
            "operatorpvp_iq_gadgetspotbyef:3:5:infinite": 192,
            "operatorpvp_roundlost:1:5:infinite": 28,
            "operatorpvp_kills:1:1:infinite": 5,
            "weapontypepvp_bulletfired:5:infinite": 17965,
            "operatorpvp_frost_dbno:3:6:infinite": 77,
            "operatorpvp_roundwon:5:2:infinite": 110,
            "operatorpvp_kills:5:4:infinite": 28,
            "operatorpvp_mute_gadgetjammed:3:1:infinite": 194,
            "weapontypepvp_kills:6:infinite": 449,
            "operatorpvp_roundwon:5:1:infinite": 49,
            "operatorpvp_roundlost:3:6:infinite": 137,
            "operatorpvp_roundlost:2:4:infinite": 140,
            "operatorpvp_roundlost:5:4:infinite": 9,
            "rescuehostagepvp_matchplayed:infinite": 623,
            "operatorpvp_timeplayed:2:1:infinite": 64230,
            "operatorpvp_blackbeard_gunshieldblockdamage:2:7:infinite": 542,
            "operatorpvp_timeplayed:3:3:infinite": 41298,
            "weapontypepvp_headshot:1:infinite": 1109,
            "weapontypepvp_kills:3:infinite": 20,
            "operatorpvp_roundwon:2:2:infinite": 47,
            "plantbombpvp_matchwon:infinite": 296,
            "rescuehostagepvp_matchlost:infinite": 211,
            "operatorpvp_timeplayed:2:2:infinite": 15435,
            "operatorpvp_timeplayed:2:9:infinite": 141545,
            "casualpvp_death:infinite": 5516,
            "operatorpvp_buck_kill:2:6:infinite": 11,
            "operatorpvp_roundwon:3:A:infinite": 40,
            "operatorpvp_roundwon:3:3:infinite": 110,
            "operatorpvp_kills:2:8:infinite": 60,
            "weapontypepvp_headshot:4:infinite": 156,
            "operatorpvp_roundwon:2:9:infinite": 368,
            "operatorpvp_capitao_lethaldartkills:2:8:infinite": 8,
            "operatorpvp_roundwon:5:5:infinite": 378,
            "operatorpvp_roundlost:1:3:infinite": 1,
            "generalpvp_meleekills:infinite": 152,
            "operatorpvp_death:5:5:infinite": 435,
            "operatorpvp_kills:3:A:infinite": 55,
            "operatorpvp_timeplayed:3:7:infinite": 80735,
            "weapontypepvp_kills:1:infinite": 2247,
            "weapontypepvp_bulletfired:B:infinite": 4812,
            "operatorpvp_kills:2:4:infinite": 229,
            "operatorpvp_kills:4:4:infinite": 238,
            "operatorpvp_smoke_poisongaskill:2:1:infinite": 5,
            "weapontypepvp_bullethit:6:infinite": 2752,
            "operatorpvp_kills:2:7:infinite": 230,
            "operatorpvp_roundwon:2:5:infinite": 138,
            "operatorpvp_roundwon:4:4:infinite": 160,
            "operatorpvp_timeplayed:4:1:infinite": 42991,
            "weapontypepvp_bulletfired:7:infinite": 3342,
            "weapontypepvp_headshot:6:infinite": 64,
            "weapontypepvp_bullethit:5:infinite": 4738,
            "operatorpvp_death:1:1:infinite": 5,
            "operatorpvp_roundwon:2:A:infinite": 306,
            "operatorpvp_death:3:1:infinite": 104,
            "operatorpvp_pulse_heartbeatspot:4:2:infinite": 315,
            "weapontypepvp_bulletfired:3:infinite": 1585,
            "operatorpvp_roundwon:2:3:infinite": 15,
            "operatorpvp_roundwon:3:2:infinite": 133,
            "operatorpvp_death:2:A:infinite": 310,
            "operatorpvp_death:1:2:infinite": 11,
            "operatorpvp_death:4:2:infinite": 104,
            "operatorpvp_roundlost:3:5:infinite": 10,
            "operatorpvp_kills:5:1:infinite": 90,
            "weapontypepvp_bulletfired:2:infinite": 121928,
            "operatorpvp_kills:2:2:infinite": 55,
            "operatorpvp_kills:3:1:infinite": 107,
            "operatorpvp_death:1:4:infinite": 9,
            "rescuehostagepvp_matchwon:infinite": 412,
            "operatorpvp_roundwon:2:4:infinite": 158,
            "operatorpvp_kills:3:5:infinite": 18,
            "generalpvp_killassists:infinite": 2256,
            "operatorpvp_kills:4:2:infinite": 125,
            "operatorpvp_timeplayed:2:6:infinite": 61405,
            "operatorpvp_roundwon:3:8:infinite": 480,
            "operatorpvp_timeplayed:1:4:infinite": 2350,
            "weapontypepvp_bullethit:1:infinite": 17793,
            "operatorpvp_montagne_shieldblockdamage:5:3:infinite": 6116,
            "operatorpvp_kapkan_boobytrapkill:4:4:infinite": 19,
            "operatorpvp_tachanka_turretkill:5:4:infinite": 9,
            "operatorpvp_roundlost:3:2:infinite": 98,
            "operatorpvp_death:5:2:infinite": 149,
            "operatorpvp_roundwon:5:4:infinite": 21,
            "operatorpvp_death:2:1:infinite": 223,
            "operatorpvp_roundwon:3:4:infinite": 161,
            "operatorpvp_roundwon:4:5:infinite": 176,
            "weapontypepvp_bullethit:B:infinite": 1889,
            "plantbombpvp_matchplayed:infinite": 519,
            "operatorpvp_timeplayed:1:2:infinite": 2921,
            "operatorpvp_roundlost:3:1:infinite": 69,
            "operatorpvp_death:2:5:infinite": 186,
            "operatorpvp_thermite_reinforcementbreached:5:2:infinite": 71,
            "generalpvp_matchwon:infinite": 1278,
            "generalpvp_matchlost:infinite": 739,
            "operatorpvp_timeplayed:3:8:infinite": 176787,
            "operatorpvp_roundlost:2:5:infinite": 106,
            "operatorpvp_roundwon:1:1:infinite": 4,
            "operatorpvp_kills:2:3:infinite": 34,
            "operatorpvp_death:5:4:infinite": 20,
            "secureareapvp_matchplayed:infinite": 875,
            "operatorpvp_death:2:3:infinite": 16,
            "rescuehostagepvp_bestscore:infinite": 5065,
            "operatorpvp_timeplayed:2:8:infinite": 14302,
            "operatorpvp_kills:3:3:infinite": 151,
            "operatorpvp_death:3:9:infinite": 115,
            "operatorpvp_roundlost:2:6:infinite": 114,
            "weapontypepvp_kills:5:infinite": 602,
            "operatorpvp_timeplayed:5:1:infinite": 20513,
            "operatorpvp_timeplayed:5:5:infinite": 133165,
            "operatorpvp_roundwon:2:7:infinite": 129,
            "operatorpvp_kills:2:1:infinite": 283,
            "operatorpvp_castle_kevlarbarricadedeployed:2:2:infinite": 176,
            "operatorpvp_roundlost:3:4:infinite": 115,
            "weapontypepvp_bulletfired:9:infinite": 64,
            "operatorpvp_roundwon:1:3:infinite": 1,
            "operatorpvp_death:5:3:infinite": 303,
            "operatorpvp_roundwon:1:5:infinite": 25,
            "operatorpvp_echo_enemy_sonicburst_affected:3:9:infinite": 55,
            "operatorpvp_roundlost:2:3:infinite": 12,
            "operatorpvp_kills:2:6:infinite": 241
        }
    }
}
```
