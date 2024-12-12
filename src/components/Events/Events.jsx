import { useState, useEffect, useRef,useContext } from 'react';
import { Link, useParams,useNavigate, useLoaderData } from 'react-router-dom';
import { LanguageContext } from '../../context/languageContext';
import EventCard from '../EventCard/EventCard';
import texts from '../../utils/language';



function Events() {
  const {page } = useParams();  
  const lastElementRef = useRef(null);
  const {language,toggleLanguage} = useContext(LanguageContext);
  //const navigate = useNavigate();
  const events = useLoaderData();

 /*  useEffect(()=>{
    lastElementRef.current.scrollIntoView({behavior: "smooth"});
  },[events]) */

 /*  function handleNextPage(){
    navigate("/eventos/"+(parseInt(page)+1))
  } */

  return (
    <>
    <button onClick={toggleLanguage}>{language=== "Es" ? "Euskara": "Castellano"}</button>
      <h1>{texts["title"][language]}</h1>
      {events.length === 0 && (
        <h2>{texts["loading"][language]}...</h2>
      )}
     {/*  {events.length > 0 && (
        <button onClick={handleNextPage}>{texts["next"][language]}</button>
      )} */}
      {events.length > 0 && (
        <Link to={"/eventos/"+(parseInt(page)+1)}>
          <button >{texts["next"][language]}</button>
        </Link>
      )}
      {events.map(event => (
        <EventCard event={event} key={event.id}/>
      ))}
      <div ref={lastElementRef}/>
    </>
  )
}

export default Events
