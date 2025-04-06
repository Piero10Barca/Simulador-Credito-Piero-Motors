import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SimuladorCredito() {
  const [precio, setPrecio] = useState(6000);
  const [inicial, setInicial] = useState(1500);
  const [cuotas, setCuotas] = useState(12);
  const [interesMensual, setInteresMensual] = useState(3);

  const montoFinanciado = precio - inicial;
  const interesDecimal = interesMensual / 100;

  const cuotaMensual =
    interesDecimal === 0
      ? montoFinanciado / cuotas
      : (montoFinanciado * interesDecimal) /
        (1 - Math.pow(1 + interesDecimal, -cuotas));

  const totalCuotas = cuotaMensual * cuotas;
  const totalPagado = totalCuotas + inicial;
  const interesTotal = totalPagado - precio;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Tu nuevo vehículo a un paso</h1>
      <Card className="mb-6">
        <CardContent className="space-y-4 pt-6">
          <div>
            <Label>Precio al contado (S/)</Label>
            <Input type="number" value={precio} onChange={(e) => setPrecio(Number(e.target.value))} />
          </div>
          <div>
            <Label>Inicial (S/)</Label>
            <Input type="number" value={inicial} onChange={(e) => setInicial(Number(e.target.value))} />
          </div>
          <div>
            <Label>N° de cuotas</Label>
            <Input type="number" value={cuotas} onChange={(e) => setCuotas(Number(e.target.value))} />
          </div>
          <div>
            <Label>Interés mensual (%)</Label>
            <Input type="number" value={interesMensual} onChange={(e) => setInteresMensual(Number(e.target.value))} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-6">
          <div><strong>Monto financiado:</strong> S/ {montoFinanciado.toFixed(2)}</div>
          <div><strong>Cuota mensual:</strong> S/ {cuotaMensual.toFixed(2)}</div>
          <div><strong>Total en cuotas:</strong> S/ {totalCuotas.toFixed(2)}</div>
          <div><strong>Total pagado:</strong> S/ {totalPagado.toFixed(2)}</div>
          <div><strong>Interés total:</strong> S/ {interesTotal.toFixed(2)}</div>
        </CardContent>
      </Card>
    </div>
  );
}
