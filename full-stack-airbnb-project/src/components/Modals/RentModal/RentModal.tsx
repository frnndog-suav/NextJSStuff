"use client";

import useRentModal from "@/hooks/useRentModal/useRentModal";
import { useMemo, useState } from "react";
import Modal from "../Modal/Modal";
import Heading from "../Heading/Heading";
import { categories } from "@/components/Navbar/Categories/Categories";
import CategoryInput from "@/components/Input/CategoryInput/CategoryInput";

export enum Step {
  Category = 0,
  Location = 1,
  Info = 2,
  Images = 3,
  Description = 4,
  Price = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState<Step>(Step.Category);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === Step.Price) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === Step.Category) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((category) => (
          <div key={category.id} className="col-span-1">
            <CategoryInput 
              onClick={() => {}}
              selected={false}
              label={category.label}
              icon={category.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={rentModal.isOpen}
      title="Airbnb your home!"
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === Step.Category ? undefined : onBack}
      body={bodyContent}
    />
  );
};

export default RentModal;
