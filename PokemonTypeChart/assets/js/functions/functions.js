
// List of functions


function getPokemonByName(name){		//Returns the pokemon whose name matches the inserted.
	for(pokemon in BattlePokedex){
		if (BattlePokedex.hasOwnProperty(pokemon)) {
			var pokeObj = BattlePokedex[pokemon];
			if(pokeObj.species == name){
				return pokeObj;
			}
		}
	}	
}


function getTypeByName(name){		//Returns inserted pokemon's type.
	for(pokemon in BattlePokedex){
		if (BattlePokedex.hasOwnProperty(pokemon)) {
			var pokeObj = BattlePokedex[pokemon];
			if(pokeObj.species == name){
				return pokeObj.types;
			}
		}
	}	
}


function getTypeChartByType(typeIn){		//Returns inserted type's weakness. 3-> Does not affect. 2-> Not effective. 1-> Very effective. 0-> Normal.
	for(type in BattleTypeChart){
		if(BattleTypeChart.hasOwnProperty(type)){
			var typeObj = BattleTypeChart[type];	
			if(type == typeIn){					
				for(typeChart in typeObj){
					var effect = typeObj[typeChart];	
					document.write(typeChart + " : " + effect + "</br>");										
				}					
			}
		}	
	} 
}