var UMP3Maps = [];

function PrintSurv(MapsData, WorldNumber) {
  var ResultOutput = "";
  
  MapsData.forEach( (M) => {
    if (M.mode.toUpperCase() == "DM") {
      ResultOutput += `[World${WorldNumber[0]}]\n`;
      ResultOutput += `World = \"worlds\\multi\\dm\\${M.name}\"\n`;
      ResultOutput += `Name = \"surv-${M.name}\"\n`;
      ResultOutput += `GameType = 4\nMutantRace = 0\nDefenderRace = 1\n`;
      ResultOutput += `TimeLimit = 420\nRoundLimit = 7\nScoreLimit = 1250\n`;
      ResultOutput += `QueenMolt = 3\n\n`;
      ++WorldNumber[0];
    } else if (M.mode.toUpperCase() == "SURVIVOR") {
      ResultOutput += `[World${WorldNumber}]\n`;
      ResultOutput += `World = \"worlds\\multi\\survivor\\${M.name}\"\n`;
      ResultOutput += `Name = \"surv-${M.name}\"\n`;
      ResultOutput += `GameType = 4\nMutantRace = 0\nDefenderRace = 1\n`;
      ResultOutput += `TimeLimit = 1200\nRoundLimit = 1\nScoreLimit = 0\n`;
      ResultOutput += `QueenMolt = 3\n\n`;
      ++WorldNumber[0];
    }
  });
  
  return (ResultOutput);
}

function PrintEvac(MapsData, WorldNumber) {
  var ResultOutput = "";
  
  MapsData.forEach( (M) => {
    
    if (M.mode.toUpperCase() == "EVAC") {
      ResultOutput += `[World${WorldNumber[0]}]\n`;
      ResultOutput += `World = \"worlds\\multi\\evac\\${M.name}\"\n`;
      ResultOutput += `Name = \"evac-${M.name}\"\n`;
      ResultOutput += `GameType = 6\nAttackerRace = 0\nDefenderRace = 1\n`;
      if (M.name.toUpperCase() == "TOXIC FEUD") {
        ResultOutput += `AttackerLives = 5\nDefenderLives = 2\n`;
        ResultOutput += `TimeLimit = 600\nRoundLimit = 4\n`;
      } else {
        ResultOutput += `AttackerLives = 3\nDefenderLives = 1\n`;
        ResultOutput += `TimeLimit = 300\nRoundLimit = 7\n`;
      }
      ResultOutput += `QueenMolt = 4\nClassWeapons = 1\n`;
      if (M.name.toUpperCase() == "TOXIC FEUD") {
        ResultOutput += `Exosuit = 1\n`;
      } 
      ResultOutput += '\n';
      ++WorldNumber[0];
    } 
  });
  
  return (ResultOutput);
}

function PrintTdm(MapsData, WorldNumber) {
  var ResultOutput = "";
  
  MapsData.forEach( (M) => {
    
    if (M.mode.toUpperCase() == "TEAMDM" || M.mode.toUpperCase() == "DM") {
      ResultOutput += `[World${WorldNumber[0]}]\n`;
      ResultOutput += `World = \"worlds\\multi\\${M.mode}\\${M.name}\"\n`;
      ResultOutput += `Name = \"tdm-${M.name}\"\n`;
      ResultOutput += `GameType = 2\nTimeLimit = 1500\n`;
      
      ResultOutput += `QueenMolt = 5\nClassWeapons = 1\n`;
      ResultOutput += `MaxPlayers0 = 6\nMaxPlayers1 = 6\n`;
      ResultOutput += `MaxPlayers2 = 6\nMaxPlayers3 = 6\n`;
      
      ResultOutput += '\n';
      ++WorldNumber[0];
    } 
  });
  
  return (ResultOutput);
}

function PrintDm(MapsData, WorldNumber) {
  var ResultOutput = "";
  
  MapsData.forEach( (M) => {
    
    if (M.mode.toUpperCase() == "DM") {
      ResultOutput += `[World${WorldNumber[0]}]\n`;
      ResultOutput += `World = \"worlds\\multi\\${M.mode}\\${M.name}\"\n`;
      ResultOutput += `Name = \"dm-${M.name}\"\n`;
      ResultOutput += `GameType = 1\nTimeLimit = 1500\n`;
      ResultOutput += `ClassWeapons = 1\n`;
      ResultOutput += `MaxPlayers0 = 8\nMaxPlayers1 = 8\n`;
      ResultOutput += `MaxPlayers2 = 8\nMaxPlayers3 = 8\n`;
      ResultOutput += `QueenMolt = 5\nExosuit = 0\n`;
      ResultOutput += '\n';
      ++WorldNumber[0];
    } 
  });
  
  return (ResultOutput);
}


function PrintHunt(MapsData, WorldNumber) {
  var ResultOutput = "";
  
  MapsData.forEach( (M) => {
    
    if (M.mode.toUpperCase() == "DM") {
      ResultOutput += `[World${WorldNumber[0]}]\n`;
      ResultOutput += `World = \"worlds\\multi\\${M.mode}\\${M.name}\"\n`;
      ResultOutput += `Name = \"hunt-${M.name}\"\n`;
      ResultOutput += `GameType = 3\nTimeLimit = 1200\n`;
      ResultOutput += `FragLimit = 25\n`;
      ResultOutput += '\n';
      ++WorldNumber[0];
    } 
  });
  
  return (ResultOutput);
}

var WorldNumba = [1];
var FullOutput = "";
FullOutput += PrintSurv(UMP3Maps, WorldNumba);
FullOutput += PrintEvac(UMP3Maps, WorldNumba);
FullOutput += PrintTdm(UMP3Maps, WorldNumba);
FullOutput += PrintDm(UMP3Maps, WorldNumba);
FullOutput += PrintHunt(UMP3Maps, WorldNumba);

console.log(FullOutput);
