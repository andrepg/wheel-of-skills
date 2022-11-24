import { QuestionModel, QuestionType } from "@ditdot-dev/vue-flow-form";

const newQuestion = (parametros) =>
  new QuestionModel({
    tagline: "🕵 Vamos conocerte un poquito",
    ...parametros,
  });

const newQuestionOpinionScale = (questionTitle, questionDescription) =>
  newQuestion({
    title: questionTitle,
    subtitle: questionDescription,
    type: QuestionType.OpinionScale,
    required: true,
    min: 0,
    max: 10,
  });

const FormQuestions = [
  newQuestionOpinionScale(
    "Tu nivel de diversificación de renta",
    "Evalúa tu nivel de diversificación de renta actual, es decir, si tu renta proviene de varias fuentes o no."
  ),
  newQuestionOpinionScale(
    "Tu habilidad de ahorrar mensualmente",
    "Evalúa tu habilidad de mantener un plan de ahorro mensual, guardando parte de tu renta para reinversión"
  ),
  newQuestionOpinionScale(
    "Tu habilidad de inversiones y generar renta",
    "Evalúa tu habilidad de generar renta y buscar nuevas inversiones para diversificación"
  ),
  newQuestionOpinionScale(
    "Evaluación de su círculo social y usted",
    "Evalúa cuánto tu círculo social está alineado con tus objetivos y metas financieras, además de tu alineamiento de ideales"
  ),
  newQuestionOpinionScale(
    "¿Cuál tu habilidad de crear objetivos y cumplir sus metas?",
    "Evalúa si tienes disciplina para crear planes de ahorro, metas de vida y cumplir tus metas establecidas"
  ),
  newQuestionOpinionScale(
    "Tu rastreo de finanzas, gastos y costos",
    "Evalúa el nivel de rastreo de finanzas, gastos mensuales, inversiones, costos y todo el flujo financiero de tu mes"
  ),
  newQuestionOpinionScale(
    "¿Cuál tu nivel de resistencia a la impulsión?",
    "Evalúa tu nivel de resistencia a la impulsión de comprar algo que no sea necesario, o que sea superfluo"
  ),
  newQuestionOpinionScale(
    "¿Cuánto evitas la procrastinación?",
    "Evalúa tu facilidad de evitar la procrastinación cuándo estés con cosas en tu lista y necesitas cumplir tus objetivos"
  ),
  newQuestionOpinionScale(
    "Tu nivel de gratitud y celebración",
    "¿Cuál tu nivel de gratitud y celebración cuando alcanzas tu objetivo o meta?"
  ),
];

export default FormQuestions;
