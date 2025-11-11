import { PeriodSection } from '@/components/ui/period-section';
import { Appointment as AppointmentPrisma } from '@/generated/prisma/client';
import {
  TAppointment,
  TAppointmentByPeriod,
  TPeriod,
} from '@/type/appointment';

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

function getPeriod(hour: number): TPeriod {
  if (hour >= 9 && hour < 12) {
    return 'morning';
  }

  if (hour >= 13 && hour < 19) {
    return 'afternoon';
  }

  return 'evening';
}

function groupAppointmentsByPeriod(
  appointments: AppointmentPrisma[]
): TAppointmentByPeriod[] {
  const transformedAppointment: TAppointment[] = appointments.map(
    (appointment) => {
      return {
        ...appointment,
        service: appointment.description,
        period: getPeriod(appointment.scheduledAt.getHours()),
        time: appointment.scheduledAt.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
    }
  );

  const morningAppointments = transformedAppointment.filter(
    (appointment) => appointment.period === 'morning'
  );
  const afternoonAppointments = transformedAppointment.filter(
    (appointment) => appointment.period === 'afternoon'
  );
  const eveningAppointments = transformedAppointment.filter(
    (appointment) => appointment.period === 'evening'
  );

  return [
    {
      title: 'Manhã',
      type: 'morning' as TPeriod,
      timeRange: '09:00 - 12:00',
      appointments: morningAppointments,
    },
    {
      title: 'Tarde',
      type: 'afternoon' as TPeriod,
      timeRange: '13:00 - 18:00',
      appointments: afternoonAppointments,
    },
    {
      title: 'Noite',
      type: 'evening' as TPeriod,
      timeRange: '19:00 - 21:00',
      appointments: eveningAppointments,
    },
  ];
}

export default function Home() {
  const periods = groupAppointmentsByPeriod(SAMPLE_APPOINTMENTS);

  return (
    <div className="bg-background-primary p-6">
      <div className="flex items-center justify-between md:m-8">
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
    </div>
  );
}
