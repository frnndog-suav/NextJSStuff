'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '../ui/dialog';
import { Form } from '../ui/form';

const appointmentFormSchema = z.object({
  tutorName: z.string().min(3, 'O nome do tutor é obrigatório'),
  petName: z.string().min(3, 'O nome do pet é obrigatório'),
  phone: z.string().min(11, 'O telefone é obrigatório'),
  description: z.string().optional(),
});

type TAppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export function AppointmentForm() {
  const form = useForm<TAppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      phone: '',
      petName: '',
      tutorName: '',
      description: '',
    },
  });

  function onSubmit(data: TAppointmentFormValues) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand">Novo agendamento</Button>
      </DialogTrigger>

      <DialogContent
        variant="appointment"
        overlayVariant="blurred"
        showCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle>Agende um atendimento</DialogTitle>

          <DialogDescription>
            Digite os dados do cliente para realizar o agendamento.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}></form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
