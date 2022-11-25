import { QuestionModel, QuestionType } from "@ditdot-dev/vue-flow-form";

const newQuestion = (parametros) =>
  new QuestionModel({
    tagline: "🕵 Vamos conocerte un poquito",
    ...parametros,
  });

const newQuestionOpinionScale = (
  questionId = "",
  questionTitle,
  questionDescription,
  questionColor
) =>
  newQuestion({
    id: questionId,
    title: questionTitle,
    subtitle: questionDescription,
    type: QuestionType.OpinionScale,
    required: true,
    min: 0,
    max: 10,
    customColor: questionColor,
  });

const FormQuestions = [
  newQuestionOpinionScale(
    "diversificacionRenta",
    "Tu nivel de diversificación de renta",
    "Evalúa tu nivel de diversificación de renta actual, es decir, si tu renta proviene de varias fuentes o no.",
    "#701a75"
  ),
  newQuestionOpinionScale(
    "habilidadAhorro",
    "Tu habilidad de ahorrar mensualmente",
    "Evalúa tu habilidad de mantener un plan de ahorro mensual, guardando parte de tu renta para reinversión",
    "#86198f"
  ),
  newQuestionOpinionScale(
    "habilidadInversiones",
    "Tu habilidad de inversiones y generar renta",
    "Evalúa tu habilidad de generar renta y buscar nuevas inversiones para diversificación",
    "#a21caf"
  ),
  newQuestionOpinionScale(
    "evaluacionCirculoSocial",
    "Evaluación de su círculo social y usted",
    "Evalúa cuánto tu círculo social está alineado con tus objetivos y metas financieras, además de tu alineamiento de ideales",
    "#c026d3"
  ),
  newQuestionOpinionScale(
    "habilidadCrearObjetivos",
    "¿Cuál tu habilidad de crear objetivos y cumplir sus metas?",
    "Evalúa si tienes disciplina para crear planes de ahorro, metas de vida y cumplir tus metas establecidas",
    "#d946ef"
  ),
  newQuestionOpinionScale(
    "rastreoFinanzas",
    "Tu rastreo de finanzas, gastos y costos",
    "Evalúa el nivel de rastreo de finanzas, gastos mensuales, inversiones, costos y todo el flujo financiero de tu mes",
    "#e879f9"
  ),
  newQuestionOpinionScale(
    "nivelResistenciaImpulsion",
    "¿Cuál tu nivel de resistencia a la impulsión?",
    "Evalúa tu nivel de resistencia a la impulsión de comprar algo que no sea necesario, o que sea superfluo",
    "#f0abfc"
  ),
  newQuestionOpinionScale(
    "nivelEvitarProcrastinacion",
    "¿Cuánto evitas la procrastinación?",
    "Evalúa tu facilidad de evitar la procrastinación cuándo estés con cosas en tu lista y necesitas cumplir tus objetivos",
    "#f5d0fe"
  ),
  newQuestionOpinionScale(
    "nivelGratitudCelebracion",
    "Tu nivel de gratitud y celebración",
    "¿Cuál tu nivel de gratitud y celebración cuando alcanzas tu objetivo o meta?",
    "#fae8ff"
  ),
];

export default FormQuestions;
