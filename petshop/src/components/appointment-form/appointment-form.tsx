'use client';

import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from '../ui/dialog';

export function AppointmentForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand">Novo agendamento</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agende um atendimento</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          Digite os dados do cliente para realizar o agendamento.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
