import { FC } from 'react';

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    imageSrc: string;
}

export const EventCard: FC<EventCardProps> = ({ title, date, location, imageSrc }) => {
    return (
        <div style={{  width: '525px', height: '625px', padding: '22px', background: 'white', boxShadow: '0px 0px 60px rgba(21, 90, 148, 0.15)', borderRadius: '8px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '18px', display: 'inline-flex'}}>
            <div style={{ height: '364px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'flex' }}>
                <img style={{ width: '482px', height: '365px', borderRadius: '8px' }} src={imageSrc} alt={title} />
            </div>
            <div style={{ alignSelf: 'stretch', height: '30px', color: '#A2102C', fontSize: '22px', fontFamily: 'Montserrat', fontWeight: 600, lineHeight: '33px', wordWrap: 'break-word' }}>Event: {title}<br/></div>
            <div style={{ width: '474px', color: 'black', fontSize: '11px', fontFamily: 'Montserrat', fontWeight: 600, lineHeight: '5px', wordWrap: 'break-word' }}>{location} op {date}<br/></div>
            <div style={{ width: '372px', justifyContent: 'flex-start', alignItems: 'center', gap: '119px', display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '11px', display: 'flex' }}>
                    <div style={{ width: '24px', height: '24px', position: 'relative' }}>
                        <div style={{ width: '24px', height: '24px', left: '0px', top: '0px', position: 'absolute' }}></div>
                        <img style={{ width: '20px', height: '21px', left: '5px', top: '2px', position: 'absolute' }} src="calendar.png" alt="calendar" />      
                    </div>
                    <div style={{ textAlign: 'center', color: '#747474', fontSize: '12px', fontFamily: 'Montserrat', fontWeight: 400, lineHeight: '200px', letterSpacing: '1.44px', wordWrap: 'break-word' }}>{date}</div>
                </div>
                <button style={{ height: '50px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px', background: '#A2102C', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex', color: 'white', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, lineHeight: '30px', wordWrap: 'break-word' }}>Lees meer</button>
            </div>
        </div>

        
        
    );
};