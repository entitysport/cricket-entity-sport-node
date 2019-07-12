'use strict'

module.exports = function (api) {
  return {

    update_token(access_key,secret_key, callback) {
      return api.update({
        url: `auth`,
        data: {access_key:access_key,secret_key:secret_key}
      }, callback)
    },

    get_seasons_data(sid=0,args={}, callback) {
      if(sid){
        var path = 'seasons/'+sid+'/competitions';
      }else{
        var path = 'seasons';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competitions_data(cid=0,args={}, callback) {
        if(cid){
          var path = 'competitions/'+cid;
        }else{
          var path = 'competitions';
        }
        return api.get({
            url: path,
            data: args,
        }, callback)
    },

    get_competition_squad(cid,args={}, callback) {
      let path = 'competitions/'+cid+'/squads';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competition_teams(cid,args={}, callback) {
      let path = 'competitions/'+cid+'/teams';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competition_matches(cid,args={}, callback) {
      let path = 'competitions/'+cid+'/matches';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competition_standings(cid,args={}, callback) {
      let path = 'competitions/'+cid+'/standings';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_competition_statstic(cid,args={}, callback,stats='') {
      var path = 'competitions/'+cid+'/stats';
      if(stats){
        var path = 'competitions/'+cid+'/stats/'+stats;
      }
      
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_data(mid=0,args={}, callback) {
      if(mid){
        var path = 'matches/'+mid+'/info';
      }else{
        var path = 'matches';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_scorecard(mid,args={}, callback) {
      let path = 'matches/'+mid+'/scorecard';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_fantasy(mid,args={}, callback) {
      let path = 'matches/'+mid+'/point';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_live(mid,args={}, callback) {
      let path = 'matches/'+mid+'/live';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_squads(mid,args={}, callback) {
      let path = 'matches/'+mid+'/squads';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_statistics(mid,args={}, callback) {
      let path = 'matches/'+mid+'/statistics';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_wagons(mid,args={}, callback) {
      let path = 'matches/'+mid+'/wagons';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_inning_commentry(mid,inning_num,args={}, callback) {
      let path = 'matches/'+mid+'/innings/'+inning_num+'/commentary';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_matches_fantacy_roaster(cid,mid,args={}, callback) {
      let path = 'competitions/'+cid+'/squads/'+mid;
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_teams_data(tid,args={}, callback) {
      let path = 'teams/'+tid;
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_teams_maches(tid,args={}, callback) {
      let path = 'teams/'+tid+'/matches';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_players_data(pid=0,args={}, callback) {
      if(pid){
        var path = 'players/'+pid;
      }else{
        var path = 'players';
      }
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_players_stats(pid,args={}, callback) {
      let path = 'players/'+pid+'/stats';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

    get_cricket_iccranks(args={}, callback) {
      let path = 'iccranks';
      return api.get({
          url: path,
          data: args,
      }, callback)
    },

  }
}