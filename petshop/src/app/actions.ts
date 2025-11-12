'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
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
        tutorName: parsedData.tutorName,
        petName: parsedData.petName,
        phone: parsedData.phone,
        description: parsedData.description,
        scheduledAt: scheduleAt,
      },
    });

    revalidatePath('/');
  } catch (error) {
    console.log('createAppointment E R R O R 👎', error);
  }

  return {};
}

export async function updateAppointment(id: string, data: AppointmentData) {
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
        id: {
          not: id,
        },
      },
    });

    if (existingAppointment) {
      return {
        error: 'Já existe um agendamento nesse horário',
      };
    }

    await prisma.appointment.update({
      where: {
        id,
      },
      data: {
        tutorName: parsedData.tutorName,
        petName: parsedData.petName,
        phone: parsedData.phone,
        description: parsedData.description,
        scheduledAt: scheduleAt,
      },
    });

    revalidatePath('/');
  } catch (error) {
    console.log('updateAppointment E R R O R 👎', error);
  }
}
