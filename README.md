# cricket-entity-sport-node
firstly you have to put authentication data api_token and token_expires. Than You can further access of sport data.

for example

const Entity_cricket = require("./cricket/index.js");

var entity = new Entity_cricket({api_token:'XXXXXXXXXXXXXX',token_expires:'XXXXXXX'})

entity.cricket.get_competitions_data().then((data) => { console.log(data); }).catch((error) => { console.log(error); })

///////  ////
for get data for all season call get_seasons_data() for get data for perticular season call get_seasons_data(sid,args)...sid eg- 2018,18-19,etc.

for get data for all competitions call get_competitions_data(cid=0,args) here args use for filter data you get. Like paged,per_page,status with those variables. status status code 1 = upcoming, 2 = result, 3 = live.

get perticular competition info with stats ,squads , matches call get_competitions_data(cid,args) this get_competition_matches(cid), get_competition_statstic(cid)

for get data for all metches call get_matches_data(mid=0,args={}) here args use for filter data you get. Like paged,per_page,status with those variables. status status code 1 = upcoming, 2 = result, 3 = live.

get perticular metches info with stats , fantacy call get_matches_stats(mid,args) get_matches_fantasy(mid,args)

get perticular Match Innings Commentary API get_matches_inning_commentry(mid,inning_num,args={})

get perticular Fantasy Match Roaster API get_matches_fantacy_roaster(cid,mid,args={})

for get data for all teams call get_teams_data(tid=0,args) for get data for all teams maches call get_teams_maches(tid,args={})

for get data for all players call get_players_data(pid=0,args) for get data for plater profile call get_players_data(pid,args) and get_players_stats(pid,args={})

 get icc ranking for player iccranks  get_cricket_iccranks(args={})

If you do not send the id(like sid,cid ,mid ,tid,pid) than you get all data other perticular id info. args = {per_page:10 ,paged:20); where paged is which page u wana get data

important when your token is expire. Than call entity.cricket.update_token('YOUR_API_KEY','YOUR_SECRET_KEY') and get new token and expire copy them.
