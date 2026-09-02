"use client";
import { useState } from "react";

const faqs = [
  {
    question: "O CashNoPix é gratuito para usar?",
    answer:
      "O acesso ao aplicativo não tem custo inicial. O aplicativo tem uma etapa de validação de cadastro antes de liberar o saque — essa etapa pode envolver uma confirmação de identidade, cujo processo e valores são apresentados dentro do próprio aplicativo antes de qualquer confirmação do usuário.",
  },
  {
    question: "O CashNoPix pede algum pagamento?",
    answer:
      "Sim. O aplicativo tem uma etapa de validação de cadastro antes da liberação do saque que pode incluir uma taxa. Essa etapa, o valor e a justificativa são apresentados de forma clara dentro do aplicativo antes de qualquer ação do usuário.",
  },
  {
    question: "Quanto posso ganhar com o CashNoPix?",
    answer:
      "O saldo acumulado depende das avaliações concluídas. O valor por avaliação é exibido dentro do aplicativo durante o processo. Não existe garantia de ganho fixo — o saldo final depende das etapas concluídas pelo usuário.",
  },
  {
    question: "Como funciona o saque no CashNoPix?",
    answer:
      "O saque é feito via PIX para a chave cadastrada pelo usuário (CPF ou telefone). É necessário concluir os dois ciclos de avaliação, cadastrar e verificar a chave PIX e concluir a etapa de validação de cadastro apresentada pelo aplicativo.",
  },
  {
    question: 'O que é "cash no pix"?',
    answer:
      '"Cash no pix" (com espaços) é a forma como muita gente busca e menciona o CashNoPix — o aplicativo de cashback via PIX disponível em cashnopix.net. Os dois termos se referem ao mesmo produto.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  const toggle = (i) => setOpen((cur) => (cur === i ? -1 : i));

  return (
    <section className="w-full py-12 md:py-16 px-4">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight text-center mb-8">Perguntas Frequentes</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-card rounded-xl border-2 transition-colors duration-200 overflow-hidden ${
                  isOpen ? "border-primary/40" : "border-transparent shadow-[var(--shadow-sm)]"
                }`}
              >
                <button onClick={() => toggle(i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                  <span className="font-medium text-card-foreground text-sm md:text-base">{f.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-primary flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <button
            onClick={() => document.getElementById("hero-cta")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            COMEÇAR AGORA
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
