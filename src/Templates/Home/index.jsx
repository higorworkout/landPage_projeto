import * as Styled from './styles';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { mapData } from '../../API/map_data';
import { mockBase } from '../Base/stories';

import { GridTwoColumns } from '../../Components/GridTwoColumn';
import { GridContent } from '../../Components/GridContent';
import { GridText } from '../../Components/GridText';
import { GridImage } from '../../Components/GridImage';

import { Base } from '../Base/Index';
import { PageNotFound } from '../PageNotFound';
import { Carregando } from '../../Components/Carregando/Index';


import config from '../../Config';




const Home = () => {
 const [data, setData] = useState([]);
 const isMounted = useRef(true);

 const location = useLocation();


 useEffect(() => {
   const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
   console.log(pathname)
      const slug = pathname ? pathname : config.defaultSlug;

      const load = async () => {
        try {

          const data = await fetch( config.url);
          const json = await data.json();
          const { attributes } = json.data
          const pageData = mapData([attributes]);
          setData(() => pageData[0]);

        }catch (e) {
          console.log(e)
          setData(undefined);
        }

    };

      if(isMounted.current === true) {
          load();
      }

      return () => {
        isMounted.current = false;
      };

  }, [location]);

  useEffect(() => {

      if(data === undefined) {
         document.title = `Página não encontrada | ${config.siteName}` + ''
      }

      if (data && !data.slug) {
        document.title = `Carregando... | ${config.siteName}`
      }

      if (data && data.title) {
        document.title = `${data.title} | ${config.siteName}` ;
      }

  }, [data])

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Carregando />;
  }


  const {menu, sections, footerHtml, slug} = data;
  const { links, text, link, srcImg} = menu;


  return <Base
  links={links}
  footerHtml={footerHtml}
  logoData={{ text, link, srcImg}}
  >
    {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`

        if(component === 'section.section-two-columns') {
           return <GridTwoColumns {...section}/>
        }
        if(component === 'section.section-content') {
           return <GridContent {...section}/>
        }

        if(component === 'section.section-grid-text') {
           return <GridText key={key} {...section}/>
        }

        if(component === 'section.section-grid-image') {
           return <GridImage key={key} {...section}/>
        }
    } )}
  </Base>;
}

export default Home
