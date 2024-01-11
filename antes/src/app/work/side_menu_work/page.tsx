import Link from 'next/link';
import styles from "@/app/utils.module.css";

interface LinkItem {
  label: string;
  path: string;
  targetSegment?: string;
  dropDown?: LinkItem;
}

export default function SideMenuWork() {
  const links: LinkItem[] = [
    { label: 'Werken bij Antes', path: '/work', targetSegment: 'work' },
    { label: 'Vacatures Antes', path: 'https://werkenbijparnassiagroep.nl/vacatures/antes?_ga=2.77328083.776596900.1701802004-1970662864.1694080243', targetSegment: 'vacaturesantes' },
    { label: 'Solicitatieprocedure', path: 'https://werkenbijparnassiagroep.nl/over-ons/sollicitatieprocedure', targetSegment: 'solicitatie' },
    { label: 'Arbeidsvoorwaarden', path: 'https://werkenbijparnassiagroep.nl/over-ons/jouw-arbeidsvoorwaarden', targetSegment: 'arbeidsvoorwaarden' },
    { label: 'Flexpool', path: '/work/Flexpool', targetSegment: 'Flexpool' },
    { label: 'Vrijwilligerswerk', path: '/work/VolunteerWork', targetSegment: 'VolunteerWork' },
    { label: 'Job Alert', path: 'https://werkenbijparnassiagroep.nl/vacatures/job-alert', targetSegment: 'jobalert' },
    { label: 'Werken in de wijk', path: '/work/WorkWithClients', targetSegment: 'WorkWithClients' },
    { label: 'Werken als woonbegeleider', path: '/work/WorkAsResidentialSupervisor', targetSegment: 'WorkAsResidentialSupervisor' },
    { label: 'Werken bij Ouderpsychiatri', path: '/work/WorkAtGeriatricPsychiatry', targetSegment: 'WorkAtGeriatricPsychiatry' }
  ];

  return (
    <div className='flex flex-col gap-4'>
      <div className={`${styles.sidebar}`}>
        {links.map((l, i) => {
          return (
            <div key={i}>
              <Link href={l.path}>
                <span>{l.label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}