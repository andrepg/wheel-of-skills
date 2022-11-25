<script setup>
import "@ditdot-dev/vue-flow-form/dist/vue-flow-form.css";
import "@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css";

import { useRouter } from "vue-router";
import { FlowForm, LanguageModel } from "@ditdot-dev/vue-flow-form";
import FormQuestions from "@/data/questions.js";

import CryptoJS from "crypto-js";

const router = useRouter();

// We first start our LanguageModel instance with Localization settings
// This is a object as defined in @ditdot-dev/vue-flow-form/dist/vue-flow-form
const formLanguageModel = new LanguageModel({
  ok: "OK",
  continue: "Continuar",
  skip: "Pular pregunta",
  pressEnter: "Presione :enterKey",
  multipleChoiceHelpText: "Elija cuantas te gustar",
  multipleChoiceHelpTextSingle: "Elija solamenta una opción",
  otherPrompt: "Otro",
  placeholder: "Escriba su resposta acá",
  submitText: "Enviar",
  prev: "Anterior",
  next: "Adelante",
  percentCompleted: ":percent% completado",
  invalidPrompt: "Por favor completa correctamente",
  thankYouText: "Obrigado",
  successText: "Tu solicitud está completa",
  longTextHelpText: ":shiftKey + :enterKey para hacer una quebra de línea",
  ariaOk: "Presione para continuar",
  ariaRequired: "Este campo es obligatorio",
  ariaPrev: "Próximo paso",
  ariaNext: "Paso anterior",
  ariaSubmitText: "Presione para enviar",
  ariaMultipleChoice: "Pressione :letter para selecionar",
  ariaTypeAnswer: "Escriba tu respuesta acá",
});

const encryptChartResult = (stringToEncrypt) =>
  CryptoJS.AES.encrypt(stringToEncrypt, "SoyCaroMolina").toString();

// This is our form handler, to collect and process all of our submissions
const onSubmitForm = (questionList) => {
  router.push({
    name: "chart",
    state: {
      chart: encryptChartResult(JSON.stringify(questionList)),
    },
  });
};
</script>

<template>
  <FlowForm
    @submit="onSubmitForm"
    :standalone="false"
    :progressbar="false"
    :questions="FormQuestions"
    :language="formLanguageModel"
  />
</template>
