
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
	var res = {};
	for(type in BattleTypeChart){
		if(BattleTypeChart.hasOwnProperty(type)){
			var typeObj = BattleTypeChart[type];	
			if(type == typeIn){					
				for(typeChart in typeObj){
					var effect = typeObj[typeChart];
					res[typeChart] = effect;									
				}					
			}
		}	
	}
	return res; 
}


function getTypeChartByPokemon(name){		//Returns pokemon's type charts (both types).
	var types = getTypeByName(name);
	for(var i =0; i < types.length; i++){
		getTypeChartByType(types[i]);
	}
}


function getTypeChartByPokemon(name, number){		//Returns pokemon's selected typ chart (0-> first type, 1-> second type).
	var types = getTypeByName(name);
	try{
		var res = getTypeChartByType(types[number]);
	}catch(err){ }
	return res;
}


function getInmuneTypes(name){		//Returns pokemon's inmune types as array. http://pokemon.wikia.com/wiki/Move_Immunity_Abilities
	var pokemon = getPokemonByName(name);
	var types1 = getTypeChartByPokemon(name, 0);
	var types2 = getTypeChartByPokemon(name, 1); 
	var res = [];
	for (type in types1){
		try{
			if(types1[type] == 3){
				res.push(type);
			}
		}catch(err){ }
	}
	for (type2 in types2){
		try{
			if(types2[type2] == 3){
				res.push(type2);
			}
		}catch(err){ }
	}
	return res;  
}


function getEffectiveTypes(name){		//Returns pokemon's very effective types as array.
	var pokemon = getPokemonByName(name);
	var types1 = getTypeChartByPokemon(name, 0);
	var types2 = getTypeChartByPokemon(name, 1); 
	var res = [];
	for (type in types1){
		try{
			if(types1[type] == 1){
				res.push(type);
			}
		}catch(err){ }
	}
	for (type2 in types2){
		try{
			if(types2[type2] == 1){
				res.push(type2);
			}
		}catch(err){ }
	}
	return res;  
}


function getResistentTypes(name){		//Returns pokemon's resistent types as array.
	var pokemon = getPokemonByName(name);
	var types1 = getTypeChartByPokemon(name, 0);
	var types2 = getTypeChartByPokemon(name, 1); 
	var res = [];
	for (type in types1){
		try{
			if(types1[type] == 2){
				res.push(type);
			}
		}catch(err){ }
	}
	for (type2 in types2){
		try{
			if(types2[type2] == 2){
				res.push(type2);
			}
		}catch(err){ }
	}
	return res;  
}


function readPokemonName(text){		//id of html textarea with team's text.
	textSplit = text.value.split('\n\n');
	nameSplit = textSplit[0];
	nickSplit = nameSplit.split("@");
	try{
		noNick1 = nickSplit[0].split("(");
		noNick2 = noNick1[1].split(")");
		pokeName = noNick2[0].trim();
	}catch(err){ }	
	return pokeName;
}


function readPokemonType(text){		//id of html textarea with team's text.
	textSplit = text.value.split('\n\n');
	abilitySplit = textSplit[0];
	nickSplit = abilitySplit.split(":");
	shinySplit = nickSplit[1].split("S");
	pokeAbility = shinySplit[0].trim();
	return pokeAbility;
}


function readPokemonTeam(text){		//id of html textarea with team's text.
	nickSplit = text.split("@");
	pokeName = nickSplit[0];
	try{
		noNick1 = nickSplit[0].split("(");
		noNick2 = noNick1[1].split(")");
		pokeName = noNick2[0].trim();
	}catch(err){ }	
	return pokeName;
}


function readTypeTeam(text){		//id of html textarea with team's text.
	nickSplit = text.split(":");
	shinySplit = nickSplit[1].split(" "); 
	pokeAbility = shinySplit[1].trim();
	return pokeAbility;
}



function readTeam(text){		//No pilla Rough SKIN 
	var arrayOfLines = text.value.split("\n\n");
	var pokeTeam = {};
	var pokimon = [];
	var ability = [];
	for (i = 0; i < arrayOfLines.length; i++){
		try{
			pokimon[i] = readPokemonTeam(arrayOfLines[i]);
			ability[i] = readTypeTeam(arrayOfLines[i]);
			pokeTeam[pokimon[i]] = ability[i];
		}catch(err){ }		
 	}
 	return pokeTeam;
}