import { FC } from 'react';
// import './QnACard.css';

interface QnACardProps {
    title: string;
    description: string;
    imageSrc: string;
}

export const QnACard: FC<QnACardProps> = ({ title, description, imageSrc }) => {
    return (
      <div style={{width: '525px', height: '625px', padding: '22px', background: 'white', boxShadow: '0px 0px 60px rgba(21, 90, 148, 0.15)', borderRadius: '8px', flexDirection: 'column', justifyContent: 'flex-between', alignItems: 'flex-start', gap: '18px', display: 'inline-flex'}}>

            <img style={{ width: '482px', height: '265px', borderRadius: '8px' }} src={imageSrc} alt={title}/>

            <div style={{ alignSelf: 'stretch', height: '30px', color: '#A2102C', fontSize: '22px', fontFamily: 'Montserrat', fontWeight: 600, lineHeight: '33px', wordWrap: 'break-word' }}>Event: {title}<br/></div>
            <div style={{ width: '474px', color: 'black', fontSize: '11px', fontFamily: 'Montserrat', fontWeight: 600, lineHeight: '5px', wordWrap: 'break-word' }}>{description}<br/></div>
            <div style={{ width: '372px', justifyContent: 'flex-start', alignItems: 'center', gap: '119px', display: 'inline-flex' }}>
                <button style={{ height: '50px', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px', paddingBottom: '10px', background: '#A2102C', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex', color: 'white', fontSize: '13px', fontFamily: 'Montserrat', fontWeight: 600, lineHeight: '30px', wordWrap: 'break-word' }}>Lees meer</button>
            </div>
        </div>

        
    );
}