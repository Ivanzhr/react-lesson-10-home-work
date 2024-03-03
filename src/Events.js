import CreateEvent from './Event';
import { useSelector } from 'react-redux';

export default function CreateEvents() {
    const state = useSelector(state => state);

    const eventTypes = ['film', 'concert', 'news', 'theatre'];

    return (
        <div className='main'>
            {eventTypes.map(eventType => (
                <div key={eventType}>
                    <h2>{eventType === 'film' ? 'Фільми' : eventType === 'concert' ? 'Концерти' : eventType === 'news' ? 'Заходи' : 'Вистави'}</h2>
                    {state.filter(event => event.type === eventType).map(event => (
                        <CreateEvent key={event.id} title={event.title} data={event.data} desc={event.description} type={event.type} detailsdescription={event.detailsdescription} />
                    ))}
                </div>
            ))}
        </div>
    );
}
