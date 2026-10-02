import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export function Profissional() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nossos Profissionais
        </h2>

        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent>
              <div>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src="/images/dentist1.jpg"
                    alt="Dentista 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Dr. João Silva
                </h3>
                <p className="text-gray-700">Especialista em Ortodontia</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src="/images/dentist2.jpg"
                    alt="Dentista 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Dra. Maria Oliveira
                </h3>
                <p className="text-gray-700">Especialista em Endodontia</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src="/images/dentist3.jpg"
                    alt="Dentista 3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Dr. Carlos Pereira
                </h3>
                <p className="text-gray-700">Especialista em Periodontia</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src="/images/dentist4.jpg"
                    alt="Dentista 4"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
