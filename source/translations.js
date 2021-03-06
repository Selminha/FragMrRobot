/**
 This file is part of FragMrRobot.
 
 FragMrRobot is distributed under The Q Public License Version (QPL-1.0).
 
 You should have received a copy of the License along with this file.
 If not, see http://opensource.org/licenses/QPL-1.0
*/

var translations = {
  "wowheadPrefix": { "ru":"ru", "de":"de", "fr":"fr", "es":"es", "pt_BR":"pt_BR"},
  "armor": { "ru":"броня", "de":"Rüstung", "fr":"Armure", "es":"armadura", "pt_BR":"Armadura"},
  "all_stats": { "ru":"ко всем статам", "de":"Alle Werte", "fr":"", "es":"", "pt_BR":"Todos os status"},
  "intellect": { "ru":"интеллект", "de":"Intelligenz", "fr":"Intelligence", "es":"intelecto", "pt_BR":"Intelecto"},
  "strength": { "ru":"сила", "de":"Stärke", "fr":"Force", "es":"fuerza", "pt_BR":"Força"},
  "stamina": { "ru":"выносливость", "de":"Ausdauer", "fr":"Endurance", "es":"aguante", "pt_BR":"Vigor"},
  "spirit": { "ru":"дух", "de":"Willenskraft", "fr":"Esprit", "es":"espíritu", "pt_BR":"Espírito"},
  "agility": { "ru":"ловкость", "de":"Beweglichkeit", "fr":"Agilité", "es":"agilidad", "pt_BR":"Agilidade"},
  "short_intellect": { "ru":"инт.", "de":"Int.", "fr":"Int", "es":"int", "pt_BR":"Int"},
  "short_strength": { "ru":"сила", "de":"Stärke", "fr":"Force", "es":"fuerza", "pt_BR":"For"},
  "short_str": { "ru":"сила", "de":"Stärke", "fr":"Force", "es":"fuerza", "pt_BR":"For"},
  "short_stamina": { "ru":"выносл.", "de":"Ausd.", "fr":"Endur", "es":"aguan", "pt_BR":"Vig"},
  "short_spirit": { "ru":"дух", "de":"Will.", "fr":"Espr", "es":"esp", "pt_BR":"Esp"},
  "short_agi": { "ru":"ловк.", "de":"Bewegl.", "fr":"Agil", "es":"agil", "pt_BR":"Agi"},
  "attack_power": { "ru":"сила атаки", "de":"Angriffskraft", "fr":"puissance d’attaque", "es":"poder de ataque", "pt_BR":"poder de ataque"},
  "crit": { "ru":"крит. удар", "de":"Krit.", "fr":"coup critique", "es":"golpe crítico", "pt_BR":"acerto crítico"},
  "critical_strike": { "ru":"крит. удар", "de":"Krit.", "fr":"coup critique", "es":"golpe crítico", "pt_BR":"acerto crítico"},
  "spell_crit": { "ru":"крит. удар заклинаний", "de":"Krit. (Zauber)", "fr":"coup critique", "es":"golpe crítico", "pt_BR":"acerto crítico"},
  "dodge": { "ru":"уклонение", "de":"Ausweichen", "fr":"esquive", "es":"esquivar", "pt_BR":"Esquiva"},
  "expertise": { "ru":"мастерство", "de":"Waffenkunde", "fr":"d'expertise", "es":"pericia", "pt_BR":"aptidão"},
  "haste": { "ru":"скорость", "de":"Tempo", "fr":"hâte", "es":"celeridad", "pt_BR":"aceleração"},
  "spell_haste": { "ru":"скор. заклинаний", "de":"Tempo (Zauber)", "fr":"hâte", "es":"celeridad", "pt_BR":"aceleração"},
  "hit": { "ru":"меткость", "de":"Trefferwert", "fr":"toucher", "es":"golpe", "pt_BR":"acerto"},
  "spell_hit": { "ru":"метк. заклинаний", "de":"Zaubertrefferw", "fr":"toucher", "es":"golpe", "pt_BR":"acerto"},
  "mastery": { "ru":"искусность", "de":"Meisterschaft", "fr":"maîtrise", "es":"maestría", "pt_BR":"maestria"},
  "parry": { "ru":"парирование", "de":"Parieren", "fr":"parade", "es":"parada", "pt_BR":"Aparo"},
  "spell_power": { "ru":"Сила заклинаний", "de":"Zaubermacht", "fr":"puissance des sorts", "es":"poder con hechizos", "pt_BR":"poder mágico"},
  "short_attack_power": { "ru":"атак.", "de":"Angriffsk", "fr":"attaque", "es":"ataq", "pt_BR":"ataque"},
  "short_crit": { "ru":"крит", "de":"Krit", "fr":"crit", "es":"crít", "pt_BR":"crít"},
  "short_dodge": { "ru":"уклон.", "de":"Ausw", "fr":"Esqui", "es":"esquiv", "pt_BR":"Esquiva"},
  "short_exp": { "ru":"мастер.", "de":"Waff", "fr":"exp", "es":"peric", "pt_BR":"aptidão"},
  "short_expertise": { "ru":"мастер.", "de":"Waff", "fr":"exp", "es":"peric", "pt_BR":"aptidão"},
  "short_haste": { "ru":"скор.", "de":"Tempo", "fr":"hâte", "es":"cel", "pt_BR":"acel"},
  "short_hit": { "ru":"метк.", "de":"Treffer", "fr":"touch", "es":"golpe", "pt_BR":"acerto"},
  "short_mastery": { "ru":"искус.", "de":"Meist", "fr":"maît", "es":"maest", "pt_BR":"maest"},
  "short_parry": { "ru":"парир.", "de":"Parier", "fr":"parade", "es":"par", "pt_BR":"Aparo"},
  "short_spell_power": { "ru":"заклин.", "de":"Zaub", "fr":"sorts", "es":"hechi", "pt_BR":"mágico"},
  "pvp_power": { "ru":"ПвП сила", "de":"PvP-Macht", "fr":"puissance JcJ", "es":"", "pt_BR":"poder de jxj"},
  "pvp_resil": { "ru":"ПвП устойчивость", "de":"PvP-Abhärtung", "fr":"résilience JcJ", "es":"", "pt_BR":"resiliência"},
  "honor_points": { "ru":"Очки чести", "de":"Ehrenpunkte", "fr":"Points d'honneur", "es":"Puntos de honor", "pt_BR":"Pontos de Honra"},
  "justice_points": { "ru":"Очки справедливости", "de":"Gerechtigkeitspunkte", "fr":"Points de justice", "es":"Puntos de justicia", "pt_BR":"Pontos de Justiça"},
  "valor_points": { "ru":"Очки доблести", "de":"Tapferkeitspunkte", "fr":"Points de vaillance", "es":"Puntos de valor", "pt_BR":"Pontos de Bravura"},
  "conquest_points": { "ru":"Очки завоеваний", "de":"Eroberungspunkte", "fr":"Points de conquête", "es":"Puntos de conquista", "pt_BR":"Pontos de Dominação"},
  "friendly": { "ru":"Дружелюбие", "de":"Freundlich", "fr":"", "es":"", "pt_BR":"Respeitado"},
  "honored": { "ru":"Уважение", "de":"Wohlwollend", "fr":"Honoré", "es":"", "pt_BR":"Honrado"},
  "revered": { "ru":"Почтение", "de":"Respektvoll", "fr":"", "es":"", "pt_BR":"Reverenciado"},
  "exalted": { "ru":"Превознесение", "de":"Ehrfürchtig", "fr":"", "es":"", "pt_BR":"Exaltado"},
  "food": { "ru":"Еда", "de":"Essen", "fr":"", "es":"", "pt_BR":"Comida"},
  "flask": { "ru":"Настой", "de":"Trinken", "fr":"", "es":"", "pt_BR":"Frasco"},
  "main_hand": { "ru":"", "de":"", "fr":"", "es":"", "pt_BR":"Mão principal"},
  "off_hand": { "ru":"", "de":"", "fr":"", "es":"", "pt_BR":"Mão secundária"},
  "head": { "ru":"", "de":"Helm", "fr":"", "es":"", "pt_BR":"Cabeça"},
  "neck": { "ru":"", "de":"Hals", "fr":"", "es":"", "pt_BR":"Pescoço"},
  "shoulder": { "ru":"", "de":"Schulter", "fr":"", "es":"", "pt_BR":"Ombros"},
  "back": { "ru":"", "de":"Rücken", "fr":"", "es":"", "pt_BR":"Costas"},
  "chest": { "ru":"", "de":"Brust", "fr":"", "es":"", "pt_BR":"Torso"},
  "wrist": { "ru":"", "de":"Handgelenk", "fr":"", "es":"", "pt_BR":"Pulsos"},
  "hands": { "ru":"", "de":"Hände", "fr":"", "es":"", "pt_BR":"Mãos"},
  "waist": { "ru":"", "de":"Gürtel", "fr":"", "es":"", "pt_BR":"Cintura"},
  "legs": { "ru":"", "de":"Beine", "fr":"", "es":"", "pt_BR":"Pernas"},
  "feet": { "ru":"", "de":"Füße", "fr":"", "es":"", "pt_BR":"Pés"},
  "ring_1": { "ru":"", "de":"Ring 1", "fr":"", "es":"", "pt_BR":"Dedo 1"},
  "ring_2": { "ru":"", "de":"Ring 2", "fr":"", "es":"", "pt_BR":"Dedo 2"},
  "trinket_1": { "ru":"", "de":"Schmuck 1", "fr":"", "es":"", "pt_BR":"Berloque 1"},
  "trinket_2": { "ru":"", "de":"Schmuck 2", "fr":"", "es":"", "pt_BR":"Berloque 2"},
  "belt_buckle": { "ru":"", "de":"Gürtelschnalle", "fr":"", "es":"", "pt_BR":"Fivela"}
}
