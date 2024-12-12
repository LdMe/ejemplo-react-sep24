import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

function EventCard({event}){
    const {language} = useContext(LanguageContext)
    return(
        <article className='event-card'>
          {event.images?.length > 0 && (
            <img src={event.images[0].imageUrl} />
          )}
          <h2>{event["name"+language]}</h2>
          <p>{event["price"+language]}</p>
          
          <div dangerouslySetInnerHTML={{__html: event["description"+language]}}></div>
        </article>
    )
}

export default EventCard;