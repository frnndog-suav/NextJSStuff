import { Appointment as AppointmentPrisma } from '@/generated/prisma/client';
import {
  TAppointment,
  TAppointmentByPeriod,
  TPeriod,
} from '@/type/appointment';

export function getPeriod(hour: number): TPeriod {
  if (hour >= 9 && hour < 12) {
    return 'morning';
  }

  if (hour >= 13 && hour < 19) {
    return 'afternoon';
  }

  return 'evening';
}

export function groupAppointmentsByPeriod(
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
