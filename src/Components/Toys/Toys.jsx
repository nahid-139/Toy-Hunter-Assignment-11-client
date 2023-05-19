import React, { useEffect, useState }  from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';


const Toys = () => {


    const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);
    return (
        <div >
            <Tabs>
            <TabList className={'flex justify-center font-bold text-2xl gap-10'}> 
                  <Tab className={'bg-slate-500 px-20 py-2 rounded-xl'}>Marvel Toys</Tab>
                  <Tab className={'bg-slate-500 px-20 py-2 rounded-xl'}>Avengers Toys</Tab>
                  <Tab className={'bg-slate-500 px-20 py-2 rounded-xl'}>Star Wars Toys</Tab>

                </TabList>
            {
                toys.map (toy => <div
                    key={toy.id}
                    
                > 
                
            
                <TabPanel>
                  <p>
                    <b>Marvel</b> 
                    <img src="https://brincamundo.com.br/wp-content/uploads/2023/04/action-figure-iron-man-mark42-pose-suporte.webp" alt="" />
                    <h1>{toy.subcategories[0].name}</h1>
                    <div>
                        <h1>{toy.subcategories[1].name}</h1>
                    </div>
                  </p>
                  <p>
                    Source:{' '}
                    <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
                      Wikipedia
                    </a>
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                    Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                    released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                    as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                    appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                  </p>
                  <p>
                    Source:{' '}
                    <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                      Wikipedia
                    </a>
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                    is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                    Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                    attack by Bowser. She often plays the damsel in distress role within the series and
                    is the lead female. She is often portrayed as Mario's love interest and has appeared
                    in Super Princess Peach, where she is the main playable character.
                  </p>
                  <p>
                    Source:{' '}
                    <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                      Wikipedia
                    </a>
                  </p>
                </TabPanel>
              


                </div>)
            }
</Tabs>
          
        </div>
    );
};

export default Toys;