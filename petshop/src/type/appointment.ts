export type TPeriod = 'morning' | 'afternoon' | 'evening';

export type TAppointment = {
  id: string;
  tutorName: string;
  petName: string;
  phone: string;
  description: string;
  scheduledAt: Date;
  time: string;
  service: string;
  period: TPeriod;
};

export type TAppointmentByPeriod = {
  title: string;
  type: TPeriod;
  timeRange: string;
  appointments: TAppointment[];
};
