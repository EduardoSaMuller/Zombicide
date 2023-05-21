import React, { useState } from 'react';
import './App.css'
import Ann from "./imagens/BP_Ann_ID.jpg"
import Baldric from "./imagens/BP_Baldric_ID.jpg"
import Clovis from "./imagens/BP_Clovis_ID.jpg"
import Nelly from "./imagens/BP_Nelly_ID.jpg"
import Sansom from "./imagens/BP_Sansom_ID.jpg"
import Silas from "./imagens/BP_Silas_ID.jpg"
import Doran from "./imagens/FF_Doran_ID.jpg"
import Kabral from "./imagens/FF_Kabral_ID.jpg"
import Katelyn from "./imagens/FF_Katelyn_ID.jpg"
import Solveig from "./imagens/FF_Solveig_ID.jpg"
import Asim from "./imagens/GH_Asim_ID.jpg"
import Berin from "./imagens/GH_Berin_ID.jpg"
import Johannes from "./imagens/GH_Johannes_ID.jpg"
import Megan from "./imagens/GH_Megan_ID.jpg"
import Rolf from "./imagens/GH_Rolf_ID.jpg"
import Seli from "./imagens/GH_Seli_ID.jpg"
import Bruce from "./imagens/GN_Bruce_ID.jpg"
import AntonGuffen from "./imagens/HB_Anton_ID.jpg"
import Asmodeus from "./imagens/HB_Asmodeus_ID.jpg"
import PrincessAyla from "./imagens/HB_Ayla_ID.jpg"
import Badger from "./imagens/HB_Badger_ID.jpg"
import Billy from "./imagens/HB_Billy_ID.jpg"
import Brannog from "./imagens/HB_Brannog_ID.jpg"
import BrixMoonshine from "./imagens/HB_Brix_ID.jpg"
import Cassius from "./imagens/HB_Cassius_ID.jpg"
import TheDeathmaster from "./imagens/HB_Deathmaster_ID.jpg"
import EarlJaimie from "./imagens/HB_EarlJaimie_ID.jpg"
import Finarton from "./imagens/HB_Finarton_ID.jpg"
import Fylguria from "./imagens/HB_Fylguria_ID.jpg"
import Gannicus from "./imagens/HB_Gannicus_ID.jpg"
import GraysonGruber from "./imagens/HB_Grayson_ID.jpg"
import Hyg from "./imagens/HB_Hyg_ID.jpg"
import Hyld from "./imagens/HB_Hyld_ID.jpg"
import Jeanne from "./imagens/HB_Jeanne_ID.jpg"
import Kelsey from "./imagens/HB_Kelsey_ID.jpg"
import Lividia from "./imagens/HB_Lividia_ID.jpg"
import Lorentz from "./imagens/HB_Lorentz_ID.jpg"
import TheMarquis from "./imagens/HB_Marquis_ID.jpg"
import CountessOrdelia from "./imagens/HB_Ordelia_ID.jpg"
import Rocco from "./imagens/HB_Rocco_ID.jpg"
import RyanJohn from "./imagens/HB_Ryan_ID.jpg"
import SirSchwarz from "./imagens/HB_Schwarz_ID.jpg"
import Sigrun from "./imagens/HB_Sigrun_ID.jpg"
import SpearHead from "./imagens/HB_Spearhead_ID.jpg"
import Thomas from "./imagens/HB_Thomas_ID.jpg"
import Ygraine from "./imagens/HB_Ygraine_ID.jpg"
import Zanzibar from "./imagens/HB_Zanzibar_ID.jpg"
import Arnauld from "./imagens/HB1_Arnaud_ID.jpg"
import Julian from "./imagens/HB1_Julian_ID.jpg"
import Glynda from "./imagens/HB1_Glynda_ID.jpg"
import Sylvia from "./imagens/HB1_Sylvia_ID.jpg"
import Tucker from "./imagens/HB1_Tucker_ID.jpg"
import Bob from "./imagens/HP_Bob_ID.jpg"
import Danton from "./imagens/HP_Danton_ID.jpg"
import EvilTroy from "./imagens/HP_EvilTroy_ID.jpg"
import Falstaff from "./imagens/HP_Falstaff_ID.jpg"
import Gilbert from "./imagens/HP_Gilbert_ID.jpg"
import Hitch from "./imagens/HP_Hitch_ID.jpg"
import James from "./imagens/HP_James_ID.jpg"
import LadyFaye from "./imagens/HP_LadyFaye_ID.jpg"
import Lucas from "./imagens/HP_Lucas_ID.jpg"
import Montalban from "./imagens/HP_Montalban_ID.jpg"
import Morgan from "./imagens/HP_Morgan_ID.jpg"
import Mortimer from "./imagens/HP_Mortimer_ID.jpg"
import Paul from "./imagens/HP_Paul_ID.jpg"
import Piper from "./imagens/HP_Piper_ID.jpg"
import Troy from "./imagens/HP_Troy_ID.jpg"
import William from "./imagens/HP_William_ID.jpg"
import Xuxa from "./imagens/HP_Xuxa_ID.jpg"
import Beauregard from "./imagens/KP_Beauregard_ID.jpg"
import Chauncey from "./imagens/KP_Chauncey_ID.jpg"
import DrStormcrow from "./imagens/KP_DrStormcrow_ID.jpg"
import Gowan from "./imagens/KP_Gowan_ID.jpg"
import Gregoire from "./imagens/KP_Gregoire_ID.jpg"
import Scowl from "./imagens/KP_Scowl_ID.jpg"
import Ajax from "./imagens/MD_Ajax_ID.jpg"
import Azrael from "./imagens/MD_Azrael_ID.jpg"
import Bjorn from "./imagens/MD_Bjorn_ID.jpg"
import Elias from "./imagens/MD_Elias_ID.jpg"
import Mila from "./imagens/MD_Mila_ID.jpg"
import Owen from "./imagens/MD_Owen_ID.jpg"
import Sarah from "./imagens/MD_Sarah_ID.jpg"
import Sibyl from "./imagens/MD_Sibyl_ID.jpg"
import Siegfried from "./imagens/MD_Siegfried_ID.jpg"
import Silence from "./imagens/MD_Silence_ID.jpg"
import Whisper from "./imagens/MD_Whisper_ID.jpg"
import Zoe from "./imagens/MD_Zoe_ID.jpg"
import Culnar from "./imagens/SGAS_CulNar_ID.jpg"
import Gurbak from "./imagens/SGAS_Gurbak_ID.jpg"
import Jorvak from "./imagens/SGAS_Jorvak_ID.jpg"
import ShaKeel from "./imagens/SGAS_ShaKeel_ID.jpg"
import BlackCurrant from "./imagens/SGCC_BlackCurrant_ID.jpg"
import Persephone from "./imagens/SGCC_Persephone_ID.jpg"
import Thrud from "./imagens/SGCC_Thrud_ID.jpg"
import CeliaLaSanta from "./imagens/SGGP_CeliaLaSanta_ID.jpg"
import DonnaCarlotta from "./imagens/SGGP_DonnaCarlotta_ID.jpg"
import Pipino from "./imagens/SGGP_Pipino_ID.jpg"
import TheLittlePrince from "./imagens/SGGP_TheLittlePrince_ID.jpg"
import Johrgrund from "./imagens/SGJN_Johrgrund_ID.jpg"
import Korin from "./imagens/SGJN_Korin_ID.jpg"
import RuffGhanor from "./imagens/SGJN_RuffGhanor.jpg"
import ThePrior from "./imagens/SGJN_ThePrior_ID.jpg"
import DameAhelissa from "./imagens/SGKK_Ahelissa_ID.jpg"
import Garuk from "./imagens/SGKK_Garuk_ID.jpg"
import Marcus from "./imagens/SGKK_Marcus_ID.jpg"
import Ulfo from "./imagens/SGKK_Ulfo_ID.jpg"
import Antha from "./imagens/SGMS_Antha_ID.jpg"
import Cadence from "./imagens/SGMS_Cadence_ID.jpg"
import LadyGrimm from "./imagens/SGMS_LadyGrimm_ID.jpg"
import RedcapRodney from "./imagens/SGMS_RedcapRodney_ID.jpg"
import Merieil from "./imagens/SGNA_Merieil_ID.jpg"
import Ostokar from "./imagens/SGNA_Ostokar_ID.jpg"
import Thundergut from "./imagens/SGNA_Thundergut_ID.jpg"
import Alainon from "./imagens/SGNEA_Alainon_ID.jpg"
import Golor from "./imagens/SGNEA_Golor_ID.jpg"
import Gronstag from "./imagens/SGNEA_Gronstag_ID.jpg"
import Yrina from "./imagens/SGNEA_Yrina_ID.jpg"
import Genevieve from "./imagens/SGPB1_Genevieve_ID.jpg"
import Klom from "./imagens/SGPB1_Klom_ID.jpg"
import LordBazak from "./imagens/SGPB1_LordBazak_ID.jpg"
import Mizar from "./imagens/SGPB1_Mizar_ID.jpg"
import Carol from "./imagens/SGPB2_Carol_ID.jpg"
import Kirag from "./imagens/SGPB2_Kirag_ID.jpg"
import Thorg from "./imagens/SGPB2_Thorg_ID.jpg"
import Tola from "./imagens/SGPB2_Tola_ID.jpg"
import Arnwal from "./imagens/SGPP_Arnwal_ID.jpg"
import Konrad from "./imagens/SGPP_Konrad_ID.jpg"
import Sköll from "./imagens/SGPP_Skoll_ID.jpg"
import Undraal from "./imagens/SGPP_Undraal_ID.jpg"
import Birmbauer from "./imagens/SGSM_Birmbauer-ID.jpg"
import Kendra from "./imagens/SGSM_Kendra-ID.jpg"
import Spellbones from "./imagens/SGSM_Spellbones-ID.jpg"
import AnnEpic from "./imagens/Ultimate_Ann_ID.jpg"
import BaldricEpic from "./imagens/Ultimate_Baldric_ID.jpg"
import ClovisEpic from "./imagens/Ultimate_Clovis_ID.jpg"
import NellyEpic from "./imagens/Ultimate_Nelly_ID.jpg"
import SamsonEpic from "./imagens/Ultimate_Samson_ID.jpg"
import SilasEpic from "./imagens/Ultimate_Silas_ID.jpg"
import Ariane from "./imagens/WB_Ariane_ID.jpg"
import Karl from "./imagens/WB_Karl_ID.jpg"
import Morrigan from "./imagens/WB_Morrigan_ID.jpg"
import Theo from "./imagens/WB_Theo_ID.jpg"
import Panthro from './imagens/Panthro.jpeg'
import Tygra from './imagens/Tygra.jpeg'
import Willikit from './imagens/WilyKit.jpeg'
import Willicat from './imagens/WilyKit.jpeg'
import Lion from './imagens/Lion-O.jpeg' 
import Chetara from './imagens/Chetara.jpeg' 
import Escamoso from './imagens/Escamoso.jpeg' 
import Snarf from './imagens/Snarf.jpeg' 
import Chacal from './imagens/Chacal.jpeg'
import Ysabel from './imagens/SGSK_Ysabel_ID.jpg'
import Gaak from './imagens/SGSK_Gaak_ID.jpg'
import Blackheart from './imagens/SGSK_Blackheart_ID.jpg'
import Milo from './imagens/SGNA_Milo_ID.jpg' 
import Sicarius from './imagens/MD_Sicarius.jpg' 
import Myriam from './imagens/MD_Myriam.jpg' 
import Azure from './imagens/SGSK_Azure_ID.jpg' 
import LilNed from './imagens/MD_LilNed.jpg' 
import Zee from './imagens/HB_Zee_ID.jpg' 
import Liam from './imagens/HB_Liam_ID.jpg' 
import North from './imagens/HB_Liam_ID.jpg' 


function App() {
  const [people, setPeople] = useState([
    { id: 1, name: 'Ann' , img:Ann},
    { id: 2, name: 'Baldric' , img:Baldric},
    { id: 3, name: 'Clovis' , img:Clovis},
    { id: 4, name: 'Nelly' , img:Nelly},
    { id: 5, name: 'Samsom', img: Sansom },
    { id: 6, name: 'Silas' , img:Silas},
    { id: 7, name: 'Doran' , img:Doran},
    { id: 8, name: 'Kabral', img:Kabral },
    { id: 9, name: 'Katelyn' , img:Katelyn},
    { id: 10, name: 'Solveig', img:Solveig},
    { id: 11, name: 'Asim' , img:Asim},
    { id: 12, name: 'Berin', img:Berin},
    { id: 13, name: 'Johannes', img:Johannes},
    { id: 14, name: 'Megan', img:Megan},
    { id: 15, name: 'Rolf', img:Rolf},
    { id: 16, name: 'Seli', img:Seli },
    { id: 17, name: 'Bruce', img:Bruce },
    { id: 18, name: 'Anton Guffen', img:AntonGuffen },
    { id: 19, name: 'Asmodeus' , img:Asmodeus},
    { id: 20, name: 'Princess Ayla' , img:PrincessAyla},
    { id: 21, name: 'Badger' , img:Badger},
    { id: 22, name: 'Billy', img:Billy },
    { id: 23, name: 'Brannog', img:Brannog },
    { id: 24, name: 'Brix Moonshine', img:BrixMoonshine},
    { id: 25, name: 'Cassius' , img:Cassius},
    { id: 26, name: 'The Deathmaster' , img:TheDeathmaster},
    { id: 27, name: 'Earl Jaimie' , img:EarlJaimie},
    { id: 28, name: 'Finarton', img:Finarton },
    { id: 29, name: 'Fylguria', img:Fylguria },
    { id: 30, name: 'Gannicus', img:Gannicus },
    { id: 31, name: 'Grayson Gruber', img:GraysonGruber },
    { id: 32, name: 'Hyg', img:Hyg },
    { id: 33, name: 'Hyld', img:Hyld },
    { id: 34, name: 'Jeanne', img:Jeanne},
    { id: 35, name: 'Kelsey', img:Kelsey},
    { id: 36, name: 'Lividia', img:Lividia },
    { id: 37, name: 'Lorentz' , img:Lorentz},
    { id: 38, name: 'The Marquis', img:TheMarquis},
    { id: 39, name: 'Countess Ordelia', img:CountessOrdelia},
    { id: 40, name: 'Rocco', img:Rocco },
    { id: 41, name: 'Ryan John', img:RyanJohn},
    { id: 42, name: 'Sir Schwarz', img:SirSchwarz },
    { id: 43, name: 'Sigrun', img:Sigrun },
    { id: 44, name: 'SpearHead', img:SpearHead},
    { id: 45, name: 'Thomas', img:Thomas},
    { id: 46, name: 'Ygraine', img:Ygraine},
    { id: 47, name: 'Zanzibar', img:Zanzibar},
    { id: 48, name: 'Arnauld', img:Arnauld},
    { id: 49, name: 'Julian', img:Julian},
    { id: 50, name: 'Glynda', img:Glynda},
    { id: 51, name: 'Sylvia', img:Sylvia },
    { id: 52, name: 'Tucker', img:Tucker },
    { id: 53, name: 'Bob', img:Bob},
    { id: 54, name: 'Danton', img:Danton},
    { id: 55, name: 'Evil Troy' , img:EvilTroy},
    { id: 56, name: 'Falstaff' , img:Falstaff},
    { id: 57, name: 'Gilbert' , img:Gilbert},
    { id: 58, name: 'Hitch' , img:Hitch},
    { id: 59, name: 'James' , img:James},
    { id: 60, name: 'Lady Faye', img:LadyFaye },
    { id: 61, name: 'Lucas' , img:Lucas},
    { id: 62, name: 'Montalban', img:Montalban },
    { id: 63, name: 'Morgan', img:Morgan},
    { id: 64, name: 'Mortimer', img:Mortimer },
    { id: 65, name: 'Paul', img:Paul },
    { id: 66, name: 'Piper', img:Piper },
    { id: 67, name: 'Troy', img:Troy },
    { id: 68, name: 'William', img:William},
    { id: 69, name: 'Xuxa' , img:Xuxa},
    { id: 70, name: 'Beauregard', img:Beauregard },
    { id: 71, name: 'Chauncey', img:Chauncey},
    { id: 72, name: 'Dr.Stormcrow', img:DrStormcrow },
    { id: 73, name: 'Gowan', img:Gowan},
    { id: 74, name: 'Gregoire', img:Gregoire},
    { id: 75, name: 'Scowl' , img:Scowl},
    { id: 76, name: 'Ajax' , img:Ajax},
    { id: 77, name: 'Azrael' , img:Azrael},
    { id: 78, name: 'Bjorn' , img:Bjorn},
    { id: 79, name: 'Elias' , img:Elias},
    { id: 80, name: 'Mila' , img:Mila},
    { id: 81, name: 'Owen' , img:Owen},
    { id: 82, name: 'Sarah' , img:Sarah},
    { id: 83, name: 'Sibyl' , img:Sibyl},
    { id: 84, name: 'Siegfried' , img:Siegfried},
    { id: 85, name: 'Silence' , img:Silence},
    { id: 86, name: 'Whisper' , img:Whisper},
    { id: 87, name: 'Zoe' , img:Zoe},
    { id: 88, name: 'Cul"nar' , img:Culnar},
    { id: 89, name: 'Gurbak' , img:Gurbak},
    { id: 90, name: 'Jorvak' , img:Jorvak},
    { id: 91, name: 'Sha"Keel' , img:ShaKeel},
    { id: 92, name: 'Black Currant' , img:BlackCurrant},
    { id: 93, name: 'Persephone' , img:Persephone},
    { id: 142, name: "Thrud", img:Thrud},
    { id: 94, name: 'Celia La Santa' , img:CeliaLaSanta},
    { id: 95, name: 'Donna Carlotta' , img:DonnaCarlotta},
    { id: 96, name: 'Pipino' , img:Pipino},
    { id: 141, name: "The Little Prince", img:TheLittlePrince},
    { id: 97, name: 'Johrgrund' , img:Johrgrund},
    { id: 98, name: 'Korin' , img:Korin},
    { id: 99, name: 'Ruff Ghanor' , img:RuffGhanor},
    { id: 100, name: 'The Prior' , img:ThePrior},
    { id: 101, name: 'Dame Ahelissa' , img:DameAhelissa},
    { id: 102, name: 'Garuk' , img:Garuk},
    { id: 103, name: 'Marcus' , img:Marcus},
    { id: 104, name: 'Ulfo' , img:Ulfo},
    { id: 105, name: 'Antha' , img:Antha},
    { id: 106, name: 'Cadence' , img:Cadence},
    { id: 107, name: 'Lady Grimm' , img:LadyGrimm},
    { id: 108, name: 'Redcap Rodney' , img:RedcapRodney},
    { id: 109, name: 'Merieil' , img:Merieil},
    { id: 110, name: 'Ostokar' , img:Ostokar},
    { id: 111, name: 'Thundergut' , img:Thundergut},
    { id: 112, name: 'Alainon' , img:Alainon},
    { id: 113, name: 'Golor' , img:Golor},
    { id: 114, name: 'Gronstag' , img:Gronstag},
    { id: 115, name: 'Yrina' , img:Yrina},
    { id: 116, name: 'Genevieve' , img:Genevieve},
    { id: 117, name: 'Klom' , img:Klom},
    { id: 118, name: 'Lord Bazak' , img:LordBazak},
    { id: 119, name: 'Mizar' , img:Mizar},
    { id: 120, name: 'Carol Black-Oak' , img:Carol},
    { id: 121, name: 'Kirag' , img:Kirag},
    { id: 122, name: 'Thorg' , img:Thorg},
    { id: 123, name: 'Tola' , img:Tola},
    { id: 124, name: 'Arnwal' , img:Arnwal},
    { id: 125, name: 'Konrad' , img:Konrad},
    { id: 126, name: 'Sköll' , img:Sköll},
    { id: 127, name: 'Undraal' , img:Undraal},
    { id: 128, name: 'Birmbauer' , img:Birmbauer},
    { id: 129, name: 'Kendra' , img:Kendra},
    { id: 130, name: 'Spellbones' , img:Spellbones},
    { id: 131, name: 'Ann epic' , img:AnnEpic},
    { id: 132, name: 'Baldric epic' , img:BaldricEpic},
    { id: 133, name: 'Clovis epic' , img:ClovisEpic},
    { id: 134, name: 'Nelly epic' , img:NellyEpic},
    { id: 135, name: 'Samson epic' , img:SamsonEpic},
    { id: 136, name: 'Silas epic' , img:SilasEpic},
    { id: 137, name: 'Ariane' , img:Ariane},
    { id: 138, name: 'Karl' , img:Karl},
    { id: 139, name: 'Morrigan' , img:Morrigan},
    { id: 140, name: 'Theo' , img:Theo},
    { id: 141, name: 'Panthro' , img:Panthro},
    { id: 142, name: 'Tygra' , img:Tygra},
    { id: 143, name: 'Willikit' , img:Willikit},
    { id: 144, name: 'Willicat' , img:Willicat},
    { id: 145, name: 'Lion' , img:Lion},
    { id: 146, name: 'Chetara' , img:Chetara},
    { id: 147, name: 'Escamoso' , img:Escamoso},
    { id: 148, name: 'Snarf' , img:Snarf},
    { id: 149, name: 'Chacal' , img:Chacal},
    { id: 150, name: 'Ysabel' , img:Ysabel},
    { id: 151, name: 'Gaak' , img:Gaak},
    { id: 152, name: 'The Blackheart' , img:Blackheart},
    { id: 153, name: 'Milo' , img:Milo},
    { id: 154, name: 'Azure' , img:Azure},
    { id: 155, name: 'Myriam' , img:Myriam},
    { id: 154, name: 'Sicarius' , img:Sicarius},
    { id: 155, name: 'LilNed' , img:LilNed},
    { id: 156, name: 'Zee' , img:Zee},
    { id: 157, name: 'NorthTheHalfling' , img:North},
    {id: 158, name: 'Liam' , img:Liam}

  ]);
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState([]);
  const [pickedPeople, setPickedPeople] = useState([]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleRandomPick = () => {
    const availablePeople = [...people];
    const pickedPeople = [];

    for (let i = 0; i < quantity; i++) {
      let randomIndex = Math.floor(Math.random() * availablePeople.length);
      let pickedPerson = availablePeople[randomIndex];

      // Remove the picked person from the availablePeople array
      availablePeople.splice(randomIndex, 1);

      // Check if the picked person is ID 4 or ID 5
      if (pickedPerson.id === 121) {
        pickedPeople.push(pickedPerson);
        const person5 = availablePeople.find((person) => person.id === 122);
        if (person5) {
          pickedPeople.push(person5);
          availablePeople.splice(
            availablePeople.findIndex((person) => person.id === 122),
            1
          );
        }
      } else if (pickedPerson.id === 122) {
        pickedPeople.push(pickedPerson);
        const person4 = availablePeople.find((person) => person.id === 121);
        if (person4) {
          pickedPeople.push(person4);
          availablePeople.splice(
            availablePeople.findIndex((person) => person.id === 121),
            1
          );
        }
      } else {
        pickedPeople.push(pickedPerson);
      }
    }
    console.log(setPeople)
    console.log(result)
    setResult(pickedPeople);
    setPickedPeople((prevPickedPeople) => [...prevPickedPeople, ...pickedPeople]);
  };

  

  return (
    <div>
      <label>
        Quantidade de personagens:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <button onClick={handleRandomPick}>Sortear</button>
      
      <div>
        Sorteados:
        <ul>
          {pickedPeople.map((person) => (
            <li key={person.id}>
              <img src={person.img} alt={person.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;