import { useState } from "react";

const C = {
  bg:"#080E14", surface:"#0C1520", panel:"#101C2A", card:"#142030",
  border:"#1C3040", borderLight:"#2A4560", forest:"#0D3D2A",
  green:"#1A6A48", greenLight:"#22A070", gold:"#C8A020", goldLight:"#E0BC40",
  bone:"#F0E4C8", boneDim:"#8A7A60", muted:"#3A5060", red:"#8A2010",
};

const E = (c,p,e,cat,ctx,q,a) => ({c,p,e,cat,ctx,q,a});

const ALL_ENTRIES = [
  // ── GREETINGS ────────────────────────────────────────────────────────────────
  E("Halito","hah-LEE-toh","Hello","Greetings","Standard Chickasaw greeting.","How do you say hello in Chickasaw?","Halito (hah-LEE-toh) means hello in Chikashshanompa'. It is the standard greeting used when meeting someone."),
  E("Chokma","CHOHK-mah","Good / Hello","Greetings","Also used as a greeting meaning 'good'.","What does chokma mean in Chickasaw?","Chokma (CHOHK-mah) means good or hello in Chikashshanompa'. It is used both as a greeting and to express that something is good."),
  E("Yakoke","YAH-koh-keh","Thank you","Greetings","Universal expression of gratitude.","How do you say thank you in Chickasaw?","Yakoke (YAH-koh-keh) means thank you in Chikashshanompa'. It is one of the most important and widely used words in the language."),
  E("Chinchokma?","chin-CHOHK-mah","How are you?","Greetings","Literally 'are you good?'","How do you ask how are you in Chickasaw?","Chinchokma? (chin-CHOHK-mah) means 'how are you?' in Chikashshanompa' — literally asking 'are you good?'"),
  E("Anchokma","an-CHOHK-mah","I am fine","Greetings","Standard response to Chinchokma.","How do you say I am fine in Chickasaw?","Anchokma (an-CHOHK-mah) means 'I am fine' or 'I am good' in Chikashshanompa'."),
  E("Chikashsha saya","chik-ASH-shah SAH-yah","I am Chickasaw","Greetings","A proud declaration of identity.","How do you say I am Chickasaw?","Chikashsha saya (chik-ASH-shah SAH-yah) means 'I am Chickasaw' in Chikashshanompa'. It is a proud declaration of Nation membership."),
  E("Anowa chipisala'cho","ah-NOH-wah chih-pih-SAH-lah-choh","Until I see you again","Greetings","A warm farewell phrase.","How do you say goodbye in Chickasaw?","Anowa chipisala'cho means 'until I see you again' in Chikashshanompa' — a warm Chickasaw farewell."),
  E("Saholhchifoat","sah-HOHLH-chee-foat","My name is","Greetings","Used to introduce yourself.","How do you introduce yourself in Chickasaw?","Saholhchifoat (sah-HOHLH-chee-foat) followed by your name means 'my name is' in Chikashshanompa'."),
  E("Nanta chilholhchifo?","NAN-tah chil-HOHLH-chee-foh","What is your name?","Greetings","Standard way to ask someone's name.","How do you ask someone their name in Chickasaw?","Nanta chilholhchifo? means 'what is your name?' in Chikashshanompa'."),
  E("Chinittakat chinchokma'shki","chin-NIH-ttahk chin-CHOHK-mah-shkih","Have a nice day","Greetings","A polite farewell wish.","How do you say have a nice day in Chickasaw?","Chinittakat chinchokma'shki means 'have a nice day' in Chikashshanompa'."),

  // ── ESSENTIAL PHRASES ────────────────────────────────────────────────────────
  E("Akostinichili","ah-koh-stih-NIH-chih-lih","I understand","Essential","Confirms understanding.","How do you say I understand in Chickasaw?","Akostinichili means 'I understand' in Chikashshanompa'."),
  E("Akostinicho","ah-koh-stih-NIH-choh","I do not understand","Essential","Used when confused.","How do you say I do not understand in Chickasaw?","Akostinicho means 'I do not understand' in Chikashshanompa'."),
  E("Aachi anowa","AH-chee ah-NOH-wah","Say it again","Essential","Asks for repetition.","How do you ask someone to repeat in Chickasaw?","Aachi anowa means 'say it again' in Chikashshanompa'."),
  E("Nanta","NAN-tah","What","Essential","Question word for what.","How do you say what in Chickasaw?","Nanta (NAN-tah) means 'what' in Chikashshanompa'. It is a foundational question word."),
  E("Kata","KAH-tah","Who","Essential","Question word for who.","How do you say who in Chickasaw?","Kata (KAH-tah) means 'who' in Chikashshanompa'."),
  E("Katiyakta","kah-tih-YAK-tah","Where","Essential","Question word for where.","How do you say where in Chickasaw?","Katiyakta (kah-tih-YAK-tah) means 'where' in Chikashshanompa'."),
  E("Katihmihta","kah-tih-MIH-tah","Why","Essential","Question word for why.","How do you say why in Chickasaw?","Katihmihta (kah-tih-MIH-tah) means 'why' in Chikashshanompa'."),
  E("Katihsht","KAH-tihsht","How","Essential","Question word for how.","How do you say how in Chickasaw?","Katihsht (KAH-tihsht) means 'how' in Chikashshanompa'."),
  E("Yappa nanta?","YAP-pah NAN-tah","What is this?","Essential","Points to nearby object.","How do you ask what is this in Chickasaw?","Yappa nanta? means 'what is this?' in Chikashshanompa' — used when pointing to nearby objects."),
  E("Yamma nanta?","YAM-mah NAN-tah","What is that?","Essential","Points to far object.","How do you ask what is that in Chickasaw?","Yamma nanta? means 'what is that?' in Chikashshanompa' — used for objects out of reach."),
  E("Ki'yo","KIH-yoh","No","Essential","The word for no.","How do you say no in Chickasaw?","Ki'yo (KIH-yoh) means no in Chikashshanompa'. The glottal stop is an important Chickasaw phonological feature."),
  E("Akithano","ah-KIH-thah-noh","I don't know","Essential","Expresses not knowing.","How do you say I don't know in Chickasaw?","Akithano (ah-KIH-thah-noh) means 'I don't know' in Chikashshanompa'."),
  E("Chikashshanompa' aachi","chik-ash-shah-NOM-pah AH-chee","Say it in Chickasaw","Essential","Asks someone to use the language.","How do you ask someone to speak Chickasaw?","Chikashshanompa' aachi means 'say it in Chickasaw' in Chikashshanompa'."),
  E("Chokmalo'si aachi","CHOHK-mah-LOH-see AH-chee","Say it slowly","Essential","Asks someone to speak slowly.","How do you ask someone to speak slowly in Chickasaw?","Chokmalo'si aachi means 'say it slowly' in Chikashshanompa'."),
  E("Ayalima'kila","ah-YAH-lee-mah-KIH-lah","I have to go","Essential","A polite departure phrase.","How do you say I have to go in Chickasaw?","Ayalima'kila means 'I have to go' in Chikashshanompa'."),

  // ── NUMBERS ─────────────────────────────────────────────────────────────────
  E("Chaffa","CHAHF-fah","One","Numbers","The number one.","How do you say one in Chickasaw?","Chaffa (CHAHF-fah) means one in Chikashshanompa'."),
  E("Toklo","TOHK-loh","Two","Numbers","The number two.","How do you say two in Chickasaw?","Toklo (TOHK-loh) means two in Chikashshanompa'."),
  E("Tochchina","toh-CHEE-nah","Three","Numbers","The number three.","How do you say three in Chickasaw?","Tochchina (toh-CHEE-nah) means three in Chikashshanompa'."),
  E("Oshta","OSH-tah","Four","Numbers","The number four.","How do you say four in Chickasaw?","Oshta (OSH-tah) means four in Chikashshanompa'."),
  E("Talhlhapi","tahl-HAH-pee","Five","Numbers","The number five.","How do you say five in Chickasaw?","Talhlhapi (tahl-HAH-pee) means five in Chikashshanompa'."),
  E("Hannali","hah-NAH-lee","Six","Numbers","The number six.","How do you say six in Chickasaw?","Hannali (hah-NAH-lee) means six in Chikashshanompa'."),
  E("Ontoklo","on-TOHK-loh","Seven","Numbers","The number seven.","How do you say seven in Chickasaw?","Ontoklo (on-TOHK-loh) means seven in Chikashshanompa'."),
  E("Ontochchina","on-toh-CHEE-nah","Eight","Numbers","The number eight.","How do you say eight in Chickasaw?","Ontochchina (on-toh-CHEE-nah) means eight in Chikashshanompa'."),
  E("Chakkali","chahk-KAH-lee","Nine","Numbers","The number nine.","How do you say nine in Chickasaw?","Chakkali (chahk-KAH-lee) means nine in Chikashshanompa'."),
  E("Pokkoli","pohk-KOH-lee","Ten","Numbers","The number ten.","How do you say ten in Chickasaw?","Pokkoli (pohk-KOH-lee) means ten in Chikashshanompa'."),
  E("Awa chaffa","AH-wah CHAHF-fah","Eleven","Numbers","Ten plus one.","How do you say eleven in Chickasaw?","Awa chaffa means eleven in Chikashshanompa' — literally ten-and-one."),
  E("Awa toklo","AH-wah TOHK-loh","Twelve","Numbers","Ten plus two.","How do you say twelve in Chickasaw?","Awa toklo means twelve in Chikashshanompa'."),
  E("Pokkoli toklo","pohk-KOH-lee TOHK-loh","Twenty","Numbers","Two tens.","How do you say twenty in Chickasaw?","Pokkoli toklo means twenty in Chikashshanompa' — literally two tens."),
  E("Pokkoli tochchina","pohk-KOH-lee toh-CHEE-nah","Thirty","Numbers","Three tens.","How do you say thirty in Chickasaw?","Pokkoli tochchina means thirty in Chikashshanompa'."),
  E("Pokkoli oshta","pohk-KOH-lee OSH-tah","Forty","Numbers","Four tens.","How do you say forty in Chickasaw?","Pokkoli oshta means forty in Chikashshanompa'."),
  E("Pokkoli talhlhapi","pohk-KOH-lee tahl-HAH-pee","Fifty","Numbers","Five tens.","How do you say fifty in Chickasaw?","Pokkoli talhlhapi means fifty in Chikashshanompa'."),
  E("Talhipa chaffa","tahl-HEE-pah CHAHF-fah","One hundred","Numbers","One hundred.","How do you say one hundred in Chickasaw?","Talhipa chaffa means one hundred in Chikashshanompa'."),
  E("Talhipa sipokni chaffa","tahl-HEE-pah sih-POHK-nee CHAHF-fah","One thousand","Numbers","One thousand.","How do you say one thousand in Chickasaw?","Talhipa sipokni chaffa means one thousand in Chikashshanompa'."),

  // ── COLORS ──────────────────────────────────────────────────────────────────
  E("Lakna","LAHK-nah","Yellow","Colors","The color yellow.","How do you say yellow in Chickasaw?","Lakna (LAHK-nah) means yellow in Chikashshanompa'."),
  E("Homma","HOH-mah","Red","Colors","Red — significant in Chickasaw ceremony.","How do you say red in Chickasaw?","Homma (HOH-mah) means red in Chikashshanompa'. Red holds significance in Chickasaw ceremonial life."),
  E("Okchamali","ohk-chah-MAH-lee","Green / Blue","Colors","One word covers both green and blue.","How do you say green or blue in Chickasaw?","Okchamali (ohk-chah-MAH-lee) means both green and blue in Chikashshanompa'. The language uses one word for this color range."),
  E("Losa","LOH-sah","Black","Colors","The color black.","How do you say black in Chickasaw?","Losa (LOH-sah) means black in Chikashshanompa'."),
  E("Tohbi","TOH-bee","White","Colors","The color white.","How do you say white in Chickasaw?","Tohbi (TOH-bee) means white in Chikashshanompa'."),
  E("Shobokoli","shoh-BOH-koh-lee","Gray","Colors","The color gray.","How do you say gray in Chickasaw?","Shobokoli (shoh-BOH-koh-lee) means gray in Chikashshanompa'."),
  E("Hommayyi","hoh-MAY-yee","Pink","Colors","The color pink.","How do you say pink in Chickasaw?","Hommayyi (hoh-MAY-yee) means pink in Chikashshanompa'."),
  E("Losayyi","loh-SAY-yee","Brown","Colors","The color brown.","How do you say brown in Chickasaw?","Losayyi (loh-SAY-yee) means brown in Chikashshanompa'."),
  E("Nakbatepoli","nahk-bah-teh-POH-lee","Rainbow","Colors","The rainbow.","How do you say rainbow in Chickasaw?","Nakbatepoli (nahk-bah-teh-POH-lee) means rainbow in Chikashshanompa'."),

  // ── FAMILY & KINSHIP ─────────────────────────────────────────────────────────
  E("Ishki","ISH-kee","Mother","Family","Mother — central in the matrilineal clan system.","How do you say mother in Chickasaw?","Ishki (ISH-kee) means mother in Chikashshanompa'. In the matrilineal Chickasaw society, a mother's clan determined her children's identity and inheritance."),
  E("Inki","IHN-kee","Father","Family","Father in Chickasaw.","How do you say father in Chickasaw?","Inki (IHN-kee) means father in Chikashshanompa'."),
  E("Appossi","ah-POH-see","Grandmother","Family","Grandmother — held great authority in the matrilineal system.","How do you say grandmother in Chickasaw?","Appossi (ah-POH-see) means grandmother in Chikashshanompa'. Grandmothers held great authority in the traditional matrilineal Chickasaw society."),
  E("Imafossi","ih-mah-FOH-see","Grandfather","Family","Grandfather — respected elder and knowledge keeper.","How do you say grandfather in Chickasaw?","Imafossi (ih-mah-FOH-see) means grandfather in Chikashshanompa'. Grandfathers are respected as elders and knowledge keepers."),
  E("Ipok","IH-pohk","Grandchild","Family","Grandchild — the next generation.","How do you say grandchild in Chickasaw?","Ipok (IH-pohk) means grandchild in Chikashshanompa'."),
  E("Nafki","NAHF-kee","Brother","Family","Brother in Chickasaw.","How do you say brother in Chickasaw?","Nafki (NAHF-kee) means brother in Chikashshanompa'."),
  E("Intiik","in-TEEK","Sister","Family","Sister — important in the matrilineal clan system.","How do you say sister in Chickasaw?","Intiik (in-TEEK) means sister in Chikashshanompa'. Sisters held important social bonds in the traditional clan system."),
  E("Oshi","OH-shee","Son","Family","Son in Chickasaw.","How do you say son in Chickasaw?","Oshi (OH-shee) means son in Chikashshanompa'."),
  E("Oshiitiik","oh-SHEE-teek","Daughter","Family","Daughter — carried clan lineage forward.","How do you say daughter in Chickasaw?","Oshiitiik (oh-SHEE-teek) means daughter in Chikashshanompa'. In the matrilineal system, daughters carried the clan lineage forward."),
  E("Imihoo","ih-mih-HOH","Wife","Family","Wife in Chickasaw.","How do you say wife in Chickasaw?","Imihoo (ih-mih-HOH) means wife in Chikashshanompa'."),
  E("Ishkosi","ISH-koh-see","Aunt","Family","Aunt in Chickasaw.","How do you say aunt in Chickasaw?","Ishkosi (ISH-koh-see) means aunt in Chikashshanompa'."),
  E("Imoshi","ih-MOH-shee","Uncle","Family","Uncle in Chickasaw.","How do you say uncle in Chickasaw?","Imoshi (ih-MOH-shee) means uncle in Chikashshanompa'."),
  E("Anchokka-chaffa","an-CHOHK-kah CHAHF-fah","My family","Family","My family or household.","How do you say my family in Chickasaw?","Anchokka-chaffa means 'my family' in Chikashshanompa'. The word chokka means home or household."),
  E("Okla","OHK-lah","People / Community","Family","The people or community collectively.","What is the Chickasaw word for community or people?","Okla (OHK-lah) means people or community in Chikashshanompa'. It refers to the collective community of the Chickasaw Nation."),

  // ── BODY PARTS ───────────────────────────────────────────────────────────────
  E("Ishkobo","ish-KOH-boh","Head","Body","Head in Chickasaw.","How do you say head in Chickasaw?","Ishkobo (ish-KOH-boh) means head in Chikashshanompa'."),
  E("Ishkin","ISH-kin","Eye","Body","Eye in Chickasaw.","How do you say eye in Chickasaw?","Ishkin (ISH-kin) means eye in Chikashshanompa'."),
  E("Ibichchala","ih-bih-CHAH-lah","Nose","Body","Nose in Chickasaw.","How do you say nose in Chickasaw?","Ibichchala (ih-bih-CHAH-lah) means nose in Chikashshanompa'."),
  E("Itiya","ih-TEE-yah","Mouth","Body","Mouth in Chickasaw.","How do you say mouth in Chickasaw?","Itiya (ih-TEE-yah) means mouth in Chikashshanompa'."),
  E("Haksibish","hahk-SIH-bish","Ears","Body","Ears in Chickasaw.","How do you say ears in Chickasaw?","Haksibish (hahk-SIH-bish) means ears in Chikashshanompa'."),
  E("Ipashi","ih-PAH-shee","Hair","Body","Hair in Chickasaw.","How do you say hair in Chickasaw?","Ipashi (ih-PAH-shee) means hair in Chikashshanompa'."),
  E("Ilbak","IHL-bahk","Hand / Arm","Body","Hand and arm share a root.","How do you say hand in Chickasaw?","Ilbak (IHL-bahk) means hand or arm in Chikashshanompa'. The same root word covers both hand and arm."),
  E("Iyyi","IH-yee","Foot / Leg","Body","Foot and leg in Chickasaw.","How do you say foot in Chickasaw?","Iyyi (IH-yee) means foot or leg in Chikashshanompa'."),
  E("Chukush","CHOO-koosh","Heart","Body","Heart — physical and emotional.","How do you say heart in Chickasaw?","Chukush (CHOO-koosh) means heart in Chikashshanompa'. Used both for the physical heart and metaphorically for one's emotional core."),
  E("Foni","FOH-nee","Bone","Body","Bone in Chickasaw.","How do you say bone in Chickasaw?","Foni (FOH-nee) means bone in Chikashshanompa'."),
  E("Issish","IH-sish","Blood","Body","Blood — lineage passed through mother's blood.","How do you say blood in Chickasaw?","Issish (IH-sish) means blood in Chikashshanompa'. Clan membership was determined by blood lineage through the mother."),
  E("Haknip","HAHK-nip","Body","Body","The whole body.","How do you say body in Chickasaw?","Haknip (HAHK-nip) means body in Chikashshanompa'."),
  E("Nokhistap","nohk-HIS-tahp","Neck","Body","Neck in Chickasaw.","How do you say neck in Chickasaw?","Nokhistap (nohk-HIS-tahp) means neck in Chikashshanompa'."),
  E("Haship","HAH-ship","Chest","Body","Chest in Chickasaw.","How do you say chest in Chickasaw?","Haship (HAH-ship) means chest in Chikashshanompa'."),
  E("Nalhchiba","nahl-CHIH-bah","Back","Body","The back of the body.","How do you say back in Chickasaw?","Nalhchiba (nahl-CHIH-bah) means back in Chikashshanompa'."),
  E("Ittakoba","ih-ttah-KOH-bah","Stomach / Belly","Body","Stomach in Chickasaw.","How do you say stomach in Chickasaw?","Ittakoba (ih-ttah-KOH-bah) means stomach or belly in Chikashshanompa'."),
  E("Isolosh","ih-SOH-losh","Tongue","Body","Tongue in Chickasaw.","How do you say tongue in Chickasaw?","Isolosh (ih-SOH-losh) means tongue in Chikashshanompa'."),
  E("Ilbakoshi","IHL-bahk-oh-shee","Fingers","Body","Fingers in Chickasaw.","How do you say fingers in Chickasaw?","Ilbakoshi (IHL-bahk-oh-shee) means fingers in Chikashshanompa'."),
  E("Iyyoshi","ih-YOH-shee","Toes","Body","Toes in Chickasaw.","How do you say toes in Chickasaw?","Iyyoshi (ih-YOH-shee) means toes in Chikashshanompa'."),
  E("Notakfa","noh-TAHK-fah","Chin","Body","Chin in Chickasaw.","How do you say chin in Chickasaw?","Notakfa (noh-TAHK-fah) means chin in Chikashshanompa'."),
  E("Shakba","SHAHK-bah","Shoulder","Body","Shoulder in Chickasaw.","How do you say shoulder in Chickasaw?","Shakba (SHAHK-bah) means shoulder in Chikashshanompa'."),

  // ── ANIMALS ─────────────────────────────────────────────────────────────────
  E("Ofi","OH-fee","Dog","Animals","Dogs were valued companions in traditional Chickasaw life.","How do you say dog in Chickasaw?","Ofi (OH-fee) means dog in Chikashshanompa'. Dogs were important companions in traditional Chickasaw life."),
  E("Nita","NIH-tah","Bear","Animals","Bear held spiritual significance.","How do you say bear in Chickasaw?","Nita (NIH-tah) means bear in Chikashshanompa'. The bear held spiritual significance in Chickasaw and southeastern tribal traditions."),
  E("Issi","IH-see","Deer","Animals","Deer were central to Chickasaw subsistence.","How do you say deer in Chickasaw?","Issi (IH-see) means deer in Chikashshanompa'. Deer provided food, hides, and trade goods."),
  E("Osi","OH-see","Eagle","Animals","The eagle is sacred across many Indigenous traditions.","How do you say eagle in Chickasaw?","Osi (OH-see) means eagle in Chikashshanompa'. The eagle is a sacred bird of great significance in Chickasaw tradition."),
  E("Foshi","FOH-shee","Bird","Animals","The general word for bird.","How do you say bird in Chickasaw?","Foshi (FOH-shee) means bird in Chikashshanompa'."),
  E("Nashoba","nah-SHOH-bah","Wolf","Animals","Wolf appears in Chickasaw oral tradition.","How do you say wolf in Chickasaw?","Nashoba (nah-SHOH-bah) means wolf in Chikashshanompa'. The wolf appears in Chickasaw stories and oral tradition."),
  E("Soba","SOH-bah","Horse","Animals","Chickasaw became renowned horse breeders.","How do you say horse in Chickasaw?","Soba (SOH-bah) means horse in Chikashshanompa'. The Chickasaw became renowned horse breeders — their horses were prized across the Southeast."),
  E("Chukfi","CHOOK-fee","Rabbit","Animals","Rabbit appears in Chickasaw stories.","How do you say rabbit in Chickasaw?","Chukfi (CHOOK-fee) means rabbit in Chikashshanompa'. Rabbit is a common figure in Chickasaw oral tradition."),
  E("Nani","NAH-nee","Fish","Animals","Fish were an important food source.","How do you say fish in Chickasaw?","Nani (NAH-nee) means fish in Chikashshanompa'. Fish were an important food source in the original southeastern homeland."),
  E("Sinti","SIN-tee","Snake","Animals","Snake in Chickasaw.","How do you say snake in Chickasaw?","Sinti (SIN-tee) means snake in Chikashshanompa'."),
  E("Fala","FAH-lah","Crow","Animals","Crow appears in oral traditions.","How do you say crow in Chickasaw?","Fala (FAH-lah) means crow in Chikashshanompa'. The crow appears in Chickasaw oral traditions."),
  E("Loksi","LOHK-see","Turtle","Animals","Turtle shells used in stomp dance.","How do you say turtle in Chickasaw?","Loksi (LOHK-see) means turtle in Chikashshanompa'. Turtle shells were used as shakers in the traditional stomp dance."),
  E("Yanash","YAH-nash","Buffalo","Animals","Chickasaw hunted buffalo on westward expeditions.","How do you say buffalo in Chickasaw?","Yanash (YAH-nash) means buffalo in Chikashshanompa'. Chickasaw warriors traveled westward to hunt buffalo."),
  E("Chalokloha","chah-lohk-LOH-hah","Turkey","Animals","Wild turkey was an important food source.","How do you say turkey in Chickasaw?","Chalokloha (chah-lohk-LOH-hah) means turkey in Chikashshanompa'. Wild turkey was an important traditional food source."),
  E("Kowi","KOH-wee","Cat","Animals","Cat in Chickasaw.","How do you say cat in Chickasaw?","Kowi (KOH-wee) means cat in Chikashshanompa'."),
  E("Funi","FOO-nee","Squirrel","Animals","Squirrel was hunted for food.","How do you say squirrel in Chickasaw?","Funi (FOO-nee) means squirrel in Chikashshanompa'. Squirrel was hunted as a food source in traditional life."),
  E("Kinta","KIN-tah","Beaver","Animals","Beaver — important for trade.","How do you say beaver in Chickasaw?","Kinta (KIN-tah) means beaver in Chikashshanompa'. Beaver pelts were important trade goods."),
  E("Opa","OH-pah","Owl","Animals","Owl holds spiritual significance.","How do you say owl in Chickasaw?","Opa (OH-pah) means owl in Chikashshanompa'. The owl holds spiritual significance in many southeastern Indigenous traditions."),
  E("Chola","CHOH-lah","Fox","Animals","Fox in Chickasaw.","How do you say fox in Chickasaw?","Chola (CHOH-lah) means fox in Chikashshanompa'."),
  E("Shawi","SHAH-wee","Raccoon","Animals","Raccoon in Chickasaw.","How do you say raccoon in Chickasaw?","Shawi (SHAH-wee) means raccoon in Chikashshanompa'."),
  E("Chunti","CHOON-tee","Frog","Animals","Frog in Chickasaw.","How do you say frog in Chickasaw?","Chunti (CHOON-tee) means frog in Chikashshanompa'."),
  E("Pinti","PIN-tee","Mouse","Animals","Mouse in Chickasaw.","How do you say mouse in Chickasaw?","Pinti (PIN-tee) means mouse in Chikashshanompa'."),
  E("Akanka","ah-KAHN-kah","Chicken","Animals","Chicken in Chickasaw.","How do you say chicken in Chickasaw?","Akanka (ah-KAHN-kah) means chicken in Chikashshanompa'."),
  E("Koni","KOH-nee","Skunk","Animals","Skunk in Chickasaw.","How do you say skunk in Chickasaw?","Koni (KOH-nee) means skunk in Chikashshanompa'."),
  E("Issoba","IH-soh-bah","Horse (alternate)","Animals","Alternate term for horse.","What is another word for horse in Chickasaw?","Issoba (IH-soh-bah) is an alternate Chickasaw word for horse in Chikashshanompa'."),

  // ── NATURE ───────────────────────────────────────────────────────────────────
  E("Oka","OH-kah","Water","Nature","Water — foundational in Chickasaw culture.","How do you say water in Chickasaw?","Oka (OH-kah) means water in Chikashshanompa'. Water holds deep cultural significance and appears throughout traditional place names."),
  E("Hashi","HAH-shee","Sun","Nature","The sun — central to timekeeping.","How do you say sun in Chickasaw?","Hashi (HAH-shee) means sun in Chikashshanompa'. The sun is foundational to Chickasaw timekeeping and ceremony."),
  E("Oklhili Hashi","ohk-LHIH-lee HAH-shee","Moon","Nature","Moon — literally night sun.","How do you say moon in Chickasaw?","Oklhili Hashi means moon in Chikashshanompa' — literally 'night sun', showing how Chickasaw relates the moon to the sun."),
  E("Iti","IH-tee","Tree / Wood","Nature","Tree or wood.","How do you say tree in Chickasaw?","Iti (IH-tee) means tree or wood in Chikashshanompa'. Forests were central to Chickasaw life in their southeastern homeland."),
  E("Yakni","YAHK-nee","Earth / Land","Nature","Land — the foundation of Chickasaw sovereignty.","How do you say land or earth in Chickasaw?","Yakni (YAHK-nee) means earth or land in Chikashshanompa'. Land held profound spiritual and political significance as the foundation of Chickasaw sovereignty."),
  E("Lowak","LOH-wahk","Fire","Nature","Fire — sacred in stomp dance ceremony.","How do you say fire in Chickasaw?","Lowak (LOH-wahk) means fire in Chikashshanompa'. Fire is sacred and central to the stomp dance ceremony."),
  E("Oka Laya","OH-kah LAH-yah","River","Nature","River — important in traditional homeland.","How do you say river in Chickasaw?","Oka Laya means river in Chikashshanompa'. Rivers were vital to the Chickasaw in their southeastern homeland."),
  E("Nusi","NOO-see","Sleep / Rest","Nature","Sleep or rest.","How do you say sleep in Chickasaw?","Nusi (NOO-see) means sleep or rest in Chikashshanompa'."),
  E("Nitak","NIH-tahk","Day","Nature","Day — foundational time unit.","How do you say day in Chickasaw?","Nitak (NIH-tahk) means day in Chikashshanompa'. It is the foundational unit of time in the language."),
  E("Oklhili","ohk-LHIH-lee","Night / Dark","Nature","Night or darkness.","How do you say night in Chickasaw?","Oklhili (ohk-LHIH-lee) means night or dark in Chikashshanompa'. It appears in the word for moon — Oklhili Hashi, meaning night sun."),
  E("Otoli","oh-TOH-lee","Mountain / Hill","Nature","Mountain or elevated ground.","How do you say mountain in Chickasaw?","Otoli (oh-TOH-lee) means mountain or hill in Chikashshanompa'."),
  E("Abeka","ah-BEH-kah","Illness / Sickness","Nature","Sickness or being unwell.","How do you say sick or illness in Chickasaw?","Abeka (ah-BEH-kah) means illness or sickness in Chikashshanompa'."),
  E("Mahli","MAH-lee","Wind","Nature","Wind — used in weather phrases.","How do you say wind in Chickasaw?","Mahli (MAH-lee) means wind in Chikashshanompa'. It appears in the weather phrase meaning it is windy."),
  E("Okti","OHK-tee","Snow","Nature","Snow in Chickasaw.","How do you say snow in Chickasaw?","Okti (OHK-tee) means snow in Chikashshanompa'."),
  E("Omba","OHM-bah","Rain","Nature","Rain in Chickasaw.","How do you say rain in Chickasaw?","Omba (OHM-bah) means rain or it is raining in Chikashshanompa'."),
  E("Kapassa","kah-PAH-sah","Cold","Nature","Cold temperature.","How do you say cold in Chickasaw?","Kapassa (kah-PAH-sah) means cold in Chikashshanompa'."),
  E("Lashpa","LAHSH-pah","Warm","Nature","Warm temperature.","How do you say warm in Chickasaw?","Lashpa (LAHSH-pah) means warm in Chikashshanompa'."),
  E("Toompalli","toom-PAH-lee","Summer","Seasons","The summer season.","How do you say summer in Chickasaw?","Toompalli (toom-PAH-lee) means summer in Chikashshanompa'."),
  E("Hashtola","hash-TOH-lah","Winter","Seasons","The winter season.","How do you say winter in Chickasaw?","Hashtola (hash-TOH-lah) means winter in Chikashshanompa'. The cold season when the land rests."),
  E("Hashtola Ammona","hash-TOH-lah ah-MOH-nah","Autumn","Seasons","The autumn season.","How do you say autumn in Chickasaw?","Hashtola Ammona means autumn in Chikashshanompa'."),
  E("Toompalli Ishtayya","toom-PAH-lee ish-TAY-yah","Spring","Seasons","The spring season.","How do you say spring in Chickasaw?","Toompalli Ishtayya means spring in Chikashshanompa'."),

  // ── PEOPLE & SOCIETY ────────────────────────────────────────────────────────
  E("Hattak","HAH-ttahk","Man / Person","People","Root word for many people-related words.","How do you say man or person in Chickasaw?","Hattak (HAH-ttahk) means man or person in Chikashshanompa'. It serves as the root for many compound words relating to human roles."),
  E("Ohoyo","oh-HOY-oh","Woman","People","Women held great respect in the matrilineal society.","How do you say woman in Chickasaw?","Ohoyo (oh-HOY-oh) means woman in Chikashshanompa'. Women held great respect and authority in the traditional matrilineal Chickasaw society."),
  E("Chipota","chih-POH-tah","Child","People","Children are considered sacred.","How do you say child in Chickasaw?","Chipota (chih-POH-tah) means child in Chikashshanompa'. Children are sacred in Chickasaw culture."),
  E("Minko","MIN-koh","Chief","People","The traditional political and spiritual leader.","What is the Chickasaw word for chief?","Minko (MIN-koh) means chief in Chikashshanompa'. The Minko was the traditional political and spiritual leader of the Chickasaw people."),
  E("Kamassa","kah-MAH-sah","Elder","People","Elders are the knowledge keepers.","What is the Chickasaw word for elder?","Kamassa (kah-MAH-sah) means elder in Chikashshanompa'. Elders are the most respected knowledge keepers in Chickasaw society."),
  E("Sipokni","sih-POHK-nee","Ancient / Elder","People","Ancient or very old — also used for elders.","What does sipokni mean in Chickasaw?","Sipokni (sih-POHK-nee) means ancient or elder in Chikashshanompa'. It refers to great age and is applied to both people and things of great antiquity."),
  E("Puskush","POOS-koosh","Baby","People","Baby — the newest community members.","How do you say baby in Chickasaw?","Puskush (POOS-koosh) means baby in Chikashshanompa'. Babies are considered sacred new arrivals into the Chickasaw community."),
  E("Hattak Api Homma","HAH-ttahk AH-pee HOH-mah","Native American","People","Native American person — literally red-blooded person.","What is the Chickasaw term for Native American?","Hattak Api Homma (HAH-ttahk AH-pee HOH-mah) means Native American or Indian person in Chikashshanompa'."),
  E("Tashka","TAHSH-kah","Warrior","People","Warrior — the Chickasaw were renowned warriors.","What is the Chickasaw word for warrior?","Tashka (TAHSH-kah) means warrior in Chikashshanompa'. The Chickasaw were renowned as fierce warriors — called Unconquered and Unconquerable."),
  E("Alikchi","ah-LIK-chee","Medicine Person / Doctor","People","Traditional healer — now also modern doctor.","What is the Chickasaw word for doctor or healer?","Alikchi (ah-LIK-chee) means medicine person or doctor in Chikashshanompa'. Rooted in the traditional healer who used plant medicine and ceremony."),
  E("Holisso Pisachi","hoh-LIS-soh pih-SAH-chee","Teacher","People","Teacher — literally one who shows knowledge.","What is the Chickasaw word for teacher?","Holisso Pisachi means teacher in Chikashshanompa' — literally 'one who shows the book or knowledge'."),
  E("Naa-alhtoka","nah-AHL-toh-kah","Police Officer","People","Police officer — the Nation has sovereign Lighthorse Police.","What is the Chickasaw word for police officer?","Naa-alhtoka means police officer in Chikashshanompa'. The Chickasaw Nation has its own sovereign Lighthorse Police force."),
  E("Chipota nakni","chih-POH-tah NAHK-nee","Boy","People","Boy in Chickasaw.","How do you say boy in Chickasaw?","Chipota nakni (chih-POH-tah NAHK-nee) means boy in Chikashshanompa'."),
  E("Chipotatiik","chih-POH-tah-teek","Girl","People","Girl in Chickasaw.","How do you say girl in Chickasaw?","Chipotatiik (chih-POH-tah-teek) means girl in Chikashshanompa'."),
  E("Hattak himitta","HAH-ttahk hih-MIH-ttah","Teenage boy","People","Teenage boy in Chickasaw.","How do you say teenage boy in Chickasaw?","Hattak himitta (HAH-ttahk hih-MIH-ttah) means teenage boy in Chikashshanompa'."),
  E("Ihoo himitta","ih-HOH hih-MIH-ttah","Teenage girl","People","Teenage girl in Chickasaw.","How do you say teenage girl in Chickasaw?","Ihoo himitta (ih-HOH hih-MIH-ttah) means teenage girl in Chikashshanompa'."),

  // ── CULTURE & VALUES ─────────────────────────────────────────────────────────
  E("Chikasha","CHIK-ah-shah","Chickasaw people","Culture","The name of the Nation — the people who walk upright.","What does Chikasha mean?","Chikasha (CHIK-ah-shah) refers to the Chickasaw people. The name is often interpreted as 'the people who walk upright' — embodying dignity, honor, and sovereignty."),
  E("Chikashshanompa'","chik-ash-shah-NOM-pah","Chickasaw language","Culture","The living language at the heart of Chickasaw identity.","What is the Chickasaw language called?","Chikashshanompa' (chik-ash-shah-NOM-pah) is the name of the Chickasaw language. Nompa means language or speech. It is a Muskogean language spoken by approximately 50 elders today."),
  E("Iti Fabvssa","ih-tee fah-BUSS-ah","Backbone / Ancestral strength","Culture","Literally the backbone — ancestral strength across generations.","What is Iti Fabvssa?","Iti Fabvssa (ih-tee fah-BUSS-ah) literally means 'the backbone' in Chikashshanompa'. It represents ancestral strength and cultural foundation sustaining the Chickasaw people across generations."),
  E("Kallo","KAH-loh","Strong / Brave","Values","A high compliment — physical and moral strength.","How do you say strong or brave in Chickasaw?","Kallo (KAH-loh) means strong or brave in Chikashshanompa'. It describes both physical strength and courage of character — a high compliment."),
  E("Holisso","hoh-LIS-soh","Book / Writing","Culture","The Chickasaw valued literacy deeply.","What is the Chickasaw word for book or writing?","Holisso (hoh-LIS-soh) means book or writing in Chikashshanompa'. The Nation had one of the highest literacy rates of any people in 19th century Indian Territory."),
  E("Nanna alhlhi","NAH-nah AHL-hee","Truth","Values","Truth — a core Chickasaw value.","How do you say truth in Chickasaw?","Nanna alhlhi (NAH-nah AHL-hee) means truth in Chikashshanompa'. Truth is a foundational value in Chickasaw culture and governance."),
  E("Shilombish Ishto","shih-LOHM-bish ISH-toh","Great Spirit","Spiritual","The supreme spiritual force — literally great soul.","How do you say Great Spirit in Chickasaw?","Shilombish Ishto (shih-LOHM-bish ISH-toh) means Great Spirit in Chikashshanompa' — literally 'great soul'. It refers to the supreme spiritual force in traditional Chickasaw belief."),
  E("Hayichi hilha","hay-IH-chee HIL-hah","Stomp Dance","Spiritual","The sacred stomp dance ceremony.","What is the Chickasaw word for stomp dance?","Hayichi hilha (hay-IH-chee HIL-hah) means stomp dance in Chikashshanompa'. The stomp dance is a sacred ceremony central to Chickasaw spiritual and community life."),
  E("Hilha","HIL-hah","Dance","Culture","Dance — central to Chickasaw ceremonial life.","How do you say dance in Chickasaw?","Hilha (HIL-hah) means dance in Chikashshanompa'. Dancing is central to Chickasaw spiritual and community life."),
  E("Taloowa","tah-LOH-wah","Song / Singing","Culture","Song — used in ceremony and daily life.","How do you say song in Chickasaw?","Taloowa (tah-LOH-wah) means song or singing in Chikashshanompa'. Songs are an important part of Chickasaw ceremonial and daily life."),
  E("Aahilha","ah-HIL-hah","Stomp ground","Spiritual","The sacred ceremonial ground where stomp dances are held.","What is a stomp ground in Chickasaw?","Aahilha (ah-HIL-hah) means stomp ground in Chikashshanompa'. The stomp ground is a sacred ceremonial space where the stomp dance is held — still active in Chickasaw communities today."),
  E("Loksi shaali","LOHK-see SHAH-lee","Shell shaker","Spiritual","Women who wear turtle shell rattles in stomp dance.","What is a shell shaker in Chickasaw?","Loksi shaali (LOHK-see SHAH-lee) means shell shaker in Chikashshanompa'. Shell shakers are women who provide the rhythm for stomp dance — a position of great honor."),
  E("Anoli","ah-NOH-lee","Story / Tell","Culture","Story or to tell — oral tradition is central.","What is the Chickasaw word for story?","Anoli (ah-NOH-lee) means story or to tell in Chikashshanompa'. Oral storytelling is the primary way Chickasaw cultural knowledge is transmitted across generations."),
  E("Holihta","hoh-LIH-tah","Law / Rule","Culture","Law — the Chickasaw Nation has sovereign law.","What is the Chickasaw word for law?","Holihta (hoh-LIH-tah) means law or rule in Chikashshanompa'. The Chickasaw Nation maintains sovereign law through its own legislative and judicial systems."),
  E("Aayaakni","ah-YAH-knee","Homeland","Culture","The ancestral homeland in the Southeast.","What is the Chickasaw word for homeland?","Aayaakni (ah-YAH-knee) means homeland in Chikashshanompa'. The Chickasaw ancestral homeland was in present-day Tennessee, Mississippi, and Kentucky before Removal."),
  E("Hoowihaat","hoh-WEE-haht","Removal / After Removal","History","Refers to the forced Removal of the Chickasaw from their homeland.","What is the Chickasaw word related to Removal?","Hoowihaat refers to Removal in Chikashshanompa' — the forced removal of the Chickasaw people from their southeastern homeland in the 1830s. Despite this trauma, the Nation maintained its language, governance, and sovereignty."),
  E("Ilbasha","ihl-BAH-shah","Poor / Pitiful","Values","Used with compassion — expressing pity or hardship.","What does ilbasha mean in Chickasaw?","Ilbasha (ihl-BAH-shah) means poor or pitiful in Chikashshanompa'. It is used with compassion to acknowledge hardship."),
  E("Holitopa","hoh-lih-TOH-pah","Sacred / Holy / Beloved","Spiritual","Sacred or beloved — used for sacred objects and relationships.","What does holitopa mean in Chickasaw?","Holitopa (hoh-lih-TOH-pah) means sacred, holy, or beloved in Chikashshanompa'. It is used for sacred objects, scripture, and deeply beloved relationships."),
  E("Imponna","im-PON-nah","Wise / Skilled","Values","Wisdom and skill — highly valued qualities.","How do you say wise in Chickasaw?","Imponna (im-PON-nah) means wise or skilled in Chikashshanompa'. Wisdom and practical skill are highly valued qualities in Chickasaw culture."),
  E("Chokoshkomo","choh-KOHSH-koh-moh","Play","Culture","To play — used for children and games.","How do you say play in Chickasaw?","Chokoshkomo (choh-KOHSH-koh-moh) means to play in Chikashshanompa'. It is used for children's play and traditional games."),
  E("Kapochcha","kah-POHCH-chah","Stickball","Culture","The sacred traditional Chickasaw game — little brother of war.","What is stickball in Chickasaw?","Kapochcha (kah-POHCH-chah) is stickball in Chikashshanompa'. Stickball is the sacred traditional Chickasaw game, deeply tied to cultural identity and sometimes called 'the little brother of war'."),

  // ── FOOD ─────────────────────────────────────────────────────────────────────
  E("Pashofa","pah-SHOH-fah","Sacred corn hominy soup","Food","Central to Chickasaw ceremonies and gatherings.","What is pashofa?","Pashofa (pah-SHOH-fah) is the sacred Chickasaw cracked corn hominy soup. It is central to ceremonies and community gatherings — the preparation and sharing of pashofa is itself a cultural act."),
  E("Banaha","bah-NAH-hah","Corn shuck bread","Food","Traditional corn bread in corn shucks.","What is banaha in Chickasaw?","Banaha (bah-NAH-hah) is traditional Chickasaw corn shuck bread — cornmeal wrapped in corn shucks and boiled. It is a staple and symbol of agricultural heritage."),
  E("Tanchi","TAHN-chee","Corn","Food","The most sacred crop.","What is the Chickasaw word for corn?","Tanchi (TAHN-chee) means corn in Chikashshanompa'. Corn was the most sacred crop — the basis of pashofa and banaha, central to ceremonies."),
  E("Bala","BAH-lah","Beans","Food","Beans — part of the Three Sisters.","What is the Chickasaw word for beans?","Bala (BAH-lah) means beans in Chikashshanompa'. Beans were part of the Three Sisters — corn, beans, and squash — foundational crops of Chickasaw agriculture."),
  E("Nipi","NIH-pee","Meat","Food","Meat from hunting.","What is the Chickasaw word for meat?","Nipi (NIH-pee) means meat in Chikashshanompa'. Hunting deer, turkey, and buffalo provided meat central to the traditional Chickasaw diet."),
  E("Paska","PAHS-kah","Bread","Food","Bread — including frybread and corn breads.","What is the Chickasaw word for bread?","Paska (PAHS-kah) means bread in Chikashshanompa'. Traditional Chickasaw breads include banaha (corn shuck bread) and frybread."),
  E("Kafi","KAH-fee","Coffee","Food","Coffee adopted into Chickasaw daily life.","What is the Chickasaw word for coffee?","Kafi (KAH-fee) means coffee in Chikashshanompa'. Coffee was adopted into Chickasaw daily life."),
  E("Impa","IM-pah","Food / To eat","Food","Food or the act of eating.","What is the Chickasaw word for food or eat?","Impa (IM-pah) means food or to eat in Chikashshanompa'. It is used both as a noun for food and as a verb meaning to eat."),
  E("Ishko","ISH-koh","Drink","Food","To drink in Chickasaw.","How do you say drink in Chickasaw?","Ishko (ISH-koh) means drink or to drink in Chikashshanompa'."),
  E("Ahi","AH-hee","Potato","Food","Potatoes adopted into Chickasaw diet.","What is the Chickasaw word for potato?","Ahi (AH-hee) means potato in Chikashshanompa'."),
  E("Nannawaa","nah-NAH-wah","Fruit","Food","Fruit in Chickasaw.","What is the Chickasaw word for fruit?","Nannawaa (nah-NAH-wah) means fruit in Chikashshanompa'."),
  E("Pishokchi","pih-SHOHK-chee","Butter / Fat","Food","Butter or fat in Chickasaw.","What is the Chickasaw word for butter?","Pishokchi (pih-SHOHK-chee) means butter or fat in Chikashshanompa'."),
  E("Hapi","HAH-pee","Salt","Food","Salt — used in food preparation.","What is the Chickasaw word for salt?","Hapi (HAH-pee) means salt in Chikashshanompa'."),
  E("Chipoba","chih-POH-bah","Hungry","Food","The state of being hungry.","How do you say hungry in Chickasaw?","Chipoba (chih-POH-bah) means hungry in Chikashshanompa'. Related phrase: Chipobataa? — 'are you hungry?'"),
  E("Oka sabanna","OH-kah sah-BAN-nah","I want some water","Food Phrases","Requesting water.","How do you say I want some water in Chickasaw?","Oka sabanna (OH-kah sah-BAN-nah) means 'I want some water' in Chikashshanompa'."),
  E("Impa chokma","IM-pah CHOHK-mah","The food is great","Food Phrases","A compliment to the cook.","How do you say the food is great in Chickasaw?","Impa chokma (IM-pah CHOHK-mah) means 'the food is great' in Chikashshanompa'. A warm compliment after a good meal."),
  E("Impa chibanna?","IM-pah chih-BAN-nah","Do you want to eat?","Food Phrases","An invitation to eat.","How do you ask do you want to eat in Chickasaw?","Impa chibanna? means 'do you want to eat?' in Chikashshanompa'. Offering food is a central expression of Chickasaw hospitality."),

  // ── DAILY PHRASES ────────────────────────────────────────────────────────────
  E("Chiholloli","chih-HOH-loh-lee","I love you","Daily","The most intimate expression of love.","How do you say I love you in Chickasaw?","Chiholloli (chih-HOH-loh-lee) means 'I love you' in Chikashshanompa'. It is one of the most meaningful phrases in the language."),
  E("Sanokhanglo","sah-noh-HAHNG-loh","I am sorry","Daily","Expression of apology.","How do you say I am sorry in Chickasaw?","Sanokhanglo (sah-noh-HAHNG-loh) means 'I am sorry' in Chikashshanompa'."),
  E("Kamassa ishholiitobla'shki","kah-MAH-sah ish-hoh-LEE-toh-blah-shkih","Respect your elders","Daily","A foundational value statement.","How do you say respect your elders in Chickasaw?","Kamassa ishholiitobla'shki means 'respect your elders' in Chikashshanompa'. Respect for elders is one of the most foundational values in Chickasaw culture."),
  E("Minti cha impa","MIN-tee chah IM-pah","Come and eat","Daily","An invitation to share a meal.","How do you say come and eat in Chickasaw?","Minti cha impa (MIN-tee chah IM-pah) means 'come and eat' in Chikashshanompa'. Sharing food is central to Chickasaw hospitality."),
  E("Nosit aya","NOH-sit AH-yah","Go to bed","Daily","Bedtime phrase.","How do you say go to bed in Chickasaw?","Nosit aya (NOH-sit AH-yah) means 'go to bed' in Chikashshanompa'."),

  // ── COMMANDS ─────────────────────────────────────────────────────────────────
  E("Chokkilissa","chohk-kih-LIS-sah","Be quiet","Commands","Command for silence.","How do you say be quiet in Chickasaw?","Chokkilissa (chohk-kih-LIS-sah) means 'be quiet' in Chikashshanompa'."),
  E("Binnili","bin-NIH-lee","Sit down","Commands","Command to sit.","How do you say sit down in Chickasaw?","Binnili (bin-NIH-lee) means 'sit down' in Chikashshanompa'."),
  E("Hika","HIH-kah","Get up / Stand up","Commands","Command to rise.","How do you say get up in Chickasaw?","Hika (HIH-kah) means 'get up' or 'stand up' in Chikashshanompa'."),
  E("Iliya","ih-LEE-yah","Let's go","Commands","Inclusive command to go together.","How do you say let's go in Chickasaw?","Iliya (ih-LEE-yah) means 'let's go' in Chikashshanompa'. It is inclusive — inviting everyone to go together."),
  E("Pisa","PIH-sah","Look","Commands","Command to look.","How do you say look in Chickasaw?","Pisa (PIH-sah) means 'look' in Chikashshanompa'."),
  E("Aachi","AH-chee","Say it","Commands","Command to speak.","How do you say say it in Chickasaw?","Aachi (AH-chee) means 'say it' in Chikashshanompa'."),
  E("Chokkowa","chohk-KOH-wah","Come in","Commands","Invitation to enter.","How do you say come in in Chickasaw?","Chokkowa (chohk-KOH-wah) means 'come in' in Chikashshanompa'. Used to welcome someone into a home."),
  E("Ilihilha","ih-lih-HIL-hah","Let's dance","Commands","Invitation to dance — especially stomp dance.","How do you say let's dance in Chickasaw?","Ilihilha (ih-lih-HIL-hah) means 'let's dance' in Chikashshanompa'. Dancing is central to Chickasaw ceremonial life."),
  E("Alhlhi anoli","AHL-hee ah-NOH-lee","Tell the truth","Commands","Rooted in the Chickasaw value of truth.","How do you say tell the truth in Chickasaw?","Alhlhi anoli (AHL-hee ah-NOH-lee) means 'tell the truth' in Chikashshanompa'. Truth is a foundational value in Chickasaw culture."),
  E("Nanna anoli amanoli","NAH-nah ah-NOH-lee ah-MAH-noh-lee","Tell me a story","Commands","Stories transmit cultural knowledge.","How do you say tell me a story in Chickasaw?","Nanna anoli amanoli means 'tell me a story' in Chikashshanompa'. Oral storytelling is the primary way cultural knowledge is transmitted."),
  E("Mintibaa","MIN-tih-bah","Come over here","Commands","Invitation to come closer.","How do you say come over here in Chickasaw?","Mintibaa (MIN-tih-bah) means 'come over here' in Chikashshanompa'."),
  E("Aya","AH-yah","Go away","Commands","Command to leave.","How do you say go away in Chickasaw?","Aya (AH-yah) means 'go away' in Chikashshanompa'."),
  E("Sapisa'chi","sah-pih-SAH-chee","Show me","Commands","Asking to be shown something.","How do you say show me in Chickasaw?","Sapisa'chi (sah-pih-SAH-chee) means 'show me' in Chikashshanompa'."),
  E("Iissachi","ee-SAH-chee","Stop it","Commands","Command to stop.","How do you say stop it in Chickasaw?","Iissachi (ee-SAH-chee) means 'stop it' in Chikashshanompa'."),
  E("Amanompoli","ah-mah-NOM-poh-lee","Talk to me","Commands","Asking someone to speak.","How do you say talk to me in Chickasaw?","Amanompoli (ah-mah-NOM-poh-lee) means 'talk to me' in Chikashshanompa'."),

  // ── EMOTIONS ─────────────────────────────────────────────────────────────────
  E("Asayoppa","ah-sah-YOHP-pah","I am happy","Emotions","Expression of happiness.","How do you say I am happy in Chickasaw?","Asayoppa (ah-sah-YOHP-pah) means 'I am happy' in Chikashshanompa'."),
  E("Sashaa","sah-SHAH","I am angry","Emotions","Expression of anger.","How do you say I am angry in Chickasaw?","Sashaa (sah-SHAH) means 'I am angry' in Chikashshanompa'."),
  E("Samihlha","sah-MIH-lhah","I am scared","Emotions","Expression of fear.","How do you say I am scared in Chickasaw?","Samihlha (sah-MIH-lhah) means 'I am scared' in Chikashshanompa'."),
  E("Sanokshila","sah-nohk-SHIH-lah","I am thirsty","Emotions","Expression of thirst.","How do you say I am thirsty in Chickasaw?","Sanokshila (sah-nohk-SHIH-lah) means 'I am thirsty' in Chikashshanompa'."),
  E("Sapoba","sah-POH-bah","I am hungry","Emotions","Expression of hunger.","How do you say I am hungry in Chickasaw?","Sapoba (sah-POH-bah) means 'I am hungry' in Chikashshanompa'."),
  E("Appossi iholloli","ah-POH-see ih-HOH-loh-lee","I love my grandmother","Emotions","Expressing love for grandmother.","How do you say I love my grandmother in Chickasaw?","Appossi iholloli means 'I love my grandmother' in Chikashshanompa'. In the matrilineal Chickasaw culture, grandmothers hold special reverence."),
  E("Amafo'si iholloli","ah-mah-FOH-see ih-HOH-loh-lee","I love my grandfather","Emotions","Expressing love for grandfather.","How do you say I love my grandfather in Chickasaw?","Amafo'si iholloli means 'I love my grandfather' in Chikashshanompa'."),
  E("Yoppasi","yoh-PAH-see","I like it / I love it","Emotions","Expression of liking or loving something.","How do you say I like it in Chickasaw?","Yoppasi (yoh-PAH-see) means 'I like it' or 'I love it' in Chikashshanompa'."),
  E("Ikchokmo","ik-CHOHK-moh","Bad / Not good","Emotions","Something that is bad or not good.","How do you say bad or not good in Chickasaw?","Ikchokmo (ik-CHOHK-moh) means bad or not good in Chikashshanompa'. It is the negative form of chokma (good)."),

  // ── TIME ─────────────────────────────────────────────────────────────────────
  E("Nittak","NIH-ttahk","Day","Time","Day — the foundational time unit.","What is the Chickasaw word for day?","Nittak (NIH-ttahk) means day in Chikashshanompa'. It is the foundational unit of time and appears in many compound expressions."),
  E("Afammi","ah-FAM-mee","Year","Time","Year — also used for age.","What is the Chickasaw word for year?","Afammi (ah-FAM-mee) means year in Chikashshanompa'. It is also used when expressing someone's age."),
  E("Himmaka pila","him-MAH-kah PIH-lah","Future","Time","Future — literally from now forward.","How do you say future in Chickasaw?","Himmaka pila means future in Chikashshanompa' — literally 'from now forward'."),
  E("Hopaakikaash","hoh-pahk-ih-KAHSH","Ancient time","Time","The deep historical past.","How do you say ancient time in Chickasaw?","Hopaakikaash means ancient time in Chikashshanompa'. It refers to the deep historical past of the Chickasaw people."),
  E("Tabookoli","tah-BOH-koh-lee","Midday / Noon","Time","The middle of the day.","How do you say noon in Chickasaw?","Tabookoli (tah-BOH-koh-lee) means midday or noon in Chikashshanompa'."),
  E("Himmaka","him-MAH-kah","Now / Today","Time","Now or today.","How do you say now or today in Chickasaw?","Himmaka (him-MAH-kah) means now or today in Chikashshanompa'."),

  // ── DAYS OF WEEK ─────────────────────────────────────────────────────────────
  E("Nittak Hollo","NIH-ttahk HOH-loh","Sunday","Days","Sunday — literally holy day.","How do you say Sunday in Chickasaw?","Nittak Hollo (NIH-ttahk HOH-loh) means Sunday in Chikashshanompa' — literally 'holy day'."),
  E("Nittak Ammona","NIH-ttahk ah-MOH-nah","Monday","Days","Monday — the first day.","How do you say Monday in Chickasaw?","Nittak Ammona means Monday in Chikashshanompa' — literally 'first day'."),
  E("Nittak Atokla","NIH-ttahk ah-TOHK-lah","Tuesday","Days","Tuesday — the second day.","How do you say Tuesday in Chickasaw?","Nittak Atokla means Tuesday in Chikashshanompa'."),
  E("Nittak Atochchina","NIH-ttahk ah-toh-CHEE-nah","Wednesday","Days","Wednesday — the third day.","How do you say Wednesday in Chickasaw?","Nittak Atochchina means Wednesday in Chikashshanompa'."),
  E("Nittak Ayyoshta","NIH-ttahk ah-YOHSH-tah","Thursday","Days","Thursday — the fourth day.","How do you say Thursday in Chickasaw?","Nittak Ayyoshta means Thursday in Chikashshanompa'."),
  E("Naalhchifa Nittak","nahl-CHIH-fah NIH-ttahk","Friday","Days","Friday — preparation day.","How do you say Friday in Chickasaw?","Naalhchifa Nittak means Friday in Chikashshanompa'."),
  E("Nittak Hollo Nakfish","NIH-ttahk HOH-loh NAHK-fish","Saturday","Days","Saturday — day before holy day.","How do you say Saturday in Chickasaw?","Nittak Hollo Nakfish means Saturday in Chikashshanompa'."),

  // ── MONTHS ───────────────────────────────────────────────────────────────────
  E("Hashi Ammona","HAH-shee ah-MOH-nah","January","Months","First month.","How do you say January in Chickasaw?","Hashi Ammona means January in Chikashshanompa' — literally 'first sun' or 'first month'."),
  E("Hashi Atokla","HAH-shee ah-TOHK-lah","February","Months","Second month.","How do you say February in Chickasaw?","Hashi Atokla means February in Chikashshanompa' — literally 'second month'."),
  E("Hashi Atochchina","HAH-shee ah-toh-CHEE-nah","March","Months","Third month.","How do you say March in Chickasaw?","Hashi Atochchina means March in Chikashshanompa'."),
  E("Hashi Ayyoshta","HAH-shee ah-YOHSH-tah","April","Months","Fourth month.","How do you say April in Chickasaw?","Hashi Ayyoshta means April in Chikashshanompa'."),
  E("Hashi Atalhlhapi","HAH-shee ah-tahl-HAH-pee","May","Months","Fifth month.","How do you say May in Chickasaw?","Hashi Atalhlhapi means May in Chikashshanompa'."),
  E("Hashi Ahannali","HAH-shee ah-hah-NAH-lee","June","Months","Sixth month.","How do you say June in Chickasaw?","Hashi Ahannali means June in Chikashshanompa'."),
  E("Hashi Aontoklo","HAH-shee ah-on-TOHK-loh","July","Months","Seventh month.","How do you say July in Chickasaw?","Hashi Aontoklo means July in Chikashshanompa'."),
  E("Hashi Aontochchina","HAH-shee ah-on-toh-CHEE-nah","August","Months","Eighth month.","How do you say August in Chickasaw?","Hashi Aontochchina means August in Chikashshanompa'."),
  E("Hashi Achakkali","HAH-shee ah-chahk-KAH-lee","September","Months","Ninth month.","How do you say September in Chickasaw?","Hashi Achakkali means September in Chikashshanompa'."),
  E("Hashi Apokkoli","HAH-shee ah-pohk-KOH-lee","October","Months","Tenth month.","How do you say October in Chickasaw?","Hashi Apokkoli means October in Chikashshanompa'."),
  E("Hashi Awa Chaffa","HAH-shee AH-wah CHAHF-fah","November","Months","Eleventh month.","How do you say November in Chickasaw?","Hashi Awa Chaffa means November in Chikashshanompa'."),
  E("Hashi Awa Toklo","HAH-shee AH-wah TOHK-loh","December","Months","Twelfth month.","How do you say December in Chickasaw?","Hashi Awa Toklo means December in Chikashshanompa'."),

  // ── TECHNOLOGY ───────────────────────────────────────────────────────────────
  E("Tali lopi","TAH-lee LOH-pee","Computer","Technology","Literally thinking metal.","What is the Chickasaw word for computer?","Tali lopi (TAH-lee LOH-pee) means computer in Chikashshanompa' — literally 'thinking metal'. Chickasaw creates new words from existing roots."),
  E("Holisso palhki","hoh-LIS-soh PAHL-kee","Email","Technology","Literally fast letter.","What is the Chickasaw word for email?","Holisso palhki means email in Chikashshanompa' — literally 'fast letter'."),
  E("Talanompoli","tah-lah-NOM-poh-lee","Cell phone","Technology","Literally talking at a distance.","What is the Chickasaw word for cell phone?","Talanompoli means cell phone in Chikashshanompa' — literally 'talking at a distance'. The root nompa (speech) appears again."),
  E("Tali lopi lawa","TAH-lee LOH-pee LAH-wah","Internet","Technology","Literally many connected computers.","What is the Chickasaw word for internet?","Tali lopi lawa means internet in Chikashshanompa' — literally 'many computers connected'."),
  E("Holba aapisa","HOHL-bah ah-PIH-sah","Television","Technology","Literally image to watch.","What is the Chickasaw word for television?","Holba aapisa means television in Chikashshanompa' — literally 'image to watch'."),
  E("Ishtholbachi","ish-tohl-BAH-chee","Camera","Technology","Literally that which makes images.","What is the Chickasaw word for camera?","Ishtholbachi means camera in Chikashshanompa' — literally 'that which creates images'."),
  E("Tali anompoli","TAH-lee ah-NOM-poh-lee","Telephone","Technology","Telephone — talking through metal.","What is the Chickasaw word for telephone?","Tali anompoli means telephone in Chikashshanompa' — literally 'talking through metal'."),

  // ── MATERIALS & ITEMS ────────────────────────────────────────────────────────
  E("Sholosh","SHOH-losh","Shoes / Moccasins","Materials","Traditional Chickasaw footwear.","What is the Chickasaw word for shoes or moccasins?","Sholosh (SHOH-losh) means shoes or moccasins in Chikashshanompa'. Traditional moccasins were made from deerskin."),
  E("Naafokha","nah-FOH-kah","Clothes","Materials","Clothing in general.","What is the Chickasaw word for clothes?","Naafokha (nah-FOH-kah) means clothes in Chikashshanompa'."),
  E("Osi hishi","OH-see HIH-shee","Eagle feathers","Materials","Sacred items used in ceremony.","What is the Chickasaw word for eagle feathers?","Osi hishi (OH-see HIH-shee) means eagle feathers in Chikashshanompa'. Eagle feathers are sacred items used in ceremony and traditional regalia."),
  E("Oksop","OHK-sop","Beads","Materials","Used in traditional regalia and jewelry.","What is the Chickasaw word for beads?","Oksop (OHK-sop) means beads in Chikashshanompa'. Beadwork is an important Chickasaw art form."),
  E("Issi hakshop","IH-see HAHK-shop","Buckskin","Materials","Deerskin — primary material for traditional clothing.","What is the Chickasaw word for buckskin?","Issi hakshop means buckskin or deerskin in Chikashshanompa'. Buckskin was the primary material for traditional clothing and moccasins."),
  E("Tali","TAH-lee","Metal","Materials","Metal in Chickasaw.","What is the Chickasaw word for metal?","Tali (TAH-lee) means metal in Chikashshanompa'. It forms the root of many technology words."),
  E("Naafka","NAHF-kah","Cloth","Materials","Cloth or fabric.","What is the Chickasaw word for cloth?","Naafka (NAHF-kah) means cloth or fabric in Chikashshanompa'."),
  E("Holba","HOHL-bah","Image / Likeness","Materials","Image or likeness — used in many technology words.","What does holba mean in Chickasaw?","Holba (HOHL-bah) means image or likeness in Chikashshanompa'. It appears in many modern technology words like television and camera."),
  E("Yaalhipa","yahl-HEE-pah","Hat / Headdress","Materials","Traditional headwear.","What is the Chickasaw word for hat?","Yaalhipa (yahl-HEE-pah) means hat or headdress in Chikashshanompa'."),

  // ── CAREERS ──────────────────────────────────────────────────────────────────
  E("Noti Alikchi","NOH-tee ah-LIK-chee","Dentist","Careers","Dentist in Chickasaw.","What is the Chickasaw word for dentist?","Noti Alikchi (NOH-tee ah-LIK-chee) means dentist in Chikashshanompa' — literally 'tooth doctor'."),
  E("Abek-apiisachi","ah-bek-ah-pee-SAH-chee","Nurse","Careers","Nurse in Chickasaw.","What is the Chickasaw word for nurse?","Abek-apiisachi means nurse in Chikashshanompa' — literally 'one who looks after the sick'."),
  E("Lowak Moshoochi","LOH-wahk moh-SHOH-chee","Fireman","Careers","Firefighter in Chickasaw.","What is the Chickasaw word for fireman?","Lowak Moshoochi means fireman in Chikashshanompa' — literally 'fire stopper'."),
  E("Holisso Shaali","hoh-LIS-soh SHAH-lee","Mail carrier","Careers","Mail carrier in Chickasaw.","What is the Chickasaw word for mail carrier?","Holisso Shaali means mail carrier in Chikashshanompa' — literally 'one who carries letters'."),
  E("Imishkoboka","ih-mish-koh-BOH-kah","Boss","Careers","Boss or supervisor.","What is the Chickasaw word for boss?","Imishkoboka (ih-mish-koh-BOH-kah) means boss or supervisor in Chikashshanompa'."),

  // ── STOMP DANCE PHRASES ──────────────────────────────────────────────────────
  E("Lowak ootitok","LOH-wahk oo-TIH-tohk","The fire has been kindled","Stomp Dance","Opening of the stomp dance ceremony.","How do you say the fire has been kindled in Chickasaw?","Lowak ootitok means 'the fire has been kindled' in Chikashshanompa'. This marks the ceremonial opening of the stomp dance."),
  E("Intikbayka'chi","in-tik-BAY-kah-chee","He will lead the stomp dance","Stomp Dance","Announcing the lead dancer.","How do you say he will lead the stomp dance in Chickasaw?","Intikbayka'chi means 'he will lead the stomp dance' in Chikashshanompa'."),
  E("Hakloka chokma","hahk-LOH-kah CHOHK-mah","It sounds really good","Stomp Dance","Praise for the music and dancing.","How do you say it sounds really good in Chickasaw?","Hakloka chokma means 'it sounds really good' in Chikashshanompa' — a phrase of praise during stomp dance."),
  E("Nittak ishtayyopi ona'chi Chikashsha alhihaat hoottibaahilhachinka","NIH-ttahk ish-TAY-yoh-pee OH-nah-chee","The Chickasaw people will dance until the world ends","Stomp Dance","Sacred declaration of cultural continuity.","What is the sacred Chickasaw declaration about dancing?","This phrase means 'The Chickasaw people will dance until the world ends' in Chikashshanompa'. It is a powerful declaration that no hardship — not Removal, not cultural suppression — will end the Chickasaw tradition."),

  // ── HISTORY & SOVEREIGNTY ────────────────────────────────────────────────────
  E("Yakni Chikashsha","YAHK-nee CHIK-ah-shah","Chickasaw land / Nation","History","The Chickasaw Nation and its land.","What is the Chickasaw word for the Chickasaw Nation or land?","Yakni Chikashsha means Chickasaw land or Nation in Chikashshanompa'. Land and nationhood are inseparable in Chickasaw identity."),
  E("Iyyaakni sipokni","ih-YAH-knee sih-POHK-nee","Ancient homeland","History","The original southeastern homeland.","What is the Chickasaw word for ancient homeland?","Iyyaakni sipokni means ancient homeland in Chikashshanompa'. It refers to the original Chickasaw homeland in present-day Tennessee, Mississippi, and Kentucky."),
  E("Chikashsha Unconquered","CHIK-ah-shah","Unconquered","History","The Chickasaw were never defeated militarily.","What does unconquered mean in relation to the Chickasaw?","The Chickasaw were known as 'Unconquered and Unconquerable' — Chikashsha. Despite facing the most powerful European colonial forces, the Chickasaw were never militarily defeated. This sovereignty in spirit defines the Nation's identity."),
  E("Nan vlhpisa","nahn VLHIH-pih-sah","Law / Governance","History","Law and governance — the Nation governs itself.","What is the Chickasaw word for law or governance?","Nan vlhpisa means law or governance in Chikashshanompa'. The Chickasaw Nation has maintained sovereign self-governance throughout its history."),
  E("Ittibaachaffa","ih-ttih-bah-CHAHF-fah","Unity / Together","Values","Unity — the community coming together.","How do you say unity or together in Chickasaw?","Ittibaachaffa (ih-ttih-bah-CHAHF-fah) means unity or together in Chikashshanompa'. Coming together as a community is a core Chickasaw value."),
  E("Pilla","PIH-lah","Help","Values","To help or assist someone.","How do you say help in Chickasaw?","Pilla (PIH-lah) means help or to help in Chikashshanompa'. Helping community members is a central Chickasaw value."),
  E("Anokfili","ah-nohk-FIH-lee","Think / Thought","Values","Thinking or thought — reflection.","How do you say think in Chickasaw?","Anokfili (ah-nohk-FIH-lee) means think or thought in Chikashshanompa'. Thoughtful reflection is valued in Chickasaw decision-making."),
  E("Aatokoli","ah-toh-KOH-lee","Plan / Decide","Values","Planning or deciding — deliberate action.","How do you say plan or decide in Chickasaw?","Aatokoli (ah-toh-KOH-lee) means plan or decide in Chikashshanompa'. The Chickasaw traditionally made important decisions through deliberate community council."),

  // ── LANGUAGE ABOUT LANGUAGE ──────────────────────────────────────────────────
  E("Anompa","ah-NOM-pah","Language / Speech / Word","Language","Language or speech — the root of chikashshanompa.","What does anompa mean in Chickasaw?","Anompa (ah-NOM-pah) means language, speech, or word in Chikashshanompa'. It forms the root of the word for the Chickasaw language itself — Chikashshanompa'."),
  E("Anompoli","ah-NOM-poh-lee","To speak / Speaking","Language","The act of speaking.","What is the Chickasaw word for speaking?","Anompoli (ah-NOM-poh-lee) means to speak or speaking in Chikashshanompa'."),
  E("Haklo","HAH-kloh","To hear / Listen","Language","Hearing or listening.","How do you say listen or hear in Chickasaw?","Haklo (HAH-kloh) means to hear or listen in Chikashshanompa'."),
  E("Holhtina","hohl-HTIH-nah","To read","Language","Reading — the Chickasaw valued literacy.","How do you say read in Chickasaw?","Holhtina (hohl-HTIH-nah) means to read in Chikashshanompa'. The Chickasaw Nation placed high value on literacy."),
  E("Toksali","tohk-SAH-lee","To work","Language","Work or to work.","How do you say work in Chickasaw?","Toksali (tohk-SAH-lee) means to work in Chikashshanompa'."),
  E("Aya","AH-yah","To go","Language","To go or movement away.","How do you say to go in Chickasaw?","Aya (AH-yah) means to go in Chikashshanompa'."),
  E("Minti","MIN-tee","To come","Language","To come or approach.","How do you say to come in Chickasaw?","Minti (MIN-tee) means to come in Chikashshanompa'."),
  E("Pisa","PIH-sah","To see / look","Language","Seeing or looking.","How do you say to see in Chickasaw?","Pisa (PIH-sah) means to see or look in Chikashshanompa'."),
  E("Impa","IM-pah","To eat","Language","The verb to eat.","How do you say to eat in Chickasaw?","Impa (IM-pah) means to eat in Chikashshanompa'."),
  E("Hilha","HIL-hah","To dance","Language","The verb to dance.","How do you say to dance in Chickasaw?","Hilha (HIL-hah) means to dance in Chikashshanompa'."),
  E("Ikbi","IK-bee","To make / create","Language","Making or creating something.","How do you say to make in Chickasaw?","Ikbi (IK-bee) means to make or create in Chikashshanompa'."),
  E("Chompa","CHOHM-pah","To buy","Language","The act of purchasing.","How do you say to buy in Chickasaw?","Chompa (CHOHM-pah) means to buy in Chikashshanompa'."),
  E("Illi","IH-lee","To die","Language","Death — used with reverence.","How do you say to die in Chickasaw?","Illi (IH-lee) means to die in Chikashshanompa'. It is used with reverence in the context of ancestors who have passed."),
  E("Ibaaholhtina","ih-bah-hohl-HTIH-nah","To write","Language","The act of writing.","How do you say to write in Chickasaw?","Ibaaholhtina means to write in Chikashshanompa'."),
  E("Nokhanglo","nohk-HAHNG-loh","To feel sorry / Sorry","Language","Feeling sorry or remorse.","How do you say sorry in Chickasaw?","Nokhanglo (nohk-HAHNG-loh) means sorry or to feel sorry in Chikashshanompa'."),
  E("Banna","BAN-nah","To want","Language","Wanting or desiring something.","How do you say to want in Chickasaw?","Banna (BAN-nah) means to want in Chikashshanompa'. It appears in many phrases like 'impa sabanna' — I want to eat."),
  E("Saya","SAH-yah","I am","Language","First person identity statement.","How do you say I am in Chickasaw?","Saya (SAH-yah) means 'I am' in Chikashshanompa'. It appears in phrases like 'Chikashsha saya' — I am Chickasaw."),
  E("Chiya","CHIH-yah","You are","Language","Second person identity statement.","How do you say you are in Chickasaw?","Chiya (CHIH-yah) means 'you are' in Chikashshanompa'. It appears in phrases like 'kallo chiya' — you are strong."),

  // ── CHICKASAW AI & SOVEREIGNTY ───────────────────────────────────────────────
  E("Tali ithana","TAH-lee ih-THAH-nah","Artificial intelligence / Computer that knows","Technology","AI described in Chickasaw terms.","What is the Chickasaw concept for artificial intelligence?","Tali ithana (TAH-lee ih-THAH-nah) means 'metal that knows' or artificial intelligence in Chikashshanompa'. The Chickasaw language beautifully describes AI using the root tali (metal) and ithana (knowing/knowledge)."),
  E("Nan asilhha","nan ah-SIH-lhah","Data / Information stored","Technology","Information or stored data.","What is the Chickasaw word for data or stored information?","Nan asilhha means stored information or data in Chikashshanompa'. Sovereign data governance means the Nation controls its own nan asilhha."),
  E("Yakni nan vlhpisa","YAHK-nee nahn VLHIH-pih-sah","Sovereign law","Sovereignty","The law of the Nation — self-governance.","What is sovereign law in Chickasaw?","Yakni nan vlhpisa means sovereign law in Chikashshanompa' — the Nation's own governance applied to its own land and people. This is the foundation of Chickasaw AI governance."),
  E("Holisso asilhha","hoh-LIS-soh ah-SIH-lhah","Digital record / Document stored","Technology","A stored digital document.","What is the Chickasaw concept for digital records?","Holisso asilhha means stored document or digital record in Chikashshanompa'. Protecting holisso asilhha is central to the Sovereign Shield mission."),
  E("Chikashsha Tali Ithana","CHIK-ah-shah TAH-lee ih-THAH-nah","Chickasaw AI / Chikasha Foundational Model","Technology","The concept of a Chickasaw sovereign AI.","What is the Chikasha Foundational Model in Chickasaw terms?","Chikashsha Tali Ithana (CHIK-ah-shah TAH-lee ih-THAH-nah) means Chickasaw AI — literally 'Chickasaw metal that knows'. This is the concept behind the Chikasha Foundational Model — a sovereign AI that thinks in the language and values of the Chickasaw Nation."),
];

function toJSONL(entries) {
  const lines = [];
  entries.forEach(e => {
    lines.push(JSON.stringify({ prompt: e.q, completion: e.a }));
    lines.push(JSON.stringify({ prompt: `What does ${e.c} mean in Chickasaw?`, completion: `${e.c} (${e.p}) means ${e.e} in Chikashshanompa'. ${e.ctx}` }));
    lines.push(JSON.stringify({ prompt: `Translate "${e.e}" to Chickasaw`, completion: `The Chickasaw word for ${e.e} is ${e.c}, pronounced ${e.p}. ${e.ctx}` }));
    lines.push(JSON.stringify({ prompt: `How do you pronounce ${e.c}?`, completion: `${e.c} is pronounced ${e.p} in Chikashshanompa'. It means ${e.e}. ${e.ctx}` }));
  });
  return lines.join('\n');
}

const CATS = [...new Set(ALL_ENTRIES.map(e => e.cat))];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Crimson+Text:ital,wght@0,400;1,400&display=swap');
  @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
  .fade-up{animation:fadeUp 0.3s ease forwards}
  textarea:focus,input:focus,select:focus{outline:none;border-color:#C8A020!important}
  ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#080E14}
  ::-webkit-scrollbar-thumb{background:#1C3040;border-radius:2px}
  *{box-sizing:border-box}
  .btn{transition:all 0.2s ease}.btn:hover{opacity:0.85;transform:translateY(-1px)}
  .card{transition:border-color 0.2s}.card:hover{border-color:#2A4560!important}
`;

const C2 = {bg:"#080E14",surface:"#0C1520",panel:"#101C2A",card:"#142030",border:"#1C3040",borderLight:"#2A4560",forest:"#0D3D2A",green:"#1A6A48",greenLight:"#22A070",gold:"#C8A020",goldLight:"#E0BC40",bone:"#F0E4C8",boneDim:"#8A7A60",muted:"#3A5060"};

export default function CFMDataTool() {
  const [tab, setTab] = useState("browse");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(ALL_ENTRIES);
  const [newEntry, setNewEntry] = useState({c:"",p:"",e:"",cat:"Greetings",ctx:"",q:"",a:""});
  const [copied, setCopied] = useState(false);

  const filtered = entries.filter(e =>
    (filter === "All" || e.cat === filter) &&
    (search === "" || e.e.toLowerCase().includes(search.toLowerCase()) || e.c.toLowerCase().includes(search.toLowerCase()))
  );

  const addEntry = () => {
    if (!newEntry.c || !newEntry.e) return;
    const en = {...newEntry};
    if (!en.q) en.q = `How do you say "${en.e}" in Chickasaw?`;
    if (!en.a) en.a = `${en.c} (${en.p}) means ${en.e} in Chikashshanompa'. ${en.ctx}`;
    setEntries([...entries, en]);
    setNewEntry({c:"",p:"",e:"",cat:"Greetings",ctx:"",q:"",a:""});
  };

  const exportJSONL = () => {
    const data = toJSONL(entries);
    const blob = new Blob([data], {type:"text/plain"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url; a.download="chikashshanompa-training.jsonl"; a.click();
    setCopied(true); setTimeout(()=>setCopied(false),3000);
  };

  const TRAINING_PAIRS = entries.length * 4;

  return (
    <div style={{background:C2.bg,minHeight:"100vh",fontFamily:"'Crimson Text',Georgia,serif",color:C2.bone}}>
      <style>{styles}</style>
      <div style={{background:`${C2.surface}F0`,borderBottom:`1px solid ${C2.border}`,padding:"14px 20px",position:"sticky",top:0,zIndex:100}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${C2.green},${C2.gold},${C2.green},transparent)`}}/>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div>
              <div style={{color:C2.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:16,letterSpacing:2}}>CHIKASHSHANOMPA' TRAINING DATA</div>
              <div style={{color:C2.muted,fontSize:9,letterSpacing:2,fontFamily:"Rajdhani,sans-serif"}}>CFM PRODUCTION DATASET · SOVEREIGN SHIELD TECHNOLOGIES LLC</div>
            </div>
            <div style={{display:"flex",gap:10,alignItems:"center"}}>
              <div style={{background:C2.forest,border:`1px solid ${C2.green}50`,borderRadius:8,padding:"6px 12px",textAlign:"center"}}>
                <div style={{color:C2.greenLight,fontFamily:"Rajdhani,sans-serif",fontSize:18,fontWeight:700}}>{entries.length}</div>
                <div style={{color:C2.muted,fontSize:8,letterSpacing:1,fontFamily:"Rajdhani,sans-serif"}}>ENTRIES</div>
              </div>
              <div style={{background:C2.panel,border:`1px solid ${C2.border}`,borderRadius:8,padding:"6px 12px",textAlign:"center"}}>
                <div style={{color:C2.bone,fontFamily:"Rajdhani,sans-serif",fontSize:18,fontWeight:700}}>{TRAINING_PAIRS}</div>
                <div style={{color:C2.muted,fontSize:8,letterSpacing:1,fontFamily:"Rajdhani,sans-serif"}}>TRAINING PAIRS</div>
              </div>
            </div>
          </div>
          <div style={{display:"flex",gap:6}}>
            {["browse","add","export"].map(t=>(
              <button key={t} className="btn" onClick={()=>setTab(t)} style={{background:tab===t?C2.gold:C2.card,color:tab===t?C2.bg:C2.boneDim,border:`1px solid ${tab===t?C2.gold:C2.border}`,padding:"6px 16px",borderRadius:7,cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:"Rajdhani,sans-serif",letterSpacing:1,textTransform:"uppercase"}}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:900,margin:"0 auto",padding:"20px 20px 60px"}}>
        {tab==="browse"&&(
          <div className="fade-up">
            <div style={{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}}>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search words..." style={{flex:1,minWidth:180,background:C2.surface,border:`1px solid ${C2.border}`,borderRadius:8,color:C2.bone,padding:"8px 12px",fontSize:13,fontFamily:"inherit"}}/>
              <select value={filter} onChange={e=>setFilter(e.target.value)} style={{background:C2.surface,border:`1px solid ${C2.border}`,borderRadius:8,color:C2.bone,padding:"8px 12px",fontSize:12,fontFamily:"Rajdhani,sans-serif",cursor:"pointer"}}>
                <option>All</option>
                {CATS.map(c=><option key={c}>{c}</option>)}
              </select>
            </div>
            <div style={{color:C2.muted,fontSize:10,letterSpacing:1,fontFamily:"Rajdhani,sans-serif",marginBottom:12}}>{filtered.length} ENTRIES · {filtered.length*4} TRAINING PAIRS</div>
            <div style={{display:"grid",gap:10}}>
              {filtered.map((e,i)=>(
                <div key={i} className="card" style={{background:C2.panel,border:`1px solid ${C2.border}`,borderRadius:12,padding:"14px 18px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8,flexWrap:"wrap",gap:6}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <span style={{color:C2.goldLight,fontFamily:"Rajdhani,sans-serif",fontSize:17,fontWeight:700}}>{e.c}</span>
                      <span style={{color:C2.muted,fontSize:11,fontStyle:"italic"}}>/{e.p}/</span>
                    </div>
                    <span style={{background:`${C2.green}20`,border:`1px solid ${C2.green}40`,color:C2.greenLight,padding:"2px 8px",borderRadius:20,fontSize:9,fontWeight:700,letterSpacing:1,fontFamily:"Rajdhani,sans-serif"}}>{e.cat}</span>
                  </div>
                  <div style={{color:C2.bone,fontSize:14,fontWeight:600,marginBottom:4}}>{e.e}</div>
                  <div style={{color:C2.boneDim,fontSize:12,lineHeight:1.6,fontStyle:"italic"}}>{e.ctx}</div>
                  <div style={{marginTop:10,background:C2.card,border:`1px solid ${C2.border}`,borderRadius:8,padding:"10px 12px"}}>
                    <div style={{color:C2.muted,fontSize:9,letterSpacing:1,fontFamily:"Rajdhani,sans-serif",marginBottom:4}}>TRAINING PAIR PREVIEW</div>
                    <div style={{color:C2.boneDim,fontSize:11}}><strong style={{color:C2.gold}}>Q:</strong> {e.q}</div>
                    <div style={{color:C2.boneDim,fontSize:11,marginTop:3}}><strong style={{color:C2.greenLight}}>A:</strong> {e.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab==="add"&&(
          <div className="fade-up">
            <div style={{background:C2.panel,border:`1px solid ${C2.border}`,borderRadius:14,padding:22}}>
              <div style={{color:C2.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:13,letterSpacing:1.5,marginBottom:18}}>ADD NEW ENTRY</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
                {[{key:"c",label:"Chickasaw Word",ph:"e.g. Yakoke"},{key:"p",label:"Pronunciation",ph:"e.g. YAH-koh-keh"},{key:"e",label:"English Meaning",ph:"e.g. Thank you"}].map(f=>(
                  <div key={f.key} style={{gridColumn:f.key==="e"?"1 / -1":"auto"}}>
                    <div style={{color:C2.boneDim,fontSize:10,letterSpacing:1,fontFamily:"Rajdhani,sans-serif",marginBottom:5}}>{f.label}</div>
                    <input value={newEntry[f.key]} onChange={ev=>setNewEntry({...newEntry,[f.key]:ev.target.value})} placeholder={f.ph} style={{width:"100%",background:C2.surface,border:`1px solid ${C2.border}`,borderRadius:8,color:C2.bone,padding:"9px 12px",fontSize:13,fontFamily:"inherit"}}/>
                  </div>
                ))}
              </div>
              <div style={{marginBottom:12}}>
                <div style={{color:C2.boneDim,fontSize:10,letterSpacing:1,fontFamily:"Rajdhani,sans-serif",marginBottom:5}}>CATEGORY</div>
                <select value={newEntry.cat} onChange={e=>setNewEntry({...newEntry,cat:e.target.value})} style={{width:"100%",background:C2.surface,border:`1px solid ${C2.border}`,borderRadius:8,color:C2.bone,padding:"9px 12px",fontSize:13,fontFamily:"inherit",cursor:"pointer"}}>
                  {CATS.map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              <div style={{marginBottom:16}}>
                <div style={{color:C2.boneDim,fontSize:10,letterSpacing:1,fontFamily:"Rajdhani,sans-serif",marginBottom:5}}>CULTURAL CONTEXT</div>
                <textarea value={newEntry.ctx} onChange={e=>setNewEntry({...newEntry,ctx:e.target.value})} placeholder="Cultural significance, usage notes..." rows={3} style={{width:"100%",background:C2.surface,border:`1px solid ${C2.border}`,borderRadius:8,color:C2.bone,padding:"9px 12px",fontSize:13,resize:"vertical",fontFamily:"inherit"}}/>
              </div>
              <button className="btn" onClick={addEntry} disabled={!newEntry.c||!newEntry.e} style={{background:newEntry.c&&newEntry.e?C2.gold:C2.border,color:newEntry.c&&newEntry.e?C2.bg:C2.muted,border:"none",borderRadius:9,padding:"11px 24px",fontWeight:800,fontSize:13,cursor:newEntry.c&&newEntry.e?"pointer":"not-allowed",fontFamily:"Rajdhani,sans-serif",letterSpacing:1}}>
                Add to Dataset ◉
              </button>
            </div>
          </div>
        )}

        {tab==="export"&&(
          <div className="fade-up">
            <div style={{background:C2.panel,border:`1px solid ${C2.border}`,borderRadius:14,padding:24,marginBottom:16}}>
              <div style={{color:C2.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:13,letterSpacing:1.5,marginBottom:16}}>EXPORT PRODUCTION DATASET</div>
              <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:20}}>
                {[{v:entries.length,l:"Word Entries"},{v:TRAINING_PAIRS,l:"Training Pairs"},{v:CATS.length,l:"Categories"},{v:"JSONL",l:"Format"}].map((m,i)=>(
                  <div key={i} style={{background:C2.card,border:`1px solid ${C2.border}`,borderTop:`2px solid ${C2.gold}`,borderRadius:10,padding:"14px 18px",flex:1,minWidth:100}}>
                    <div style={{color:C2.goldLight,fontFamily:"Rajdhani,sans-serif",fontSize:22,fontWeight:700}}>{m.v}</div>
                    <div style={{color:C2.boneDim,fontSize:11,fontFamily:"Rajdhani,sans-serif",letterSpacing:0.5}}>{m.l}</div>
                  </div>
                ))}
              </div>
              <div style={{background:C2.surface,border:`1px solid ${C2.border}`,borderRadius:10,padding:16,marginBottom:18}}>
                <div style={{color:C2.muted,fontSize:10,letterSpacing:1,fontFamily:"Rajdhani,sans-serif",marginBottom:10}}>4 TRAINING PAIRS PER ENTRY</div>
                <div style={{color:C2.greenLight,fontSize:11,fontFamily:"monospace",lineHeight:2}}>
                  {"1. Q: How do you say X in Chickasaw? → A: Full answer"}<br/>
                  {"2. Q: What does X mean? → A: Translation + context"}<br/>
                  {"3. Q: Translate Y to Chickasaw → A: X, pronounced Z..."}<br/>
                  {"4. Q: How do you pronounce X? → A: Pronunciation + meaning"}
                </div>
              </div>
              <button className="btn" onClick={exportJSONL} style={{background:C2.green,color:C2.bone,border:"none",borderRadius:9,padding:"12px 28px",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"Rajdhani,sans-serif",letterSpacing:1,boxShadow:`0 0 16px ${C2.green}50`}}>
                {copied?`✓ Downloaded ${TRAINING_PAIRS} training pairs!`:"⬇ Download JSONL for Hugging Face"}
              </button>
            </div>
            <div style={{background:C2.panel,border:`1px solid ${C2.border}`,borderRadius:14,padding:20}}>
              <div style={{color:C2.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:12,letterSpacing:1.5,marginBottom:14}}>NEXT STEPS — PRODUCTION CFM</div>
              {[
                {n:"1",t:"Upload to Hugging Face",d:"huggingface.co → Datasets → Create → Upload your .jsonl file"},
                {n:"2",t:"Request Llama 3.1 8B Access",d:"meta-llama/Llama-3.1-8B → Request Access (free, same day)"},
                {n:"3",t:"Launch AutoTrain (~$20)",d:"huggingface.co/autotrain → New Project → Fine-tune → select dataset and Llama 3.1 8B"},
                {n:"4",t:"Deploy Your CFM Endpoint",d:"Your sovereign model is live. Point all apps at your endpoint instead of Anthropic."},
                {n:"5",t:"Install on Sovereign Edge Node",d:"Download model weights → install on tribal infrastructure → fully sovereign CFM."},
              ].map((s,i)=>(
                <div key={i} style={{display:"flex",gap:14,marginBottom:14,alignItems:"flex-start"}}>
                  <div style={{background:C2.forest,border:`1px solid ${C2.green}50`,borderRadius:8,width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <span style={{color:C2.goldLight,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:14}}>{s.n}</span>
                  </div>
                  <div>
                    <div style={{color:C2.bone,fontFamily:"Rajdhani,sans-serif",fontWeight:700,fontSize:13,marginBottom:3}}>{s.t}</div>
                    <div style={{color:C2.boneDim,fontSize:12,lineHeight:1.5}}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
