'use server';

import { prisma } from '@/lib/prisma';
import z from 'zod';

const appointmentSchema = z.object({
  tutorName: z.string(),
  petName: z.string(),
  phone: z.string(),
  description: z.string(),
  scheduleAt: z.date(),
});

type AppointmentData = z.infer<typeof appointmentSchema>;

export async function createAppointment(data: AppointmentData) {
  try {
    const parsedData = appointmentSchema.parse(data);

    const { scheduleAt } = parsedData;

    const hour = scheduleAt.getHours();

    const isMorning = hour >= 9 && hour < 12;
    const isAfternoon = hour >= 13 && hour < 18;
    const isEvening = hour >= 19 && hour < 21;

    if (!isMorning && !isAfternoon && !isEvening) {
      return {
        error:
          'Agendamentos só podem ser feitos entre 9h-12h, 13h-18h e 19h-21h',
      };
    }

    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        scheduledAt: scheduleAt,
      },
    });

    if (existingAppointment) {
      return {
        error: 'Já existe um agendamento nesse horário',
      };
    }

    await prisma.appointment.create({
      data: {
        ...parsedData,
        scheduledAt: scheduleAt,
      },
    });
  } catch (error) {
    console.log('E R R O R 👎', error);
  }

  return {};
}
