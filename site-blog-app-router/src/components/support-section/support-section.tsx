import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export function SupportSection() {
  return (
    <section className="pb-8 md:py-10 bg-gray-700">
      <div className="container flex flex-col items-center gap-12">
        <h2 className={`text-balance text-heading-xl text-gray-100 font-sans`}>
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Primeiro card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <PaintbrushVertical className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Personalize seu site
            </strong>
            <p className="text-body-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Segundo card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
              <Store className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Vestibulum dapibus justo eget nibh viverra scelerisque.
            </p>
          </div>

          {/* Terceiro card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <HeartHandshake className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Receba suporte amigável
            </strong>
            <p className="text-body-sm text-gray-200">
              Cras fermentum diam quis elit aliquet, nec pretium ex venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
