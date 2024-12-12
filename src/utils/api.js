async function getEvents(page=1) {
    try {
      const url = "https://api.euskadi.eus/culture/events/v1.0/events?_elements=20&_page="+page
      const response = await fetch(url);
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error(error);
      return null;
    }
  }

export {
    getEvents
}