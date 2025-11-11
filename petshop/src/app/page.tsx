import { AppointmentForm } from '@/components/appointment-form';
import { Button } from '@/components/ui/button';
import { PeriodSection } from '@/components/ui/period-section';
import { prisma } from '@/lib/prisma';
import { groupAppointmentsByPeriod } from '@/utils/appointment';

export default async function Home() {
  const appointments = await prisma.appointment.findMany();
  const periods = groupAppointmentsByPeriod(appointments);

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
        <AppointmentForm>
          <Button variant="brand">Novo Agendamento</Button>
        </AppointmentForm>
      </div>
    </div>
  );
}
