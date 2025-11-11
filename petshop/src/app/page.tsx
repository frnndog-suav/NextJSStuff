import { AppointmentForm } from '@/components/appointment-form';
import { PeriodSection } from '@/components/ui/period-section';
import { groupAppointmentsByPeriod } from '@/utils/appointment';

const SAMPLE_APPOINTMENTS = [
  {
    id: '1',
    petName: 'Rex',
    phone: '1234567890',
    tutorName: 'João Silva',
    description: 'Consulta de rotina',
    scheduledAt: new Date('2025-08-17T10:00:00'),
  },
  {
    id: '2',
    petName: 'Tobias',
    phone: '1234567890',
    tutorName: 'Maria Silva',
    scheduledAt: new Date('2025-08-20T15:00:00'),
    description: 'Cirurgia',
  },
  {
    id: '3',
    petName: 'Tebas',
    phone: '1234567890',
    tutorName: 'Carlos Silva',
    scheduledAt: new Date('2025-08-28T19:00:00'),
    description: 'Vacinação',
  },
];

export default async function Home() {
  const periods = groupAppointmentsByPeriod(SAMPLE_APPOINTMENTS);

  return (
    <div className="bg-background-primary p-6">
      <div className="flex items-center justify-between md:mb-8">
        <div>
          <h1 className="text-title-size text-content-primary mb-2">
            Sua Agenda
          </h1>
          <p className="text-paragraph-medium-size text-content-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="pb-24 md:pb-0">
          {periods.map((period, key) => (
            <PeriodSection key={key} period={period} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-[#23242c] py-[18px] px-6 md:bottom-6 md:right-6 md:left-auto md:top-auto md:w-auto md:bg-transparent md:p-0">
        <AppointmentForm />
      </div>
    </div>
  );
}
