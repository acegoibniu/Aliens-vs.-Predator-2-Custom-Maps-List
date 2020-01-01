function ProduceCSV(MapsData) {
  'use strict';
  var Result = "";
  MapsData.forEach( (M) => {
    Result += `${M.mode},${M.name},${M.creator},${M.comment}\n`;
  });
  return (Result);
}


function ProduceMDTable(MapsData, GameMode) {
  'use strict';
  var Result = "|Map Name|Author(s)|Comment|\n";
  Result += 
    "|---------------------------------------|---------------------------------------|---------------------------------------|\n";
  MapsData.forEach( (M) => {
    if (!GameMode || M.mode.toLowerCase() == GameMode.toLowerCase()) {
      Result += `|${M.name}|${M.creator}|${M.comment}|\n`;
    }
  });
  return (Result);
}    
    
function ProduceMDTableByGameMode(MapsData) {
  'use strict';
  var Result = "## Deathmatch/Team DM/Hunt/Survivor Levels\n\n";
  Result += ProduceMDTable(MapsData, "DM");
    
  Result += "\n\n## Team Deathmatch Only Levels\n\n";
  Result += ProduceMDTable(MapsData, "TEAMDM");
  
  Result += "\n\n## Survivor Only Levels\n\n";
  Result += ProduceMDTable(MapsData, "SURVIVOR");
  
  Result += "\n\n## Overrun Levels\n\n";
  Result += ProduceMDTable(MapsData, "OVERRUN");
  
  Result += "\n\n## Evac Levels\n\n";
  Result += ProduceMDTable(MapsData, "EVAC");
    
  return (Result);
}
