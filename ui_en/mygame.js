nav = new SceneNavigator([
 "startup",
 "PrologueScreen",
 "OpeningScene",
 "Part1Screen",
 "BrucePartingtonPlans",
 "HerMajestysDirigible",
 "Murchinson",
 "Part2Screen",
 "SpiderHunt",
 "Reichenbach",
 "Part3Screen",
 "CrossroadsMarkTwo",
 "NewLifeMark2",
 "TheReturn",
 "Part4Screen",
 "TheFinalProblem",
 "Endgame",
 "WrapUp"
]);
stats = {
 "choice_title": "A Study in Steampunk: Choice by Gaslight",
 "healpierce": "false",
 "firstchoice": "marksmanship",
 "secondchoice": "medicine",
 "lastname": "lastname",
 "firstname": "firstname",
 "initial": "i",
 "healing": "50",
 "charisma": "50",
 "marksmanship": "50",
 "medicine": "50",
 "athleticism": "50",
 "injury": "none",
 "conventional": "50",
 "compassionate": "50",
 "stealthy": "50",
 "perception": "50",
 "healmorris": "false",
 "relwoodward": "50",
 "gay": "false",
 "loadedlifeboats": "false",
 "datinggrace": "false",
 "knowfinchaway": "false",
 "plantknowledge": "false",
 "donewithoneshands": "false",
 "knoweconomics": "false",
 "engaged": "false",
 "married": "false",
 "withfinch": "false",
 "alliance": "government",
 "kills": "0",
 "reltaggart": "50",
 "relalexandra": "50",
 "healersarrested": "false",
 "manufacturedevidence": "false",
 "mythmaker": "false",
 "mether": "false",
 "lethergo": "false",
 "missedher": "false",
 "caughther": "false",
 "drainedguards": "false",
 "toldfinchguards": "false",
 "toldgraceguards": "false",
 "workedwithher": "false",
 "workedwithhim": "false",
 "divorced": "false",
 "gracedead": "false",
 "letter": "false",
 "taggartchoice": "false",
 "alexandrachoice": "false",
 "callahaninterview": "false",
 "callahanmisstep": "0",
 "withalexandra": "false",
 "alertcounter": "0",
 "usedknife": "false",
 "patrol": "false",
 "relfinch": "neutral",
 "leftfinchtodie": "false",
 "healertrained": "false",
 "lighteater": "false",
 "donated": "false",
 "dead": "false",
 "meantobradley": "false",
 "ignoredbradley": "false",
 "finchdead": "false",
 "betrayed": "false",
 "woodwarddeal": "false",
 "woodwardally": "false",
 "walkedaway": "false",
 "healedmargaret": "false",
 "old": "margaret",
 "o_man": "woman",
 "oldprofession": "charwoman",
 "o_he": "she",
 "o_him": "her",
 "o_his": "her",
 "young": "violet",
 "y_boy": "girl",
 "y_he": "she",
 "y_him": "her",
 "y_his": "her",
 "pm": "whitefield",
 "shandy": "captain",
 "lackofcoal": "false",
 "leftmorris": "false",
 "alexandraally": "false"
};
purchases = {
 "Murchinson": "adfree",
 "Part2Screen": "adfree",
 "SpiderHunt": "adfree",
 "Reichenbach": "adfree",
 "Part3Screen": "adfree",
 "CrossroadsMarkTwo": "adfree",
 "NewLifeMark2": "adfree",
 "TheReturn": "adfree",
 "Part4Screen": "adfree",
 "TheFinalProblem": "adfree",
 "Endgame": "adfree",
 "WrapUp": "adfree"
};
achievements = [
 [
  "finchescape",
  false,
  5,
  "A Bird in Flight",
  "Allow Garrett Finch to escape.",
  "hidden"
 ],
 [
  "finchcapture",
  false,
  5,
  "A Bird in the Hand",
  "Capture Garrett Finch.",
  "hidden"
 ],
 [
  "usepress",
  true,
  5,
  "A Most Valuable Institution",
  "Use the press to catch a criminal.",
  "The press is a most valuable institution, if you only know how to use it."
 ],
 [
  "lifeforlife",
  true,
  5,
  "A Life for a Life",
  "Sell your life to save Garrett Finch.",
  "You know the price you have to pay."
 ],
 [
  "balance",
  false,
  10,
  "Balance of Power",
  "The government and the Resistance will balance each other's excesses.",
  "hidden"
 ],
 [
  "killhorn",
  true,
  5,
  "Blood Sacrifice",
  "Kill Horn through light-eating to save Grace's life.",
  "How far will you go to save someone else?"
 ],
 [
  "brothersinarms",
  true,
  5,
  "Brothers in Arms",
  "Save the life of a former comrade-in-arms.",
  "The ties that bind."
 ],
 [
  "killedfinch",
  false,
  5,
  "Brother's Keeper",
  "Kill Garrett Finch through light-eating.",
  "hidden"
 ],
 [
  "bridges",
  true,
  5,
  "Building Bridges",
  "Build a bridge between the Sun Temples and the conventional world.",
  "One man can bridge two worlds."
 ],
 [
  "cmythmaker",
  true,
  5,
  "Callahan's Mythmaker",
  "Use fiction to promote Sean Callahan's ends.",
  "The stories we tell shape the world."
 ],
 [
  "warehouseescape",
  true,
  10,
  "Daring Escape",
  "Rescue Finch and yourself from Colonel Fearnley.",
  "Never underestimate a former soldier."
 ],
 [
  "deception",
  true,
  5,
  "Deception at the Temple",
  "Pretend to break with Taggart, in order to stop the Rising.",
  "Teach the healer spycraft."
 ],
 [
  "destroycoal",
  true,
  5,
  "Destruction in Bretagne",
  "Destroy the Bretagne coal mine.",
  "To make an omelet, you must break an egg."
 ],
 [
  "steel",
  true,
  5,
  "Eliminate the Impossible",
  "Identify the steelworks saboteur's final target.",
  "Whatever remains must be the truth."
 ],
 [
  "capturedalexandra",
  true,
  5,
  "Enemy of the State",
  "Capture Alexandra Townsend.",
  "Face to face with a dangerous criminal, what will you do?"
 ],
 [
  "mistress",
  true,
  10,
  "Fencing Salon",
  "Secure the attention of the Prince's mistress.",
  "Some battles are fought with words and innuendo instead of blades."
 ],
 [
  "starbuck",
  true,
  5,
  "Fight Them Til We Can't",
  "Join the new Resistance.",
  "Resist the Vlaski occupation of Mercia."
 ],
 [
  "wantnail",
  false,
  20,
  "For Want of a Nail",
  "Foil the Rising by disrupting communications.",
  "hidden"
 ],
 [
  "resistance",
  true,
  5,
  "Freedom Fighter",
  "Join Free Mercia.",
  "Join the rebellion."
 ],
 [
  "temple",
  true,
  5,
  "Healer",
  "Become a Sun Temple healer.",
  "Embrace your heritage."
 ],
 [
  "hearth",
  true,
  10,
  "Hearth & Home",
  "Marry the love of your life.",
  "Happily ever after means different things to different people."
 ],
 [
  "presshero",
  true,
  5,
  "Hero of the Press",
  "Dubbed a hero by the press.",
  "Every disaster needs a hero."
 ],
 [
  "infiltrate",
  true,
  10,
  "Infiltration",
  "Infiltrate the Resistance.",
  "Penetrate to the center of the Professor's lair."
 ],
 [
  "labor",
  true,
  100,
  "Labor Reform",
  "Pass the Labor Reform Bill.",
  "A steady hand on the rudder turns the ship."
 ],
 [
  "neutral",
  true,
  5,
  "Lone Wolf",
  "Become an independent player.",
  "Follow only your conscience."
 ],
 [
  "prince",
  true,
  100,
  "Long Live His Highness",
  "Save the Prince's life.",
  "The Crown Prince is in danger."
 ],
 [
  "loveandwar",
  true,
  10,
  "Love & War",
  "Begin a relationship with Alexandra Townsend.",
  "Star-crossed lovers."
 ],
 [
  "poison",
  false,
  20,
  "Marching on Its Stomach",
  "Foil the Rising by contaminating the food supply.",
  "hidden"
 ],
 [
  "merciafalls",
  false,
  10,
  "Mercia Falls",
  "Mercia falls to Vlask.",
  "hidden"
 ],
 [
  "midair",
  true,
  5,
  "Mid-air Repair",
  "Repair the sabotaged dirigible.",
  "Can you repair the plummeting dirigible?"
 ],
 [
  "bedfellows",
  true,
  100,
  "My Enemy's Enemy",
  "The government and the Resistance band together to fight off the Vlaski invasion.",
  "Danger makes strange bedfellows."
 ],
 [
  "noliveslost",
  true,
  5,
  "No Lives Lost",
  "Colossus returns safely with no lives lost.",
  "Can you get everyone safely off the plummeting dirigible?"
 ],
 [
  "savepierce",
  true,
  5,
  "One Man's Life",
  "Save James Pierce.",
  "Save the life of an injured comrade."
 ],
 [
  "twohundred",
  true,
  100,
  "Primum Non Nocere",
  "End the cholera epidemic with fewer than 200 lives lost.",
  "End the cholera epidemic with minimal casualties."
 ],
 [
  "addict",
  true,
  5,
  "Recovery",
  "Fight your way back from light-eater addiction.",
  "It takes courage to turn aside from a disastrous path."
 ],
 [
  "goraska",
  true,
  5,
  "Return to Gor\u00e1ska",
  "Save the Gor\u00e1ska coal mine.",
  "Danger calls you back to the warfront."
 ],
 [
  "sanctifier",
  true,
  10,
  "Sanctifier",
  "Bring down the East End Ripper.",
  "The Sun Temples police their own."
 ],
 [
  "alexandraescape",
  true,
  5,
  "Shades of Gray",
  "Allow Alexandra Townsend to escape.",
  "A private investigator does not always work within the law."
 ],
 [
  "govtripper",
  true,
  10,
  "Steam & Sorcery",
  "Bring down the East End Ripper with no injury to yourself or your companions.",
  "A light-eater threatens the East End."
 ],
 [
  "interrogate",
  true,
  10,
  "Tables Turned",
  "Interrogate your interrogator and learned all he had to tell.",
  "Captured and helpless, how much can you learn?"
 ],
 [
  "tmythmaker",
  true,
  5,
  "Taggart's Mythmaker",
  "Use fiction to promote Christopher Taggart's ends.",
  "The stories we tell shape the world."
 ],
 [
  "bard",
  false,
  20,
  "The Bard's Weapon",
  "Foil the Rising through storytelling.",
  "hidden"
 ],
 [
  "govtreturn",
  true,
  5,
  "The Empire's Man",
  "Return to work for Arthur Woodward.",
  "Return to the fold."
 ],
 [
  "killcallahan",
  true,
  10,
  "The Greater Good",
  "Kill Sean Callahan.",
  "Sometimes one man must be sacrificed for the good of many."
 ],
 [
  "lighteater",
  true,
  5,
  "The Monster in the Mirror",
  "Become a light-eater.",
  "Give in to your darkest desires. Become your worst fear."
 ],
 [
  "savepm",
  true,
  10,
  "The Prime Minister's Honor",
  "Preserve the Prime Minister's reputation.",
  "Scandal threatens the Empire."
 ],
 [
  "destroypm",
  true,
  10,
  "The Prime Minister's Dishonor",
  "Scandal forces the Prime Minister from office.",
  "Craft a scandal to threaten the Empire."
 ],
 [
  "singleshot",
  false,
  20,
  "The Shot Heard Round the Empire",
  "Foil the Rising with a single shot.",
  "hidden"
 ],
 [
  "bloodtaste",
  true,
  5,
  "The Taste of Blood",
  "Kill an attacker through light-eating.",
  "How far will you go to save yourself?"
 ],
 [
  "walls",
  true,
  100,
  "The Watcher on the Walls",
  "Foil the Vlaski invasion.",
  "The Vlaskesari are marching on Mercia."
 ],
 [
  "uncompromising",
  true,
  5,
  "Uncompromising",
  "Choose to die rather than kill through light-eating.",
  "Remain true to your principles in the face of death."
 ],
 [
  "vigilante",
  true,
  5,
  "Vigilante",
  "Become a light-eater vigilante.",
  "Someone has to clean up the East End."
 ],
 [
  "walkedaway",
  true,
  5,
  "Walked Away",
  "Leave government service.",
  "Enough is enough."
 ],
 [
  "wintersoldier",
  false,
  5,
  "Winter Soldier",
  "Brainwashed into Arthur Woodward's light-eater army.",
  "hidden"
 ],
 [
  "dirigible",
  true,
  5,
  "Wolf in Sheep's Clothing",
  "Identify the dirigible saboteur.",
  "One of these people is not what they seem\u2026"
 ],
 [
  "wmythmaker",
  true,
  5,
  "Woodward's Mythmaker",
  "Use fiction to promote Arthur Woodward's ends.",
  "The stories we tell shape the world."
 ],
 [
  "yourstruly",
  true,
  20,
  "Yours Truly, Jack the Ripper",
  "Conceal your Ripper identity from Arthur Woodward.",
  "They'll never suspect."
 ]
];
nav.setStartingStatsClone(stats);if (achievements.length) {
  nav.loadAchievements(achievements);
}
if (nav.loadProducts) nav.loadProducts([], purchases);

isCogPublished = true;

