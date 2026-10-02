import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ImageDentista from "../../../../../public/images/foto-dentista.png";
import { Button } from "@/components/ui/button";
import Link from "@/components/Link";
import { clsx } from "cn";
import { ArrowRight } from "lucide-react";

export function Profissionals() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Nossos Profissionais
      </h2>
      <div
        className={clsx(
          "container mx-auto gap-8 grid grid-cols-1",
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        )}
      >
        <section className="grid grid-cols-1 gap-8 p-4">
          <Card className="overflow-hidden p-0 ring-0 bg-slate-100">
            <CardContent className="p-0">
              <div>
                <div className={clsx("h-48 w-full overflow-hidden")}>
                  <Image
                    className="mx-auto max-w-full"
                    priority
                    src={ImageDentista}
                    alt="Dentista 1"
                  />
                </div>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Dr. João Silva
                    </h3>
                    <p className="text-gray-700">Especialista em Ortodontia</p>
                    <p className="text-gray-600">10 anos de experiência</p>
                  </div>

                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>

                <Button
                  className={clsx(
                    "w-full bg-blue-500 hover:bg-blue-600",
                    "flex items-center justify-center",
                    "text-white font-semibold py-2 px-4 rounded",
                    "text-sm md:text-base font-medium",
                  )}
                >
                  <Link href="/agendar-consulta" className="w-full text-white">
                    Agendar Consulta{" "}
                    <ArrowRight className="ml-2 inline-block" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
